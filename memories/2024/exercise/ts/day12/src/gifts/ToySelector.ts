import {Child} from "./Child";
import {Toy} from "./Toy";

export type ToySelector = {
    selectToy(child: Child): Toy | undefined;
}

export class BehaviorBasedToySelector implements ToySelector {
    selectToy(child: Child): Toy | undefined {
        return child.behavior.selectToy(child.wishlist.choices);
    }
}