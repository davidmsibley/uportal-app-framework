'use strict';

define(['angular', 'require'], function(angular, require) {
    return angular.module('portal.notifications.directives', [])

    .directive('notifications', function() {
        return {
            restrict: 'E',
            template: require('./partials/notifications.html'),
        };
    })

    .directive('notificationBell', function() {
        return {
            restrict: 'E',
            scope: {
              directiveMode: '@mode',
              headerCtrl: '=headerCtrl',
            },
            template: require('./partials/notification-bell.html'),
        };
    })

    .directive('notificationsListItem', function() {
      return {
        restrict: 'E',
        template: require('./partials/notifications-list-item.html'),
      };
    });
});
