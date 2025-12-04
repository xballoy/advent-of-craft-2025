import {Child} from "./Child";

export class ChildRepository {
    private readonly children: Child[] = [];

    save(child: Child): void {
        this.children.push(child);
    }

    findByName(name: string): Child | undefined {
        return this.children.find(c => c.name === name);
    }
}