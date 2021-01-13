/*
* Shortcuts for common draw methods used in effects.
* Lib by JerichoFletcher extended and modified xXZenGamingXx
*/
module.exports = {
	lineCircle(x, y, col, thickness, radius){
		Draw.color(col);
		Lines.stroke(thickness);
	    Lines.circle(x, y, radius);
	    Draw.color();
	    Lines.stroke(1);
	},
	lineCircleWCol(x, y, thickness, radius){
	    Lines.stroke(thickness);
	    Lines.circle(x, y, radius);
	    Lines.stroke(1);
	},
	fillCircle(x, y, col, alpha, radius){
	    Draw.color(col);
	    Draw.alpha(alpha);
	    Fill.circle(x, y, radius);
	    Draw.color();
	},
	fillCircleWCol(x, y, radius){
	    Fill.circle(x, y, radius);
	},
	fillPoly(x, y, col, alpha, sides, size, rot){
		Draw.color(col);
		Draw.alpha(alpha);
		Fill.poly(x, y, sides, size, rot);
		Draw.color();
	},
	fillPolyWCol(x, y, sides, size, rot){
		Fill.poly(x, y, sides, size, rot);
	},
	linePoly(x, y, col, alpha, thickness, sides, size, rot){
	  	Draw.color(col);
	  	Draw.alpha(alpha);
	  	Lines.stroke(thickness);
	  	Lines.poly(x, y, sides, size, rot);
	  	Lines.stroke(1);
	  	Draw.color();
	},
	linePolyWCol(x, y, thickness, sides, size, rot){
	  	Lines.stroke(thickness);
	  	Lines.poly(x, y, sides, size, rot);
	  	Lines.stroke(1);
	},
	swirl(x, y, color, alpha, thickness, radius, finion, angle){
	    Draw.color(color);
	    Draw.alpha(alpha);
	    Lines.stroke(thickness);
	    Lines.swirl(x, y, radius, finion, angle);
	    Lines.stroke(1);
	    Draw.color();
	},
	swirlWCol(x, y, thickness, radius, finion, angle){
	    Lines.stroke(thickness);
	    Lines.swirl(x, y, radius, finion, angle);
	    Lines.stroke(1);
	},
	splashline(x, y, color, thickness, length, id, amount, distance, rotation, cone){
	    Draw.color(color);
	    const hj = new Floatc2({get: function(a, b){
		    const ang = Mathf.angle(a, b);
		    Lines.stroke(thickness);
		    Lines.lineAngle(x + a, y + b, ang, length);
		    Lines.stroke(1);
	    }});
	    Angles.randLenVectors(id, amount, distance, rotation, cone, hj);
	    Draw.color();
	},
	splashCircle(x, y, color, radius, id, amount, distance, rotation, cone){
	    Draw.color(color);
	    const hj = new Floatc2({get: function(a, b){
		    const ang = Mathf.angle(a, b);
		    Fill.circle(x + a, y + b, radius);
	    }});
	    Angles.randLenVectors(id, amount, distance, rotation, cone, hj);
	    Draw.color();
	},
}