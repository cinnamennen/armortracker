import { Ingredient } from "@/data/enum"

type IngredientData = { displayName: string; path?: string }

export const ingredientData: { [key in Ingredient]: IngredientData } = {
  [Ingredient.Acorn]: { displayName: "Acorn" },
  [Ingredient.AerocudaEyes]: { displayName: "Aerocuda Eyeball" },
  [Ingredient.AerocudaWing]: { displayName: "Aerocuda Wing" },
  [Ingredient.Amber]: { displayName: "Amber" },
  [Ingredient.BlackBokoblinHorn]: { displayName: "Black Bokoblin Horn" },
  [Ingredient.BlackHorriblinHorn]: { displayName: "Black Horriblin Horn" },
  [Ingredient.BlackLizalfosHorn]: { displayName: "Black Lizalfos Horn" },
  [Ingredient.BlackMoblinHorn]: { displayName: "Black Moblin Horn" },
  [Ingredient.BladedRhinoBeetle]: { displayName: "Bladed Rhino Beetle" },
  [Ingredient.BlueBokoblinHorn]: { displayName: "Blue Bokoblin Horn" },
  [Ingredient.BlueHorriblinHorn]: { displayName: "Blue Horriblin Horn" },
  [Ingredient.BlueLizalfosHorn]: { displayName: "Blue Lizalfos Horn" },
  [Ingredient.BlueLizalfosTail]: { displayName: "Blue Lizalfos Tail" },
  [Ingredient.BlueMoblinHorn]: { displayName: "Blue Moblin Horn" },
  [Ingredient.BlueNightshade]: { displayName: "Blue Nightshade" },
  [Ingredient.BlueManedLynelMaceHorn]: {
    displayName: "Blue-Maned Lynel Mace Horn",
  },
  [Ingredient.BlueManedLynelSaberHorn]: {
    displayName: "Blue-Maned Lynel Saber Horn",
  },
  [Ingredient.BlueWhiteFroxFang]: { displayName: "Blue-White Frox Fang" },
  [Ingredient.BokoblinFang]: { displayName: "Bokoblin Fang" },
  [Ingredient.BokoblinGuts]: { displayName: "Bokoblin Guts" },
  [Ingredient.BokoblinHorn]: { displayName: "Bokoblin Horn" },
  [Ingredient.BossBokoblinHorn]: { displayName: "Boss Bokoblin Horn" },
  [Ingredient.BrightCaps]: { displayName: "Brightcap" },
  [Ingredient.BrightbloomSeeds]: { displayName: "Brightbloom Seed" },
  [Ingredient.CaptainConstructIHorn]: {
    displayName: "Captain Construct I Horn",
  },
  [Ingredient.CaptainConstructIIHorn]: {
    displayName: "Captain Construct II Horn",
  },
  [Ingredient.CaptainConstructIIIHorn]: {
    displayName: "Captain Construct III Horn",
  },
  [Ingredient.ChillfinTrout]: { displayName: "Chillfin Trout" },
  [Ingredient.Chillshroom]: { displayName: "Chillshroom" },
  [Ingredient.ChuchuJelly]: { displayName: "Chuchu Jelly" },
  [Ingredient.ColdDarner]: { displayName: "Cold Darner" },
  [Ingredient.CoolSafflina]: { displayName: "Cool Safflina" },
  [Ingredient.CourserBeeHoney]: { displayName: "Courser Bee Honey" },
  [Ingredient.DarkClump]: { displayName: "Dark Clump" },
  [Ingredient.Dazzlefruit]: { displayName: "Dazzlefruit" },
  [Ingredient.DeepFirefly]: { displayName: "Deep Firefly" },
  [Ingredient.Diamond]: { displayName: "Diamond" },
  [Ingredient.DinraalsClaw]: { displayName: "Dinraal's Claw" },
  [Ingredient.DinraalsHorn]: { displayName: "Dinraal's Horn" },
  [Ingredient.DinraalsScale]: { displayName: "Dinraal's Scale" },
  [Ingredient.ElectricKeeseWing]: { displayName: "Electric Keese Wing" },
  [Ingredient.ElectricLizalfosHorn]: { displayName: "Electric Lizalfos Horn" },
  [Ingredient.ElectricLizalfosTail]: { displayName: "Electric Lizalfos Tail" },
  [Ingredient.ElectricSafflina]: { displayName: "Electric Safflina" },
  [Ingredient.EnergeticRhinoBeetle]: { displayName: "Energetic Rhino Beetle" },
  [Ingredient.FaroshsClaw]: { displayName: "Farosh's Claw" },
  [Ingredient.FaroshsHorn]: { displayName: "Farosh's Horn" },
  [Ingredient.FaroshsScale]: { displayName: "Farosh's Scale" },
  [Ingredient.FireFruit]: { displayName: "Fire Fruit" },
  [Ingredient.FireKeeseWing]: { displayName: "Fire Keese Wing" },
  [Ingredient.FireLikeStone]: { displayName: "Fire Like Stone" },
  [Ingredient.FireBreathLizalfosHorn]: {
    displayName: "Fire-Breath Lizalfos Horn",
  },
  [Ingredient.FireBreathLizalfosTail]: {
    displayName: "Fire-Breath Lizalfos Tail",
  },
  [Ingredient.FireproofLizard]: { displayName: "Fireproof Lizard" },
  [Ingredient.Flint]: { displayName: "Flint" },
  [Ingredient.FroxFang]: { displayName: "Frox Fang" },
  [Ingredient.FroxFingernail]: { displayName: "Frox Fingernail" },
  [Ingredient.FroxGuts]: { displayName: "Frox Guts" },
  [Ingredient.GiantBrightbloomSeed]: { displayName: "Giant Brightbloom Seed" },
  [Ingredient.GibdoBone]: { displayName: "Gibdo Bone" },
  [Ingredient.GibdoGuts]: { displayName: "Gibdo Guts" },
  [Ingredient.GibdoWing]: { displayName: "Gibdo Wing" },
  [Ingredient.GleeokFlameHorn]: { displayName: "Gleeok Flame Horn" },
  [Ingredient.GleeokFrostHorn]: { displayName: "Gleeok Frost Horn" },
  [Ingredient.GleeokWing]: { displayName: "Gleeok Wing" },
  [Ingredient.GlowingCaveFish]: { displayName: "Glowing Cave Fish" },
  [Ingredient.HeartyBass]: { displayName: "Hearty Bass" },
  [Ingredient.HightailLizard]: { displayName: "Hightail Lizard" },
  [Ingredient.HinoxGuts]: { displayName: "Hinox Guts" },
  [Ingredient.HinoxToenail]: { displayName: "Hinox Toenail" },
  [Ingredient.HinoxTooth]: { displayName: "Hinox Tooth" },
  [Ingredient.HorriblinGuts]: { displayName: "Horriblin Guts" },
  [Ingredient.HorriblinHorn]: { displayName: "Horriblin Horn" },
  [Ingredient.HotFootedFrog]: { displayName: "Hot-Footed Frog" },
  [Ingredient.HyruleBass]: { displayName: "Hyrule Bass" },
  [Ingredient.IceFruit]: { displayName: "Ice Fruit" },
  [Ingredient.IceKeeseWing]: { displayName: "Ice Keese Wing" },
  [Ingredient.IceLikeStone]: { displayName: "Ice Like Stone" },
  [Ingredient.IceBreathLizalfosHorn]: {
    displayName: "Ice-Breath Lizalfos Horn",
  },
  [Ingredient.IceBreathLizalfosTail]: {
    displayName: "Ice-Breath Lizalfos Tail",
  },
  [Ingredient.KeeseEyeball]: { displayName: "Keese Eyeball" },
  [Ingredient.KeeseWing]: { displayName: "Keese Wing" },
  [Ingredient.LargeZonaiCharge]: { displayName: "Large Zonai Charge" },
  [Ingredient.LargeZonaite]: { displayName: "Large Zonaite" },
  [Ingredient.LightDragonHorn]: { displayName: "Light Dragon's Horn" },
  [Ingredient.LightDragonsScale]: { displayName: "Light Dragon's Scale" },
  [Ingredient.LightDragonsTalon]: { displayName: "Light Dragon's Talon" },
  [Ingredient.LizalfosHorn]: { displayName: "Lizalfos Horn" },
  [Ingredient.LizalfosTail]: { displayName: "Lizalfos Tail" },
  [Ingredient.LizalfosTalon]: { displayName: "Lizalfos Talon" },
  [Ingredient.LuminousStone]: { displayName: "Luminous Stone" },
  [Ingredient.LynelGuts]: { displayName: "Lynel Guts" },
  [Ingredient.LynelMaceHorn]: { displayName: "Lynel Mace Horn" },
  [Ingredient.LynelSaberHorn]: { displayName: "Lynel Saber Horn" },
  [Ingredient.MightyThistle]: { displayName: "Mighty Thistle" },
  [Ingredient.MoblinFang]: { displayName: "Moblin Fang" },
  [Ingredient.MoblinGuts]: { displayName: "Moblin Guts" },
  [Ingredient.MoblinHorn]: { displayName: "Moblin Horn" },
  [Ingredient.MoldugaFin]: { displayName: "Molduga Fin" },
  [Ingredient.NaydrasClaw]: { displayName: "Naydra's Claw" },
  [Ingredient.NaydrasHorn]: { displayName: "Naydra's Horn" },
  [Ingredient.NaydrasScale]: { displayName: "Naydra's Scale" },
  [Ingredient.ObsidianFroxFang]: { displayName: "Obsidian Frox Fang" },
  [Ingredient.OctoBalloon]: { displayName: "Octo Balloon" },
  [Ingredient.OctorokEyeball]: { displayName: "Octorok Eyeball" },
  [Ingredient.OctorokTentacle]: { displayName: "Octorok Tentacle" },
  [Ingredient.Opal]: { displayName: "Opal" },
  [Ingredient.Puffshroom]: { displayName: "Puffshroom" },
  [Ingredient.RazorclawCrab]: { displayName: "Razorclaw Crab" },
  [Ingredient.Razorshroom]: { displayName: "Razorshroom" },
  [Ingredient.RedChuchuJelly]: { displayName: "Red Chuchu Jelly" },
  [Ingredient.Ruby]: { displayName: "Ruby" },
  [Ingredient.Rushroom]: { displayName: "Rushroom" },
  [Ingredient.Sapphire]: { displayName: "Sapphire" },
  [Ingredient.ShardofDinraalsFang]: { displayName: "Shard of Dinraal's Fang" },
  [Ingredient.ShardofDinraalsSpike]: {
    displayName: "Shard of Dinraal's Spike",
  },
  [Ingredient.ShardofFaroshsFang]: { displayName: "Shard of Farosh's Fang" },
  [Ingredient.ShardofFaroshsSpike]: { displayName: "Shard of Farosh's Spike" },
  [Ingredient.ShardofLightDragonsFang]: {
    displayName: "Shard of Light Dragon's Fang",
  },
  [Ingredient.ShardofLightDragonsSpike]: {
    displayName: "Shard of Light Dragon's Spike",
  },
  [Ingredient.ShardofNaydrasFang]: { displayName: "Shard of Naydra's Fang" },
  [Ingredient.ShardofNaydrasSpike]: { displayName: "Shard of Naydra's Spike" },
  [Ingredient.ShockFruit]: { displayName: "Shock Fruit" },
  [Ingredient.SilentPrincess]: { displayName: "Silent Princess" },
  [Ingredient.SilentShroom]: { displayName: "Silent Shroom" },
  [Ingredient.SilverBokoblinHorn]: { displayName: "Silver Bokoblin Horn" },
  [Ingredient.SizzlefinTrout]: { displayName: "Sizzlefin Trout" },
  [Ingredient.SmotherwingButterfly]: { displayName: "Smotherwing Butterfly" },
  [Ingredient.SneakyRiverSnail]: { displayName: "Sneaky River Snail" },
  [Ingredient.SoldierConstructHorn]: { displayName: "Soldier Construct Horn" },
  [Ingredient.SoldierConstructIIHorn]: {
    displayName: "Soldier Construct II Horn",
  },
  [Ingredient.SoldierConstructIIIHorn]: {
    displayName: "Soldier Construct III Horn",
  },
  [Ingredient.SoldierConstructIVHorn]: {
    displayName: "Soldier Construct IV Horn",
  },
  [Ingredient.StarFragment]: { displayName: "Star Fragment" },
  [Ingredient.StealthfinTrout]: { displayName: "Stealthfin Trout" },
  [Ingredient.StickyFrog]: { displayName: "Sticky Frog" },
  [Ingredient.StickyLizard]: { displayName: "Sticky Lizard" },
  [Ingredient.SummerwingButterfly]: { displayName: "Summerwing Butterfly" },
  [Ingredient.Sundelion]: { displayName: "Sundelion" },
  [Ingredient.SunsetFirefly]: { displayName: "Sunset Firefly" },
  [Ingredient.Sunshroom]: { displayName: "Sunshroom" },
  [Ingredient.SwiftCarrot]: { displayName: "Swift Carrot" },
  [Ingredient.SwiftViolet]: { displayName: "Swift Violet" },
  [Ingredient.ThunderwingButterfly]: { displayName: "Thunderwing Butterfly" },
  [Ingredient.Topaz]: { displayName: "Topaz" },
  [Ingredient.Voltfruit]: { displayName: "Voltfruit" },
  [Ingredient.WarmDarner]: { displayName: "Warm Darner" },
  [Ingredient.WarmSafflina]: { displayName: "Warm Safflina" },
  [Ingredient.WhiteChuchuJelly]: { displayName: "White Chuchu Jelly" },
  [Ingredient.WhiteManedLynelMaceHorn]: {
    displayName: "White-Maned Lynel Mace Horn",
  },
  [Ingredient.WhiteManedLynelSaberHorn]: {
    displayName: "White-Maned Lynel Saber Horn",
  },
  [Ingredient.WinterwingButterfly]: { displayName: "Winterwing Butterfly" },
  [Ingredient.YellowChuchuJelly]: { displayName: "Yellow Chuchu Jelly" },
  [Ingredient.Zapshroom]: { displayName: "Zapshroom" },
  [Ingredient.Zonaite]: { displayName: "Zonaite" },
  [Ingredient.MoldugaJaw]: { displayName: "Molduga Jaw" },
  [Ingredient.BlueBossBokoblinHorn]: {
    displayName: "Blue Boss Bokoblin Horn",
  },
  [Ingredient.BossBokoblinFang]: { displayName: "Boss Bokoblin Fang" },
  [Ingredient.BlackBossBokoblinHorn]: {
    displayName: "Black Boss Bokoblin Horn",
  },
  [Ingredient.SilverBossBokoblinHorn]: {
    displayName: "Silver Boss Bokoblin Horn",
  },
  [Ingredient.MoldugaGuts]: { displayName: "Molduga Guts" },
  [Ingredient.GleeokGuts]: { displayName: "Gleeok Guts" },
  [Ingredient.ShockLikeStone]: { displayName: "Shock Like Stone" },
  [Ingredient.ElectricDarner]: { displayName: "Electric Darner" },
  [Ingredient.VoltfinTrout]: { displayName: "Voltfin Trout" },
  [Ingredient.GleeokThunderHorn]: { displayName: "Gleeok Thunder Horn" },
  [Ingredient.LynelHoof]: { displayName: "Lynel Hoof" },
  [Ingredient.BlackHinoxHorn]: { displayName: "Black Hinox Horn" },
  [Ingredient.MightyBananas]: { displayName: "Mighty Bananas" },
  [Ingredient.HeartyLizard]: { displayName: "Hearty Lizard" },
  [Ingredient.SilverMoblinHorn]: { displayName: "Silver Moblin Horn" },
  [Ingredient.SilverLizalfosHorn]: { displayName: "Silver Lizalfos Horn" },
  [Ingredient.SilverLynelSaberHorn]: {
    displayName: "Silver Lynel Saber Horn",
  },
  [Ingredient.SilverLynelMaceHorn]: { displayName: "Silver Lynel Mace Horn" },
}
