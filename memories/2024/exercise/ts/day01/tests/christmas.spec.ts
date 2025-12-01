import dayjs from "dayjs";
import {daysBeforeChristmas} from "../src/christmas";

describe("daysBeforeChristmas", () => {
    test("returns days remaining when before Christmas", () => {
        const december1st = dayjs("2024-12-01");
        expect(daysBeforeChristmas(december1st)).toBe(24);
    });

    test("returns 0 on Christmas day", () => {
        const christmasDay = dayjs("2024-12-25");
        expect(daysBeforeChristmas(christmasDay)).toBe(0);
    });

    test("returns days until next Christmas when after Christmas", () => {
        const december26th = dayjs("2024-12-26");
        expect(daysBeforeChristmas(december26th)).toBe(364);
    });
});
