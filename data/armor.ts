import { Ingredients, armorGroup } from "@/data/enum"
import { fierce, sharedUpgrades, wild } from "@/data/upgrades"

import { Armor, Ingredient, Slot } from "@/types/data"

export const armor: Armor[] = [
  {
    displayName: "Amber Earrings",
    slot: Slot.Head,
    upgrades: [
      { [Ingredients.Amber]: 10, [Ingredients.Flint]: 5 },
      {
        [Ingredients.Amber]: 20,
        [Ingredients.Flint]: 10,
      },
      { [Ingredients.Amber]: 35, [Ingredients.Flint]: 15 },
      { [Ingredients.Amber]: 60, [Ingredients.Flint]: 25 },
    ],
    armorGroup: armorGroup.Earrings,
    sortKey: "c",
  },
  {
    displayName: "Ancient Hero's Aspect",
    upgrades: [
      {
        [Ingredients.Zonaite]: 15,
        [Ingredients.SilverBokoblinHorn]: 9,
        [Ingredients.HinoxGuts]: 9,
      },
      {
        [Ingredients.LargeZonaite]: 10,
        [Ingredients.SilverMoblinHorn]: 9,
        [Ingredients.FroxGuts]: 9,
      },
      {
        [Ingredients.LargeZonaite]: 15,
        [Ingredients.SilverLizalfosHorn]: 9,
        [Ingredients.MoldugaGuts]: 9,
      },
      {
        [Ingredients.SilverLynelSaberHorn]: 9,
        [Ingredients.SilverLynelMaceHorn]: 9,
        [Ingredients.GleeokGuts]: 9,
      },
    ],
    slot: Slot.Head,
    armorGroup: armorGroup.Ancient,
  },
  {
    displayName: "Barbarian Helm",
    upgrades: sharedUpgrades.barbarian,

    slot: Slot.Head,
    armorGroup: armorGroup.Barbarian,
  },
  {
    displayName: "Barbarian Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.barbarian,

    armorGroup: armorGroup.Barbarian,
  },

  {
    displayName: "Barbarian Leg Wraps",
    upgrades: sharedUpgrades.barbarian,
    slot: Slot.Legs,
    armorGroup: armorGroup.Barbarian,
  },
  {
    displayName: "Cap of the Hero",
    slot: Slot.Head,
    upgrades: sharedUpgrades.hero,
    armorGroup: armorGroup.Hero,
  },
  {
    displayName: "Cap of the Sky",
    slot: Slot.Head,
    upgrades: sharedUpgrades.sky,
    armorGroup: armorGroup.Sky,
  },
  {
    displayName: "Cap of the Wild",
    slot: Slot.Head,
    upgrades: wild("Farosh"),
    armorGroup: armorGroup.Wild,
  },
  {
    displayName: "Cap of the Wind",
    slot: Slot.Head,
    upgrades: sharedUpgrades.wind,
    armorGroup: armorGroup.Wind,
  },
  {
    displayName: "Cap of Time",
    slot: Slot.Head,
    upgrades: sharedUpgrades.time,
    armorGroup: armorGroup.Time,
  },
  {
    displayName: "Cap of Twilight",
    slot: Slot.Head,
    upgrades: sharedUpgrades.twilight,
    armorGroup: armorGroup.Twilight,
  },
  {
    displayName: "Champion's Leathers",
    slot: Slot.Body,
    upgrades: [
      { [Ingredients.SilentPrincess]: 3, [Ingredients.LightDragonsScale]: 2 },
      {
        [Ingredients.SilentPrincess]: 3,
        [Ingredients.LightDragonClaw]: 2,
        [Ingredients.Sundelion]: 10,
      },
      {
        [Ingredients.SilentPrincess]: 5,
        [Ingredients.LightDragonFang]: 2,
        [Ingredients.Sundelion]: 15,
      },
      {
        [Ingredients.SilentPrincess]: 10,
        [Ingredients.LightDragonHorn]: 2,
        [Ingredients.Sundelion]: 20,
      },
    ],
    armorGroup: armorGroup.Champion,
    sortKey: "b",
  },
  {
    displayName: "Charged Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.charged,
    armorGroup: armorGroup.Charged,
  },
  {
    displayName: "Charged Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.charged,
    armorGroup: armorGroup.Charged,
  },
  {
    displayName: "Charged Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.charged,
    armorGroup: armorGroup.Charged,
  },
  {
    displayName: "Climber's Bandanna",
    slot: Slot.Head,
    upgrades: sharedUpgrades.climber,
    armorGroup: armorGroup.Climber,
  },
  {
    displayName: "Climbing Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.climber,
    armorGroup: armorGroup.Climber,
  },
  {
    displayName: "Climbing Gear",
    slot: Slot.Body,
    upgrades: sharedUpgrades.climber,
    armorGroup: armorGroup.Climber,
  },
  {
    displayName: "Desert Voe Headband",
    slot: Slot.Head,
    upgrades: sharedUpgrades.voe,
    armorGroup: armorGroup.Voe,
  },
  {
    displayName: "Desert Voe Spaulder",
    slot: Slot.Body,
    upgrades: sharedUpgrades.voe,
    armorGroup: armorGroup.Voe,
  },
  {
    displayName: "Desert Voe Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.voe,
    armorGroup: armorGroup.Voe,
  },
  {
    displayName: "Diamond Circlet",
    slot: Slot.Head,
    armorGroup: armorGroup.Circlet,
    sortKey: "a",
    upgrades: [
      { [Ingredients.Diamond]: 2, [Ingredients.Flint]: 3 },
      {
        [Ingredients.Diamond]: 3,
        [Ingredients.Flint]: 5,
      },
      { [Ingredients.Diamond]: 5, [Ingredients.StarFragment]: 1 },
      {
        [Ingredients.Diamond]: 8,
        [Ingredients.StarFragment]: 2,
      },
    ],
  },
  {
    displayName: "Ember Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.ember,
    armorGroup: armorGroup.Ember,
  },
  {
    displayName: "Ember Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.ember,
    armorGroup: armorGroup.Ember,
  },
  {
    displayName: "Ember Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.ember,
    armorGroup: armorGroup.Ember,
  },
  {
    displayName: "Fierce Deity Armor",
    slot: Slot.Body,
    upgrades: fierce("Naydra"),
    armorGroup: armorGroup.Fierce,
  },
  {
    displayName: "Fierce Deity Boots",
    slot: Slot.Legs,
    upgrades: fierce("Farosh"),
    armorGroup: armorGroup.Fierce,
  },
  {
    displayName: "Fierce Deity Mask",
    slot: Slot.Head,
    upgrades: fierce("Dinraal"),
    armorGroup: armorGroup.Fierce,
  },
  {
    displayName: "Flamebreaker Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.flamebreaker,
    armorGroup: armorGroup.Flamebreaker,
  },
  {
    displayName: "Flamebreaker Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.flamebreaker,
    armorGroup: armorGroup.Flamebreaker,
  },
  {
    displayName: "Flamebreaker Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.flamebreaker,
    armorGroup: armorGroup.Flamebreaker,
  },
  {
    displayName: "Froggy Hood",
    slot: Slot.Head,
    upgrades: sharedUpgrades.froggy,
    armorGroup: armorGroup.Froggy,
  },
  {
    displayName: "Froggy Leggings",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.froggy,
    armorGroup: armorGroup.Froggy,
  },
  {
    displayName: "Froggy Sleeve",
    slot: Slot.Body,
    upgrades: sharedUpgrades.froggy,
    armorGroup: armorGroup.Froggy,
  },
  {
    displayName: "Frostbite Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.frostbite,
    armorGroup: armorGroup.Frostbite,
  },
  {
    displayName: "Frostbite Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.frostbite,
    armorGroup: armorGroup.Frostbite,
  },
  {
    displayName: "Frostbite Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.frostbite,
    armorGroup: armorGroup.Frostbite,
  },
  {
    displayName: "Gaiters of the Depths",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.depths,
    armorGroup: armorGroup.Depths,
  },
  {
    displayName: "Glide Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.glide,
    armorGroup: armorGroup.Glide,
  },
  {
    displayName: "Glide Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.glide,
    armorGroup: armorGroup.Glide,
  },
  {
    displayName: "Glide Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.glide,
    armorGroup: armorGroup.Glide,
  },
  {
    displayName: "Hood of the Depths",
    slot: Slot.Head,
    upgrades: sharedUpgrades.depths,
    armorGroup: armorGroup.Depths,
  },
  {
    displayName: "Hylian Hood",
    slot: Slot.Head,
    upgrades: sharedUpgrades.hylian,
    armorGroup: armorGroup.Hylian,
  },
  {
    displayName: "Hylian Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.hylian,
    armorGroup: armorGroup.Hylian,
  },
  {
    displayName: "Hylian Tunic",
    slot: Slot.Body,
    upgrades: sharedUpgrades.hylian,
    armorGroup: armorGroup.Hylian,
  },
  { displayName: "Lobster Shirt", upgrades: null, slot: Slot.Body },
  { displayName: "Majora's Mask", upgrades: null, slot: Slot.Head },
  {
    displayName: "Mask of Awakening",
    slot: Slot.Head,
    upgrades: sharedUpgrades.awakening,
    armorGroup: armorGroup.Awakening,
  },
  {
    displayName: "Miner's Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.miner,
    armorGroup: armorGroup.Miner,
  },
  {
    displayName: "Miner's Top",
    slot: Slot.Body,
    upgrades: sharedUpgrades.miner,
    armorGroup: armorGroup.Miner,
  },
  {
    displayName: "Miner's Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.miner,
    armorGroup: armorGroup.Miner,
  },
  {
    displayName: "Opal Earrings",
    slot: Slot.Head,
    armorGroup: armorGroup.Earrings,
    sortKey: "b",
    upgrades: [
      { [Ingredients.Opal]: 6, [Ingredients.Flint]: 5 },
      {
        [Ingredients.Opal]: 12,
        [Ingredients.Flint]: 10,
      },
      { [Ingredients.Opal]: 18, [Ingredients.Flint]: 15 },
      { [Ingredients.Opal]: 30, [Ingredients.Flint]: 25 },
    ],
  },
  {
    displayName: "Radiant Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.radiant,
    armorGroup: armorGroup.Radiant,
  },
  {
    displayName: "Radiant Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.radiant,
    armorGroup: armorGroup.Radiant,
  },
  {
    displayName: "Radiant Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.radiant,
    armorGroup: armorGroup.Radiant,
  },
  { displayName: "Ravio Hood", upgrades: null, slot: Slot.Head },
  {
    displayName: "Royal Guard Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.royal,
    armorGroup: armorGroup.RoyalGuard,
  },
  {
    displayName: "Royal Guard Cap",
    slot: Slot.Head,
    upgrades: sharedUpgrades.royal,
    armorGroup: armorGroup.RoyalGuard,
  },
  {
    displayName: "Royal Guard Uniform",
    slot: Slot.Body,
    upgrades: sharedUpgrades.royal,
    armorGroup: armorGroup.RoyalGuard,
  },
  {
    displayName: "Rubber Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.rubber,
    armorGroup: armorGroup.Rubber,
  },
  {
    displayName: "Rubber Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.rubber,
    armorGroup: armorGroup.Rubber,
  },
  {
    displayName: "Rubber Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.rubber,
    armorGroup: armorGroup.Rubber,
  },
  {
    displayName: "Ruby Circlet",
    slot: Slot.Head,
    armorGroup: armorGroup.Circlet,
    sortKey: "b",
    upgrades: [
      { [Ingredients.Ruby]: 2, [Ingredients.Flint]: 3 },
      {
        [Ingredients.Ruby]: 4,
        [Ingredients.Flint]: 5,
      },
      { [Ingredients.Ruby]: 6, [Ingredients.StarFragment]: 1 },
      {
        [Ingredients.Ruby]: 10,
        [Ingredients.StarFragment]: 2,
      },
    ],
  },
  {
    displayName: "Sand Boots",
    slot: Slot.Legs,
    armorGroup: armorGroup.Puff,
    sortKey: "a",
    upgrades: [
      { [Ingredients.HightailLizard]: 3 },
      {
        [Ingredients.GibdoBone]: 20,
        [Ingredients.SwiftCarrot]: 5,
      },
      {
        [Ingredients.GibdoGuts]: 5,
        [Ingredients.Rushroom]: 10,
        [Ingredients.MoldugaFin]: 5,
      },
      {
        [Ingredients.MoldugaGuts]: 5,
        [Ingredients.SwiftViolet]: 10,
        [Ingredients.HeartyLizard]: 5,
      },
    ],
  },
  {
    displayName: "Sapphire Circlet",
    slot: Slot.Head,
    armorGroup: armorGroup.Circlet,
    sortKey: "c",
    upgrades: [
      { [Ingredients.Sapphire]: 2, [Ingredients.Flint]: 3 },
      {
        [Ingredients.Sapphire]: 4,
        [Ingredients.Flint]: 5,
      },
      { [Ingredients.Sapphire]: 6, [Ingredients.StarFragment]: 1 },
      {
        [Ingredients.Sapphire]: 10,
        [Ingredients.StarFragment]: 2,
      },
    ],
  },
  {
    displayName: "Sheik's Mask",
    slot: Slot.Head,
    armorGroup: armorGroup.Sheik,
    upgrades: [
      { [Ingredients.SilentPrincess]: 1, [Ingredients.StarFragment]: 1 },
      { [Ingredients.SilentPrincess]: 2, [Ingredients.StarFragment]: 2 },
      { [Ingredients.SilentPrincess]: 4, [Ingredients.StarFragment]: 3 },
      { [Ingredients.SilentPrincess]: 8, [Ingredients.StarFragment]: 4 },
    ],
  },
  {
    displayName: "Snow Boots",
    slot: Slot.Legs,
    armorGroup: armorGroup.Puff,
    sortKey: "b",
    upgrades: [
      { [Ingredients.HightailLizard]: 3 },
      {
        [Ingredients.OctorokTentacle]: 5,
        [Ingredients.SwiftCarrot]: 5,
      },
      { [Ingredients.OctoBalloon]: 5, [Ingredients.Rushroom]: 20 },
      { [Ingredients.NaydrasScale]: 2, [Ingredients.SwiftViolet]: 20 },
    ],
  },
  {
    displayName: "Snowquill Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.snowquill,
    armorGroup: armorGroup.Snowquill,
  },
  {
    displayName: "Snowquill Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.snowquill,
    armorGroup: armorGroup.Snowquill,
  },
  {
    displayName: "Snowquill Tunic",
    slot: Slot.Body,
    upgrades: sharedUpgrades.snowquill,
    armorGroup: armorGroup.Snowquill,
  },
  {
    displayName: "Soldier's Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.soldier,
    armorGroup: armorGroup.Soldier,
  },
  {
    displayName: "Soldier's Greaves",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.soldier,
    armorGroup: armorGroup.Soldier,
  },
  {
    displayName: "Soldier's Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.soldier,
    armorGroup: armorGroup.Soldier,
  },
  {
    displayName: "Stealth Chest Guard",
    slot: Slot.Body,
    upgrades: sharedUpgrades.stealth,
    armorGroup: armorGroup.Stealth,
  },
  {
    displayName: "Stealth Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.stealth,
    armorGroup: armorGroup.Stealth,
  },
  {
    displayName: "Stealth Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.stealth,
    armorGroup: armorGroup.Stealth,
  },
  { displayName: "Tingle's Hood", upgrades: null, slot: Slot.Head },
  { displayName: "Tingle's Shirt", upgrades: null, slot: Slot.Body },
  { displayName: "Tingle's Tights", upgrades: null, slot: Slot.Legs },
  {
    displayName: "Topaz Earrings",
    slot: Slot.Head,
    armorGroup: armorGroup.Earrings,
    sortKey: "a",
    upgrades: [
      { [Ingredients.Topaz]: 2, [Ingredients.Flint]: 3 },
      {
        [Ingredients.Topaz]: 4,
        [Ingredients.Flint]: 5,
      },
      { [Ingredients.Topaz]: 6, [Ingredients.StarFragment]: 1 },
      {
        [Ingredients.Topaz]: 10,
        [Ingredients.StarFragment]: 2,
      },
    ],
  },
  {
    displayName: "Trousers of Awakening",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.awakening,
    armorGroup: armorGroup.Awakening,
  },
  {
    displayName: "Trousers of the Hero",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.hero,
    armorGroup: armorGroup.Hero,
  },
  {
    displayName: "Trousers of the Sky",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.sky,
    armorGroup: armorGroup.Sky,
  },
  {
    displayName: "Trousers of the Wild",
    slot: Slot.Legs,
    upgrades: wild("Dinraal"),
    armorGroup: armorGroup.Wild,
  },
  {
    displayName: "Trousers of the Wind",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.wind,
    armorGroup: armorGroup.Wind,
  },
  {
    displayName: "Trousers of Time",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.time,
    armorGroup: armorGroup.Time,
  },
  {
    displayName: "Trousers of Twilight",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.twilight,
    armorGroup: armorGroup.Twilight,
  },
  {
    displayName: "Tunic of Awakening",
    slot: Slot.Body,
    upgrades: sharedUpgrades.awakening,
    armorGroup: armorGroup.Awakening,
  },
  {
    displayName: "Tunic of Memories",
    slot: Slot.Body,
    armorGroup: armorGroup.Champion,
    sortKey: "a",
    upgrades: [
      { [Ingredients.SilentPrincess]: 3, [Ingredients.LightDragonsScale]: 1 },
      {
        [Ingredients.SilentPrincess]: 3,
        [Ingredients.LightDragonsTalon]: 1,
        [Ingredients.FaroshsHorn]: 2,
      },
      {
        [Ingredients.SilentPrincess]: 5,
        [Ingredients.ShardofLightDragonsFang]: 1,
        [Ingredients.NaydrasHorn]: 2,
      },
      {
        [Ingredients.SilentPrincess]: 10,
        [Ingredients.LightDragonHorn]: 1,
        [Ingredients.DinraalsHorn]: 2,
      },
    ],
  },
  {
    displayName: "Tunic of the Depths",
    slot: Slot.Body,
    upgrades: sharedUpgrades.depths,
    armorGroup: armorGroup.Depths,
  },
  {
    displayName: "Tunic of the Hero",
    slot: Slot.Body,
    upgrades: sharedUpgrades.hero,
    armorGroup: armorGroup.Hero,
  },
  {
    displayName: "Tunic of the Sky",
    slot: Slot.Body,
    upgrades: sharedUpgrades.sky,
    armorGroup: armorGroup.Sky,
  },
  {
    displayName: "Tunic of the Wild",
    slot: Slot.Body,
    upgrades: wild("Naydra"),
    armorGroup: armorGroup.Wild,
  },
  {
    displayName: "Tunic of the Wind",
    slot: Slot.Body,
    upgrades: sharedUpgrades.wind,
    armorGroup: armorGroup.Wind,
  },
  {
    displayName: "Tunic of Time",
    slot: Slot.Body,
    upgrades: sharedUpgrades.time,
    armorGroup: armorGroup.Time,
  },
  {
    displayName: "Tunic of Twilight",
    slot: Slot.Body,
    upgrades: sharedUpgrades.twilight,
    armorGroup: armorGroup.Twilight,
  },
  {
    displayName: "Vah Medoh Divine Helm",
    slot: Slot.Head,
    armorGroup: armorGroup.Divine,
    sortKey: "a",
    upgrades: [
      { [Ingredients.Sapphire]: 1, [Ingredients.Zonaite]: 5 },
      {
        [Ingredients.Sapphire]: 4,
        [Ingredients.Zonaite]: 10,
      },
      {
        [Ingredients.Sapphire]: 6,
        [Ingredients.LargeZonaite]: 5,
        [Ingredients.Dazzlefruit]: 5,
      },
      {
        [Ingredients.Sapphire]: 10,
        [Ingredients.LargeZonaite]: 10,
        [Ingredients.Dazzlefruit]: 10,
      },
    ],
  },
  {
    displayName: "Vah Naboris Divine Helm",
    slot: Slot.Head,
    armorGroup: armorGroup.Divine,
    sortKey: "d",
    upgrades: [
      { [Ingredients.Topaz]: 1, [Ingredients.Zonaite]: 5 },
      {
        [Ingredients.Topaz]: 4,
        [Ingredients.Zonaite]: 10,
      },
      {
        [Ingredients.Topaz]: 6,
        [Ingredients.LargeZonaite]: 5,
        [Ingredients.Dazzlefruit]: 5,
      },
      {
        [Ingredients.Topaz]: 10,
        [Ingredients.LargeZonaite]: 10,
        [Ingredients.Dazzlefruit]: 10,
      },
    ],
  },
  {
    displayName: "Vah Rudania Divine Helm",
    slot: Slot.Head,
    armorGroup: armorGroup.Divine,
    sortKey: "b",
    upgrades: [
      { [Ingredients.Ruby]: 1, [Ingredients.Zonaite]: 5 },
      {
        [Ingredients.Ruby]: 4,
        [Ingredients.Zonaite]: 10,
      },
      {
        [Ingredients.Ruby]: 6,
        [Ingredients.LargeZonaite]: 5,
        [Ingredients.Dazzlefruit]: 5,
      },
      {
        [Ingredients.Ruby]: 10,
        [Ingredients.LargeZonaite]: 10,
        [Ingredients.Dazzlefruit]: 10,
      },
    ],
  },
  {
    displayName: "Vah Ruta Divine Helm",
    slot: Slot.Head,
    armorGroup: armorGroup.Divine,
    sortKey: "c",
    upgrades: [
      { [Ingredients.Opal]: 5, [Ingredients.Zonaite]: 5 },
      {
        [Ingredients.Opal]: 10,
        [Ingredients.Zonaite]: 10,
      },
      {
        [Ingredients.Opal]: 15,
        [Ingredients.LargeZonaite]: 5,
        [Ingredients.Dazzlefruit]: 5,
      },
      {
        [Ingredients.Opal]: 25,
        [Ingredients.LargeZonaite]: 10,
        [Ingredients.Dazzlefruit]: 10,
      },
    ],
  },
  {
    displayName: "Yiga Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.yiga,
    armorGroup: armorGroup.Yiga,
  },
  {
    displayName: "Yiga Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.yiga,
    armorGroup: armorGroup.Yiga,
  },
  {
    displayName: "Yiga Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.yiga,
    armorGroup: armorGroup.Yiga,
  },
  { displayName: "Zant's Helmet", upgrades: null, slot: Slot.Head },
  {
    displayName: "Zonaite Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.zonaite,
    armorGroup: armorGroup.Zonaite,
  },
  {
    displayName: "Zonaite Shin Guards",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.zonaite,
    armorGroup: armorGroup.Zonaite,
  },
  {
    displayName: "Zonaite Waistguard",
    slot: Slot.Body,
    upgrades: sharedUpgrades.zonaite,
    armorGroup: armorGroup.Zonaite,
  },
  {
    displayName: "Zora Armor",
    upgrades: sharedUpgrades.zora,
    armorGroup: armorGroup.Zora,

    slot: Slot.Body,
  },
  {
    displayName: "Zora Greaves",
    upgrades: sharedUpgrades.zora,
    armorGroup: armorGroup.Zora,

    slot: Slot.Legs,
  },
  {
    displayName: "Zora Helm",
    upgrades: sharedUpgrades.zora,
    armorGroup: armorGroup.Zora,

    slot: Slot.Head,
  },
  { displayName: "Archaic Legwear", upgrades: null, slot: Slot.Legs },
  { displayName: "Archaic Tunic", upgrades: null, slot: Slot.Body },
  { displayName: "Archaic Warm Greaves", upgrades: null, slot: Slot.Legs },
  { displayName: "Bokoblin Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Cece Hat", upgrades: null, slot: Slot.Head },
  { displayName: "Dark Hood", upgrades: null, slot: Slot.Head },
  { displayName: "Dark Trousers", upgrades: null, slot: Slot.Legs },
  { displayName: "Dark Tunic", upgrades: null, slot: Slot.Body },
  { displayName: "Evil Spirit Armor", upgrades: null, slot: Slot.Body },
  { displayName: "Evil Spirit Greaves", upgrades: null, slot: Slot.Legs },
  { displayName: "Evil Spirit Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Horriblin Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Korok Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Lizalfos Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Lynel Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Midna's Helmet", upgrades: null, slot: Slot.Head },
  { displayName: "Moblin Mask", upgrades: null, slot: Slot.Head },
  { displayName: "Mystic Robe", upgrades: null, slot: Slot.Body },
  { displayName: "Phantom Armor", upgrades: null, slot: Slot.Body },
  { displayName: "Phantom Greaves", upgrades: null, slot: Slot.Legs },
  { displayName: "Phantom Helm", upgrades: null, slot: Slot.Head },
  { displayName: "Thunder Helm", slot: Slot.Head, upgrades: null },
  { displayName: "Well-Worn Hair Band", upgrades: null, slot: Slot.Head },
]

