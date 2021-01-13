const effects = require("everlasting extention/effects");

const naniteStation = extendContent(MendProjector, "nanite-station", {
});
naniteStation.health = 1950;
naniteStation.updateEffect = effects.naniteWave;
naniteStation.size = 2;
naniteStation.reloadTime = 50;
naniteStation.hasItems = true;
naniteStation.hasLiquids = false;
naniteStation.range = 120;
naniteStation.localizedName = "nanite-station";
naniteStation.description = "applies nanites to repair surrounding structures.";
naniteStation.buildVisibility = BuildVisibility.shown;
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
naniteStation.category = Category.effect;
