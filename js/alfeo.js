var r = document.getElementById("result-value");

var outputFormat = "normal";
$("#output_format").on('change', function() {
    outputFormat = $(this).val();
});

function Alfeo() {
    var textarea = document.getElementById("textarea-main");
    if(textarea.value === undefined || textarea.value === "") {
        sweetAlert({
            title: "You didn't type anything in!",
            text: "In order for Alfeo to evaluate anything, you have to type something in. If you're stuck, try pressing the help button.",
            type: "warning"
        });
    }
    else {
        var cmd = api + "\n" + textarea.value;
        var myInterpreter;
        try {
            myInterpreter = new Interpreter(cmd);
            myInterpreter.run();
            $("#errorbox").addClass("hidden");
        }
        catch(err){
            $("#errorbox").removeClass("hidden");
            document.getElementById("errorbox").innerHTML = ("<span class=\"errorname\">"+err.name+"</span><br><span class=\"errormessage\">"+err.message+"</span>");
        }
        
        var result = myInterpreter.value;
        console.log(result);
        if (outputFormat == "sci") {
            result = sci(result);
        }
        r.innerHTML = result;
    }
}

var api;
var helpmarkdown;
var helpShown =  false;

function help(){
    var box = document.getElementById("helpbox");
    var activator = document.getElementById("helpbutton");

    //box.innerHTML = markdown.toHTML(helpmarkdown);
    if(helpShown === false){
        $("#helpbox").removeClass("hidden");
        activator.innerHTML = "Hide README";
        helpShown = true;
    }
    else {
        $("#helpbox").addClass("hidden");
        activator.innerHTML = "Show README";
        helpShown = false;
    }
}

function factorial(n) {
    var b = 1;
    while(n > 1)
    {
      b *= n;
      n--;
    }
    return b;
}

/**
 * Imports all of the functions in the Math object (e.g Math.cos, Math.sin)
 * into the global scope, so one doesn't have to type "Math." before every 
 * mathematical function. Typing just the function name will work.
 */
var mathFunctions = ["random", "abs", "acos", "asin", "atan", "ceil", "exp", "floor", "log", "round", "sqrt", "atan2", "pow", "max", "min", "imul", "sign", "trunc", "tanh", "asinh", "acosh", "atanh", "hypot", "fround", "clz32", "cbrt", "cos", "sin", "tan", "sinh", "cosh", "log10", "log2", "log1p", "expm1"];
for (var mathFunc in mathFunctions) {
    window[mathFunctions[mathFunc]] = Math[mathFunctions[mathFunc]];
}

function power(a,b) {
    return pow(a,b);
}

function squareroot(a) {
    return sqrt(a);
}

function nroot(degree,radicand){ // cuberoot of 8 would be nroot(3,8)
    return Math.pow(Math.abs(radicand), (1.0 / degree));
}

function sci(num) { // returns a number in scientific notation
    return num.toExponential().replace("e+", " x 10^"); 
} 
//function quadraticFormula(a,b,c){
//    var s1 = NaN, s2 = NaN;
//    try{
//        s1 = ( (-(b)) + Math.sqrt(( b * b) - (4 * a * c)) )  / (2 * a);
//    }
//    catch(Exception)
//}

//Physics 

function findVf(vi,a,t) {
    return vi+(a*t)
}

function findVf2(vi,a,d,u) {
    if(u === undefined) {
        u = 1;
    }
    return Math.sqrt( (vi*vi) + (2*a*d*u));
}

