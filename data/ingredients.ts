import { Ingredient } from "@/types/data"

export const enum Ingredients {
  LizalfosHorn,
  LizalfosTalon,
  HyruleBass,
  BlueLizalfosHorn,
  LizalfosTail,
  HeartyBass,
  BlackLizalfosHorn,
  BlueLizalfosTail,
  Opal,
}

export const ingredientsData: { [key in Ingredients]: Ingredient } = {
  [Ingredients.LizalfosHorn]: { displayName: "Lizalfos Horn" },
  [Ingredients.LizalfosTalon]: { displayName: "Lizalfos Talon" },
  [Ingredients.HyruleBass]: { displayName: "Hyrule Bass" },
  [Ingredients.BlueLizalfosHorn]: { displayName: "Blue Lizalfos Horn" },
  [Ingredients.LizalfosTail]: { displayName: "Lizalfos Tail" },
  [Ingredients.HeartyBass]: { displayName: "Hearty Bass" },
  [Ingredients.BlackLizalfosHorn]: { displayName: "Black Lizalfos Horn" },
  [Ingredients.BlueLizalfosTail]: { displayName: "Blue Lizalfos Tail" },
  [Ingredients.Opal]: { displayName: "Opal" },
}
