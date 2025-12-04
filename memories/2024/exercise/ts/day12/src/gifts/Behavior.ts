import {Toy} from "./Toy";
import {Wishlist} from "./Wishlist";

export type Behavior = {
    selectToy(wishList: Wishlist): Toy | null;
}

export class NaughtyBehavior implements Behavior {
    selectToy(wishlist: Wishlist): Toy | undefined {
        return wishlist[2];
    }
}

export class NiceBehavior implements Behavior {
    selectToy(wishlist: Wishlist): Toy | undefined {
        return wishlist[1];
    }
}

export class VeryNiceBehavior implements Behavior {
    selectToy(wishlist: Wishlist): Toy | undefined {
        return wishlist[0];
    }
}