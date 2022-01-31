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

MovingObect.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
};

module.exports = MovingObject;