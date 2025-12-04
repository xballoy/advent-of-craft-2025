import {Toy} from "../src/gifts/Toy";
import {Child} from "../src/gifts/Child";
import {Santa} from "../src/gifts/Santa";
import {NaughtyBehavior, NiceBehavior, VeryNiceBehavior} from "../src/gifts/Behavior";
import {ChildRepository} from "../src/gifts/ChildRepository";

describe("Santa's gift selection process", () => {
    const Playstation = new Toy('playstation');
    const Ball = new Toy('ball');
    const Plush = new Toy('plush');

    it('should give the third choice to a naughty child', () => {
        const bobby = new Child('bobby', new NaughtyBehavior(), [Playstation, Plush, Ball]);

        const santa = new Santa(new ChildRepository());
        santa.addChild(bobby);

        expect(santa.chooseToyForChild('bobby')).toBe(Ball);
    });

    it('should give the second choice to a nice child', () => {
        const bobby = new Child('bobby', new NiceBehavior(), [Playstation, Plush, Ball]);

        const santa = new Santa(new ChildRepository());
        santa.addChild(bobby);

        expect(santa.chooseToyForChild('bobby')).toBe(Plush);
    });

    it('should give the first choice to a very nice child', () => {
        const bobby = new Child('bobby', new VeryNiceBehavior(), [Playstation, Plush, Ball]);

        const santa = new Santa(new ChildRepository());
        santa.addChild(bobby);

        expect(santa.chooseToyForChild('bobby')).toBe(Playstation);
    });

    it('should throw an exception if the child does not exist', () => {
        const santa = new Santa(new ChildRepository());
        const bobby = new Child('bobby', new VeryNiceBehavior(), [Playstation, Plush, Ball]);

        santa.addChild(bobby);

        expect(() => santa.chooseToyForChild('alice')).toThrowError('No such child found');
    });
});
