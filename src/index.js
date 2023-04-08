
function getLevels(){
	/*
	//Currently editing
	return [
		
		
		{
			world:[
				[0.20,0.21,0.20],
				[fv(),fv(),fv()],
				[fv(),0.80,fv()],
				[fv(),2.00,fv()],
				[fv(),0.60,fv()],
				[fv(),0.74,fv()],
			],
			startPos:{x: 0.5, y: 1.5, z: 0},
			extras:[
				new SpecialBox({x:0,y:1,z:0.18},{x:1,y:1,z:0.7},1/1000),
			],
			startAngle : -0.5*Math.PI,
			name:"Go Around",
		},
	]
	/**/
	return [
		{
			world:[
				[0.14,0.22, 0.34, 0.47, 0.56, 0.62, 0.74],
				[0.15,0.23, 0.32, 0.43, 0.52, 0.64, 0.74],
				[0.12,0.25, 0.34, 0.46, 0.54, 0.63, 0.74],
			],
			startPos:{x: 1.5, y: 0.5, z: 0},
			startAngle : -0.1,
			name:"First Steps",
		},
		{
			world:[
				[0.12,0.13, 0.12, 0.13, 0.15, 0.12, 0.11],
				[0.15,0.23, 0.32, 0.43, 0.52, 0.64, 0.74],
				[0.13,0.15, 0.13, 0.12, 0.14, 0.11, 0.13]
			],
			startPos:{x: 0.62, y: 0.76, z: 0},
			startAngle : -2.984,
			name:"Adding some perspective",
		},
		{
			world:[
				[0.12,0.13, 0.12, 0.09, 0.15, 0.12, 0.11],
				[0.15, 0.32, 0.43, 0.13, 0.43, 0.58, 0.74],
				[0.13,0.15, 0.13, 0.12, 0.14, 0.11, 0.13]
			],
			startPos:{x: 1.5, y: 3.5, z: 0},
			startAngle : -0.01,
			name:"Trapped",
		},
		{
			world:[
				
				[0.13, 0.60, 0.63, 0.70, 0.41], 
				[0.50, 0.12, 0.13, 0.12, 0.24],
				[0.74, 2.00, 0.60, 0.50, 0.40],
			],
			startPos:{x: 1.5, y: 1.3, z: 0.12},
			startAngle : -0.77*Math.PI,
			name:"Kaboodle",
		},
		{
			world:[
				[0.12,0.13, 0.12, 0.18, 0.15, 0.12, 0.11],
				[0.12,0.23, 0.12, 0.18, 0.15, 0.62, 0.11],
				[0.12,2.00, 0.32, 2.18, 0.55, 0.12, 0.74],
				[0.13,0.15, 0.43, 0.42, 0.14, 0.11, 0.13],
				[0.13,0.15, 0.13, 0.12, 0.14, 0.11, 0.13]
			],
			startPos:{x: 2.5, y: 5.5, z: 0},
			startAngle : -3.021,
			name:"Corners",
		},
		{
			world:[
				[0.12, 0.13, 0.12, 0.18, 0.15, 0.12, 0.11],
				[0.50, 0.21, 0.37, 0.18, 0.15, 0.64, 0.74],
				[0.13, 0.15, 0.13, 0.12, 0.14, 0.11, 0.13]
			],

			extras:[
				new SpecialBox({x:1,y:1,z:0.4},{x:1,y:4,z:0.4},1/1000),
			],
			startPos:{x: 1.5, y: 0.5, z: 0},
			startAngle : -0.01,
			name:"Floaty Bois",
		},
		{
			world:[
				[0.52, 0.53, 0.52, 0.18, 0.15, 0.12, 0.11],
				[0.40, 0.11, 0.12, 0.15, 0.13, 0.15, 0.12],
				[0.30, 0.11, 0.12, 0.15, 0.13, 0.15, 0.12],
				[0.23, 0.15, 0.13, 0.12, 0.64, 0.61, 0.74],
			],

			extras:[
				new SpecialBox({x:0,y:3,z:0.5},{x:3,y:3,z:0.5},1/1000),
			],
			startPos:{x: 0.5, y: 0.5, z: 0},
			startAngle : -2.644,
			name:"Bloaty Fois",
		},
		{
			world:[
				[0.24, fv(), 0.53, 0.54, fv(), fv(), fv(),],
				[0.33, fv(), fv(), fv(), fv(), fv(), fv(),],
				[0.47, fv(), fv(), fv(), fv(), fv(), 0.74,],
				[0.32, fv(), fv(), fv(), fv(), fv(), fv(),],
				[0.23, fv(), 0.53, 0.54, fv(), fv(), fv(),]
			],
			startPos:{x: 2.5, y: 3.5, z: 0},
			extras:[
				new SpecialBox({x:2,y:0,z:0.5},{x:2,y:2.5,z:0.5},1/1000),
				new SpecialBox({x:4,y:4,z:0.6},{x:4,y:6,z:0.6},1/1000),
				new SpecialBox({x:0,y:6,z:0.6},{x:0,y:4,z:0.6},1/1000),
			],
			startAngle : -0.01,
			name:"Hello There",
		},
	
			{
			world:[
				[0.24, 0.58, 0.99, 0.28, 0.76, 0.15, 0.65],
				[0.53, 0.18, 0.59, 0.08, 0.10, 0.21, 0.49],
				[0.75, 0.64, 0.62, 0.25, 0.69, 2.96, 0.74],
				[0.22, 0.50, 0.90, 0.17, 0.41, 0.26, 0.30],
				[0.75, 0.41, 0.57, 0.05, 0.21, 0.01, 2.96],
			],
			startPos:{x: 2.5, y: 1.5, z: 0},
			extras:[
				//new SpecialBox({x:2,y:0,z:0.5},{x:2,y:2.5,z:0.5},1/1000),
				new SpecialBox({x:4,y:4,z:0.5},{x:4,y:5.9,z:0.6},1/1000),
				//new SpecialBox({x:0,y:5.9,z:0.6},{x:0,y:4,z:0.6},1/1000),
			],
			startAngle : -0.01,
			name:"It isn't impossible",
		},
				{
			world:[
				[0.20,0.21,0.20],
				[fv(),fv(),fv()],
				[fv(),0.80,fv()],
				[fv(),2.00,fv()],
				[fv(),0.60,fv()],
				[fv(),0.74,fv()],
			],
			startPos:{x: 0.5, y: 1.5, z: 0},
			extras:[
				new SpecialBox({x:0,y:1,z:0.18},{x:1,y:1,z:0.7},1/1000),
			],
			startAngle : -0.5*Math.PI,
			name:"Go Around",
		},

	];
	/**/
}

