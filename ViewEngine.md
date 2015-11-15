# Introduction #

View engine is responsible for preparing responses to the user. It's main task is to identify which view must be sent to the client and template engine to use for this particular view.


# Details #

View files are located under **app/views** directory by default. You should place all views under directories which matches controller name you use.


**Example**

View that will be sent in response for action  **test** of controller **test** would be located under **app/views/test/test.html**

# Template Engine #

In order to create any valid response you need to specify template engine that will be used to compile template files.

The only available template engine by now is mustache. You can turn it on adding following property to core config (**app/config/core.js**)

```
modules: [ 
    'ef-mustache'
]
```

# Layouts #

View layouts are located under **app/views/layouts** directory. By now each view will be always wrapped in **app/views/default.html**.