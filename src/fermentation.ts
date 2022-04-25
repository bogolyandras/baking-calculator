import {Ingredient, WaterAbsorberIngredient, WaterProviderIngredient} from "./ingredient";
import {Ingredients} from "./ingredients";

export class Fermentation {

    private flours : [WaterAbsorberIngredient, number][] = []
    private waters: [WaterProviderIngredient, number][] = []
    private salt: [WaterAbsorberIngredient, number] | null = null
    private yeast: [WaterAbsorberIngredient, number] | null = null

    public addFlour(ingredient: WaterAbsorberIngredient, weight: number): void {
        this.flours.push([ingredient, weight])
    }

    public autoAdjustSalt() {
        const flourWeight = this.getFlourWeight()
        this.salt = [Ingredients.SALT, flourWeight * 0.02]
    }

    public autoAdjustYeast() {
        const flourWeight = this.getFlourWeight()
        this.yeast = [Ingredients.YEAST, flourWeight * 0.01]
    }

    private getFlourWeight(): number {
        return this.flours
            .map((ingredient) => ingredient[1])
            .reduce((pre, curr) => pre + curr, 0)
    }

    public autoAdjustWater() {
        const neededWater = this.flours.map((ingredient) => {
            return ingredient[0].WaterAbsorbingRatio * ingredient[1]
        }).reduce((pre, curr) => pre + curr, 0)
        this.waters = [[Ingredients.WATER, neededWater]]
    }

    public toString(): string {
        let initialString = ''

        for (let flour of this.flours) {
            initialString += flour[0].Name + '\t' + flour[1] + 'g\n'
        }
        if (this.salt != null) {
            initialString += this.salt[0].Name + '\t' + this.salt[1] + 'g\n'
        }
        if (this.yeast != null) {
            initialString += this.yeast[0].Name + '\t' + this.yeast[1] + 'g\n'
        }
        for (let water of this.waters) {
            initialString += water[0].Name + '\t' + water[1] + 'g\n'
        }

        return initialString
    }

}