function fv(){
	//floor value
	return (Math.random()*0.04)+0.08;
}

function triangleWave(x){
	
	 var tmod = function (m,n) {
		 return ((m % n) + n) % n;
	 };
	
	var gx= (tmod(Math.floor(x),2)*2)-1;
	
	return tmod((gx*x),1);
}

class Game {
	constructor() {
		
		this.canvas = document.getElementById("cnv");
		this.ctx = this.canvas.getContext("2d");
		this.player = new Player();
		this.LoadLevel(0);
		this.currentLevel=0;
		this.player.lineEq = getLineEqFromThetaAndPos(
			this.player.pos,
			this.player.angle
		);
		this.player.pos.z = this.world
		[Math.floor(this.player.pos.x)]
		[Math.floor(this.player.pos.y)];
	document.getElementById("fullscreen").addEventListener("click",()=>{this.fullscreen()})

	}
	fullscreen(){
		console.log("fullscreen");
		$("body *").toggleClass("hidden");
		document.getElementById("cnv").removeClass("hidden");
		document.getElementById("cnv").toggleClass("fullscreen");
		if(document.getElementById("cnv").hasClass("fullscreen")){
			this.ctx.canvas.height =  window.innerHeight;
			this.ctx.canvas.width =  window.innerWidth;
		}else{
			this.ctx.canvas.height = 450;
			this.ctx.canvas.width =  600;
		}
		
		$(window).resize(()=>{
			console.log("resize")
			this.ctx.canvas.height = window.innerHeight;
			this.ctx.canvas.width = window.innerWidth;
		})
		
		// ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
	    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
		   if (elem.requestFullScreen) {
			  elem.requestFullScreen();
		   } else if (elem.mozRequestFullScreen) {
			  elem.mozRequestFullScreen();
		   } else if (elem.webkitRequestFullScreen) {
			  elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		   } else if (elem.msRequestFullscreen) {
			  elem.msRequestFullscreen();
		   }
	    } else {
		   if (document.cancelFullScreen) {
			  document.cancelFullScreen();
		   } else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
		   } else if (document.webkitCancelFullScreen) {
			  document.webkitCancelFullScreen();
		   } else if (document.msExitFullscreen) {
			  document.msExitFullscreen();
		   }
	    }
		
		
	}
	LoadLevel(levelNumber){
		if(Levels.length>levelNumber&&levelNumber>=0){
			var level = Levels[levelNumber];
			this.player.angle = level.startAngle;
			
			if(this.player.controls.controllerIn){
				this.player.controls.mousepos.x = this.player.angle/-Math.PI;
			}
			
			this.player.targetAngle = this.player.angle;
			this.player.pos = level.startPos;
			this.LevelTitle = level.name;
			if(Levels.length-1==levelNumber){
				this.LevelTitle +=" (Last Level)";
			}
			this.world = level.world;
			this.extras = level.extras;
		
		}
		
		
		
	}
	
	NextLevel(amount = 1){
		if(Levels.length>this.currentLevel+amount&&this.currentLevel+amount>=0){
			this.currentLevel+=amount;
			this.LoadLevel(this.currentLevel);
		}
	}
	
	Setup() {}

	Update() {
		//this.player.pos.y= ((Math.sin(Date.now()/1000)+1)/2)*this.world[0].length;
		
		this.toDraw = [];
		var tfl = this;
		
	
		
		if(this.player.win){
			this.player.win = false;
			this.NextLevel();
		}
		

		
		if(this.extras){
			this.extras.forEach(function(e){
				e.Update();
			});
		}
		
		this.player.Update(this.world,this.extras);
		
		if(this.extras){
			this.extras.forEach(function(e){
				var potDraw = e.SetUpBox(tfl.player.lineEq);
				if(potDraw){
					tfl.toDraw.push(potDraw);
				}
			});
		}
		
		var wholeWorldDraw = getIntersectionsThroughSquare(
			{ x: 0, y: this.world[0].length },
			{ x: this.world.length, y: 0 },
			this.player.lineEq
		);
		wholeWorldDraw.color = "";

		this.world.forEach(function(arr, x) {
			arr.forEach(function(color, y) {
				var topLeft = { x: x, y: y };
				var bottomRight = { x: x + 1, y: y + 1 };
				var box = tfl.getIntersectionsThroughSquare(
					topLeft,
					bottomRight,
					tfl.player.lineEq
				);
				if (box != null) {
					box.color = color;
					tfl.toDraw.push(box);
				}
			});
		});

		//add pos in

		var player = this.player.SetUpBox(player);
		
		this.toDraw.push(player);

		var maxLength = pythag(
			{ x: this.world.length, y: 0 },
			{ x: 0, y: this.world[0].length }
		);
		var player1dx = wholeWorldDraw;

		this.toDraw.forEach(function(e) {
			e.in.distance = e.in.distance - wholeWorldDraw.in.distance;
			e.out.distance = e.out.distance - wholeWorldDraw.in.distance;

			e.in.distance /= maxLength;
			e.out.distance /= maxLength;
		});
	}

	Draw() {
		
		
		
		var d = this.toDraw;
		d.sort(function(a, b) {
			return a.in.distance - b.in.distance;
		});
		
		var ctx = this.ctx;
		var greatestDistance = d[d.length-1].out.distance;
		var width = this.canvas.width;
		var height = this.canvas.height;
		var margin = width*((1-greatestDistance)/2);
		ctx.clearRect(0, 0, width, height);
		var tfl = this;

		d.forEach(function(i, index) {
			
			//var start = i.in.distance * width;
			//var end = i.out.distance * width;
			
			if(i.color!=0&&!isNaN(i.color)){
				i.height = i.color;
			}
			var boxVars = i.getSizeOnScreen(width,height);
			//boxVars.startX+=margin;
			//boxVars.endX+=margin;
			ctx.fillStyle = tfl.getColorForNumber(i.color);
			drawRectWithPoints(ctx, boxVars.startX, boxVars.startY, boxVars.endX, boxVars.endY);
		});

		//Angle Widget
		ctx.beginPath();
		ctx.arc(width - 40, 40, 30, 0, 2 * Math.PI);
		var angleToUse = this.player.angle + Math.PI / 2;
		ctx.moveTo(
			Math.sin(angleToUse + Math.PI) * 20 + width - 40,
			Math.cos(angleToUse + Math.PI) * 20 + 40
		);
		ctx.lineTo(
			Math.sin(angleToUse) * 20 + width - 40,
			Math.cos(angleToUse) * 20 + 40
		);
		ctx.stroke();
		ctx.fillStyle="black";
		ctx.font = "20px Arial";
		ctx.fillText(this.LevelTitle, 10, 30);
		
		//Add Level Title
		
	}

	getColorForNumber(n) {
		if(this.player.win&&Levels.length-1==this.currentLevel){
			return 'hsla('+ Date.now()/(n*10) +',100%,'+((n*50)+25)+'%,40%)';
		}
		switch (n) {
				
			case 0: return "#e5b4";
			case 0.74:return "#eed31dcc";	
			case "special":return "#e334";
			default: return "rgba(100," + (1-n) * 255 + ",100,0.4)";
		}
	}

	getIntersectionsThroughSquare(topLeft, bottomRight, lineEq) {
		var intercepts = {
			top: { x: lineEq.inverse(topLeft.y), y: topLeft.y },
			bottom: { x: lineEq.inverse(bottomRight.y), y: bottomRight.y },
			left: { x: topLeft.x, y: lineEq.calc(topLeft.x) },
			right: { x: bottomRight.x, y: lineEq.calc(bottomRight.x) }
		};
		var perms = ["top", "bottom", "left", "right"];
		//sort by X (or y it doesnt matter)
		perms = perms.sort(function(a, b) {
			return intercepts[a].y - intercepts[b].y;
		});

		//doesnt pass through box (weird logic but it works)
		var groupings = [["top", "bottom"], ["left", "right"]];
		if (
			(perms[0] == groupings[0][0] && perms[1] == groupings[0][1]) ||
			(perms[0] == groupings[0][1] && perms[1] == groupings[0][0]) ||
			(perms[0] == groupings[1][0] && perms[1] == groupings[1][1]) ||
			(perms[0] == groupings[1][1] && perms[1] == groupings[1][0])
		) {
			return null;
		}

		//the middle 2 will be the box intercepts.
		var boxIntercepts = [intercepts[perms[1]], intercepts[perms[2]]];

		boxIntercepts[0].distance = pythag(
			{ x: 0, y: lineEq.yintercept },
			boxIntercepts[0]
		);
		boxIntercepts[1].distance = pythag(
			{ x: 0, y: lineEq.yintercept },
			boxIntercepts[1]
		);
		
		boxIntercepts.sort(function(a, b) {
			return a.distance - b.distance;
		});

		return new Box(boxIntercepts[0], boxIntercepts[1]);
	}
}

