const effects = require("everlasting-extention/effects");


const shotgunBasicBullet2 = extend(BasicBulletType, {});
shotgunBasicBullet2.despawnEffect = effects.shotgunHit;
shotgunBasicBullet2.hitEffect = shotgunBasicBullet2.despawnEffect;
shotgunBasicBullet2.backColor = Color.valueOf("bf8300");
shotgunBasicBullet2.width = 8;
shotgunBasicBullet2.height = 8;
shotgunBasicBullet2.shrinkY = 0.1;
shotgunBasicBullet2.shrinkX = 0.2;
shotgunBasicBullet2.spin = 0.05;
shotgunBasicBullet2.damage = 30;
shotgunBasicBullet2.speed = 3.6;
shotgunBasicBullet2.shootEffect = Fx.rocketSmokeLarge;
shotgunBasicBullet2.hitColor = Vars.mobile ? Color.valueOf("bf8300") : Color.valueOf("db9702");
shotgunBasicBullet2.lifetime = 80;
shotgunBasicBullet2.knockback = 2;


const breach = extendContent(ItemTurret, "breach", {
	init() {
		this.super$init();

		this.ammo(
			Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), shotgunBasicBullet2);
	}
});
breach.health = 1950;
breach.size = 4;
breach.rotateSpeed = 15;
breach.inaccuracy = 8;
breach.shots = 25;
breach.reloadTime = 15;
breach.hasItems = true;
breach.hasLiquids = true;
breach.range = 170;
breach.localizedName = "breach";
breach.description = "fires an automatic spray of shotgun bullets. fbi open up!";
breach.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
breach.category = Category.turret;