// function MovingObject (pos, val, radius, color) {
//     this.pos = pos;
//     this.val = val;
//     this.radius = radius;
//     this.color = color;
// }

function MovingObject (object) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.radius = object.radius;
    this.color = object.color;
}

module.exports = MovingObject;