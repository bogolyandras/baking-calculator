import {Ingredients} from "../src/ingredients";
import {Fermentation} from "../src/fermentation";

test('Is flour', () => {
    expect(Ingredients.WHITE_FLOUR.Name).toBe('White Flour')
})
