const effects = require("everlasting-extention/effects");

const sigmaChargeFx = new Effect(lifetime, e => {
	Draw.color(color.valueOf("00ddff"), color.valueOf("2fc0d6"), e.fin());
	const hj = new Floatc2({
		get: function (a, b) {
			const ang = Mathf.angle(a, b);
			let l = 2 * 0.01
			Lines.stroke(1.3);
			Lines.swirl(e.x, e.y, e.fout() * 2, l, ang * e.fout() * 1.5);
			Lines.stroke(1);
		}
	});
	Angles.randLenVectors(e.id, 1, 2, e.rotation, 360, hj);
	Draw.color();
});
return sigmaChargeFx;

const stunFx = new Effect(1, e => {
	Draw.color(color.valueOf("00ddff"), color.valueOf("2fc0d6"), e.fin());
	Lines.stroke(1);
	Lines.circle(e.x, e.y, 2 + e.fout() * 3);
	Draw.color();
	Lines.stroke(1);
});

const sigmaBullet = extend(BasicBulletType, {});
sigmaBullet.StatusEffect = unmoving;
unmoving.effect = stunFx;
unmoving.damage = 5;
sigmaBullet.despawnEffect = effects.sigmaHit;       //the effect
sigmaBullet.hitEffect = sigmaBullet.despawnEffect;
sigmaBullet.backColor = Color.clear;
sigmaBullet.width = 4;
sigmaBullet.height = 6;
sigmaBullet.shrinkY = 0.1;
sigmaBullet.shrinkX = 0.2;
sigmaBullet.spin = 0.05;
sigmaBullet.damage = 25;
sigmaBullet.speed = 100;
sigmaBullet.shootEffect = Fx.rocketSmokeLarge;
sigmaBullet.hitColor = Vars.mobile ? Color.valueOf("bf8300") : Color.valueOf("db9702");
sigmaBullet.lifetime = 40;
sigmaBullet.knockback = 0;

const sigma = extendContent(PowerTurret, "sigma", {});
sigma.shootType = telsaBullet2;
sigma.size = 5;
sigma.rotateSpeed = 15;
sigma.inaccuracy = 17;
sigma.shots = 1;
sigma.reloadTime = 4;
sigma.hasPower = true;
sigma.hasItems = false;
sigma.hasLiquids = true;
sigma.chargeTime = 120;
sigma.chargeEffect = sigmaChargeFx;
sigma.range = 300;
sigma.localizedName = "sigma";
sigma.description = "rains down a powerful lightningstrike from the skies, stunning enemies on hit.";
sigma.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
sigma.category = Category.turret;