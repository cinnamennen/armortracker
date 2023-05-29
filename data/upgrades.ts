import { Ingredients } from "@/data/enum"

import { UpgradeList } from "@/types/data"

export const sharedUpgrades = {
  awakening: [
    { [Ingredients.LuminousStone]: 10, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.LuminousStone]: 15,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.LuminousStone]: 20, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.LuminousStone]: 30,
      [Ingredients.StarFragment]: 1,
    },
  ],
  barbarian: [
    { [Ingredients.MightyThistle]: 3 },
    {
      [Ingredients.LynelSaberHorn]: 2,
      [Ingredients.LynelMaceHorn]: 2,
      [Ingredients.Razorshroom]: 5,
    },
    {
      [Ingredients.BlueManedLynelSaberHorn]: 3,
      [Ingredients.BlueManedLynelMaceHorn]: 3,
      [Ingredients.RazorclawCrab]: 3,
    },
    {
      [Ingredients.WhiteManedLynelSaberHorn]: 3,
      [Ingredients.WhiteManedLynelMaceHorn]: 3,
      [Ingredients.BladedRhinoBeetle]: 3,
    },
  ],
  charged: [
    { [Ingredients.ShockFruit]: 3 },
    {
      [Ingredients.ElectricLizalfosHorn]: 5,
      [Ingredients.ThunderwingButterfly]: 3,
    },
    {
      [Ingredients.LargeZonaiCharge]: 3,
      [Ingredients.ShockLikeStone]: 5,
      [Ingredients.ElectricDarner]: 5,
    },
    {
      [Ingredients.LargeZonaiCharge]: 10,
      [Ingredients.VoltfinTrout]: 10,
      [Ingredients.GleeokThunderHorn]: 5,
    },
  ],
  climber: [
    { [Ingredients.KeeseWing]: 3, [Ingredients.Rushroom]: 3 },
    {
      [Ingredients.ElectricKeeseWing]: 5,
      [Ingredients.HightailLizard]: 5,
    },
    { [Ingredients.IceKeeseWing]: 8, [Ingredients.HotFootedFrog]: 10 },
    {
      [Ingredients.FireKeeseWing]: 10,
      [Ingredients.SwiftViolet]: 20,
    },
  ],
  depths: [
    { [Ingredients.DeepFirefly]: 3 },
    {
      [Ingredients.DarkClump]: 5,
      [Ingredients.FroxFang]: 3,
    },
    {
      [Ingredients.FroxFingernail]: 3,
      [Ingredients.ObsidianFroxFang]: 3,
      [Ingredients.Zonaite]: 20,
    },
    {
      [Ingredients.BlueWhiteFroxFang]: 5,
      [Ingredients.LargeZonaite]: 10,
      [Ingredients.FroxGuts]: 3,
    },
  ],
  ember: [
    { [Ingredients.FireFruit]: 3 },
    {
      [Ingredients.FireBreathLizalfosHorn]: 5,
      [Ingredients.SummerwingButterfly]: 5,
    },
    {
      [Ingredients.FireLikeStone]: 5,
      [Ingredients.WarmDarner]: 7,
      [Ingredients.LargeZonaiCharge]: 5,
    },
    {
      [Ingredients.GleeokFlameHorn]: 5,
      [Ingredients.SizzlefinTrout]: 10,
      [Ingredients.LargeZonaiCharge]: 10,
    },
  ],
  flamebreaker: [
    { [Ingredients.MoblinHorn]: 3 },
    {
      [Ingredients.MoblinFang]: 5,
      [Ingredients.FireproofLizard]: 5,
    },
    {
      [Ingredients.BlueMoblinHorn]: 5,
      [Ingredients.SmotherwingButterfly]: 3,
      [Ingredients.Flint]: 15,
    },
    {
      [Ingredients.BlackMoblinHorn]: 5,
      [Ingredients.SmotherwingButterfly]: 5,
      [Ingredients.Flint]: 30,
    },
  ],
  froggy: [
    { [Ingredients.StickyLizard]: 3 },
    {
      [Ingredients.StickyLizard]: 5,
      [Ingredients.HorriblinHorn]: 5,
    },
    { [Ingredients.BlueHorriblinHorn]: 5, [Ingredients.StickyFrog]: 5 },
    {
      [Ingredients.BlackHorriblinHorn]: 5,
      [Ingredients.HorriblinGuts]: 10,
      [Ingredients.Opal]: 10,
    },
  ],
  frostbite: [
    { [Ingredients.IceFruit]: 3 },
    {
      [Ingredients.IceBreathLizalfosHorn]: 5,
      [Ingredients.WinterwingButterfly]: 5,
    },
    {
      [Ingredients.IceLikeStone]: 5,
      [Ingredients.ColdDarner]: 5,
      [Ingredients.LargeZonaiCharge]: 5,
    },
    {
      [Ingredients.GleeokFrostHorn]: 5,
      [Ingredients.ChillfinTrout]: 10,
      [Ingredients.LargeZonaiCharge]: 10,
    },
  ],
  glide: [
    { [Ingredients.KeeseWing]: 3 },
    {
      [Ingredients.AerocudaEyes]: 6,
      [Ingredients.KeeseWing]: 5,
    },
    { [Ingredients.AerocudaEyes]: 8, [Ingredients.AerocudaWing]: 6 },
    {
      [Ingredients.GleeokWing]: 12,
      [Ingredients.AerocudaWing]: 10,
      [Ingredients.GibdoWing]: 8,
    },
  ],
  hero: [
    { [Ingredients.Ruby]: 1, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Ruby]: 4,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.Ruby]: 6, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Ruby]: 10,
      [Ingredients.StarFragment]: 1,
    },
  ],
  hylian: [
    { [Ingredients.BokoblinHorn]: 5 },
    {
      [Ingredients.BlueBokoblinHorn]: 5,
      [Ingredients.BokoblinFang]: 3,
    },
    {
      [Ingredients.BlackBokoblinHorn]: 5,
      [Ingredients.BokoblinGuts]: 3,
      [Ingredients.Amber]: 20,
    },
    {
      [Ingredients.SilverBokoblinHorn]: 5,
      [Ingredients.BokoblinGuts]: 5,
      [Ingredients.Amber]: 30,
    },
  ],
  miner: [
    { [Ingredients.BrightbloomSeeds]: 10 },
    {
      [Ingredients.BrightbloomSeeds]: 20,
      [Ingredients.BrightCaps]: 5,
    },
    {
      [Ingredients.GiantBrightbloomSeed]: 15,
      [Ingredients.GlowingCaveFish]: 5,
      [Ingredients.DeepFirefly]: 10,
    },
    {
      [Ingredients.GiantBrightbloomSeed]: 20,
      [Ingredients.Diamond]: 3,
      [Ingredients.LargeZonaite]: 10,
    },
  ],
  radiant: [
    { [Ingredients.LuminousStone]: 10, [Ingredients.BokoblinGuts]: 1 },
    {
      [Ingredients.LuminousStone]: 15,
      [Ingredients.MoblinGuts]: 2,
    },
    {
      [Ingredients.LuminousStone]: 20,
      [Ingredients.HorriblinGuts]: 3,
      [Ingredients.GibdoBone]: 10,
    },
    {
      [Ingredients.LuminousStone]: 30,
      [Ingredients.LynelGuts]: 3,
      [Ingredients.MoldugaJaw]: 3,
    },
  ],
  royal: [
    { [Ingredients.BossBokoblinHorn]: 3, [Ingredients.BokoblinGuts]: 3 },
    {
      [Ingredients.BlueBossBokoblinHorn]: 3,
      [Ingredients.BossBokoblinFang]: 3,
    },
    {
      [Ingredients.BlackBossBokoblinHorn]: 3,
      [Ingredients.HinoxGuts]: 3,
    },
    {
      [Ingredients.SilverBossBokoblinHorn]: 3,
      [Ingredients.MoldugaGuts]: 3,
      [Ingredients.GleeokGuts]: 3,
    },
  ],
  rubber: [
    {
      [Ingredients.ElectricLizalfosHorn]: 1,
      [Ingredients.YellowChuchuJelly]: 3,
    },
    { [Ingredients.YellowChuchuJelly]: 8, [Ingredients.Voltfruit]: 5 },
    {
      [Ingredients.Zapshroom]: 5,
      [Ingredients.ElectricLizalfosTail]: 5,
      [Ingredients.ElectricSafflina]: 8,
    },
    {
      [Ingredients.ElectricLizalfosHorn]: 5,
      [Ingredients.Topaz]: 5,
      [Ingredients.ElectricLizalfosTail]: 8,
    },
  ],
  sky: [
    { [Ingredients.Sapphire]: 1, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Sapphire]: 4,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.Sapphire]: 6, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Sapphire]: 10,
      [Ingredients.StarFragment]: 1,
    },
  ],
  snowquill: [
    { [Ingredients.RedChuchuJelly]: 3 },
    {
      [Ingredients.RedChuchuJelly]: 5,
      [Ingredients.WarmSafflina]: 3,
    },
    {
      [Ingredients.FireKeeseWing]: 5,
      [Ingredients.FireBreathLizalfosTail]: 3,
      [Ingredients.Sunshroom]: 5,
    },
    {
      [Ingredients.FireBreathLizalfosHorn]: 5,
      [Ingredients.FireBreathLizalfosTail]: 10,
      [Ingredients.Ruby]: 5,
    },
  ],
  soldier: [
    { [Ingredients.ChuchuJelly]: 5, [Ingredients.BokoblinGuts]: 3 },
    {
      [Ingredients.KeeseEyeball]: 5,
      [Ingredients.MoblinGuts]: 3,
    },
    {
      [Ingredients.LizalfosTail]: 3,
      [Ingredients.HinoxGuts]: 3,
      [Ingredients.Flint]: 30,
    },
    {
      [Ingredients.LynelGuts]: 3,
      [Ingredients.LynelHoof]: 5,
      [Ingredients.Amber]: 30,
    },
  ],
  stealth: [
    { [Ingredients.BlueNightshade]: 3 },
    {
      [Ingredients.BlueNightshade]: 5,
      [Ingredients.SunsetFirefly]: 5,
    },
    {
      [Ingredients.SilentShroom]: 8,
      [Ingredients.SneakyRiverSnail]: 5,
      [Ingredients.StickyFrog]: 5,
    },
    {
      [Ingredients.StealthfinTrout]: 10,
      [Ingredients.SilentPrincess]: 5,
      [Ingredients.Sundelion]: 10,
    },
  ],
  time: [
    { [Ingredients.Amber]: 10, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Amber]: 20,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.Amber]: 30, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Amber]: 50,
      [Ingredients.StarFragment]: 1,
    },
  ],
  twilight: [
    { [Ingredients.Topaz]: 1, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Topaz]: 4,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.Topaz]: 6, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Topaz]: 10,
      [Ingredients.StarFragment]: 1,
    },
  ],
  voe: [
    { [Ingredients.WhiteChuchuJelly]: 3 },
    {
      [Ingredients.WhiteChuchuJelly]: 5,
      [Ingredients.CoolSafflina]: 3,
    },
    {
      [Ingredients.IceKeeseWing]: 5,
      [Ingredients.IceBreathLizalfosTail]: 3,
      [Ingredients.Chillshroom]: 5,
    },
    {
      [Ingredients.IceBreathLizalfosHorn]: 5,
      [Ingredients.IceBreathLizalfosTail]: 10,
      [Ingredients.Sapphire]: 5,
    },
  ],
  wind: [
    { [Ingredients.Opal]: 5, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Opal]: 10,
      [Ingredients.StarFragment]: 1,
    },
    { [Ingredients.Opal]: 15, [Ingredients.StarFragment]: 1 },
    {
      [Ingredients.Opal]: 25,
      [Ingredients.StarFragment]: 1,
    },
  ],
  yiga: [
    { [Ingredients.OctorokEyeball]: 2 },
    {
      [Ingredients.FireBreathLizalfosTail]: 3,
      [Ingredients.Puffshroom]: 3,
    },
    { [Ingredients.IceBreathLizalfosTail]: 5, [Ingredients.KeeseEyeball]: 5 },
    {
      [Ingredients.ElectricLizalfosTail]: 5,
      [Ingredients.BlackHinoxHorn]: 3,
      [Ingredients.MightyBananas]: 10,
    },
  ],
  zonaite: [
    { [Ingredients.SoldierConstructHorn]: 5 },
    {
      [Ingredients.SoldierConstructIIHorn]: 5,
      [Ingredients.CaptainConstructIHorn]: 5,
      [Ingredients.Zonaite]: 5,
    },
    {
      [Ingredients.SoldierConstructIIIHorn]: 5,
      [Ingredients.CaptainConstructIIHorn]: 5,
      [Ingredients.LargeZonaite]: 5,
    },
    {
      [Ingredients.SoldierConstructIVHorn]: 5,
      [Ingredients.CaptainConstructIIIHorn]: 5,
      [Ingredients.LargeZonaite]: 10,
    },
  ],
  zora: [
    { [Ingredients.LizalfosHorn]: 3 },
    {
      [Ingredients.LizalfosTalon]: 5,
      [Ingredients.HyruleBass]: 5,
    },
    {
      [Ingredients.BlueLizalfosHorn]: 5,
      [Ingredients.LizalfosTail]: 3,
      [Ingredients.HeartyBass]: 3,
    },
    {
      [Ingredients.BlackLizalfosHorn]: 5,
      [Ingredients.BlueLizalfosTail]: 5,
      [Ingredients.Opal]: 20,
    },
  ],
} satisfies { [key: string]: UpgradeList }
type DRAGON_NAME = "Dinraal" | "Farosh" | "Naydra" | "Light"
const dragons = {
  Dinraal: {
    claw: Ingredients.DinraalsClaw,
    fang: Ingredients.ShardofDinraalsFang,
    scale: Ingredients.DinraalsScale,
    horn: Ingredients.DinraalsHorn,
    shardSpike: Ingredients.ShardofDinraalsSpike,
  },
  Farosh: {
    claw: Ingredients.FaroshsClaw,
    fang: Ingredients.ShardofFaroshsFang,
    scale: Ingredients.FaroshsScale,
    horn: Ingredients.FaroshsHorn,
    shardSpike: Ingredients.ShardofFaroshsSpike,
  },
  Naydra: {
    claw: Ingredients.NaydrasClaw,
    fang: Ingredients.ShardofNaydrasFang,
    scale: Ingredients.NaydrasScale,
    horn: Ingredients.NaydrasHorn,
    shardSpike: Ingredients.ShardofNaydrasSpike,
  },
  Light: {
    claw: Ingredients.LightDragonsTalon,
    fang: Ingredients.ShardofLightDragonsFang,
    scale: Ingredients.LightDragonsScale,
    horn: Ingredients.LightDragonHorn,
    shardSpike: Ingredients.ShardofLightDragonsSpike,
  },
} satisfies {
  [key in DRAGON_NAME]: {
    [key in
      | "claw"
      | "fang"
      | "scale"
      | "horn"
      | "shardSpike"]: Ingredients
  }
}

export function wild(dragon_name: DRAGON_NAME): UpgradeList {
  const dragon = dragons[dragon_name]
  const { claw, fang, scale, shardSpike, horn } = dragon
  return [
    { [Ingredients.Acorn]: 10, [scale]: 2 },
    {
      [Ingredients.CourserBeeHoney]: 5,
      [claw]: 2,
    },
    {
      [Ingredients.EnergeticRhinoBeetle]: 3,
      [fang]: 2,
      [shardSpike]: 5,
    },
    { [Ingredients.StarFragment]: 2, [horn]: 2, [shardSpike]: 10 },
  ]
}

export function fierce(dragon_name: DRAGON_NAME): UpgradeList {
  const dragon = dragons[dragon_name]

  const { claw, fang, scale, horn } = dragon
  return [
    { [Ingredients.HinoxToenail]: 5, [scale]: 1 },
    {
      [Ingredients.HinoxTooth]: 5,
      [claw]: 1,
    },
    { [Ingredients.HinoxGuts]: 2, [fang]: 1 },
    {
      [Ingredients.LynelGuts]: 2,
      [horn]: 1,
    },
  ]
}
