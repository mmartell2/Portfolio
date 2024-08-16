//finds canvas html element
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

//context.fillRect(x, y, width, height);
//x and y from the top left of the screen
// context.fillStyle = "orange";
// context.fillRect(100, 100, 100, 100);
// context.fillRect(200, 500, 100, 100);
// context.fillStyle = "yellow";
// context.fillRect(300, 300, 100, 100);

// console.log(canvas);

// lines
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "lime";
// context.stroke();

// arc / circle
//context.beginPath();
//context.arc(300, 300, 30, 0, Math.PI * 2, false);
//context.strokeStyle = "red";
//context.stroke();

 const colors = new Array("blue", "red", "green", "lime", "orange", "yellow", "purple", "cyan", "teal");

// for(i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = "red";
//     context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
//     context.stroke();
// }

//makes it so the event only returns the mouse x and y cordinates
var mouse = {
    x: undefined,
    y: undefined
}

var fStyle = 'cyan';
//event listener on mouse move
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;

})

//circle function 
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    //draw function that creates the circle
    this.draw = function(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'orange';
        context.stroke();
        context.fillStyle = fStyle;
        context.fill();
    }

    //update function that moves the circles and enables bounce
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        // if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        //     if(this.radius < 20){
        //         this.radius += 1;
        //     }
            

        // } else if(this.radius > 2){
        //     this.radius -= 1;
        // }

        // if(mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
        //     context.beginPath();
        //     context.moveTo(this.x, this.y);
        //     context.lineTo(mouse.x, mouse.y);
        //     context.strokeStyle = 'teal';
        //     context.stroke();
        //     fStyle = 'cyan';
        // }

       if(mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100){
        fStyle = 'orange';
       } else   {
        fStyle = 'white';
       }

        this.draw();
    }
}
//circle array to store cicles created by the for loop
var circleArray = [];
    //for loop to create the circles
    for(i = 0; i <1000; i++){
        var radius = 2;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - .5);
        var dy = (Math.random() - .5);
        
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }

var circle = new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 2, 2, 30);
//animate function that clears the screen of previous circles making it look like the circles are moving
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for(i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    
    // // arc / circle
    // context.beginPath();
    // context.arc(x, y, 30, 0, Math.PI * 2, false);
    // context.strokeStyle = 'lime';
    // //context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
    // context.stroke();

//     if(x + radius > innerWidth || x - radius < 0){
//         dx = -dx;
//     }

//     if(y + radius > innerHeight || y - radius < 0){
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
 }

animate();
