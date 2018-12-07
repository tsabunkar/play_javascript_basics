function x() {
    /*
    Variable 'a' is only available to function 'x' and function 'y'.
    In other words the area defined by 'x' is the lexical scope of
    variable 'a'
    */
    var a = "I am outside function y()";

    function y() {
        console.log(a);
    }
    y();

}
x(); // output