class Player {
	constructor() {
		this.pos = { x: 0, y: 0, z: 0 };
		this.angle = 0;
		this.targetAngle = 0;
		this.velocity = { x: 0, y: 0, z: 0 };
		this.moveVelocity = {x:0,y:0,z:0};
		this.box;
		this.height = 0.2;
		this.width = 0.1;
		this.grounded = true;
		this.win=false;
		this.gravity = 0.001;
		this.jumpSpeed = 0.02;
		this.moveSpeed = 0.035;
		this.color =0;
		
		this.controls = new Controls();
		this.hasJumped = false;
		this.super = false;
	}

	MoveAlongLineEq(direction,speed) {
		if(!speed){
			speed = 1;
		}
		var distance = this.moveSpeed;
		if(direction=="left"){
			distance*=-1;
		}
		var gradVector = { y: this.lineEq.gradient, x: 1 };
		var moveVector = normaliseVector(gradVector);
		
		
		
		moveVector.x *= distance * speed;
		moveVector.y *= distance * speed;

		this.moveVelocity.x = moveVector.x;
		this.moveVelocity.y = moveVector.y;
	}
	
	Stop() {
		this.velocity.x = 0;
		this.velocity.y = 0;
	}

	Update(world,extras) {
		this.doControls();
		
		var deltaAngle = (this.targetAngle - this.angle)/5;
		this.angle += deltaAngle;
		
		
		
		if(this.angle === 0||!this.angle){
			this.angle = 0.0001;
		}
		
		this.lineEq = getLineEqFromThetaAndPos(this.pos, this.angle);
		var floor = world[Math.floor(this.pos.x)][Math.floor(this.pos.y)];
		
		if(this.controls.isKeyDown("increaseSize")){
			world[Math.floor(this.pos.x)][Math.floor(this.pos.y)] +=0.01;
		}else if(this.controls.isKeyDown("decreaseSize")){
			world[Math.floor(this.pos.x)][Math.floor(this.pos.y)] -=0.01;
		}
		
		
		this.pos.z+=this.velocity.z;
		if(this.pos.z>floor){
			this.velocity.z -= this.gravity;
			this.grounded = false;
		}else if( this.pos.z<floor){
			this.velocity.z = 0;
			this.pos.z = floor;
			this.grounded = true;
			this.Stop();
		}else{
			this.grounded = true;
			this.Stop();
		}
		
		
		
		if(extras){		
			var tfl = this;
			//Extras collision
			//Bottom
			extras.forEach(function(e){
				var inside = e.IsInside(tfl.pos);
				if(inside){
					tfl.pos.z = e.pos.z+e.height;
					tfl.velocity = e.vel;
					tfl.grounded = true;
				}
			});
		}
		
		if(!this.grounded){
			this.Stop();
		}
		
		
		var nextPos = {
			x:this.pos.x + this.moveVelocity.x+this.velocity.x,
			y:this.pos.y + this.moveVelocity.y+this.velocity.y,
			z:this.pos.z + this.moveVelocity.z+this.velocity.z,
		};

		
		//X bounds
		if(Math.floor(nextPos.x)>=world.length){
			nextPos.x = this.pos.x;
			nextPos.y = this.pos.y;
		}else if(Math.floor(nextPos.x)<0){
			nextPos.x = this.pos.x;
			nextPos.y = this.pos.y;
		}
		//Y bounds
		if(Math.floor(nextPos.y)>=world[0].length){
			nextPos.x = this.pos.x;
			nextPos.y = this.pos.y;
		}else if(Math.floor(nextPos.y)<0){
			nextPos.x = this.pos.x;
			nextPos.y = this.pos.y;
		}
		
		//Floor collision
		var nextFloor = world[Math.floor(nextPos.x)][Math.floor(nextPos.y)];
		if(nextFloor>this.pos.z+0.05){
			this.Stop();
		}else{
			this.pos.x = nextPos.x;
			this.pos.y = nextPos.y;
		}
		
		
		if(this.pos.z == 0.74 && this.grounded){
			this.win=true;
		}else{
			this.win = false;
		}
	
	}

