var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");


var fireworks = [];


function main() {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";
    ctx.fillText(fireworks.length, 10, 10);
    
    for(i=0; fireworks.length; i++) {
        fireworks[i].drawFireWork();
        fireworks[i].moveFireWork();
        fireworks[i].deleteFireWork();
    }
}

function FireWork() {
    this.x = mouseX;
    this.y = mouseY;
    this.color = "rgb(" + Math.floor(Math.random()*255) + "," + 
        Math.floor(Math.random()*255) + "," +   
        Math.floor(Math.random()*255) + ")";
    this.velX =Math.floor(Math.random()*12) - 6//Math.floor 
    this.velY = Math.floor(Math.random()*12) - 8
    this.size = Math.floor(Math.random()*6) + 2;
    
    console.log(this.color);
    
    this.drawFireWork = function() {
        ctx.fillStyle = this.color;
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    };
    
    this.moveFireWork = function() {
        this.x += this.velX;
        this.y += this.velY;
        this.velY += 0.5; //gravity of 5.
    };
    
    this.deleteFireWork = function() {
        if(this.y >= canvas.height){
            fireworks.splice(i, 1);
        }
    };
}
    
    

canvas.addEventListener("mousemove", function (e) {
    var cRect = canvas.getBoundingClientRect();
    mouseX = e.clientX - cRect.left;
    mouseY = e.clientY - cRect.top;
});

canvas.addEventListener("mousedown", function (e) {
    //p = new FireWork(); 
    var size = Math.floor(Math.random()*60) + 30;
    for(var i=0; i<size;i++) {
        fireworks.push(new FireWork);
    }

});



setInterval(function () {
    main();
}, 15);
