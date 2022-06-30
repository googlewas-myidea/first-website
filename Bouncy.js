
var balls = [ ];
setInterval( animate, 33);

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.color = randColor();
        this.vx = Math.round(Math.random() * 20 -10);
        this.vy = Math.round(Math.random() * 20 -10);
        this.size = 30;
    }
    draw() {
        var canvas = document.getElementById("imgCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
    update() {
        var canvas = document.getElementById("imgCanvas");
        this.x += this.vx;
        this.y += this.vy;
        if ( this.x < 0 + this.size || this.x > canvas.width - this.size)
            this.vx = -this.vx;
            if ( this.y < 0 + this.size || this.y > canvas.height - this.size)
            this.vy = -this.vy;
    }
}

function randColor() {
    var r = Math.round(Math.random() * 240 + 16);
    var g = Math.round(Math.random() * 240 + 16);
    var b = Math.round(Math.random() * 240 + 16);
    var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}
function draw(e) {
    var canvas = document.getElementById("imgCanvas");
    var ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    var posx = e.clientX - rect.left;
    var posy = e.clientY - rect.top;
    var newBall = new Ball(posx, posy);
    newBall.draw();
    balls.push( newBall );
}
function animate() {
    var canvas = document.getElementById("imgCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var n = 0; n < balls.length; n++) {
        balls[ n ].update();
        balls[ n ].draw();
    }
}