export const setData: { [key in armorGroup]: { displayName: string } } = {
  [armorGroup.Ancient]: { displayName: "Ancient Armor" },
  [armorGroup.Barbarian]: { displayName: "Barbarian Armor" },
  [armorGroup.Charged]: { displayName: "Charged Armor" },
  [armorGroup.Climber]: { displayName: "Climbing Gear" },
  [armorGroup.Depths]: { displayName: "Armor of the Depths" },
  [armorGroup.Divine]: { displayName: "Divine Beast Armor" },
  [armorGroup.Fierce]: { displayName: "Fierce Deity Armor" },
  [armorGroup.Flamebreaker]: { displayName: "Flamebreaker Armor" },
  [armorGroup.Hylian]: { displayName: "Hylian Armor" },
  [armorGroup.Radiant]: { displayName: "Radiant Armor" },
  [armorGroup.RoyalGuard]: { displayName: "Royal Guard Armor" },
  [armorGroup.Sheik]: { displayName: "Sheik Armor" },
  [armorGroup.Snowquill]: { displayName: "Snowquill Armor" },
  [armorGroup.Soldier]: { displayName: "Soldier Armor" },
  [armorGroup.Stealth]: { displayName: "Stealth Armor" },
  [armorGroup.Wild]: { displayName: "Armor of the Wild" },
  [armorGroup.Yiga]: { displayName: "Yiga Clan Armor" },
  [armorGroup.Zonaite]: { displayName: "Zonaite Armor" },
  [armorGroup.Zora]: { displayName: "Zora Armor" },
  [armorGroup.Voe]: { displayName: "Voe Armor" },
  [armorGroup.Rubber]: { displayName: "Rubber Armor" },
  [armorGroup.Froggy]: { displayName: "Froggy Armor" },
  [armorGroup.Glide]: { displayName: "Glide Armor" },
  [armorGroup.Miner]: { displayName: "Miner's Armor" },
  [armorGroup.Ember]: { displayName: "Ember Armor" },
  [armorGroup.Frostbite]: { displayName: "Frostbite Armor" },
  [armorGroup.Circlet]: { displayName: "Circlets" },
  [armorGroup.Earrings]: { displayName: "Earrings" },
  [armorGroup.Puff]: { displayName: "Boots" },
  [armorGroup.Champion]: { displayName: "Champion's Tunics" },
  [armorGroup.Awakening]: { displayName: "Armor of Awakening" },
  [armorGroup.Hero]: { displayName: "Hero's Armor" },
  [armorGroup.Time]: { displayName: "Armor of Time" },
  [armorGroup.Wind]: { displayName: "Armor of Wind" },
  [armorGroup.Twilight]: { displayName: "Twilight Armor" },
  [armorGroup.Sky]: { displayName: "Sky Armor" },
}
