import { Ingredient } from "@/data/enum"

type IngredientData = { displayName: string; path?: string; id: Ingredient }

export const ingredientData: { [key in Ingredient]: IngredientData } = {
  [Ingredient.Acorn]: { displayName: "Acorn", id: Ingredient.Acorn },
  [Ingredient.AerocudaEyes]: {
    displayName: "Aerocuda Eyeball",
    id: Ingredient.AerocudaEyes,
  },
  [Ingredient.AerocudaWing]: {
    displayName: "Aerocuda Wing",
    id: Ingredient.AerocudaWing,
  },
  [Ingredient.Amber]: { displayName: "Amber", id: Ingredient.Amber },
  [Ingredient.BlackBokoblinHorn]: {
    displayName: "Black Bokoblin Horn",
    id: Ingredient.BlackBokoblinHorn,
  },
  [Ingredient.BlackHorriblinHorn]: {
    displayName: "Black Horriblin Horn",
    id: Ingredient.BlackHorriblinHorn,
  },
  [Ingredient.BlackLizalfosHorn]: {
    displayName: "Black Lizalfos Horn",
    id: Ingredient.BlackLizalfosHorn,
  },
  [Ingredient.BlackMoblinHorn]: {
    displayName: "Black Moblin Horn",
    id: Ingredient.BlackMoblinHorn,
  },
  [Ingredient.BladedRhinoBeetle]: {
    displayName: "Bladed Rhino Beetle",
    id: Ingredient.BladedRhinoBeetle,
  },
  [Ingredient.BlueBokoblinHorn]: {
    displayName: "Blue Bokoblin Horn",
    id: Ingredient.BlueBokoblinHorn,
  },
  [Ingredient.BlueHorriblinHorn]: {
    displayName: "Blue Horriblin Horn",
    id: Ingredient.BlueHorriblinHorn,
  },
  [Ingredient.BlueLizalfosHorn]: {
    displayName: "Blue Lizalfos Horn",
    id: Ingredient.BlueLizalfosHorn,
  },
  [Ingredient.BlueLizalfosTail]: {
    displayName: "Blue Lizalfos Tail",
    id: Ingredient.BlueLizalfosTail,
  },
  [Ingredient.BlueMoblinHorn]: {
    displayName: "Blue Moblin Horn",
    id: Ingredient.BlueMoblinHorn,
  },
  [Ingredient.BlueNightshade]: {
    displayName: "Blue Nightshade",
    id: Ingredient.BlueNightshade,
  },
  [Ingredient.BlueManedLynelMaceHorn]: {
    displayName: "Blue-Maned Lynel Mace Horn",
    id: Ingredient.BlueManedLynelMaceHorn,
  },
  [Ingredient.BlueManedLynelSaberHorn]: {
    displayName: "Blue-Maned Lynel Saber Horn",
    id: Ingredient.BlueManedLynelSaberHorn,
  },
  [Ingredient.BlueWhiteFroxFang]: {
    displayName: "Blue-White Frox Fang",
    id: Ingredient.BlueWhiteFroxFang,
  },
  [Ingredient.BokoblinFang]: {
    displayName: "Bokoblin Fang",
    id: Ingredient.BokoblinFang,
  },
  [Ingredient.BokoblinGuts]: {
    displayName: "Bokoblin Guts",
    id: Ingredient.BokoblinGuts,
  },
  [Ingredient.BokoblinHorn]: {
    displayName: "Bokoblin Horn",
    id: Ingredient.BokoblinHorn,
  },
  [Ingredient.BossBokoblinHorn]: {
    displayName: "Boss Bokoblin Horn",
    id: Ingredient.BossBokoblinHorn,
  },
  [Ingredient.BrightCaps]: {
    displayName: "Brightcap",
    id: Ingredient.BrightCaps,
  },
  [Ingredient.BrightbloomSeeds]: {
    displayName: "Brightbloom Seed",
    id: Ingredient.BrightbloomSeeds,
  },
  [Ingredient.CaptainConstructIHorn]: {
    displayName: "Captain Construct I Horn",
    id: Ingredient.CaptainConstructIHorn,
  },
  [Ingredient.CaptainConstructIIHorn]: {
    displayName: "Captain Construct II Horn",
    id: Ingredient.CaptainConstructIIHorn,
  },
  [Ingredient.CaptainConstructIIIHorn]: {
    displayName: "Captain Construct III Horn",
    id: Ingredient.CaptainConstructIIIHorn,
  },
  [Ingredient.ChillfinTrout]: {
    displayName: "Chillfin Trout",
    id: Ingredient.ChillfinTrout,
  },
  [Ingredient.Chillshroom]: {
    displayName: "Chillshroom",
    id: Ingredient.Chillshroom,
  },
  [Ingredient.ChuchuJelly]: {
    displayName: "Chuchu Jelly",
    id: Ingredient.ChuchuJelly,
  },
  [Ingredient.ColdDarner]: {
    displayName: "Cold Darner",
    id: Ingredient.ColdDarner,
  },
  [Ingredient.CoolSafflina]: {
    displayName: "Cool Safflina",
    id: Ingredient.CoolSafflina,
  },
  [Ingredient.CourserBeeHoney]: {
    displayName: "Courser Bee Honey",
    id: Ingredient.CourserBeeHoney,
  },
  [Ingredient.DarkClump]: {
    displayName: "Dark Clump",
    id: Ingredient.DarkClump,
  },
  [Ingredient.Dazzlefruit]: {
    displayName: "Dazzlefruit",
    id: Ingredient.Dazzlefruit,
  },
  [Ingredient.DeepFirefly]: {
    displayName: "Deep Firefly",
    id: Ingredient.DeepFirefly,
  },
  [Ingredient.Diamond]: { displayName: "Diamond", id: Ingredient.Diamond },
  [Ingredient.DinraalsClaw]: {
    displayName: "Dinraal's Claw",
    id: Ingredient.DinraalsClaw,
  },
  [Ingredient.DinraalsHorn]: {
    displayName: "Dinraal's Horn",
    id: Ingredient.DinraalsHorn,
  },
  [Ingredient.DinraalsScale]: {
    displayName: "Dinraal's Scale",
    id: Ingredient.DinraalsScale,
  },
  [Ingredient.ElectricKeeseWing]: {
    displayName: "Electric Keese Wing",
    id: Ingredient.ElectricKeeseWing,
  },
  [Ingredient.ElectricLizalfosHorn]: {
    displayName: "Electric Lizalfos Horn",
    id: Ingredient.ElectricLizalfosHorn,
  },
  [Ingredient.ElectricLizalfosTail]: {
    displayName: "Electric Lizalfos Tail",
    id: Ingredient.ElectricLizalfosTail,
  },
  [Ingredient.ElectricSafflina]: {
    displayName: "Electric Safflina",
    id: Ingredient.ElectricSafflina,
  },
  [Ingredient.EnergeticRhinoBeetle]: {
    displayName: "Energetic Rhino Beetle",
    id: Ingredient.EnergeticRhinoBeetle,
  },
  [Ingredient.FaroshsClaw]: {
    displayName: "Farosh's Claw",
    id: Ingredient.FaroshsClaw,
  },
  [Ingredient.FaroshsHorn]: {
    displayName: "Farosh's Horn",
    id: Ingredient.FaroshsHorn,
  },
  [Ingredient.FaroshsScale]: {
    displayName: "Farosh's Scale",
    id: Ingredient.FaroshsScale,
  },
  [Ingredient.FireFruit]: {
    displayName: "Fire Fruit",
    id: Ingredient.FireFruit,
  },
  [Ingredient.FireKeeseWing]: {
    displayName: "Fire Keese Wing",
    id: Ingredient.FireKeeseWing,
  },
  [Ingredient.FireLikeStone]: {
    displayName: "Fire Like Stone",
    id: Ingredient.FireLikeStone,
  },
  [Ingredient.FireBreathLizalfosHorn]: {
    displayName: "Fire-Breath Lizalfos Horn",
    id: Ingredient.FireBreathLizalfosHorn,
  },
  [Ingredient.FireBreathLizalfosTail]: {
    displayName: "Fire-Breath Lizalfos Tail",
    id: Ingredient.FireBreathLizalfosTail,
  },
  [Ingredient.FireproofLizard]: {
    displayName: "Fireproof Lizard",
    id: Ingredient.FireproofLizard,
  },
  [Ingredient.Flint]: { displayName: "Flint", id: Ingredient.Flint },
  [Ingredient.FroxFang]: { displayName: "Frox Fang", id: Ingredient.FroxFang },
  [Ingredient.FroxFingernail]: {
    displayName: "Frox Fingernail",
    id: Ingredient.FroxFingernail,
  },
  [Ingredient.FroxGuts]: { displayName: "Frox Guts", id: Ingredient.FroxGuts },
  [Ingredient.GiantBrightbloomSeed]: {
    displayName: "Giant Brightbloom Seed",
    id: Ingredient.GiantBrightbloomSeed,
  },
  [Ingredient.GibdoBone]: {
    displayName: "Gibdo Bone",
    id: Ingredient.GibdoBone,
  },
  [Ingredient.GibdoGuts]: {
    displayName: "Gibdo Guts",
    id: Ingredient.GibdoGuts,
  },
  [Ingredient.GibdoWing]: {
    displayName: "Gibdo Wing",
    id: Ingredient.GibdoWing,
  },
  [Ingredient.GleeokFlameHorn]: {
    displayName: "Gleeok Flame Horn",
    id: Ingredient.GleeokFlameHorn,
  },
  [Ingredient.GleeokFrostHorn]: {
    displayName: "Gleeok Frost Horn",
    id: Ingredient.GleeokFrostHorn,
  },
  [Ingredient.GleeokWing]: {
    displayName: "Gleeok Wing",
    id: Ingredient.GleeokWing,
  },
  [Ingredient.GlowingCaveFish]: {
    displayName: "Glowing Cave Fish",
    id: Ingredient.GlowingCaveFish,
  },
  [Ingredient.HeartyBass]: {
    displayName: "Hearty Bass",
    id: Ingredient.HeartyBass,
  },
  [Ingredient.HightailLizard]: {
    displayName: "Hightail Lizard",
    id: Ingredient.HightailLizard,
  },
  [Ingredient.HinoxGuts]: {
    displayName: "Hinox Guts",
    id: Ingredient.HinoxGuts,
  },
  [Ingredient.HinoxToenail]: {
    displayName: "Hinox Toenail",
    id: Ingredient.HinoxToenail,
  },
  [Ingredient.HinoxTooth]: {
    displayName: "Hinox Tooth",
    id: Ingredient.HinoxTooth,
  },
  [Ingredient.HorriblinGuts]: {
    displayName: "Horriblin Guts",
    id: Ingredient.HorriblinGuts,
  },
  [Ingredient.HorriblinHorn]: {
    displayName: "Horriblin Horn",
    id: Ingredient.HorriblinHorn,
  },
  [Ingredient.HotFootedFrog]: {
    displayName: "Hot-Footed Frog",
    id: Ingredient.HotFootedFrog,
  },
  [Ingredient.HyruleBass]: {
    displayName: "Hyrule Bass",
    id: Ingredient.HyruleBass,
  },
  [Ingredient.IceFruit]: { displayName: "Ice Fruit", id: Ingredient.IceFruit },
  [Ingredient.IceKeeseWing]: {
    displayName: "Ice Keese Wing",
    id: Ingredient.IceKeeseWing,
  },
  [Ingredient.IceLikeStone]: {
    displayName: "Ice Like Stone",
    id: Ingredient.IceLikeStone,
  },
  [Ingredient.IceBreathLizalfosHorn]: {
    displayName: "Ice-Breath Lizalfos Horn",
    id: Ingredient.IceBreathLizalfosHorn,
  },
  [Ingredient.IceBreathLizalfosTail]: {
    displayName: "Ice-Breath Lizalfos Tail",
    id: Ingredient.IceBreathLizalfosTail,
  },
  [Ingredient.KeeseEyeball]: {
    displayName: "Keese Eyeball",
    id: Ingredient.KeeseEyeball,
  },
  [Ingredient.KeeseWing]: {
    displayName: "Keese Wing",
    id: Ingredient.KeeseWing,
  },
  [Ingredient.LargeZonaiCharge]: {
    displayName: "Large Zonai Charge",
    id: Ingredient.LargeZonaiCharge,
  },
  [Ingredient.LargeZonaite]: {
    displayName: "Large Zonaite",
    id: Ingredient.LargeZonaite,
  },
  [Ingredient.LightDragonHorn]: {
    displayName: "Light Dragon's Horn",
    id: Ingredient.LightDragonHorn,
  },
  [Ingredient.LightDragonsScale]: {
    displayName: "Light Dragon's Scale",
    id: Ingredient.LightDragonsScale,
  },
  [Ingredient.LightDragonsTalon]: {
    displayName: "Light Dragon's Talon",
    id: Ingredient.LightDragonsTalon,
  },
  [Ingredient.LizalfosHorn]: {
    displayName: "Lizalfos Horn",
    id: Ingredient.LizalfosHorn,
  },
  [Ingredient.LizalfosTail]: {
    displayName: "Lizalfos Tail",
    id: Ingredient.LizalfosTail,
  },
  [Ingredient.LizalfosTalon]: {
    displayName: "Lizalfos Talon",
    id: Ingredient.LizalfosTalon,
  },
  [Ingredient.LuminousStone]: {
    displayName: "Luminous Stone",
    id: Ingredient.LuminousStone,
  },
  [Ingredient.LynelGuts]: {
    displayName: "Lynel Guts",
    id: Ingredient.LynelGuts,
  },
  [Ingredient.LynelMaceHorn]: {
    displayName: "Lynel Mace Horn",
    id: Ingredient.LynelMaceHorn,
  },
  [Ingredient.LynelSaberHorn]: {
    displayName: "Lynel Saber Horn",
    id: Ingredient.LynelSaberHorn,
  },
  [Ingredient.MightyThistle]: {
    displayName: "Mighty Thistle",
    id: Ingredient.MightyThistle,
  },
  [Ingredient.MoblinFang]: {
    displayName: "Moblin Fang",
    id: Ingredient.MoblinFang,
  },
  [Ingredient.MoblinGuts]: {
    displayName: "Moblin Guts",
    id: Ingredient.MoblinGuts,
  },
  [Ingredient.MoblinHorn]: {
    displayName: "Moblin Horn",
    id: Ingredient.MoblinHorn,
  },
  [Ingredient.MoldugaFin]: {
    displayName: "Molduga Fin",
    id: Ingredient.MoldugaFin,
  },
  [Ingredient.NaydrasClaw]: {
    displayName: "Naydra's Claw",
    id: Ingredient.NaydrasClaw,
  },
  [Ingredient.NaydrasHorn]: {
    displayName: "Naydra's Horn",
    id: Ingredient.NaydrasHorn,
  },
  [Ingredient.NaydrasScale]: {
    displayName: "Naydra's Scale",
    id: Ingredient.NaydrasScale,
  },
  [Ingredient.ObsidianFroxFang]: {
    displayName: "Obsidian Frox Fang",
    id: Ingredient.ObsidianFroxFang,
  },
  [Ingredient.OctoBalloon]: {
    displayName: "Octo Balloon",
    id: Ingredient.OctoBalloon,
  },
  [Ingredient.OctorokEyeball]: {
    displayName: "Octorok Eyeball",
    id: Ingredient.OctorokEyeball,
  },
  [Ingredient.OctorokTentacle]: {
    displayName: "Octorok Tentacle",
    id: Ingredient.OctorokTentacle,
  },
  [Ingredient.Opal]: { displayName: "Opal", id: Ingredient.Opal },
  [Ingredient.Puffshroom]: {
    displayName: "Puffshroom",
    id: Ingredient.Puffshroom,
  },
  [Ingredient.RazorclawCrab]: {
    displayName: "Razorclaw Crab",
    id: Ingredient.RazorclawCrab,
  },
  [Ingredient.Razorshroom]: {
    displayName: "Razorshroom",
    id: Ingredient.Razorshroom,
  },
  [Ingredient.RedChuchuJelly]: {
    displayName: "Red Chuchu Jelly",
    id: Ingredient.RedChuchuJelly,
  },
  [Ingredient.Ruby]: { displayName: "Ruby", id: Ingredient.Ruby },
  [Ingredient.Rushroom]: { displayName: "Rushroom", id: Ingredient.Rushroom },
  [Ingredient.Sapphire]: { displayName: "Sapphire", id: Ingredient.Sapphire },
  [Ingredient.ShardofDinraalsFang]: {
    displayName: "Shard of Dinraal's Fang",
    id: Ingredient.ShardofDinraalsFang,
  },
  [Ingredient.ShardofDinraalsSpike]: {
    displayName: "Shard of Dinraal's Spike",
    id: Ingredient.ShardofDinraalsSpike,
  },
  [Ingredient.ShardofFaroshsFang]: {
    displayName: "Shard of Farosh's Fang",
    id: Ingredient.ShardofFaroshsFang,
  },
  [Ingredient.ShardofFaroshsSpike]: {
    displayName: "Shard of Farosh's Spike",
    id: Ingredient.ShardofFaroshsSpike,
  },
  [Ingredient.ShardofLightDragonsFang]: {
    displayName: "Shard of Light Dragon's Fang",
    id: Ingredient.ShardofLightDragonsFang,
  },
  [Ingredient.ShardofLightDragonsSpike]: {
    displayName: "Shard of Light Dragon's Spike",
    id: Ingredient.ShardofLightDragonsSpike,
  },
  [Ingredient.ShardofNaydrasFang]: {
    displayName: "Shard of Naydra's Fang",
    id: Ingredient.ShardofNaydrasFang,
  },
  [Ingredient.ShardofNaydrasSpike]: {
    displayName: "Shard of Naydra's Spike",
    id: Ingredient.ShardofNaydrasSpike,
  },
  [Ingredient.ShockFruit]: {
    displayName: "Shock Fruit",
    id: Ingredient.ShockFruit,
  },
  [Ingredient.SilentPrincess]: {
    displayName: "Silent Princess",
    id: Ingredient.SilentPrincess,
  },
  [Ingredient.SilentShroom]: {
    displayName: "Silent Shroom",
    id: Ingredient.SilentShroom,
  },
  [Ingredient.SilverBokoblinHorn]: {
    displayName: "Silver Bokoblin Horn",
    id: Ingredient.SilverBokoblinHorn,
  },
  [Ingredient.SizzlefinTrout]: {
    displayName: "Sizzlefin Trout",
    id: Ingredient.SizzlefinTrout,
  },
  [Ingredient.SmotherwingButterfly]: {
    displayName: "Smotherwing Butterfly",
    id: Ingredient.SmotherwingButterfly,
  },
  [Ingredient.SneakyRiverSnail]: {
    displayName: "Sneaky River Snail",
    id: Ingredient.SneakyRiverSnail,
  },
  [Ingredient.SoldierConstructHorn]: {
    displayName: "Soldier Construct Horn",
    id: Ingredient.SoldierConstructHorn,
  },
  [Ingredient.SoldierConstructIIHorn]: {
    displayName: "Soldier Construct II Horn",
    id: Ingredient.SoldierConstructIIHorn,
  },
  [Ingredient.SoldierConstructIIIHorn]: {
    displayName: "Soldier Construct III Horn",
    id: Ingredient.SoldierConstructIIIHorn,
  },
  [Ingredient.SoldierConstructIVHorn]: {
    displayName: "Soldier Construct IV Horn",
    id: Ingredient.SoldierConstructIVHorn,
  },
  [Ingredient.StarFragment]: {
    displayName: "Star Fragment",
    id: Ingredient.StarFragment,
  },
  [Ingredient.StealthfinTrout]: {
    displayName: "Stealthfin Trout",
    id: Ingredient.StealthfinTrout,
  },
  [Ingredient.StickyFrog]: {
    displayName: "Sticky Frog",
    id: Ingredient.StickyFrog,
  },
  [Ingredient.StickyLizard]: {
    displayName: "Sticky Lizard",
    id: Ingredient.StickyLizard,
  },
  [Ingredient.SummerwingButterfly]: {
    displayName: "Summerwing Butterfly",
    id: Ingredient.SummerwingButterfly,
  },
  [Ingredient.Sundelion]: {
    displayName: "Sundelion",
    id: Ingredient.Sundelion,
  },
  [Ingredient.SunsetFirefly]: {
    displayName: "Sunset Firefly",
    id: Ingredient.SunsetFirefly,
  },
  [Ingredient.Sunshroom]: {
    displayName: "Sunshroom",
    id: Ingredient.Sunshroom,
  },
  [Ingredient.SwiftCarrot]: {
    displayName: "Swift Carrot",
    id: Ingredient.SwiftCarrot,
  },
  [Ingredient.SwiftViolet]: {
    displayName: "Swift Violet",
    id: Ingredient.SwiftViolet,
  },
  [Ingredient.ThunderwingButterfly]: {
    displayName: "Thunderwing Butterfly",
    id: Ingredient.ThunderwingButterfly,
  },
  [Ingredient.Topaz]: { displayName: "Topaz", id: Ingredient.Topaz },
  [Ingredient.Voltfruit]: {
    displayName: "Voltfruit",
    id: Ingredient.Voltfruit,
  },
  [Ingredient.WarmDarner]: {
    displayName: "Warm Darner",
    id: Ingredient.WarmDarner,
  },
  [Ingredient.WarmSafflina]: {
    displayName: "Warm Safflina",
    id: Ingredient.WarmSafflina,
  },
  [Ingredient.WhiteChuchuJelly]: {
    displayName: "White Chuchu Jelly",
    id: Ingredient.WhiteChuchuJelly,
  },
  [Ingredient.WhiteManedLynelMaceHorn]: {
    displayName: "White-Maned Lynel Mace Horn",
    id: Ingredient.WhiteManedLynelMaceHorn,
  },
  [Ingredient.WhiteManedLynelSaberHorn]: {
    displayName: "White-Maned Lynel Saber Horn",
    id: Ingredient.WhiteManedLynelSaberHorn,
  },
  [Ingredient.WinterwingButterfly]: {
    displayName: "Winterwing Butterfly",
    id: Ingredient.WinterwingButterfly,
  },
  [Ingredient.YellowChuchuJelly]: {
    displayName: "Yellow Chuchu Jelly",
    id: Ingredient.YellowChuchuJelly,
  },
  [Ingredient.Zapshroom]: {
    displayName: "Zapshroom",
    id: Ingredient.Zapshroom,
  },
  [Ingredient.Zonaite]: { displayName: "Zonaite", id: Ingredient.Zonaite },
  [Ingredient.MoldugaJaw]: {
    displayName: "Molduga Jaw",
    id: Ingredient.MoldugaJaw,
  },
  [Ingredient.BlueBossBokoblinHorn]: {
    displayName: "Blue Boss Bokoblin Horn",
    id: Ingredient.BlueBossBokoblinHorn,
  },
  [Ingredient.BossBokoblinFang]: {
    displayName: "Boss Bokoblin Fang",
    id: Ingredient.BossBokoblinFang,
  },
  [Ingredient.BlackBossBokoblinHorn]: {
    displayName: "Black Boss Bokoblin Horn",
    id: Ingredient.BlackBossBokoblinHorn,
  },
  [Ingredient.SilverBossBokoblinHorn]: {
    displayName: "Silver Boss Bokoblin Horn",
    id: Ingredient.SilverBossBokoblinHorn,
  },
  [Ingredient.MoldugaGuts]: {
    displayName: "Molduga Guts",
    id: Ingredient.MoldugaGuts,
  },
  [Ingredient.GleeokGuts]: {
    displayName: "Gleeok Guts",
    id: Ingredient.GleeokGuts,
  },
  [Ingredient.ShockLikeStone]: {
    displayName: "Shock Like Stone",
    id: Ingredient.ShockLikeStone,
  },
  [Ingredient.ElectricDarner]: {
    displayName: "Electric Darner",
    id: Ingredient.ElectricDarner,
  },
  [Ingredient.VoltfinTrout]: {
    displayName: "Voltfin Trout",
    id: Ingredient.VoltfinTrout,
  },
  [Ingredient.GleeokThunderHorn]: {
    displayName: "Gleeok Thunder Horn",
    id: Ingredient.GleeokThunderHorn,
  },
  [Ingredient.LynelHoof]: {
    displayName: "Lynel Hoof",
    id: Ingredient.LynelHoof,
  },
  [Ingredient.BlackHinoxHorn]: {
    displayName: "Black Hinox Horn",
    id: Ingredient.BlackHinoxHorn,
  },
  [Ingredient.MightyBananas]: {
    displayName: "Mighty Bananas",
    id: Ingredient.MightyBananas,
  },
  [Ingredient.HeartyLizard]: {
    displayName: "Hearty Lizard",
    id: Ingredient.HeartyLizard,
  },
  [Ingredient.SilverMoblinHorn]: {
    displayName: "Silver Moblin Horn",
    id: Ingredient.SilverMoblinHorn,
  },
  [Ingredient.SilverLizalfosHorn]: {
    displayName: "Silver Lizalfos Horn",
    id: Ingredient.SilverLizalfosHorn,
  },
  [Ingredient.SilverLynelSaberHorn]: {
    displayName: "Silver Lynel Saber Horn",
    id: Ingredient.SilverLynelSaberHorn,
  },
  [Ingredient.SilverLynelMaceHorn]: {
    displayName: "Silver Lynel Mace Horn",
    id: Ingredient.SilverLynelMaceHorn,
  },
}
