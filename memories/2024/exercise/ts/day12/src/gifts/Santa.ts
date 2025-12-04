import {Child} from './Child';
import {Toy} from './Toy';
import {ChildRepository} from "./ChildRepository";

export class Santa {
    constructor(
        private readonly repository: ChildRepository,
    ) {
    }

    addChild(child: Child): void {
        this.repository.save(child);
    }

    chooseToyForChild(childName: string): Toy | undefined {
        const child = this.repository.findByName(childName);
        if (!child) {
            throw new Error('No such child found');
        }
        return child.behavior.selectToy(child.wishlist)
    }
}