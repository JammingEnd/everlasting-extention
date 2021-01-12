const telsaBullet = extend(LightningBulletType, {});
telsaBullet.sapStrength = 0.48;
telsaBullet.length = 55;
telsaBullet.damage = 1;
telsaBullet.shootEffect = Fx.sapExplosion;
telsaBullet.hitColor = telsaBullet.color = Color.valueOf("a245d0");
telsaBullet.despawnEffect = Fx.railHit;
telsaBullet.width = 3;
telsaBullet.lifetime = 45;
telsaBullet.knockback = -1;
telsaBullet.collideAir = true;
telsaBullet.lightning = 3;//number of lightning
telsaBullet.lightningLength = 2;//length of lighning
telsaBullet.lightningLengthRand = 10;//a random number from 0 to 15 will be added to the length of the lightning, that is, randomization of the length
telsaBullet.lightningDamage = 2;//lightning damage
telsaBullet.lightningAngle = 8;//angle of direction of lightning relative to the angle of the bullet
telsaBullet.lightningCone = 10;//lightning angle randomization
telsaBullet.largeHit = true;
telsaBullet.lightColor = telsaBullet.lightningColor = Color.valueOf("8432ac");

const volliage = extendContent(PowerTurret, "volliage", {});
volliage.shootType = telsaBullet;
volliage.size = 2;
volliage.rotateSpeed = 15;
volliage.inaccuracy = 17;
volliage.shots = 12;
volliage.reloadTime = 5;
volliage.hasPower = true;
volliage.hasItems = false;
volliage.hasLiquids = false;
volliage.range = 80;
volliage.localizedName = "volliage";
volliage.description = "short range tesla armanent, fires quickly with relatively low damage.";
volliage.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
volliage.category = Category.turret;