import dayjs, {Dayjs} from "dayjs";

export const daysBeforeChristmas = (today: Dayjs = dayjs()): number => {
    const currentYear = today.year();
    let christmas = dayjs(`${currentYear}-12-25`);

    if (today.isAfter(christmas)) {
        christmas = dayjs(`${currentYear + 1}-12-25`);
    }

    return christmas.diff(today, "day");
};
