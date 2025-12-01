import {SantaCommunicator} from "../src/santaCommunicator";
import {TestLogger} from "./doubles/testLogger";
import {Reindeer} from "../src/reindeer";

const numberOfDaysToRest = 2;
const numberOfDayBeforeChristmas = 24;

const dasher: Omit<Reindeer, 'numbersOfDaysForComingBack'> = {
    reindeerName: 'Dasher',
    currentLocation: 'North Pole',
};

describe('SantaCommunicator', () => {
    let communicator: SantaCommunicator;
    let logger: TestLogger;

    beforeEach(() => {
        communicator = new SantaCommunicator(numberOfDaysToRest, {daysBeforeChristmasProvider: () => numberOfDayBeforeChristmas});
        logger = new TestLogger();
    });

    test('composeMessage', () => {
        const message = communicator.composeMessage({...dasher, numbersOfDaysForComingBack: 5});
        expect(message).toEqual('Dear Dasher, please return from North Pole in 17 day(s) to be ready and rest before Christmas.');
    });

    test('shouldDetectOverdueReindeer', () => {
        const overdue = communicator.isOverdue({
            ...dasher,
            numbersOfDaysForComingBack: numberOfDayBeforeChristmas
        }, logger);

        expect(overdue).toBeTruthy();
        expect(logger.getLog()).toEqual('Overdue for Dasher located North Pole.');
    });

    test('shouldReturnFalseWhenNoOverdue', () => {
        const overdue = communicator.isOverdue({
            ...dasher,
            numbersOfDaysForComingBack: numberOfDayBeforeChristmas - numberOfDaysToRest - 1
        }, logger);
        expect(overdue).toBeFalsy();
    });
});