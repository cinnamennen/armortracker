import { earrings, fierce, sharedUpgrades, wild } from "@/data/upgrades"

import { Armor, Slot } from "@/types/data"
import {Ingredients} from "@/data/ingredients";

export const armor: Armor[] = [
  {
    displayName: "Amber Earrings",
    slot: Slot.Head,
    upgrades: earrings(Ingredients.Amber),
  },
  { displayName: "Ancient Hero's Aspect", upgrades: null, slot: Slot.Head },
  {
    displayName: "Barbarian Helm",
    upgrades: sharedUpgrades.barbarian,
    slot: Slot.Head,
  },
  {
    displayName: "Barbarian Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.barbarian,
  },

  {
    displayName: "Barbarian Leg Wraps",
    upgrades: sharedUpgrades.barbarian,
    slot: Slot.Legs,
  },
  {
    displayName: "Cap of the Hero",
    slot: Slot.Head,
    upgrades: sharedUpgrades.hero,
  },
  {
    displayName: "Cap of the Sky",
    slot: Slot.Head,
    upgrades: sharedUpgrades.sky,
  },
  {
    displayName: "Cap of the Wild",
    slot: Slot.Head,
    upgrades: wild("Farosh"),
  },
  {
    displayName: "Cap of the Wind",
    slot: Slot.Head,
    upgrades: sharedUpgrades.wind,
  },
  {
    displayName: "Cap of Time",
    slot: Slot.Head,
    upgrades: sharedUpgrades.time,
  },
  {
    displayName: "Cap of Twilight",
    slot: Slot.Head,
    upgrades: sharedUpgrades.twilight,
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
  },
  {
    displayName: "Charged Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.charged,
  },
  {
    displayName: "Charged Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.charged,
  },
  {
    displayName: "Charged Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.charged,
  },
  {
    displayName: "Climber's Bandana",
    slot: Slot.Head,
    upgrades: sharedUpgrades.climber,
  },
  {
    displayName: "Climbing Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.climber,
  },
  {
    displayName: "Climbing Gear",
    slot: Slot.Body,
    upgrades: sharedUpgrades.climber,
  },
  {
    displayName: "Desert Voe Headband",
    slot: Slot.Head,
    upgrades: sharedUpgrades.voe,
  },
  {
    displayName: "Desert Voe Spaulder",
    slot: Slot.Body,
    upgrades: sharedUpgrades.voe,
  },
  {
    displayName: "Desert Voe Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.voe,
  },
  {
    displayName: "Diamond Circlet",
    slot: Slot.Head,
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
  },
  {
    displayName: "Ember Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.ember,
  },
  {
    displayName: "Ember Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.ember,
  },
  {
    displayName: "Fierce Deity Armor",
    slot: Slot.Body,
    upgrades: fierce("Naydra"),
  },
  {
    displayName: "Fierce Deity Boots",
    slot: Slot.Legs,
    upgrades: fierce("Farosh"),
  },
  {
    displayName: "Fierce Deity Mask",
    slot: Slot.Head,
    upgrades: fierce("Dinraal"),
  },
  {
    displayName: "Flamebreaker Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.flamebreaker,
  },
  {
    displayName: "Flamebreaker Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.flamebreaker,
  },
  {
    displayName: "Flamebreaker Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.flamebreaker,
  },
  {
    displayName: "Froggy Hood",
    slot: Slot.Head,
    upgrades: sharedUpgrades.froggy,
  },
  {
    displayName: "Froggy Leggings",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.froggy,
  },
  {
    displayName: "Froggy Sleeve",
    slot: Slot.Body,
    upgrades: sharedUpgrades.froggy,
  },
  {
    displayName: "Frostbite Headdress",
    slot: Slot.Head,
    upgrades: sharedUpgrades.frostbite,
  },
  {
    displayName: "Frostbite Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.frostbite,
  },
  {
    displayName: "Frostbite Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.frostbite,
  },
  {
    displayName: "Gaiters of the Depths",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.depths,
  },
  {
    displayName: "Glide Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.glide,
  },
  {
    displayName: "Glide Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.glide,
  },
  {
    displayName: "Glide Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.glide,
  },
  {
    displayName: "Hood of the Depths",
    slot: Slot.Head,
    upgrades: sharedUpgrades.depths,
  },
  {
    displayName: "Hylian Hood",
    slot: Slot.Head,
    upgrades: sharedUpgrades.hylian,
  },
  {
    displayName: "Hylian Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.hylian,
  },
  {
    displayName: "Hylian Tunic",
    slot: Slot.Body,
    upgrades: sharedUpgrades.hylian,
  },
  { displayName: "Lobster Shirt", upgrades: null, slot: Slot.Body },
  { displayName: "Majora's Mask", upgrades: null, slot: Slot.Head },
  {
    displayName: "Mask of Awakening",
    slot: Slot.Head,
    upgrades: sharedUpgrades.awakening,
  },
  {
    displayName: "Miner's Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.miner,
  },
  {
    displayName: "Miner's Top",
    slot: Slot.Body,
    upgrades: sharedUpgrades.miner,
  },
  {
    displayName: "Miner's Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.miner,
  },
  {
    displayName: "Opal Earrings",
    slot: Slot.Head,
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
  },
  {
    displayName: "Radiant Shirt",
    slot: Slot.Body,
    upgrades: sharedUpgrades.radiant,
  },
  {
    displayName: "Radiant Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.radiant,
  },
  { displayName: "Ravio Hood", upgrades: null, slot: Slot.Head },
  {
    displayName: "Royal Guard Boots",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.royal,
  },
  {
    displayName: "Royal Guard Cap",
    slot: Slot.Head,
    upgrades: sharedUpgrades.royal,
  },
  {
    displayName: "Royal Guard Uniform",
    slot: Slot.Body,
    upgrades: sharedUpgrades.royal,
  },
  {
    displayName: "Rubber Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.rubber,
  },
  {
    displayName: "Rubber Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.rubber,
  },
  {
    displayName: "Rubber Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.rubber,
  },
  {
    displayName: "Ruby Circlet",
    slot: Slot.Head,
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
  },
  {
    displayName: "Snowquill Trousers",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.snowquill,
  },
  {
    displayName: "Snowquill Tunic",
    slot: Slot.Body,
    upgrades: sharedUpgrades.snowquill,
  },
  {
    displayName: "Soldier's Armor",
    slot: Slot.Body,
    upgrades: sharedUpgrades.soldier,
  },
  {
    displayName: "Soldier's Greaves",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.soldier,
  },
  {
    displayName: "Soldier's Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.soldier,
  },
  {
    displayName: "Stealth Chest Guard",
    slot: Slot.Body,
    upgrades: sharedUpgrades.stealth,
  },
  {
    displayName: "Stealth Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.stealth,
  },
  {
    displayName: "Stealth Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.stealth,
  },
  { displayName: "Tingle's Hood", upgrades: null, slot: Slot.Head },
  { displayName: "Tingle's Shirt", upgrades: null, slot: Slot.Body },
  { displayName: "Tingle's Tights", upgrades: null, slot: Slot.Legs },
  {
    displayName: "Topaz Earrings",
    slot: Slot.Head,
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
  },
  {
    displayName: "Trousers of the Hero",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.hero,
  },
  {
    displayName: "Trousers of the Sky",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.sky,
  },
  {
    displayName: "Trousers of the Wild",
    slot: Slot.Legs,
    upgrades: wild("Dinraal"),
  },
  {
    displayName: "Trousers of the Wind",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.wind,
  },
  {
    displayName: "Trousers of Time",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.time,
  },
  {
    displayName: "Trousers of Twilight",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.twilight,
  },
  {
    displayName: "Tunic of Awakening",
    slot: Slot.Body,
    upgrades: sharedUpgrades.awakening,
  },
  {
    displayName: "Tunic of Memories",
    slot: Slot.Body,
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
  },
  {
    displayName: "Tunic of the Hero",
    slot: Slot.Body,
    upgrades: sharedUpgrades.hero,
  },
  {
    displayName: "Tunic of the Sky",
    slot: Slot.Body,
    upgrades: sharedUpgrades.sky,
  },
  {
    displayName: "Tunic of the Wild",
    slot: Slot.Body,
    upgrades: wild("Naydra"),
  },
  {
    displayName: "Tunic of the Wind",
    slot: Slot.Body,
    upgrades: sharedUpgrades.wind,
  },
  {
    displayName: "Tunic of Time",
    slot: Slot.Body,
    upgrades: sharedUpgrades.time,
  },
  {
    displayName: "Tunic of Twilight",
    slot: Slot.Body,
    upgrades: sharedUpgrades.twilight,
  },
  {
    displayName: "Vah Medoh Divine Helm",
    slot: Slot.Head,
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
  },
  {
    displayName: "Yiga Mask",
    slot: Slot.Head,
    upgrades: sharedUpgrades.yiga,
  },
  {
    displayName: "Yiga Tights",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.yiga,
  },
  { displayName: "Zant's Helmet", upgrades: null, slot: Slot.Head },
  {
    displayName: "Zonaite Helm",
    slot: Slot.Head,
    upgrades: sharedUpgrades.zonaite,
  },
  {
    displayName: "Zonaite Shin Guards",
    slot: Slot.Legs,
    upgrades: sharedUpgrades.zonaite,
  },
  {
    displayName: "Zonaite Waistguard",
    slot: Slot.Body,
    upgrades: sharedUpgrades.zonaite,
  },
  {
    displayName: "Zora Armor",
    upgrades: sharedUpgrades.zora,
    slot: Slot.Body,
  },
  {
    displayName: "Zora Greaves",
    upgrades: sharedUpgrades.zora,
    slot: Slot.Legs,
  },
  {
    displayName: "Zora Helm",
    upgrades: sharedUpgrades.zora,
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
  { displayName: "Thunder Helm", upgrades: null, slot: Slot.Head },
  { displayName: "Well-Worn Hair Band", upgrades: null, slot: Slot.Head },
]
