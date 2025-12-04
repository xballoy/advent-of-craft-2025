import {Behavior} from "./Behavior";
import {Wishlist} from "./Wishlist";

export class Child {
    constructor(
        public readonly name: string,
        public readonly behavior: Behavior,
        public readonly wishlist: Wishlist
    ) {
    }
}