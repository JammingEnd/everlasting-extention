const droplerAoe = new Effect(35, e => {
	Draw.color(Color.valueOf("91bcff"), Color.valueOf("6589bf"), e.fin());
	Draw.alpha(e.fout());
	Fill.circle(e.x, e.y, e.fout() * 30.0);
});


const droplerBasicBullet = extend(BasicBulletType, {});
droplerBasicBullet.despawnEffect = droplerAoe;
droplerBasicBullet.hitEffect = droplerBasicBullet.despawnEffect;
droplerBasicBullet.splashDamageRadius = 28; //1 tile is 8
droplerBasicBullet.splashDamage = 40;
droplerBasicBullet.backColor = Color.valueOf("c2cc37");
droplerBasicBullet.width = 14;
droplerBasicBullet.height = 14;
droplerBasicBullet.shrinkY = 0.1;
droplerBasicBullet.shrinkX = 0.2;
droplerBasicBullet.spin = 0;
droplerBasicBullet.damage = 102;
droplerBasicBullet.speed = 4.6;
droplerBasicBullet.shootEffect = Fx.flakExplosion;
droplerBasicBullet.hitColor = Vars.mobile ? Color.valueOf("030e1f") : Color.valueOf("6294e3");
droplerBasicBullet.lifetime = 70;
droplerBasicBullet.knockback = 1;


const dropler = extendContent(ItemTurret, "dropler", {
	init() {
		this.super$init();

		this.ammo(
			Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), droplerBasicBullet);
		}
});
dropler.health = 2890;
dropler.size = 3;
dropler.rotateSpeed = 3.5;
dropler.shots = 1;
dropler.reloadTime = 20;
dropler.hasItems = true;
dropler.hasLiquids = true;
dropler.range = 310;
dropler.localizedName = "dropler";
dropler.description = "mid range turret with powerful AoE ammunition.";
dropler.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
dropler.category = Category.turret;
/*dropler.ammo.put(
	Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), droplerBasicBullet,
); */