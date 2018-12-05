(function(){
    var _this = this;

    var changeColor = function(entityID){
        var displacementDist = 0.1; 
        var entity = Entities.getEntityProperties(entityID, ["position"]);
        
        Entities.editEntity(entityID, {
            color: {
                red: Math.random()*255,
                green: Math.random()*255,
                blue: Math.random()*255,
            },
            position: Vec3.sum(entity.position, {
                x: (Math.random()-0.5)*2*displacementDist,
                y: (Math.random()-0.5)*2*displacementDist,
                z: (Math.random()-0.5)*2*displacementDist,
            }),
        });
    };

    _this.preload = function(){
        print("Loaded script");
    };

    _this.clickDownOnEntity = function(entityID, event){
        print("I was clicked (yes, me)!");
        changeColor(entityID);
    };
})