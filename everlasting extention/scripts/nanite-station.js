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

const naniteStation = extendContent(MendProjector, "nanite-station", {
});
naniteStation.health = 1950;
naniteStation.updateEffect = naniteWave;
naniteStation.size = 2;
naniteStation.reloadTime = 50;
naniteStation.hasItems = true;
naniteStation.hasLiquids = false;
naniteStation.range = 120;
naniteStation.localizedName = "nanite-station";
naniteStation.description = "applies nanites to repair surrounding structures.";
naniteStation.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
naniteStation.category = Category.defense;
