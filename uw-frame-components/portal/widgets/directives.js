'use strict';

define(['angular', 'require'], function(angular, require) {
  return angular.module('portal.widgets.directives', [])

  /**
   Just the widget card -- gets the widget type from the scope
   **/
  .directive('widget', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        fname: '@',
      },
      template: require('./partials/widget-card.html'),
      controller: 'WidgetCardController',
    };
  })

  /**
  Just the widget card -- gets the widget type from the scope
  **/
  .directive('compactWidget', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        fname: '@',
      },
      template: require('./partials/compact-widget-card.html'),
      controller: 'WidgetCardController',
    };
  })

  .directive('widgetIcon', function() {
    return {
      restrict: 'E',
      template: require('./partials/widget-icon.html'),
    };
  })

  .directive('optionLink', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__option-link.html'),
      controller: 'OptionLinkController',
    };
  })

  .directive('listOfLinks', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__list-of-links.html'),
    };
  })

  .directive('searchWithLinks', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__search-with-links.html'),
      controller: 'SearchWithLinksController',
    };
  })

  .directive('rssWidget', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__rss.html'),
      controller: 'RssWidgetController',
    };
  })

  .directive('actionItems', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__action-items.html'),
      controller: 'ActionItemsController',
    };
  })

  .directive('weatherWidget', function() {
    return {
      restrict: 'E',
      scope: {
        widget: '=app',
        config: '=config',
      },
      template: require('./partials/type__weather.html'),
      controller: 'WeatherWidgetController',
    };
  });
});
