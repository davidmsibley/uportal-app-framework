'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.main.directives', [])

  .directive('uwBody', function() {
    return {
      restrict: 'E',
      template: require('./partials/body.html'),
      controller: 'PortalMainController',
    };
  })

  .directive('portalHeader', function() {
    return {
      restrict: 'E',
      template: require('./partials/header.html'),
    };
  })

  // TODO[Sibley] Find Me!
  // .directive('sideBarMenu', function() {
  //   return {
  //     restrict: 'E',
  //     template: require('./partials/sidebar-left.html'),
  //   };
  // })

  .directive('username', function() {
    return {
      restrict: 'E',
      template: require('./partials/username.html'),
    };
  })

  .directive('siteFooter', function() {
      return {
        restrict: 'E',
        template: require('./partials/footer.html'),
      };
    });

  // TODO[Sibley] Find Me!
  // .directive('featuresModalTemplate', function() {
  //     return {
  //         restrict: 'E',
  //         template:
  //           require('./partials/features-dialog-template.html'),
  //     };
  // });
});
