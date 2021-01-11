const telsaBullet = extend(LightningBulletType, {});
telsaBullet.sapStrength = 0.48;
telsaBullet.length = 55;
telsaBullet.damage = 5;
telsaBullet.shootEffect = Fx.lancerLaserChargeBegin;
telsaBullet.hitColor = telsaBullet.color = Color.valueOf("fbff9e");
telsaBullet.despawnEffect = Fx.railHit;
telsaBullet.width = 3;
telsaBullet.lifetime = 45;
telsaBullet.knockback = -1;
telsaBullet.collideAir = true;
telsaBullet.lightning = 3;//number of lightning
telsaBullet.lightningLength = 2;//length of lighning
telsaBullet.lightningLengthRand = 10;//a random number from 0 to 15 will be added to the length of the lightning, that is, randomization of the length
telsaBullet.lightningDamage = 5;//lightning damage
telsaBullet.lightningAngle = 8;//angle of direction of lightning relative to the angle of the bullet
telsaBullet.lightningCone = 10;//lightning angle randomization
telsaBullet.largeHit = true;
telsaBullet.lightColor = telsaBullet.lightningColor = Color.valueOf("fbff9e");

const voltcoil = extendContent(PowerTurret, "volcoil", {});
voltcoil.size = 2;
voltcoil.rotateSpeed = 15;
voltcoil.inaccuracy = 17;
voltcoil.shots = 12;
voltcoil.reloadTime = 5;
voltcoil.hasPower = true;
voltcoil.hasItems = false;
voltcoil.hasLiquids = true;
voltcoil.range = 80;
voltcoil.localizedName = "voltcoil";
voltcoil.description = "short range tesla armanent, fires quickly with relatively low damage.";
voltcoil.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
voltcoil.category = Category.turret;