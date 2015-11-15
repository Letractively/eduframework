# Introduction #

View Model is data provider for views. In eduFramework it's an object that contains methods and properties which are linked with particular view. It should contain all view logic that you would normally put directly in view. You'll no longer need to mix few languages together create view.


# Details #

All view models are located under **app/view\_models** and are automatically loaded before view is rendered.

In fact they are optional as in many cases you won't need to create view model.

Here is sample view model:

```
var viewModel = exports.viewModel = {};

viewModel.msg = function () {
  return "Hello world";
}
```

It extracts one method which can be later used on view with simple call like this (using mustache template engine):

```
<p>
  Oh, I almost forgot. Here is message for you:
  <em class="message">{{msg}}</em>
</p>
```

# View Models and Controller vars #

You can override each property you have in your view model in controller. Simply extract variable like this:


```
this.vars['overrideViewModel'] = 'something';
```

And you'll alter view model property 'overrideViewModel'

As an example consider following view model:
```
var viewModel = exports.viewModel = {}; 

viewModel.msg = function () {
  return "Hello world";
}

viewModel.msgFromController = "JS is bad";
```

and controller:

```
var actions = exports.controller = {}; 

actions.test = function () {
  this.vars["msgFromController"] = "JS is not that bad";
  this.respond();
};
```

and the view:
```
<p>
  You can change it by editting view model for this view. 
  It's located under app/view_models/test/test.js. 
  But you can also override it in controller just like this message: 
  <em class="message">{{msgFromController}}</em>
</p>
```

Output will be

```
  You can change it by editting view model for this view. 
  It's located under app/view_models/test/test.js. 
  But you can also override it in controller just like this message: JS is not that bad
```