var root = EduFramework.applicationPath;

exports.config = {
  rootPath: root,
  viewsPath: root + '/app/views',
  viewModelsPath: root + '/app/view_models',
  controllerPath: root + '/app/controllers',
  staticPath: root + '/app/static',
  logsPath: root + '/logs',

  classDirectories: [
    root + '/app/models'
  ],

  server: {
    port: 3000
  },

  loggingLevel: 'info',

  modules: [ 
    'ef-mustache'
  ]
};
