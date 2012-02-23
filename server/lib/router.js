Router = function(pathname) {
  this.matchFound = false;
  this.path = pathname;
  this.variables = new Array();

  this.controller = '';
  this.action = '';

  this.extractVariables = function(pattern, path)
  {
    var variables = new Object();
    var i = 1; 

    // Extract variables
    varRegexp = new RegExp('(:[a-z]+)', 'g');
    valuesRegexp = new RegExp(pattern.replace(varRegexp, '(\\w+)'), 'g');

    values = valuesRegexp.exec(path);

    while(name = varRegexp.exec(pattern))
    {
      var name = name[1].substr(1);
      console.log(name);
      variables[name] = i < values.length ? values[i] : null
      i++;
    }

    return variables;
  }

  this.match = function(pattern, destination) {
    // Path was already matched, quit then
    if(this.matchFound)
    {
       return false;  
    }

    var valuePattern = pattern.replace(new RegExp('(:[a-z]+)', 'g'), '(\\w+)');
    regexp = new RegExp(valuePattern, '');
    console.log(valuePattern);
    
    // If current pattern doesn't match path return false
    if(!regexp.test(this.path))
    {
      return false;
    }

    this.variables = this.extractVariables(pattern, this.path);

    var targetRegexp = new RegExp('(\\w+)#(\\w+)', ''); 
    target = targetRegexp.exec(destination);

    this.controller = target[1];
    this.action = target[2];

    return this.matchFound = true;
  }

  // It should provide routing rules for specified path
  this.route = function(routes) {
    routes(this);
  }
}