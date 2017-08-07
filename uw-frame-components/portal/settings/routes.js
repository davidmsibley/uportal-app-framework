define(['require'], function(require) {
    return {
      'betaSettings': {
          template: require('./partials/settings.html'),
          controller: 'PortalBetaSettingsController',
      },
      'userSettings': {
          template: require('./partials/user-settings.html'),
          controller: 'PortalUserSettingsController',
      },
    };
});
