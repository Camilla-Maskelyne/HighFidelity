(function(){
    var _this = this;
    _this.preload = function(){
        print("Loaded script");
    };
    _this.clickDownOnEntity = function(entityID, event){
        print("I was clicked (yes, me)!");
        changeColor(entityID);
    };
    var changeColor = function(entityID){
        var newRed = Math.random()*255;
        var newGreen = Math.random()*255;
        var newBlue = Math.random()*255;

        var newProperty = {color: {red: newRed, green: newGreen, blue: newBlue}};
		
        Entities.editEntity(entityID, newProperty);
		
		var randomDisplacement = {x: Math.random()*0.1, y:Math.random()*0.1, z:Math.random()*0.1};
		
		print(randomDisplacement);
		
		var newPosition = Vec3.sum(entityID.position,randomDisplacement);
		
		newPP = {position: newPosition};
		
		Entities.editEntity(entityID, newPP);
	
	
		
		
    };
});