	doControls(){
		this.controls.pollController();
		
		if(this.controls.isKeyDown("mousemove")){
			var ang = this.controls.mousepos.x;
			if (ang >= 1) {
				ang = 0.99999;
			}
			if(ang<=0||!ang){
				ang = 0.0001;
			}
			ang *= -Math.PI;
			this.targetAngle = ang;
			this.controls.keyUp("mousemove");
		}
	
		
		if(this.controls.isKeyDown("left")){
			this.MoveAlongLineEq("left",this.controls.controllerMoveSpeed);
		}
		if(this.controls.isKeyDown("right")){
			this.MoveAlongLineEq("right",this.controls.controllerMoveSpeed);
		}
		if(!this.controls.isKeyDown("right")&&!this.controls.isKeyDown("left")){
			this.Stop();
			this.moveVelocity = {x:0,y:0,z:0};
		}
		
	
		if(this.controls.isKeyDown("jump")){
			if(!this.hasJumped){
				this.Jump();
				this.hasJumped = true;
			}
		} else {
			this.hasJumped = false;
		}
		
		
	}
	SetUpBox() {
		var player = getIntersectionsThroughSquare(
			{ x: this.pos.x + this.width/2, y: this.pos.y - this.width/2 },
			{ x: this.pos.x - this.width/2, y: this.pos.y + this.width/2 },
			this.lineEq
		);
		player.color = this.color;
		player.height = this.height;
		player.bottomPos = 1-this.pos.z;
		return player;
	}
	Jump(){
		if(this.grounded){
			this.velocity.z = this.jumpSpeed;
		}
	}
}

