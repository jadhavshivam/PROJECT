class Ground {
	constructor	(x,y,width,height){
		var Option = {
			isStatic:true
			
		}
		this.body = Bodies.rectangle(x,y,width,height,Option)
		this.width = width ;
		this.height = height ;
		
		World.add(world , this.body);
		
		
	}
	display() {
		var position = this.body.position;
		rectMode (CENTER);
		fill (255);
		rect(position.x,position.y,this.width,this.height);
	} 
}