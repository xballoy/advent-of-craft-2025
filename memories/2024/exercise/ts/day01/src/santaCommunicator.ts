import {Logger} from "./logger";
import {Reindeer} from "./reindeer";
import {daysBeforeChristmas} from "./christmas";

export class SantaCommunicator {
    private readonly numberOfDaysToRest: number;
    private readonly daysBeforeChristmasProvider: () => number;

    constructor(numberOfDaysToRest: number, {
        daysBeforeChristmasProvider = daysBeforeChristmas
    }: { daysBeforeChristmasProvider?: () => number } = {}) {
        this.numberOfDaysToRest = numberOfDaysToRest;
        this.daysBeforeChristmasProvider = daysBeforeChristmasProvider;
    }

    public composeMessage({
                              reindeerName,
                              numbersOfDaysForComingBack,
                              currentLocation
                          }: Reindeer): string {
        const daysBeforeReturn = this.daysBeforeReturn(numbersOfDaysForComingBack);
        return `Dear ${reindeerName}, please return from ${currentLocation} in ${daysBeforeReturn} day(s) to be ready and rest before Christmas.`;
    }

    public isOverdue({
                         reindeerName,
                         numbersOfDaysForComingBack,
                         currentLocation
                     }: Reindeer, logger: Logger): boolean {
        const overdueDays = this.daysBeforeReturn(numbersOfDaysForComingBack);
        const isOverdue = overdueDays <= 0;
        if (isOverdue) {
            logger.log(`Overdue for ${reindeerName} located ${currentLocation}.`);
        }

        return isOverdue;
    }

    private daysBeforeReturn(numbersOfDaysForComingBack: number): number {
        return this.daysBeforeChristmasProvider() - numbersOfDaysForComingBack - this.numberOfDaysToRest;
    }
}