class Box {
	constructor(myin, myout) {
		this.in = myin;
		this.out = myout;
		this.height = 1;
		this.bottomPos = 1;
		this.color = 0;

		this.screenSize = {
			startX: 0,
			startY: 0,
			endX: 0,
			enxY: 0
		};
	}
	getSizeOnScreen(width,height){
		var ss = this.screenSize;
		
		ss.startX = this.in.distance*width;
		ss.startY = (this.bottomPos-this.height)*height;
		ss.endX =   this.out.distance*width;
		ss.endY =   this.bottomPos*height;
	
		
		return ss;
		
	}
}

class Controls {
	constructor(){
		this.controlsDown = [];
		this.mousepos = {x:0,y:0};
		this.previousMousePos = {x:0,y:0};
		var tfl = this;
		
		window.addEventListener("deviceorientation",function(e){tfl.handleOrientation(e,this)}, true);
		
		var el = $("canvas")[0];
		el.addEventListener("touchstart", (e)=>this.handleTouch(e,"start"));
		el.addEventListener("touchmove", (e)=>this.handleTouch(e,"move"));
		el.addEventListener("touchend", (e)=>this.handleTouch(e,"end"));
		el.addEventListener("touchcancel", (e)=>this.handleTouch(e,"end"));
		
		document.body.addEventListener("keydown", function(e) {
			tfl.keyDown(tfl.getKeyForKeycode(e.keyCode));
		});
		
		document.body.addEventListener("keyup", function(e) {
			tfl.keyUp(tfl.getKeyForKeycode(e.keyCode));
		});
        document.getElementById("canvas").addEventListener("mousemove", function(e,canv) {
			if(!tfl.isMobile){
				var rect = game.canvas.getBoundingClientRect();
				var mousePosX = e.clientX - rect.left;
				var mousePosY = e.clientY - rect.top;
				var thismousePos = {
					x: mousePosX / rect.width,
					y: mousePosY / rect.height,
				}

				if(tfl.previousMousePos.x != thismousePos.x){
					tfl.previousMousePos = tfl.mousepos;
					tfl.mousepos = thismousePos;
					tfl.keyDown("mousemove");
				}
			}
		});
		
	}
	
