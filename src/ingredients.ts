import {WaterAbsorberIngredient, Ingredient, WaterProviderIngredient} from "./ingredient";

export class Ingredients {

    static readonly WHITE_FLOUR = new WaterAbsorberIngredient('White Flour', 0.6)
    static readonly WHOLE_GRAIN_FLOUR = new WaterAbsorberIngredient('Whole Grain Flour', 0.9)
    static readonly SALT = new WaterAbsorberIngredient('Salt', 1.0)
    static readonly YEAST = new WaterAbsorberIngredient('Yeast', 1.0)

    static readonly WATER = new WaterProviderIngredient('Water', 1.0)
    static readonly BUTTER = new WaterProviderIngredient('Water', 1.0)

}
