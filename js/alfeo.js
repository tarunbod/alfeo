function Alfeo()
{
    //
}

Alfeo.library = new String();

Alfeo.go = function() {
    
    var cmd = Alfeo.library + document.getElementById("textarea-main").value;
    var myInterpreter = new Interpreter(cmd);
    myInterpreter.run();
    var r = document.getElementById("result-value");
    r.innerHTML = myInterpreter.value;
};


Alfeo.factorial = function(n) {
    var b = 1;
    while(n > 1)
    {
      b *= n;
      n--;
    }
    return b;
};