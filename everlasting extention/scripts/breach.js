// JavaScript source code
const shotgunHit = new Effect(35, e => {
	Draw.color(Color.valueOf("91bcff"), Color.valueOf("6589bf"), e.fin());
	Draw.alpha(e.fout());
	Fill.circle(e.x, e.y, e.fout() * 15.0);

	draw.color(valueOf("d9d218"), color.valueOf("f7a32d"), e.fin());
	stroke(2 * e.fout());
	lines.line(e.x, e.y, mathf.random(x, y), e.fout());
});

const shotgunBasicBullet2 = extend(BasicBulletType, {});
shotgunBasicBullet2.despawnEffect = shotgunHit;
shotgunBasicBullet2.hitEffect = droplerBasicBullet.despawnEffect;
shotgunBasicBullet2.backColor = Color.valueOf("bf8300");
shotgunBasicBullet2.width = 4;
shotgunBasicBullet2.height = 6;
shotgunBasicBullet2.shrinkY = 0.1;
shotgunBasicBullet2.shrinkX = 0.2;
shotgunBasicBullet2.spin = 0.2;
shotgunBasicBullet2.damage = 20;
shotgunBasicBullet2.speed = 3.6;
shotgunBasicBullet2.shootEffect = Fx.rocketSmokeLarge;
shotgunBasicBullet2.hitColor = Vars.mobile ? Color.valueOf("bf8300") : Color.valueOf("db9702");
shotgunBasicBullet2.lifetime = 40;
shotgunBasicBullet2.knockback = 0;


const breach = extendContent(ItemTurret, "sawburst", {
	init() {
		this.super$init();

		this.ammo(
			Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), shotgunBasicBullet);
	}
});
breach.health = 1950;
breach.size = 2;
breach.rotateSpeed = 15;
breach.inaccuracy = 17;
breach.shots = 12;
breach.reloadTime = 20;
breach.hasItems = true;
breach.hasLiquids = true;
breach.range = 120;
breach.localizedName = "breach";
breach.description = "fires a a burst of shotgun bullets. fbi open up!";
breach.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
sawburst.category = Category.turret;