	handleTouch(e,type){
		var touches = e.touches;
		var isdown = false;
		
		this.keyUp("left");
		this.keyUp("right");
		this.keyUp("jump");

		
			var rect = game.canvas.getBoundingClientRect();
		for(var i=0;i<touches.length;i++){
			var e = touches[i];
			
			var mousePosX = e.clientX - rect.left;
			var mousePosY = e.clientY - rect.top;
			var x = mousePosX / rect.width;
			var y = mousePosY / rect.height;
			
			var key = "";
			if(x<0.5){
				key = "left"
			}else{
				key = "right"
			}
			
			if(y<0.5){
				key = "jump"
			}
		
			this.keyDown(key);
		}

			
			


		
		
		
	}
	
	handleOrientation(e){
		
		
		console.log(e);
		var dat ={
			absolute:e.absolute,
			alpha:e.alpha,
			beta:e.beta,
			gamma:e.gamma,
			bubbles:e.bubbles,
			ang:0,

		};

		
		
		try{
			if(typeof e.beta == 'number'){
				//this.controllerIn = true;
				var rot = 4*e.alpha/360;
				rot = 0.005+triangleWave(rot)*0.99;
				this.mousepos.x = rot;
				
				
				this.keyDown("mousemove");
				this.isMobile = true;
			}else{
				this.isMobile = false;
				//this.controllerIn = false;
			}
		}catch(ex){
			document.getElementById("output").innerHTML = ex;
		}
	}
	
