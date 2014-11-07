function Alfeo()
{
    var cmd = api + "\n" + document.getElementById("textarea-main").value;
    try {
        var myInterpreter = new Interpreter(cmd);
        myInterpreter.run();
        $("#errorbox").addClass("hidden");
    }
    catch(err){
        $("#errorbox").removeClass("hidden");
        document.getElementById("errorbox").innerHTML = ("<span class=\"errorname\">"+err.name+"</span><br><span class=\"errormessage\">"+err.message+"</span>");
    }
    
    var r = document.getElementById("result-value");
    r.innerHTML = myInterpreter.value;
}

var api = new String();

function factorial(n) {
    var b = 1;
    while(n > 1)
    {
      b *= n;
      n--;
    }
    return b;
}

function pow(a,b) {
    return Math.pow(a,b);
}
function power(a,b) {
    return Math.pow(a,b);
}
function sqrt(a) {
    return Math.sqrt(a);
}
function squareroot(a) {
    return Math.sqrt(a);
}
function nroot(degree,radicand){ // cuberoot of 8 would be nroot(3,8)
    return Math.pow(Math.abs(radicand), (1.0 / degree));
}
//function quadraticFormula(a,b,c){
//    var s1 = NaN, s2 = NaN;
//    try{
//        s1 = ( (-(b)) + Math.sqrt(( b * b) - (4 * a * c)) )  / (2 * a);
//    }
//    catch(Exception)
//}
