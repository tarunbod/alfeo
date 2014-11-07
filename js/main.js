function Alfeo()
{
    //
}

Alfeo.API = "";

Alfeo.prototype.go = function() {
    
    var cmd = document.getElementById("textarea-main").value + Alfeo.API;
    
    try {
        var myInterpreter = new Interpreter(cmd);
        myInterpreter.run();
        $("#errorbox").addClass("invisible");
    }
    catch(err){
        $("#errorbox").removeClass("invisible");
        document.getElementById("errorbox").innerHTML = ("<span class=\"errorname\">"+err.name+"</span>\n<span class=\"errormessage\">"+err.message+"</span>");
    }
    
    var r = document.getElementById("result-value");
    r.innerHTML = myInterpreter.value;
    
};