	keyDown(key){
		if(!this.isKeyDown(key)){
			this.controlsDown.push(key);
		}
	}
	keyUp(key){
		this.controlsDown = this.controlsDown.filter(i=>i != key);
	}
	isKeyDown(key){
		return this.controlsDown.indexOf(key)!=-1;
	}

	getKeyForKeycode(keyCode){
		switch(keyCode){
			case 37 :return "left";
			case 39 :return "right";
			case 38 :return 'jump';
			case 221:return 'increaseSize';
			case 219:return 'decreaseSize';
			case 222:return 'skipLevel';
			case 87:return 'jump';	
			case 65:return 'left';	
			case 68:return 'right';	
				
		}
	}
	pollController(){
		if(navigator.getGamepads()[0]!=null){
			this.controllerIn = true;
			var updateControlButton = (name,button)=>{
				if(gp.buttons[button].pressed){
					this.keyDown(name);
				}else{
					this.keyUp(name);
				}
			};
			var gp = navigator.getGamepads()[0];
			updateControlButton("jump",0);
			
			
			var moveAxisVal =  gp.axes[0];
			this.controllerMoveSpeed = Math.abs(moveAxisVal);
			
			if(this.controllerMoveSpeed>0.1){
				if(moveAxisVal>0){
					this.keyDown("right");
					this.keyUp("left");
				}else{
					this.keyDown("left");
					this.keyUp("right");
				}
			}else{
				this.keyUp("left");
				this.keyUp("right");
			}
			
			var rotAxis = gp.axes[2];
			var rotAxisSpeed = 0.01;
			
			if(Math.abs(rotAxis)>0.1){
				this.keyDown("mousemove");
				var newmp = this.mousepos.x + rotAxisSpeed*rotAxis;
				if(newmp>0 && newmp<1){
					document.getElementById("output").innerHTML = "controller in.";
					this.mousepos.x = newmp;
				}
			}
			
		}else{
			this.controllerMoveSpeed = undefined;
			this.controllerIn = false;
		}
	}
	
	
}

class SpecialBox {
	constructor(from,to,speed){
		this.pos = {x:0,y:0,z:0};
		this.width = 1;
		this.height = 0.1;
		this.fromPos = from;
		this.toPos = to;
		this.speed = speed;
		this.timeOfFirstUpdate = 0;
	}
	
	IsInside(pos){
		if(this.pos.x<=pos.x&&this.pos.x+this.width>=pos.x){
			if(this.pos.y<=pos.y&&this.pos.y+this.width>=pos.y){
				if(this.pos.z<= pos.z &&  this.pos.z+this.height >= pos.z){
					return true;
				}	
			}
		}
		return false;
	}
	
	Update(){
		if(this.timeOfFirstUpdate == 0){
			this.timeOfFirstUpdate = Date.now();
		}
		var t = Date.now()-this.timeOfFirstUpdate;
		var p = (Math.sin(t*this.speed)+1)/2;
		var newPos = whereBetweenPoints(this.fromPos,this.toPos,p);
		var delta = {x:newPos.x-this.pos.x,y:newPos.y-this.pos.y,z:newPos.z-this.pos.z};
		
		this.vel = delta;
		this.pos = newPos;
	}
	SetUpBox(lineEq) {
		var thisbox = getIntersectionsThroughSquare(
			{ x: this.pos.x + this.width, y: this.pos.y },
			{ x: this.pos.x, y: this.pos.y + this.width },
			lineEq
		);
		
		if(thisbox){
			thisbox.color = "special";
			thisbox.height = this.height;
			thisbox.bottomPos = 1-this.pos.z;
			return thisbox;
		}
	}
}




