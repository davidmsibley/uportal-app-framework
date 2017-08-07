'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.search.directives', [])

  .directive('search', [function() {
    return {
      restrict: 'E',
      template: require('./partials/search.html'),
      controller: 'PortalSearchController',
    };
  }]);
});
