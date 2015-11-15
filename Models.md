# Introduction #

Everywhere in documentation you can read that this is MVC framework. You have seen docs for controllers and views, but what about most important part of application: Model? Since it's so important part of application, you are not forced to use any particular model engine. You can use whatever you like and eduFramework will help you to plug it.


# Details #

You can use 'Class directories' to this purpose. Class directory is directory that gets automatically loaded when server starts. You can reach each module from specified directory by referencing

```
EduFramework.App.[class-directory-name].[module]
```

For example, imagine that you have Post.js that contains some logic to manage post objects. You could place it under **app/models/post.js** and reference it in application by
```
EduFramework.App.models.post
```

All you need to do is to specify such autoloaded directories in **config/core.js** as in following example:

```

exports.config = {
  rootPath: root,
  viewsPath: root + '/app/views',
  viewModelsPath: root + '/app/view_models',
  controllerPath: root + '/app/controllers',
  staticPath: root + '/app/static',
  logsPath: root + '/logs',

  loggingLevel: 'error',
  classDirectories: [
    root + '/app/models'
  ],

  server: {
    port: 3000
  },

  modules: [ 
    'ef-mustache'
  ]
};
```

# Configuration #

You'll probably say that simply loading modules is not enough. In case of model you need to define some configuration like database connection details and etc.

This task can be handled by configuration loader which is described in detail on [Configuration](Configuration.md) page

Basicly put any **`*`.js** file under **config** directory and it'll be automatically loaded into **EduFramework.Config** namespace