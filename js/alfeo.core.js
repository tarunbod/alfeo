var api;
var helpmarkdown;

function Alfeo(){
    this.textarea = document.getElementById("textarea-main");
    this.codeContent = stripHtml(this.textarea.innerHTML);
    this.helpShown = false;

    this.evaluate = function() {
        var textarea = document.getElementById("textarea-main");
        var codeContent = strip(textarea.innerHTML);
        if(codeContent === undefined || codeContent === "") {
            try {
                sweetAlert({
                    title: "You didn't type anything in!",
                    text: "In order for Alfeo to evaluate anything, you have to type something in. If you're stuck, try pressing the help button.",
                    type: "warning"
                });
            }
            catch(err){
                console.log(err);
                alert("You didn't type anything in!\n\nIn order for Alfeo to evaluate anything, you have to type something in. \nIf you're stuck, try pressing the help button.");
            }
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
            var r = document.getElementById("result-value");
            r.innerHTML = myInterpreter.value;
        }
    };

    this.readme = function() {
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
    };

}



function stripHtml(html) {

    //Turns HTML into plaintext

    //Thanks to http://stackoverflow.com/questions/822452/strip-html-from-text-javascript

    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}