function drawRectWithPoints(ctx, startx, starty, endx, endy) {
	ctx.fillRect(startx, starty, endx - startx, endy - starty);
}

function normaliseVector(vec) {
	var magnitude = pythag({ x: 0, y: 0 }, vec);
	vec.x /= magnitude;
	vec.y /= magnitude;
	return vec;
}

function pythag(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	return Math.sqrt(dx * dx + dy * dy);
}

function getLineEqFromThetaAndPos(pos, theta) {
	if (theta == 0) {
		theta = 0.00001;
	}
	
	var gradient = 1 / Math.tan(theta);
	var c = pos.y - gradient * pos.x;
	
	return {
		gradient: gradient,
		yintercept: c,
		calc: function(x) {
			return x * this.gradient + this.yintercept;
		},
		inverse: function(y) {
			return (y - this.yintercept) / this.gradient;
		}
	};
}

function getIntersectionsThroughSquare(topLeft, bottomRight, lineEq) {
	var intercepts = {
		top: { x: lineEq.inverse(topLeft.y), y: topLeft.y },
		bottom: { x: lineEq.inverse(bottomRight.y), y: bottomRight.y },
		left: { x: topLeft.x, y: lineEq.calc(topLeft.x) },
		right: { x: bottomRight.x, y: lineEq.calc(bottomRight.x) }
	};
	var perms = ["top", "bottom", "left", "right"];
	//sort by X (or y it doesnt matter)
	perms = perms.sort(function(a, b) {
		return intercepts[a].y - intercepts[b].y;
	});

	//doesnt pass through box (weird logic but it works)
	var groupings = [["top", "bottom"], ["left", "right"]];
	if (
		(perms[0] == groupings[0][0] && perms[1] == groupings[0][1]) ||
		(perms[0] == groupings[0][1] && perms[1] == groupings[0][0]) ||
		(perms[0] == groupings[1][0] && perms[1] == groupings[1][1]) ||
		(perms[0] == groupings[1][1] && perms[1] == groupings[1][0])
	) {
		return null;
	}

	//the middle 2 will be the box intercepts.
	var boxIntercepts = [intercepts[perms[1]], intercepts[perms[2]]];

	boxIntercepts[0].distance = pythag(
		{ x: 0, y: lineEq.yintercept },
		boxIntercepts[0]
	);
	boxIntercepts[1].distance = pythag(
		{ x: 0, y: lineEq.yintercept },
		boxIntercepts[1]
	);

	/*
		boxIntercepts.forEach(function(i){
			if(i.x<pos.x){
				i.distance*=-1;
			}
			if(lineEq.gradient<0){
				i.distance*=-1;
			}
		});
		*/

	boxIntercepts.sort(function(a, b) {
		return a.distance - b.distance;
	});

	return new Box(boxIntercepts[0], boxIntercepts[1]);
}

function whereBetweenPoints(a,b,p){
	var output = {x:0,y:0,z:0};
	var delta = {x:b.x-a.x,y:b.y-a.y,z:b.z-a.z};
	output.x = a.x+(delta.x*p);
	output.y = a.y+(delta.y*p);
	output.z = a.z+(delta.z*p);
	return output;
}

// document.getElementById("skipButton").addEventListener("click",function(){
// 	game.NextLevel();
// });
// document.getElementById("backButton").addEventListener("click",function(){
// 	game.NextLevel(-1);
// });

var Levels = getLevels();
var game = new Game();

game.Setup();
game.Update();
game.Draw();




setInterval(function() {
	game.Update();
	game.Draw();
}, 1000/60);


