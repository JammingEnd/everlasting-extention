const effects = require("everlasting-extention/effects");

const naniteStation = extendContent(MendProjector, "nanite-station", {
    health = 1950,
    updateEffect = effects.naniteWave,
    size = 2,
    reloadTime = 50,
    hasItems = true,
   hasLiquids = false,
    healthPercent = 8,
    phaseBoost = 15,
    range = 120,
localizedName = "nanite-station",
description = "applies nanites to repair surrounding structures.",
buildVisibility = BuildVisibility.shown,
// dropler.requirements = ItemStack.with(Items.titanium, 560, Vars.content.getByName(ContentType.item, "everlasting-extention-microchip"), 200, Items.silicon, 400, Vars.content.getByName(ContentType.item, "everlasting-extention-platinum"), 160);
category = Category.effect,
});