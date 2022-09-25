canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx._______;
ctx._______ = "grey";
ctx._______ = 1;
ctx._______(x, y, width, height);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 150 and y = 143
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(150 ,143 ,40 ,2*Math.PI);
ctx.stroke() = "blue";
= 5;
(x, y, r, startAngle, endAngle);
();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350 ,210 ,40 ,2*Math.PI);
ctx.stroke() = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(210 ,40 ,40 ,2*Math.PI);
ctx.stroke() = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300 ,250 ,40 ,2*Math.PI);
ctx.stroke() = "orange";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400 ,250 ,40 ,2*Math.PI);
ctx.stroke() = "green";