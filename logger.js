function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// The call to debugIt() on line 10 in turn invokes the logger() 
// function defined within debugIt(). logger() has access to the 
// local variable 'status' defined within debugIt(), due to the lexical
// scoping rules of Javascript. 
