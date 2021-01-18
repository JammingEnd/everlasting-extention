const effects = require("everlasting-extention/effects");

const stun = extend(StatusEffect, "stun", {
	update(unit, time) {
		this.super$update(unit, 3);
		let unitHpCurrent = unit.health / unit.maxHealth;
		if(unitHpCurrent > 0.5) {
			unit.speed = 0;
		}
		else if (unitHpCurrent < 0.05) {
			unit.remove();
			unit.destroy();
			unit.damageContinuousPierce(unit.maxHealth);
		}

	},
	update(unit) {
		this.super$update(unit);
		unit.speed = 100;
	},
});


const stunFx = new Effect(1, e => {
	Draw.color(color.valueOf(""), color.valueOf(""), e.fin());
	Lines.stroke(1);
	Lines.circle(e.x, e.y, 2 + e.fout() * 3);
	Draw.color();
	Lines.stroke(1);
});
stun.damage = 0;
stun.effect = stunFx;

const sigmaBullet = extend(BasicBulletType, {});
sigmaBullet.StatusEffect = stun;
sigmaBullet.despawnEffect = effects.shotgunHit;       //the effect
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
sigma.chargeTime = ;
sigma.range = 300;
sigma.localizedName = "sigma";
sigma.description = "rains down a powerful lightningstrike from the skies, stunning enemies on hit.";
sigma.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
sigma.category = Category.turret;