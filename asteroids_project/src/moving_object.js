// function MovingObject (pos, val, radius, color) {
//     this.pos = pos;
//     this.val = val;
//     this.radius = radius;
//     this.color = color;
// }

function MovingObject(object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};

module.exports = MovingObject;