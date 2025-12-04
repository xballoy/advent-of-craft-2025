import {Toy} from "./Toy";

export class Wishlist {
    constructor(
        private readonly firstChoice: Toy,
        private readonly secondChoice: Toy,
        private readonly thirdChoice: Toy
    ) {}

    get choices(): Toy[] {
        return [this.firstChoice, this.secondChoice, this.thirdChoice];
    }
}