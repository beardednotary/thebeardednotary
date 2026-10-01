// Prime event config. Update these for each event (July Prime Day, October Big Deal Days)
// and the banner, callouts, and deals page all follow. Dates are checked in the browser,
// so promos turn themselves off after EVENT_END even if the site isn't rebuilt.

export const PRIME_EVENT_NAME = 'Prime Big Deal Days';
export const PRIME_EVENT_DATES_LABEL = 'Oct 6–7';

// Promos start showing at PROMO_START and stop at EVENT_END (end of day Pacific).
export const PRIME_PROMO_START = new Date('2026-09-30T00:00:00-07:00');
export const PRIME_EVENT_START = new Date('2026-10-06T00:00:00-07:00');
export const PRIME_EVENT_END = new Date('2026-10-07T23:59:59-07:00');

export const PRIME_DEALS_PATH = '/prime-day-notary-deals';

// Prime membership signup (bounty-eligible). Swap in the exact bounty link from
// Associates Central > Promotions if it differs.
export const PRIME_SIGNUP_URL = 'https://www.amazon.com/amazonprime?tag=beardednotary-20';

export function isPrimePromoActive(now: Date = new Date()) {
  return now >= PRIME_PROMO_START && now <= PRIME_EVENT_END;
}

export function isPrimeEventLive(now: Date = new Date()) {
  return now >= PRIME_EVENT_START && now <= PRIME_EVENT_END;
}
