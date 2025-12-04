import {Toy} from "./Toy";

export type Behavior = {
    selectToy(wishList: Toy[]): Toy | null;
}

export class NaughtyBehavior implements Behavior {
    selectToy(wishlist: Toy[]): Toy | undefined {
        return wishlist[2];
    }
}

export class NiceBehavior implements Behavior {
    selectToy(wishlist: Toy[]): Toy | undefined {
        return wishlist[1];
    }
}

export class VeryNiceBehavior implements Behavior {
    selectToy(wishlist: Toy[]): Toy | undefined {
        return wishlist[0];
    }
}