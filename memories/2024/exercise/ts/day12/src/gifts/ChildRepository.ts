import {Child} from "./Child";

export type ChildRepository = {
    save(child: Child): void;
    findByName(name: string): Child | undefined;
}

export class InMemoryChildRepository implements ChildRepository {
    private readonly children: Child[] = [];

    save(child: Child): void {
        this.children.push(child);
    }

    findByName(name: string): Child | undefined {
        return this.children.find(c => c.name === name);
    }
}