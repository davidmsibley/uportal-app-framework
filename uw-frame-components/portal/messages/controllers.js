'use strict';

define(['angular'], function(angular) {
  return angular.module('portal.messages.controllers', [])

    .controller('MessagesController', ['$q', '$log', '$scope', '$rootScope',
      '$location', '$localStorage', '$sessionStorage', '$filter', '$mdDialog',
      'MESSAGES', 'SERVICE_LOC', 'miscService', 'messagesService',
      function($q, $log, $scope, $rootScope, $location, $localStorage,
               $sessionStorage, $filter, $mdDialog, MESSAGES, SERVICE_LOC,
               miscService, messagesService) {
        // //////////////////
        // Local variables //
        // //////////////////
        var allMessages = [];

        // Promises to run if filtering is turned on
        var promiseFilteredMessages = {
          filteredByGroup:
            messagesService.getMessagesByGroup(allMessages),
          filteredByData:
            messagesService.getMessagesByData(allMessages),
        };

        // ////////////////
        // Local methods //
        // ////////////////
        /**
         * Get all messages, then pass result on for filtering
         */
        var getMessages = function() {
          messagesService.getAllMessages()
            .then(function(result) {
              // Ensure messages exist and check for group filtering
              if (result.messages && result.messages.length > 0) {
                allMessages = result.messages;
              }
              filterMessages();
              return result;
            })
            .catch(function(error) {
              // HANDLE ERRORS
            });
        };

        /**
         * Determine whether or not messages need to be filtered
         * by group and data, then execute the relevant promises
         */
        var filterMessages = function() {
          // Check for group filtering
          // && !$localStorage.disableGroupFilteringForNotifications
          if (MESSAGES.groupFiltering) {
            // Call filtered notifications promises, then pass on to
            // the completion function
            $q.all(promiseFilteredMessages)
              .then(filterMessagesSuccess)
              .catch(filterMessagesFailure);
          } else {
            // Separate all messages by their types
            $scope.messages = $filter('separateMessageTypes')(allMessages);
            // Change hasMessages so child controllers can pick up on it
            $scope.hasMessages = true;
          }
        };

        /**
         * Separate the message types in scope for child controllers
         * @param result
         */
        var filterMessagesSuccess = function(result) {
          // Check for filtered notifications
          var filteredMessages = [];
          if (result.filteredByGroup && result.filteredByData) {
            // Combine the two filtered arrays into one (no dupes)
            filteredMessages = $filter('filterForCommonElements')(
              result.filteredByGroup,
              result.filteredByData
            );
            $scope.messages = $filter('separateMessageTypes')(filteredMessages);
            $scope.hasMessages = true;
          }
        };

        /**
         * Handle errors that occur while resolving promises to
         * get notifications
         * @param error
         */
        var filterMessagesFailure = function(error) {
          $log.warn('Problem getting messages from messagesService');
        };

        /**
         * Get messages if messaging features are enabled
         */
        var init = function() {
          $scope.hasMessages = false;
          $scope.messages = {};

          if (!$rootScope.GuestMode && (MESSAGES.notificationsEnabled
            || MESSAGES.announcementsEnabled)) {
            getMessages();
          }
        };

        init();
      },
    ])

    .controller('NotificationsController', ['$q', '$log', '$scope',
      '$rootScope', '$location', '$localStorage', '$filter', 'MESSAGES',
      'SERVICE_LOC', 'miscService', 'messagesService',
      function($q, $log, $scope, $rootScope, $location, $localStorage, $filter,
               MESSAGES, SERVICE_LOC, miscService, messagesService) {
        // //////////////////
        // Local variables //
        // //////////////////
        var vm = this;
        var allNotifications = [];
        var separatedNotifications = {};
        var dismissedNotificationIds = [];

        // Promise to get seen message IDs
        var promiseSeenMessageIds = {
          seenMessageIds: messagesService.getSeenMessageIds(),
        };

        // ///////////////////
        // Bindable members //
        // ///////////////////
        vm.notifications = [];
        vm.dismissedNotifications = [];
        vm.priorityNotifications = [];
        vm.notificationsUrl = MESSAGES.notificationsPageURL;
        vm.notificationsEnabled = MESSAGES.notificationsEnabled;
        vm.status = 'View notifications';

        // //////////////////
        // Event listeners //
        // //////////////////
        /**
         * When the parent controller has messages, initialize
         * things dependent on messages
         */
        $scope.$watch('$parent.hasMessages', function(hasMessages) {
          // If the parent scope has messages and notifications are enabled,
          // complete initialization
          if (hasMessages && vm.notificationsEnabled) {
            configureNotificationsScope();
          }
        });

        // ////////////////
        // Local methods //
        // ////////////////
        /**
         * Get notifications from parent scope, then pass them on
         * for filtering by seen/unseen
         */
        var configureNotificationsScope = function() {
          if ($scope.$parent.messages.notifications) {
            allNotifications = $scope.$parent.messages.notifications;
            // Get seen message IDs, then configure scope
            $q.all(promiseSeenMessageIds)
              .then(getSeenMessageIdsSuccess)
              .catch(getSeenMessageIdsFailure);
          }
        };

        /**
         * Separate seen and unseen notifications, then set scope variables
         * @param result
         */
        var getSeenMessageIdsSuccess = function(result) {
          // Use $filter to separate seen/unseen
          if (result.seenMessageIds && result.seenMessageIds.length > 0) {
            separatedNotifications = $filter('filterSeenAndUnseen')(
              allNotifications,
              result.seenMessageIds
            );
            // Set scope notifications and dismissed notifications
            vm.notifications = separatedNotifications.unseen;
            vm.dismissedNotifications = separatedNotifications.seen;

            // Set local dismissedNotificationIds (used for tracking
            // dismissed messages in the K/V store
            angular.forEach(vm.dismissedNotifications, function(value) {
              dismissedNotificationIds.push(value.id);
            });
          } else {
            // If there aren't any seen notification IDs, just set all
            // notifications
            vm.notifications = allNotifications;
          }

          // If user is anywhere other than the notifications page,
          // check for priority notifications and set them in scope
          if ($location.url().indexOf('notifications') === -1) {
            configurePriorityNotificationsScope();
          } else {
            clearPriorityNotificationsFlags();
          }

          // Set aria-label in notifications bell
          vm.status = 'You have '
            + (vm.notifications.length === 0 ? 'no ' : '')
            + 'notifications';
        };

        /**
         * Handle errors getting seen message IDs
         * @param error
         */
        var getSeenMessageIdsFailure = function(error) {
          // Handle errors
        };

        /**
         * Alert the UI to show priority notifications if they exist
         */
        var configurePriorityNotificationsScope = function() {
          // Use angular's built-in filter to grab priority notifications
          vm.priorityNotifications = $filter('filter')(
            vm.notifications,
            {priority: 'high'}
          );
          // If priority notifications exist and the view has a
          // headerController in scope (from directive), set necessary flags
          if ($scope.headerCtrl) {
            $scope.headerCtrl.hasPriorityNotifications
              = vm.priorityNotifications.length > 0;
          }
        };

        /**
         * Alerts the UI that there are no priority notifications to show
         * @param duringWatchedEvent
         */
        var clearPriorityNotificationsFlags = function(duringWatchedEvent) {
          vm.priorityNotifications = [];
          if ($scope.headerCtrl) {
            $scope.headerCtrl.hasPriorityNotifications
              = vm.priorityNotifications.length > 0;
          }
          if (!duringWatchedEvent) {
            $rootScope.$broadcast('portalShutdownPriorityNotifications',
              {disable: true});
          }
        };

        // ////////////////
        // Scope methods //
        // ////////////////
        /**
         * On-click event to mark a notification as "seen"
         * @param notification
         * @param isHighPriority
         */
        vm.dismissNotification = function(notification, isHighPriority) {
          vm.notifications = $filter('filterOutMessageWithId')(
            vm.notifications,
            notification.id
          );

          // Add notification to dismissed array
          vm.dismissedNotifications.push(notification);

          // Add notification's ID to local array of dismissed notification IDs
          dismissedNotificationIds.push(notification.id);

          // Call service to save changes if k/v store enabled
          if (SERVICE_LOC.kvURL) {
            messagesService.seMessagesSeen(dismissedNotificationIds);
          }

          // Clear priority notification flags if it was a priority
          // notification
          if (isHighPriority) {
            clearPriorityNotificationsFlags();
          }
        };

        /**
         * On-click event to mark a notification as "unseen"
         * @param notification
         */
        vm.restoreNotification = function(notification) {
          // Remove notification from dismissed array
          vm.dismissedNotifications = $filter('filterOutMessageWithId')(
            vm.dismissedNotifications,
            notification.id
          );

          // Add notification to non-dismissed array
          vm.notifications.push(notification);

          // Remove the corresponding entry from
          // local array of dismissed notification IDs
          var index = dismissedNotificationIds.indexOf(notification.id);
          if (index !== -1) {
            dismissedNotificationIds.splice(index, 1);
          }
          // Call service to save changes if k/v store enabled
          if (SERVICE_LOC.kvURL) {
            messagesService.setMessagesSeen(dismissedNotificationIds);
          }
        };

        /**
         * Track clicks on "Notifications" links in mobile menu and top bar
         * @param category
         * @param action
         * @param label
         */
        vm.pushGAEvent = function(category, action, label) {
          miscService.pushGAEvent(category, action, label);
        };
    }])

    .controller('AnnouncementsController', ['$q', '$log', '$filter',
      '$sessionStorage', '$scope', '$rootScope', '$document', '$sanitize',
      '$mdDialog', 'miscService', 'messagesService', 'MESSAGES',
      function($q, $log, $filter, $sessionStorage, $scope, $rootScope,
               $document, $sanitize, $mdDialog, miscService, messagesService,
               MESSAGES) {
        // //////////////////
        // Local variables //
        // //////////////////
        var vm = this;
        var allAnnouncements = [];
        var separatedAnnouncements = {};
        var seenAnnouncementIds = [];
        var popups = [];

        // Promise to get seen message IDs
        var promiseSeenMessageIds = {
          seenMessageIds: messagesService.getSeenMessageIds(),
        };

        // ///////////////////
        // Bindable members //
        // ///////////////////
        vm.hover = false;
        vm.active = false;
        vm.mode = $scope.mode;
        vm.announcements = [];

        // //////////////////
        // Event listeners //
        // //////////////////
        /**
         * When the parent controller has messages, initialize
         * things dependent on messages
         */
        $scope.$watch('$parent.hasMessages', function(hasMessages) {
          // If the parent scope has messages and notifications are enabled,
          // complete initialization
          if (hasMessages && MESSAGES.announcementsEnabled) {
            configureAnnouncementsScope();
          }
        });

        // ////////////////
        // Local methods //
        // ////////////////
        /**
         *
         */
        var configureAnnouncementsScope = function() {
          if ($scope.$parent.messages.announcements) {
            allAnnouncements = $scope.$parent.messages.announcements;
            // Get seen message IDs, then configure scope
            $q.all(promiseSeenMessageIds)
              .then(getSeenMessageIdsSuccess)
              .catch(getSeenMessageIdsFailure);
          }
        };

        /**
         * Separate seen and unseen, then set mascot image or get popups
         * depending on directive mode.
         * @param result Data returned by promises
         */
        var getSeenMessageIdsSuccess = function(result) {
          // Separate seen and unseen
          if (result.seenMessageIds && result.seenMessageIds.length > 0) {
            separatedAnnouncements = $filter('filterSeenAndUnseen')(
              allAnnouncements,
              result.seenMessageIds
            );
            // Set local seenAnnouncementsIds (used for tracking seen
            // messages in the K/V store and sessionStorage
            angular.forEach(separatedAnnouncements.seen, function(value) {
              seenAnnouncementIds.push(value.id);
            });
          } else {
            separatedAnnouncements = {
              seen: [],
              unseen: allAnnouncements,
            };
          }

          // If directive mode need mascot, set it, otherwise
          // configure popups
          if (vm.mode === 'mascot' || vm.mode === 'mobile-menu') {
            // Set scope announcements
            vm.announcements = separatedAnnouncements.unseen;
            // Set the mascot image
            setMascot();
          } else {
            // Filter out low priority announcements
            popups = $filter('filter')(
              separatedAnnouncements.unseen,
              {priority: 'high'}
            );
            configurePopups();
          }
        };

        /**
         * Handle errors encountered while resolving promises
         * @param error
         */
        var getSeenMessageIdsFailure = function(error) {
          // HANDLE ERRORS
        };

        /**
         * Get the latest popup announcement and display it
         */
        var configurePopups = function() {
          // If they exist, put them in order by date, then id
          if (popups.length != 0) {
            var orderedPopups = $filter('orderBy')(
              popups,
              ['goLiveDate', 'id']
            );

            // Set the latest announcement as a scope variable
            // so it can be passed to the dialog
            $scope.latestAnnouncement = orderedPopups[0];

            // Display the latest popup announcement
            var displayPopup = function() {
              $mdDialog.show({
                templateUrl:
                  'portal/messages/partials/announcement-popup-template.html',
                parent: angular.element(document).find('div.my-uw')[0],
                clickOutsideToClose: true,
                openFrom: 'left',
                closeTo: 'right',
                preserveScope: true,
                scope: $scope,
                controller: function DialogController($scope, $mdDialog) {
                  $scope.closeDialog = function(action) {
                    $mdDialog.hide(action);
                  };
                },
              })
              .then(function(action) {
                // If dialog is closed by clicking "continue" button
                miscService.pushGAEvent(
                  'popup',
                  action,
                  $scope.latestAnnouncement.id
                );
                seenAnnouncementIds.push($scope.latestAnnouncement.id);
                messagesService.setMessagesSeen(seenAnnouncementIds);
                return action;
              })
              .catch(function() {
                // If popup is closed by clicking outside or pressing escape
                miscService.pushGAEvent(
                  'popup', 'dismissed', $scope.latestAnnouncement.id);
                seenAnnouncementIds.push($scope.latestAnnouncement.id);
                messagesService.setMessagesSeen(seenAnnouncementIds);
              });
            };
            displayPopup();
          }
        };

        /**
         * Set the mascot image and its fallback
         */
        var setMascot = function() {
          if ($rootScope.portal && $rootScope.portal.theme) {
            vm.mascotImage =
              $rootScope.portal.theme.mascotImg || 'img/robot-taco.gif';
          } else {
            vm.mascotImage = 'img/robot-taco.gif';
          }
          // https://github.com/Gillespie59/eslint-plugin-angular/issues/231
          // eslint-disable-next-line angular/on-watch
          $rootScope.$watch('portal.theme', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              vm.mascotImage = newVal.mascotImg || 'img/robot-taco.gif';
            }
          });
        };

        // ////////////////
        // Scope methods //
        // ////////////////
        /**
         *
         * @param id
         */
        vm.markSingleAnnouncementSeen = function(id) {
          // Use $filter to filter out by ID
          vm.announcements = $filter('filterOutMessageWithId')(
            vm.announcements,
            id
          );
          // Add to seenAnnouncementsIds
          seenAnnouncementIds.push(id);
          // Call service to save results
          messagesService.setMessagesSeen(seenAnnouncementIds);
        };

        /**
         * Add all IDs of unseen announcements to the seenAnnouncements
         * array, then call the messagesService to save results
         */
        vm.markAllAnnouncementsSeen = function() {
          angular.forEach(separatedAnnouncements.unseen, function(value) {
            seenAnnouncementIds.push(value.id);
          });
          messagesService.setMessagesSeen(seenAnnouncementIds);
        };

        /**
         * Make mascot bobble when hovered
         */
        vm.toggleHover = function() {
          vm.hover = vm.hover ? false : true;
        };

        /**
         * Make mascot appear when clicked
         */
        vm.toggleActive = function() {
          vm.active = !vm.active;
        };

        /**
         * Reset mascot when menu is closed
         */
        $scope.$on('$mdMenuClose', function() {
          vm.hover = false;
          vm.active = false;
        });
      }])

    .controller('FeaturesPageController', ['$log', '$filter',
      'messagesService', 'MESSAGES', 'MISC_URLS',
      function($log, $filter, messagesService, MESSAGES, MISC_URLS) {
        var vm = this;

        vm.announcements = [];
        vm.MISC_URLS = MISC_URLS;

        if (MESSAGES.announcementsEnabled) {
          // Check if group filtering is enabled

          // If filtering is off, get all messages
          messagesService.getAllMessages()
            .then(function(result) {
              if (result.messages && result.messages.length > 0) {
                // Filter out notification messages using angular's built-in
                // 'filter'
                vm.announcements = $filter('filter')(
                  result.messages,
                  {messageType: 'announcement'}
                );
              }
              return vm.announcements;
            })
            .catch(function(error) {
              $log.warn('Could not get features');
            });
        }
    }]);
});
