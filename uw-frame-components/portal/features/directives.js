'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.features.directives', [])
  .directive('mascotAnnouncement', function() {
    return {
      restrict: 'E',
      template: require('./partials/announcement.html'),
      controller: 'PortalPopupController',
      scope: {
        mode: '@',
        headerCtrl: '=headerCtrl',
      },
    };
  });
});
