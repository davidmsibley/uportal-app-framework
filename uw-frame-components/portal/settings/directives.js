'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.settings.directives', [])

  .directive('uwSettingOption', function() {
    return {
        restrict: 'E',
        template: require('./partials/setting-option.html'),
    };
  });
});
