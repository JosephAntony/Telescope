Package.describe({
  name: 'nova:lib',
  summary: 'Telescope libraries.',
  version: '0.27.5-nova',
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  var packages = [

    // Meteor packages

    'meteor-base',
    'mongo',
    'tracker',
    'service-configuration',
    'standard-minifiers',
    'modules',
    'accounts-base',
    'check',
    'http',
    'email',
    'tracker',
    'ecmascript',
    'react-meteor-data@0.2.8',
    'service-configuration',
    'shell-server',
    
    // Third-party packages

    'aldeed:simple-schema@1.5.3',
    'aldeed:collection2@2.10.0',
    'meteorhacks:picker@1.0.3',
    'dburles:collection-helpers@1.0.4',
    'matb33:collection-hooks@0.8.1',
    'percolatestudio:synced-cron@1.1.0',
    'jparker:gravatar@0.4.1',
    'tmeasday:publish-counts@0.7.3',
    'meteorhacks:unblock@1.1.0',
    // 'kadira:flow-router-ssr@3.13.0',
    "reactrouter:react-router-ssr@3.1.5",
    // 'kadira:flow-router@2.12.1',
    'utilities:smart-publications@0.1.4',
    'utilities:smart-methods@0.1.4',
    'meteorhacks:inject-initial@1.0.4',
    'peerlibrary:reactive-publish@0.2.0'
  ];

  api.use(packages);

  api.imply(packages);

  // api.export([
  //   'Telescope'
  // ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
