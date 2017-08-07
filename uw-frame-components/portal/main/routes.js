define(['require'], function(require) {
    return {
      main: {
        template: require('./partials/example-page.html'),
      },

      accessDenied: {
        template: require('./partials/access-denied.html'),
      },

      serverError: {
          template: require('./partials/server-error.html'),
      },

      fileNotFound: {
        template: require('./partials/file-not-found.html'),
      },

      storageError: {
        template: require('./partials/sorry-safari.html'),
      },
    };
});
