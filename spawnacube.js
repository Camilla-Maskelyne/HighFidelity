var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var id = Entities.addEntity({
    position: position,
    script: Script.resolvePath("makiversion2.js"),
    type: "Box",
    name: "VorpalBox",
    color: {red: 0, green: 0, blue: 155}
});
print("Made a cube!" , id);