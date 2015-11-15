# Introduction #
eduFramework is simple web framework which follows MVC pattern. It's meant to be an educational project.

Main goals for this framework are:

  * **Follow MVC pattern**
  * **Keep modular design**
  * **Make a use of all good parts of JavaScript**

To make this framework modular it was divided into several independent engines:

[ViewEngine](ViewEngine.md), [ControllerEngine](Controllers.md), HttpEngine, RoutingEngine, TemplateEngine

Some of them are meant to be replaced with another implementation (as for now only TemplateEngine can be replaced at any time)

# URLs #

Project homepage:

http://code.google.com/p/eduframework

Template engine implementation which is based on mustache:

http://code.google.com/p/eduframework-mustache/

Sample blog application made in eduFramework:

https://code.google.com/p/eduframework-blog/

# Requirements #
Here are few requirements that must be met before you can create new application.

### 1. Install NodeJS (at least 0.6.14) ###

http://nodejs.org/

### 2. Install npm (Node package manager) ###

http://npmjs.org/

# Magic Installation #

That's this kind of installation where you don't know **what** and **when** happens and **why** it doesn't work. Simply issue following command in terminal

```
curl http://eduframework.googlecode.com/files/install.sh | bash && source ~/.bashrc
```

If your system is still running, and none of your personal files have magically disappeared you can jump in to **Creating new application** section

# Alternative step-by-step installation #

If you want to install eduFramework without using scripts you don't trust :) please follow these steps

### 1. Get eduFramework source ###

You can clone mercurial repository by executing following commands:

```
hg clone https://code.google.com/p/eduframework/

hg clone https://code.google.com/p/eduframework-mustache/
```
### 2. Install both modules ###

Execute following commands from the same directory as in step one
```
npm install eduframework

npm install eduframework-mustache
```
### 3. Login on new terminal session or reload .bashrc script ###
```
. ~/.bashrc
```

# Creating new application #
### 1. Create application named "apka" ###

```
ef-new apka
```

It'll create default project structure under directory "apka"

### **2. Run application ###**

Enter application directory

```
cd apka
```
Issue following command

```
ef-start
```

### 3. Verify it's working ###

You can verify that application is working visiting "http://localhost:3000" in your web browser.

# What next #

You can read other wiki pages to see all the features of eduFramework

  * [Controllers in action](Controllers.md)
  * [Routing requests](RoutingEngine.md)
  * [Creating views](ViewEngine.md)
  * [What is view model](ViewModels.md)
  * [How to configure app](Configuration.md)
  * [Storing data (model)](Models.md)

**Blog application**

Or learn by example using sample blog application

https://code.google.com/p/eduframework-blog/