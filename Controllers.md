# What is Controller #

Controller is this guy between your model and view. Once routing engine will match url, controller manager will create instance which should handle request at application level. Controllers job is basicly to decide what to do on particular action. It should implement actions by calling higher level methods of your Model. Once it will finish the action it should respond with some data.

# How to create one #

In eduFramework, controller is JS object with methods (let's call them actions). All controllers are located under app/controllers directory. Basic controller looks like this:

```
var actions = exports.controller = {};

actions.test = function () {
  this.vars["msgFromController"] = "JS is not that bad";
  this.respond();
};
```

This particular controller has one action named test. Let's have closer look, what's going on there:

```
this.vars["msgFromController"] = "JS is not that bad";
```

This line exports new variable called "msgFromController" to view engine.

```
this.respond();
```

This line tells framework that our action is finished and we are ready to respond to the user with some view. Without this call user wouldn't get any response at all. You must call the respond method in order to send anything to the user.

You may ask why do we have to explicitly say that our action has ended. The answer is simple. JavaScript works in async mode and has event-driven design. It never stops to do some IO task, so if we would send request to DataBase we wouldn't be able to get the data before it's view is sent back to user. Here is small example of what I mean.

```
actions.recent = function () {
  var self = this;  

  newsModel.findNewsNewerThan(2, function (news) {
    self.vars["freshNews"] = news;

    self.respond();
  });
};
```

# Accessing request parameters #

Each request made by users comes with some data. This data can passed by query string, post data or url. You can access them with controller property named **params**

**Example**
```
actions.welcome = function () {
  console.log(this.params['name']);
  this.respond();
};
```

This action prints value of parameter called 'name' to console. Value can be supplied by query string like this
```
localhost:3000/welcome?name=someName
```

As well as post parameter

Or within url using routing engine variables. For more details please have look at this wiki page [Routing Engine](RoutingEngine.md)

# Exporting variables to view engine #

To extract variable that can be accessed from view you can use **vars** property of controller.

**Example**
```
actions.welcome = function () {
  this.vars['title'] = "JS is here";
  this.respond();
}
```

Line above exports variable named **title** to view engine.