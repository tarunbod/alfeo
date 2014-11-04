function Alfeo()
{
    //
}

Alfeo.go = function() {
    var cmd = document.getElementById("textarea-main").value;
    var myInterpreter = new Interpreter(cmd);
    myInterpreter.run();
    //alert(myInterpreter.value);
    var r = document.getElementById("result-value");
    r.innerHTML = myInterpreter.value;
};