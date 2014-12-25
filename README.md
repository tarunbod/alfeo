Alfeo
=====

##Alfeo is an unfinished product. Please keep that in mind when using this prototype.

Successor to [pCalculator](https://github.com/MacPhage/pCalculator), Alfeo is an enhanced implementation of [NeilFraser/JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter) to specialize in quickly writing and calculating mathematical equations and formulas. Ideal for programmers looking to speed-up their Precalculus homework!

Alfeo [interprets](https://github.com/NeilFraser/JS-Interpreter) JavaScript, a simple programming langauge for your browser. You can do some pretty neat things with it, but you don't need very much coding know-how to use it. For example, typing:

```javascript

(2+2)*3

````

will yield the result of **12**. The last line of code in Alfeo is what gets shown to you.

You can also take this step further and utilize the core Math.* libraries, such as Squareroot.

```javascript

Math.sqrt(25)

//Alfeo has also provided a shortcut for this, which is entirely optional.
//Lines with "//"s are comments and ignored completely

sqrt(16)

```

This would yield the result of the last line of code, which is `sqrt(16)`. The result in this case is **4**. Please note that `Math.sqrt()` is EXACTLY the same as `sqrt()`, just a short-hand.


You can also write your own mathematical functions like

```javascript

function f(x){
return (x*2)-1;
}

f(5)

```

In this example, we *call* the predefined mathematical function named *f* and give it the value of 5. The number 5 is then multiplied by 2 (which is 10), and then has 1 subtracted by it (which equals 9).

This example will result in 9.


####There is much more you can do and that is planned for Alfeo in the future.
To learn more about the [JavaScript](http://en.wikipedia.org/wiki/JavaScript) language, try [w3Schools](http://www.w3schools.com/js/) or [CodeAcademy](http://www.codecademy.com/en/tracks/javascript). JavaScript in Alfeo is limited by the library it uses called [JS-Interpreter](https://github.com/NeilFraser/JS-Interpreter), so typical non-math things probably can't be done.


###This document will be updated in the future along with the new features Alfeo receives. If you would like to contribute to the Alfeo project, [fork and pull freely](https://github.com/MacPhage/alfeo)!
