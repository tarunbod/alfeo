function Alfeo()
{
    //
}

Alfeo.library = "";

Alfeo.prototype.go = function() {
    
    var cmd = document.getElementById("textarea-main").value + Alfeo.library;
    var myInterpreter = new Interpreter(cmd);
    myInterpreter.run();
    var r = document.getElementById("result-value");
    r.innerHTML = myInterpreter.value;
    
};

