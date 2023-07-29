import { Ingredient } from "@/data/enum"

import { UpgradeList } from "@/types/data"

export const sharedUpgrades = {
  awakening: [
    { [Ingredient.LuminousStone]: 10, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.LuminousStone]: 15,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.LuminousStone]: 20, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.LuminousStone]: 30,
      [Ingredient.StarFragment]: 1,
    },
  ],
  barbarian: [
    { [Ingredient.MightyThistle]: 3 },
    {
      [Ingredient.LynelSaberHorn]: 2,
      [Ingredient.LynelMaceHorn]: 2,
      [Ingredient.Razorshroom]: 5,
    },
    {
      [Ingredient.BlueManedLynelSaberHorn]: 3,
      [Ingredient.BlueManedLynelMaceHorn]: 3,
      [Ingredient.RazorclawCrab]: 3,
    },
    {
      [Ingredient.WhiteManedLynelSaberHorn]: 3,
      [Ingredient.WhiteManedLynelMaceHorn]: 3,
      [Ingredient.BladedRhinoBeetle]: 3,
    },
  ],
  charged: [
    { [Ingredient.ShockFruit]: 3 },
    {
      [Ingredient.ElectricLizalfosHorn]: 5,
      [Ingredient.ThunderwingButterfly]: 3,
    },
    {
      [Ingredient.LargeZonaiCharge]: 3,
      [Ingredient.ShockLikeStone]: 5,
      [Ingredient.ElectricDarner]: 5,
    },
    {
      [Ingredient.LargeZonaiCharge]: 10,
      [Ingredient.VoltfinTrout]: 10,
      [Ingredient.GleeokThunderHorn]: 5,
    },
  ],
  climber: [
    { [Ingredient.KeeseWing]: 3, [Ingredient.Rushroom]: 3 },
    {
      [Ingredient.ElectricKeeseWing]: 5,
      [Ingredient.HightailLizard]: 5,
    },
    { [Ingredient.IceKeeseWing]: 8, [Ingredient.HotFootedFrog]: 10 },
    {
      [Ingredient.FireKeeseWing]: 10,
      [Ingredient.SwiftViolet]: 20,
    },
  ],
  depths: [
    { [Ingredient.DeepFirefly]: 3 },
    {
      [Ingredient.DarkClump]: 5,
      [Ingredient.FroxFang]: 3,
    },
    {
      [Ingredient.FroxFingernail]: 3,
      [Ingredient.ObsidianFroxFang]: 3,
      [Ingredient.Zonaite]: 20,
    },
    {
      [Ingredient.BlueWhiteFroxFang]: 5,
      [Ingredient.LargeZonaite]: 10,
      [Ingredient.FroxGuts]: 3,
    },
  ],
  ember: [
    { [Ingredient.FireFruit]: 3 },
    {
      [Ingredient.FireBreathLizalfosHorn]: 5,
      [Ingredient.SummerwingButterfly]: 5,
    },
    {
      [Ingredient.FireLikeStone]: 5,
      [Ingredient.WarmDarner]: 5,
      [Ingredient.LargeZonaiCharge]: 5,
    },
    {
      [Ingredient.GleeokFlameHorn]: 5,
      [Ingredient.SizzlefinTrout]: 10,
      [Ingredient.LargeZonaiCharge]: 10,
    },
  ],
  flamebreaker: [
    { [Ingredient.MoblinHorn]: 3 },
    {
      [Ingredient.MoblinFang]: 5,
      [Ingredient.FireproofLizard]: 5,
    },
    {
      [Ingredient.BlueMoblinHorn]: 5,
      [Ingredient.SmotherwingButterfly]: 3,
      [Ingredient.Flint]: 15,
    },
    {
      [Ingredient.BlackMoblinHorn]: 5,
      [Ingredient.SmotherwingButterfly]: 5,
      [Ingredient.Flint]: 30,
    },
  ],
  froggy: [
    { [Ingredient.StickyLizard]: 3 },
    {
      [Ingredient.StickyLizard]: 5,
      [Ingredient.HorriblinHorn]: 5,
    },
    { [Ingredient.BlueHorriblinHorn]: 5, [Ingredient.StickyFrog]: 5 },
    {
      [Ingredient.BlackHorriblinHorn]: 5,
      [Ingredient.HorriblinGuts]: 10,
      [Ingredient.Opal]: 10,
    },
  ],
  frostbite: [
    { [Ingredient.IceFruit]: 3 },
    {
      [Ingredient.IceBreathLizalfosHorn]: 5,
      [Ingredient.WinterwingButterfly]: 5,
    },
    {
      [Ingredient.IceLikeStone]: 5,
      [Ingredient.ColdDarner]: 5,
      [Ingredient.LargeZonaiCharge]: 5,
    },
    {
      [Ingredient.GleeokFrostHorn]: 5,
      [Ingredient.ChillfinTrout]: 10,
      [Ingredient.LargeZonaiCharge]: 10,
    },
  ],
  glide: [
    { [Ingredient.KeeseWing]: 3 },
    {
      [Ingredient.AerocudaEyes]: 6,
      [Ingredient.KeeseWing]: 5,
    },
    { [Ingredient.AerocudaEyes]: 8, [Ingredient.AerocudaWing]: 6 },
    {
      [Ingredient.GleeokWing]: 12,
      [Ingredient.AerocudaWing]: 10,
      [Ingredient.GibdoWing]: 8,
    },
  ],
  hero: [
    { [Ingredient.Ruby]: 1, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Ruby]: 4,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.Ruby]: 6, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Ruby]: 10,
      [Ingredient.StarFragment]: 1,
    },
  ],
  hylian: [
    { [Ingredient.BokoblinHorn]: 5 },
    {
      [Ingredient.BlueBokoblinHorn]: 5,
      [Ingredient.BokoblinFang]: 3,
    },
    {
      [Ingredient.BlackBokoblinHorn]: 5,
      [Ingredient.BokoblinGuts]: 3,
      [Ingredient.Amber]: 20,
    },
    {
      [Ingredient.SilverBokoblinHorn]: 5,
      [Ingredient.BokoblinGuts]: 5,
      [Ingredient.Amber]: 30,
    },
  ],
  miner: [
    { [Ingredient.BrightbloomSeeds]: 10 },
    {
      [Ingredient.BrightbloomSeeds]: 20,
      [Ingredient.BrightCaps]: 5,
    },
    {
      [Ingredient.GiantBrightbloomSeed]: 15,
      [Ingredient.GlowingCaveFish]: 5,
      [Ingredient.DeepFirefly]: 10,
    },
    {
      [Ingredient.GiantBrightbloomSeed]: 20,
      [Ingredient.Diamond]: 3,
      [Ingredient.LargeZonaite]: 10,
    },
  ],
  radiant: [
    { [Ingredient.LuminousStone]: 10, [Ingredient.BokoblinGuts]: 1 },
    {
      [Ingredient.LuminousStone]: 15,
      [Ingredient.MoblinGuts]: 2,
    },
    {
      [Ingredient.LuminousStone]: 20,
      [Ingredient.HorriblinGuts]: 3,
      [Ingredient.GibdoBone]: 10,
    },
    {
      [Ingredient.LuminousStone]: 30,
      [Ingredient.LynelGuts]: 3,
      [Ingredient.MoldugaJaw]: 3,
    },
  ],
  royal: [
    { [Ingredient.BossBokoblinHorn]: 3, [Ingredient.BokoblinGuts]: 3 },
    {
      [Ingredient.BlueBossBokoblinHorn]: 3,
      [Ingredient.BossBokoblinGuts]: 3,
    },
    {
      [Ingredient.BlackBossBokoblinHorn]: 3,
      [Ingredient.HinoxGuts]: 3,
    },
    {
      [Ingredient.SilverBossBokoblinHorn]: 3,
      [Ingredient.MoldugaGuts]: 3,
      [Ingredient.GleeokGuts]: 3,
    },
  ],
  rubber: [
    {
      [Ingredient.ElectricLizalfosHorn]: 1,
      [Ingredient.YellowChuchuJelly]: 3,
    },
    { [Ingredient.YellowChuchuJelly]: 8, [Ingredient.Voltfruit]: 5 },
    {
      [Ingredient.Zapshroom]: 5,
      [Ingredient.ElectricLizalfosTail]: 5,
      [Ingredient.ElectricSafflina]: 8,
    },
    {
      [Ingredient.ElectricLizalfosHorn]: 5,
      [Ingredient.Topaz]: 5,
      [Ingredient.ElectricLizalfosTail]: 8,
    },
  ],
  sky: [
    { [Ingredient.Sapphire]: 1, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Sapphire]: 4,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.Sapphire]: 6, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Sapphire]: 10,
      [Ingredient.StarFragment]: 1,
    },
  ],
  snowquill: [
    { [Ingredient.RedChuchuJelly]: 3 },
    {
      [Ingredient.RedChuchuJelly]: 5,
      [Ingredient.WarmSafflina]: 3,
    },
    {
      [Ingredient.FireKeeseWing]: 5,
      [Ingredient.FireBreathLizalfosTail]: 3,
      [Ingredient.Sunshroom]: 5,
    },
    {
      [Ingredient.FireBreathLizalfosHorn]: 5,
      [Ingredient.FireBreathLizalfosTail]: 10,
      [Ingredient.Ruby]: 5,
    },
  ],
  soldier: [
    { [Ingredient.ChuchuJelly]: 5, [Ingredient.BokoblinGuts]: 3 },
    {
      [Ingredient.KeeseEyeball]: 5,
      [Ingredient.MoblinGuts]: 3,
    },
    {
      [Ingredient.LizalfosTail]: 3,
      [Ingredient.HinoxGuts]: 3,
      [Ingredient.Flint]: 30,
    },
    {
      [Ingredient.LynelGuts]: 3,
      [Ingredient.LynelHoof]: 5,
      [Ingredient.Amber]: 30,
    },
  ],
  stealth: [
    { [Ingredient.BlueNightshade]: 3 },
    {
      [Ingredient.BlueNightshade]: 5,
      [Ingredient.SunsetFirefly]: 5,
    },
    {
      [Ingredient.SilentShroom]: 8,
      [Ingredient.SneakyRiverSnail]: 5,
      [Ingredient.StickyFrog]: 5,
    },
    {
      [Ingredient.StealthfinTrout]: 10,
      [Ingredient.SilentPrincess]: 5,
      [Ingredient.Sundelion]: 10,
    },
  ],
  time: [
    { [Ingredient.Amber]: 10, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Amber]: 20,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.Amber]: 30, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Amber]: 50,
      [Ingredient.StarFragment]: 1,
    },
  ],
  twilight: [
    { [Ingredient.Topaz]: 1, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Topaz]: 4,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.Topaz]: 6, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Topaz]: 10,
      [Ingredient.StarFragment]: 1,
    },
  ],
  voe: [
    { [Ingredient.WhiteChuchuJelly]: 3 },
    {
      [Ingredient.WhiteChuchuJelly]: 5,
      [Ingredient.CoolSafflina]: 3,
    },
    {
      [Ingredient.IceKeeseWing]: 5,
      [Ingredient.IceBreathLizalfosTail]: 3,
      [Ingredient.Chillshroom]: 5,
    },
    {
      [Ingredient.IceBreathLizalfosHorn]: 5,
      [Ingredient.IceBreathLizalfosTail]: 10,
      [Ingredient.Sapphire]: 5,
    },
  ],
  wind: [
    { [Ingredient.Opal]: 5, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Opal]: 10,
      [Ingredient.StarFragment]: 1,
    },
    { [Ingredient.Opal]: 15, [Ingredient.StarFragment]: 1 },
    {
      [Ingredient.Opal]: 25,
      [Ingredient.StarFragment]: 1,
    },
  ],
  yiga: [
    { [Ingredient.OctorokEyeball]: 2 },
    {
      [Ingredient.FireBreathLizalfosTail]: 3,
      [Ingredient.Puffshroom]: 3,
    },
    { [Ingredient.IceBreathLizalfosTail]: 5, [Ingredient.KeeseEyeball]: 5 },
    {
      [Ingredient.ElectricLizalfosTail]: 5,
      [Ingredient.BlackHinoxHorn]: 3,
      [Ingredient.MightyBananas]: 10,
    },
  ],
  zonaite: [
    { [Ingredient.SoldierConstructHorn]: 5 },
    {
      [Ingredient.SoldierConstructIIHorn]: 5,
      [Ingredient.CaptainConstructIHorn]: 5,
      [Ingredient.Zonaite]: 5,
    },
    {
      [Ingredient.SoldierConstructIIIHorn]: 5,
      [Ingredient.CaptainConstructIIHorn]: 5,
      [Ingredient.LargeZonaite]: 5,
    },
    {
      [Ingredient.SoldierConstructIVHorn]: 5,
      [Ingredient.CaptainConstructIIIHorn]: 5,
      [Ingredient.LargeZonaite]: 10,
    },
  ],
  zora: [
    { [Ingredient.LizalfosHorn]: 3 },
    {
      [Ingredient.LizalfosTalon]: 5,
      [Ingredient.HyruleBass]: 5,
    },
    {
      [Ingredient.BlueLizalfosHorn]: 5,
      [Ingredient.LizalfosTail]: 3,
      [Ingredient.HeartyBass]: 3,
    },
    {
      [Ingredient.BlackLizalfosHorn]: 5,
      [Ingredient.BlueLizalfosTail]: 5,
      [Ingredient.Opal]: 20,
    },
  ],
} satisfies { [key: string]: UpgradeList }
type DRAGON_NAME = "Dinraal" | "Farosh" | "Naydra" | "Light"
const dragons = {
  Dinraal: {
    claw: Ingredient.DinraalsClaw,
    fang: Ingredient.ShardofDinraalsFang,
    scale: Ingredient.DinraalsScale,
    horn: Ingredient.DinraalsHorn,
    shardSpike: Ingredient.ShardofDinraalsSpike,
  },
  Farosh: {
    claw: Ingredient.FaroshsClaw,
    fang: Ingredient.ShardofFaroshsFang,
    scale: Ingredient.FaroshsScale,
    horn: Ingredient.FaroshsHorn,
    shardSpike: Ingredient.ShardofFaroshsSpike,
  },
  Naydra: {
    claw: Ingredient.NaydrasClaw,
    fang: Ingredient.ShardofNaydrasFang,
    scale: Ingredient.NaydrasScale,
    horn: Ingredient.NaydrasHorn,
    shardSpike: Ingredient.ShardofNaydrasSpike,
  },
  Light: {
    claw: Ingredient.LightDragonsTalon,
    fang: Ingredient.ShardofLightDragonsFang,
    scale: Ingredient.LightDragonsScale,
    horn: Ingredient.LightDragonHorn,
    shardSpike: Ingredient.ShardofLightDragonsSpike,
  },
} satisfies {
  [key in DRAGON_NAME]: {
    [key in "claw" | "fang" | "scale" | "horn" | "shardSpike"]: Ingredient
  }
}

export function wild(dragon_name: DRAGON_NAME): UpgradeList {
  const dragon = dragons[dragon_name]
  const { claw, fang, scale, shardSpike, horn } = dragon
  return [
    { [Ingredient.Acorn]: 10, [scale]: 2 },
    {
      [Ingredient.CourserBeeHoney]: 5,
      [claw]: 2,
    },
    {
      [Ingredient.EnergeticRhinoBeetle]: 3,
      [fang]: 2,
      [shardSpike]: 5,
    },
    { [Ingredient.StarFragment]: 3, [horn]: 2, [shardSpike]: 10 },
  ]
}

export function fierce(dragon_name: DRAGON_NAME): UpgradeList {
  const dragon = dragons[dragon_name]

  const { claw, fang, scale, horn } = dragon
  return [
    { [Ingredient.HinoxToenail]: 5, [scale]: 1 },
    {
      [Ingredient.HinoxTooth]: 5,
      [claw]: 1,
    },
    { [Ingredient.HinoxGuts]: 2, [fang]: 1 },
    {
      [Ingredient.LynelGuts]: 2,
      [horn]: 1,
    },
  ]
}
