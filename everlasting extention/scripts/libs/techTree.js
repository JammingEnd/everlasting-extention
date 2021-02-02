//communistic grab from pixelcraft

let zeneloth = require("zeneloth");
// let statuses = require("libs/statuses")
let fever = require("turrets/fever");
//Casually stals from [Gdeft/substructure]'s techtree.js

/**
 * Node for the research tech tree.
 *
 * @property {UnlockableContent}    parent          - The parent of the current node.
 * @property {UnlockableContent}    contentType     - The unlockable content that the current node contains.
 * @property {ItemStack}            requirements    - The research requirements required to unlock this node, will use the default if set to null.
 * @property {Seq}                  objectives      - A sequence of Objectives required to unlock this node. Can be null.
 */
const node = (parent, contentType, requirements, objectives) => {
    const tnode = new TechTree.TechNode(TechTree.get(parent), contentType, requirements != null ? requirements : contentType.researchRequirements());
    let used = new ObjectSet();

    if (objectives != null) {
        tnode.objectives.addAll(objectives);
    };
};

const cblock = name => Vars.content.getByName(ContentType.block, "everlasting extention" + name);

//pixelcraft only campaign
node(Blocks.conveyor, zeneloth.firstTouch, null, null);

node(zeneloth.firstTouch, zeneloth.loggery, null, Seq.with(new Objectives.SectorComplete(zeneloth.firstTouch), new Objectives.Research(cblock("basicTurret1"))));

node(zeneloth.loggery, zeneloth.sinkhole, null, Seq.with(new Objectives.SectorComplete(zeneloth.loggery), new Objectives.Research(cblock("bioDrill"))));

node(zeneloth.sinkhole, zeneloth.dessertWastelands, null, Seq.with(new Objectives.SectorComplete(zeneloth.sinkhole)));

node(zeneloth.loggery, zeneloth.frozenFalls, null, Seq.with(new Objectives.SectorComplete(zeneloth.sinkhole)));

node(zeneloth.frozenFalls, zeneloth.birthplace, null, Seq.with(new Objectives.SectorComplete(zeneloth.frozenFalls)));

//mixed campaign
node(zeneloth.firstTouch, zeneloth.rustedValley, null, Seq.with(new Objectives.SectorComplete(zeneloth.firstTouch)));

node(zeneloth.rustedValley, zeneloth.shatteredGlacier, null, Seq.with(new Objectives.SectorComplete(zeneloth.rustedValley)));

node(zeneloth.shatteredGlacier, zeneloth.crossroads, null, Seq.with(new Objectives.SectorComplete(zeneloth.shatteredGlacier)));

node(zeneloth.crossroads, zeneloth.dunescapeCrags, null, Seq.with(new Objectives.SectorComplete(zeneloth.crossroads), new Objectives.Research(cblock("flamethrower4")), new Objectives.Research(Blocks.foreshadow)));

//Blocks

//Bio Technology
//node(Blocks.conveyor, statuses.blackout, ItemStack.with(), null);
//node(cblock("flamethrower3"), cblock("flamethrower4"), null, Seq.with(new Objectives.SectorComplete(zeneloth.loggery)));
