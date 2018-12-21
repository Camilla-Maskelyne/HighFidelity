// Getting your position in the domain, so that the cube is spawned in front of you. 
var position = Vec3.sum(MyAvatar.position, Quat.getFront(MyAvatar.orientation));
var scale = 0.03;
var resolution = 0.1;
var properties = {
    type: "Box",
    name: "ScriptBox",
    position: position,
    color: { red: 155, green: 0, blue: 0 }
};
var i = -5;
while(i<5) {
var properties2 = {
    type: "Box",
    name: "GraphBox",
    position: Vec3.sum(properties.position,{x:scale*i,y:scale*(i*i*i-3*i),z:0}),
	dimensions: {x:scale,y:scale,z:scale},
    color: { red: 155, green: 0, blue: 155 },
	lifetime:  100};
	
var Ent = Entities.addEntity(properties2);
print('Entity added')
i=i+resolution};
