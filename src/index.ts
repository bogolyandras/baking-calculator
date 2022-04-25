import {Fermentation} from "./fermentation";
import {Ingredients} from "./ingredients";

async function run() {
    const fermentation = new Fermentation();
    fermentation.addFlour(Ingredients.WHITE_FLOUR, 400)
    fermentation.autoAdjustSalt()
    fermentation.autoAdjustWater()
    fermentation.autoAdjustYeast()
    console.log(fermentation.toString())
}

run().then(r => {});
