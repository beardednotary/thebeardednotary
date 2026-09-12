// Federal holidays for TILA/Regulation Z rescission counting purposes (12 CFR 1026.2(a)(6)).
// Returns the ACTUAL legal holiday date for a given year — not the Friday/Monday "observed"
// shift banks use when a fixed-date holiday falls on a weekend. Reg Z's official interpretation
// of 1026.2(a)(6) excludes only the actual holiday date; an observed shift day still counts as
// a business day. Computed by formula (nth-weekday-of-month / last-weekday-of-month) rather than
// a hardcoded per-year table, so this never needs annual maintenance.

function nthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month, 1);
  const firstWeekday = first.getDay();
  const offset = (weekday - firstWeekday + 7) % 7;
  const day = 1 + offset + (n - 1) * 7;
  return new Date(year, month, day);
}

function lastWeekdayOfMonth(year: number, month: number, weekday: number): Date {
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  const last = new Date(year, month, lastDayOfMonth);
  const lastWeekday = last.getDay();
  const offset = (lastWeekday - weekday + 7) % 7;
  return new Date(year, month, lastDayOfMonth - offset);
}

const MON = 1;
const THU = 4;

export function getFederalHolidays(year: number): Date[] {
  return [
    new Date(year, 0, 1), // New Year's Day - Jan 1
    nthWeekdayOfMonth(year, 0, MON, 3), // MLK Day - 3rd Monday of January
    nthWeekdayOfMonth(year, 1, MON, 3), // Washington's Birthday - 3rd Monday of February
    lastWeekdayOfMonth(year, 4, MON), // Memorial Day - last Monday of May
    new Date(year, 5, 19), // Juneteenth - June 19
    new Date(year, 6, 4), // Independence Day - July 4
    nthWeekdayOfMonth(year, 8, MON, 1), // Labor Day - 1st Monday of September
    nthWeekdayOfMonth(year, 9, MON, 2), // Columbus Day - 2nd Monday of October
    new Date(year, 10, 11), // Veterans Day - November 11
    nthWeekdayOfMonth(year, 10, THU, 4), // Thanksgiving - 4th Thursday of November
    new Date(year, 11, 25), // Christmas Day - December 25
  ];
}

function isSameDate(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function isFederalHoliday(date: Date, holidayCache: Map<number, Date[]>): boolean {
  const year = date.getFullYear();
  if (!holidayCache.has(year)) {
    holidayCache.set(year, getFederalHolidays(year));
  }
  const holidays = holidayCache.get(year)!;
  return holidays.some((holiday) => isSameDate(holiday, date));
}

/**
 * Is this date a "business day" for TILA/Reg Z rescission counting?
 * Saturdays count. Sundays and the 11 actual federal holidays do not.
 */
export function isRescissionBusinessDay(date: Date, holidayCache: Map<number, Date[]> = new Map()): boolean {
  if (date.getDay() === 0) return false; // Sunday
  if (isFederalHoliday(date, holidayCache)) return false;
  return true;
}

/**
 * Given a trigger date (the later of: signing date, TIL disclosure received, Notice of Right
 * to Cancel received), compute the date the 3-business-day rescission period expires at
 * midnight, per Reg Z 1026.23. The trigger date itself is day zero and does not count.
 */
export function computeRescissionDeadline(triggerDate: Date): Date {
  const holidayCache = new Map<number, Date[]>();
  let counted = 0;
  const cursor = new Date(triggerDate.getFullYear(), triggerDate.getMonth(), triggerDate.getDate());

  while (counted < 3) {
    cursor.setDate(cursor.getDate() + 1);
    if (isRescissionBusinessDay(cursor, holidayCache)) {
      counted += 1;
    }
  }

  return cursor;
}
