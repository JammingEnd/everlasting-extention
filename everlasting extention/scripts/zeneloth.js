const zeneloth = extend(Planet, "zeneloth", Planets.sun, 1, 0.5, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("c9ff94"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "zeneloth"
});
zeneloth.meshLoader = () => extend(HexMesh, zeneloth, 6, {});

// extend(sectorpreset, name, planet, tile pos)
const firstTouch = extend(SectorPreset, "first-touch", zeneloth, 6, {
    captureWave: 14,
    localizedName: "First touch",
    difficulty: 1,
    alwaysUnlocked: true //spawn tile
});



module.exports = {
    zeneloth: zeneloth,
    firstTouch: firstTouch
}