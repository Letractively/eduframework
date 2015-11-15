# Introduction #

Once user will make request to our server, application must decide what action should be taken on this particular request. This task is handled by Routing Engine.

# Details #

eduFramework provides simple implementation of routing engine, which can be easily replaced with different and more advanced engine. All you need to do is to redefine createRouter method.

# Defining routes #

All routes are defined in **config/routes.js** file. First rule that matches current request will be applied.

Here is example of routes.js

```
exports.config = {
  routes: function (r) {
    // Enter routing rules here
    // First rule that matches current request is applied
    
    // Example rule:
    // r.match("/user/:id", "user#show")
    // routes requests with url user/someId 
    // invokes action show on UserController
    // with parameter id set to "someId"
    r.match('/static/:path', 'static_content#load');
    r.match('/', 'test#test');
    r.match('/test', 'test#test'); 
  }
};
```

This file is rather self-explanatory. You can create rule by invoking **r.match** method like this:

```
r.match(URL_PATTERN, DESTINATION_STRING)
```

Where **DESTINATION\_STRING** is in format
```
controller#action
```

# Pattern variables #

You can also use variables in you patterns. Simply put ':' character before lowercase word and you'll be able to reference this variable in your controller.

**Example**
```
r.match('/static/:path', 'static_content#load');
```

As you can see in snippet above, we created new variable named "path" which can be later referenced in controller with

```
this.params['path']
```