define(['angular'], function(angular) {
  /* Keep in sync with docs/markdown/configuration.md*/
  return angular.module('app-config', [])
        .value('APP_FLAGS', {
            'showSearch': true,
            'isWeb': false,
            'defaultTheme': 0,
            'loginOnLoad': false,
            'showUserSettingsPage': false,
            'debug': false,
            'campusIdAttribute': null,
        })
        .value('SERVICE_LOC', {
            'aboutURL': null,
            'groupURL': '/portal/api/groups',
            'kvURL': '/storage',
            'loginSilentURL': '/portal/Login?silent=true',
            'messagesURL': 'staticFeeds/sample-messages.json',
            'sessionInfo': 'staticFeeds/session.json',
            'shibbolethSessionURL': 'staticFeeds/Shibboleth.sso/Session.json',
            'portalLayoutRestEndpoint': null, // '/portal/api/layout',
            'widgetApi': {
              'entry': '/portal/api/marketplace/entry/', // 'staticFeeds/'
              'entrySuffix': '.json',
              'entries': '/portal/api/marketplace/entries.json',
            },
        })
        .value('NAMES', {
            'title': 'MyUW', // you can name your app whatever you want
            'guestUserName': 'guest',
            'fname': 'sample-fname',
        })
        .value('SEARCH', {
            'searchURL': '/web/apps/search/',
        })
        .value('MESSAGES', {
            'announcementsEnabled': true,
            'notificationsEnabled': true,
            'groupFiltering': true,
            'notificationsPageURL': '/notifications',
        })
        .value('MISC_URLS', {
            'feedbackURL': 'https://my.wisc.edu/portal/p/feedback',
            'helpdeskURL': 'https://kb.wisc.edu/helpdesk/',
            'loginURL': '/portal/Login?profile=bucky',
            'logoutURL': '/portal/Logout',
            'myuwHome': 'https://my.wisc.edu',
            'resetLayoutURL': '/portal/p/reset-my-layout',
            'rootURL': '/web',
            'addToHomeURLS': {
              'layoutURL': '/portal/web/layoutDoc?tab=UW Bucky Home',
              'addToHomeActionURL':
                '/portal/web/layout?tabName=UW Bucky Home' +
                '&action=addPortlet&fname=',
            },

        })
        .value('FOOTER_URLS', [
          {'url': '/web/features',
            'target': '_blank',
            'title': 'What\'s New',
          },
        ])
        .value('APP_BETA_FEATURES', [
          {
            'id': 'toogleSomething',
            'title': 'Sample Toggle',
            'description':
              'This is just an example of a toggle. ' +
              'Look at your localStorage after you ' +
              'switch this on for the first time.',
          },
        ]);
});
