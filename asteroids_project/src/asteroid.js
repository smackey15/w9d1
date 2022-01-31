const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(object) {
    this.color = "purple";
    this.radius = 10;
    this.pos = object.pos;
    MovingObject.call(object, object.pos);
}