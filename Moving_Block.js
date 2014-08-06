//Moving Block Canvas Program


var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

left = right = up = down = false;

var block = new Block(50, 50, "#FF00FF", 3, 20);

window.addEventListener("keydown", function (e) {
    //if W is pressed down
    if (e.keyCode == 87) {
        up = true;
    }
    //if A is pressed down
    if (e.keyCode == 65) {
        left = true;
    }
    //if D is pressed down
    if (e.keyCode == 68) {
        right = true;
    }
    //if S is pressed down
    if (e.keyCode == 83) {
        down = true;
    }
});

    window.addEventListener("keyup", function (e) {
    //if W is released
    if (e.keyCode == 87) {
        up = false;
    }
    //if A is released
    if (e.keyCode == 65) {
        left = false;
    }
    //if D is released
    if (e.keyCode == 68) {
        right = false;
    }
    //if S is released
    if (e.keyCode == 83) {
        down = false;
    }

    });

    function main() {
        //clear screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //if block hits the edges of the screen
        if (block.x > canvas.width - block.size) {
            right= false;
        }
        if (block.x < 0) {
            left = false;
        }
        if (block.y > canvas.height - block.size) {
            down = false;
        }
        if (block.y < 0) {
           up = false;
        }

        //see if I hit a keydown
        if(left) block.moveLeft();
        if(right) block.moveRight();
        if(up) block.moveUp();
        if(down) block.moveDown();

        block.drawBlock();

    }




    function Block(x, y, color, speed, size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.size = size;

        this.drawBlock = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        this.moveRight = function () {
            this.x += this.speed;
        }

        this.moveDown = function () {
            this.y += this.speed;
        }

        this.moveLeft = function () {
            this.x -= this.speed;
        }

        this.moveUp = function () {
            this.y -= this.speed;
        }
    }

    setInterval(function () {
        main()
    }, 15); 
