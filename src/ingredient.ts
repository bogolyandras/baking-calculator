export abstract class Ingredient {

    public readonly Name: string

    protected constructor(name: string) {
        this.Name = name
    }

}

/**
 * Ingredients which absorbs water.
 * Wheat, salt, yeast.
 */
export class WaterAbsorberIngredient extends Ingredient {

    public readonly WaterAbsorbingRatio: number

    constructor(name: string, waterAbsorbingRatio: number) {
        super(name)
        this.WaterAbsorbingRatio = waterAbsorbingRatio
    }

}

/**
 * Ingredients which hold water.
 * Fats or water in itself.
 */
export class WaterProviderIngredient extends Ingredient {

    public readonly WaterRatio: number

    constructor(name: string, waterRatio: number) {
        super(name)
        this.WaterRatio = waterRatio
    }

}
