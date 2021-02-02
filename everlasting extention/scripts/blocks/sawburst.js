const effects = require("everlasting-extention/effects");

const shotgunBasicBullet = extend(BasicBulletType, {});
shotgunBasicBullet.despawnEffect = effects.shotgunHit;       //the effect
shotgunBasicBullet.hitEffect = shotgunBasicBullet.despawnEffect;
shotgunBasicBullet.backColor = Color.valueOf("bf8300");
shotgunBasicBullet.width = 4;
shotgunBasicBullet.height = 6;
shotgunBasicBullet.shrinkY = 0.1;
shotgunBasicBullet.shrinkX = 0.2;
shotgunBasicBullet.spin = 0.05;
shotgunBasicBullet.damage = 25;
shotgunBasicBullet.speed = 3.6;
shotgunBasicBullet.shootEffect = Fx.rocketSmokeLarge;
shotgunBasicBullet.hitColor = Vars.mobile ? Color.valueOf("bf8300") : Color.valueOf("db9702");
shotgunBasicBullet.lifetime = 40;
shotgunBasicBullet.knockback = 0;


const sawburst = extendContent(ItemTurret, "sawburst", {  //type and name
	init() {                             //in it <_<
		this.super$init();               //something >_>

		this.ammo(
			Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), shotgunBasicBullet);  //ammo and bulletType allocation 
	}
});
sawburst.health = 1950;                 //your normal json stats
sawburst.size = 2;
sawburst.rotateSpeed = 15;
sawburst.inaccuracy = 17;
sawburst.shots = 17;
sawburst.reloadTime = 50;
sawburst.hasPower = false      //i define the amount of power used in a hjson 
sawburst.hasItems = true;
sawburst.hasLiquids = true;
sawburst.range = 120;
sawburst.localizedName = "sawburst";                   //the same name 
sawburst.description = "short range shotgun turrect, fires alot of bullets at once.";
sawburst.buildVisibility = BuildVisibility.shown;     //shows visibilty when building 
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
//requirements can be, and i advice to put it in  a hjson
sawburst.category = Category.turret;
