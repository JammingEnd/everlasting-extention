
	const shotgunHit = new Effect(35, e => {
		Draw.color(Color.valueOf("f7c52d"), Color.valueOf("bf9002"), e.fin());
		Draw.alpha(e.fout());
		Fill.circle(e.x, e.y, e.fout() * 1.2);

		Draw.color(Color.valueOf("d9d218"), Color.valueOf("f7a32d"), e.fin());
		const hj = new Floatc2({
			get: function (x, y) {
				const ang = Mathf.angle(x, y);
				Lines.stroke(2 * e.fout());
				Lines.lineAngle(e.x + x, e.y + y, ang, e.fout());
				Lines.stroke(1);
			}
		});
		Angles.randLenVectors(e.id, 4, e.finpow() * 2, e.rotation, 180, hj);
		Draw.color();
	});
	const naniteWave = new Effect(10, e => {
			Draw.color(color.valueOf("b03131"), color.valueOf("451717"), e.fin());
			Lines.stroke(thickness);
			Lines.circle(e.x, e.y, radius);
			Draw.color();
			Lines.stroke(1);
		});
	const synthHit = new Effect(2, e => {
			Draw.color(valueOf("8432ac"), color.valueOf("a245d0"), e.fin());
			const hj = new Floatc2({
				get: function (x, y) {
					Fill.circle(e.x + x, e.y + y, 4);
				}
			});
			Angles.randLenVectors(e.id, 3, e.finpow() * 2, e.rotation, 320, hj);
		});
	const droplerAoe = new Effect(35, e => {
			Draw.color(Color.valueOf("91bcff"), Color.valueOf("6589bf"), e.fin());
			Draw.alpha(e.fout());
			Fill.circle(e.x, e.y, e.fout() * 30.0);
	});
const sigmaHit = new Effect(50, e => {
	Draw.color(Color.valueOf("f7c52d"), Color.valueOf("bf9002"), e.fin());
	Draw.alpha(e.fout());
	Fill.circle(e.x, e.y, e.fout() * 2);

	Draw.color(Color.valueOf("35d4c1"), Color.valueOf("169aa8"), e.fin());
	const hj = new Floatc2({
		get: function (x, y) {
			const ang = Mathf.angle(x, y);
			Lines.stroke(3 * e.fout());
			Lines.lineAngle(e.x + x, e.y + y, ang, e.fout());
			Lines.stroke(0.5);
		}
	});
	Angles.randLenVectors(e.id, 4, e.finpow() * 2, e.rotation, 180, hj);
	Draw.color();

});

/*const stun = extend(StatusEffect, "stun", {
	update(unit, time) {
		this.super$update(unit, time);
		let unitHpCurrent = unit.health / unit.maxHealth;
		if (unitHpCurrent > 0.5) {
			unit.unmoving = true;
			setTimeout(500);
			unit.unmoving = false;
		}
		else if (unitHpCurrent < 0.05) {
			unit.remove();
			unit.destroy();
			unit.damageContinuousPierce(unit.maxHealth);
		}
	}
});
stun.damage = 0;
stun.effect = stunFx;
*/

module.exports = {
	shotgunHit: shotgunHit,
	naniteWave: naniteWave,
	synthHit: synthHit,
	droplerAoe: droplerAoe,
	sigmaHit: sigmaHit
}