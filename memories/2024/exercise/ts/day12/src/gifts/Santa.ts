import {Child} from './Child';
import {Toy} from './Toy';
import {ChildRepository} from "./ChildRepository";
import {ToySelector} from "./ToySelector";

export class Santa {
    constructor(
        private readonly repository: ChildRepository,
        private readonly toySelector: ToySelector
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
        return this.toySelector.selectToy(child);
    }
}