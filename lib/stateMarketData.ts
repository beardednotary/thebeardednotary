export type StateMarketData = {
  slug: string;
  tier: 'low' | 'standard' | 'high' | 'market-rate';
  typicalMobileRate: string;
  typicalLoanSigningRate: string;
  majorMetros: string[];
  strategyNote: string;
  metroNote: string;
};

// Pricing guidance only — not legal advice, and not a claim about what any individual notary charges.
// Ranges are estimates built from the state's fee cap tier and the national pricing patterns already
// published on /how-much-to-charge-mobile-notary. Treat as a starting point, not a survey result.
export const stateMarketData: StateMarketData[] = [
  {
    slug: 'florida',
    tier: 'standard',
    typicalMobileRate: '$50-$95',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
    strategyNote:
      "Florida's $10 base fee (or $25 for online notarization) covers a real slice of the job, so you're not relying on travel fees alone the way a $2 or $5 state would.",
    metroNote:
      'South Florida markets (Miami, Fort Lauderdale) tend to run toward the higher end of the range given cost of living and signing volume; smaller inland markets often land closer to the lower end.',
  },
  {
    slug: 'california',
    tier: 'high',
    typicalMobileRate: '$65-$110',
    typicalLoanSigningRate: '$125-$200',
    majorMetros: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
    strategyNote:
      "California's $15 fee cap is one of the highest in the country, which gives you more room to build a real quote from the notarization itself instead of leaning entirely on travel charges.",
    metroNote:
      'Los Angeles and the Bay Area regularly support the top of this range and beyond given cost of living; Central Valley and inland markets tend to run lower.',
  },
  {
    slug: 'texas',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
    strategyNote:
      "Texas allows notaries to charge travel fees on top of the $6 base fee, which is where most of a Texas mobile notary's local appointment income actually comes from.",
    metroNote:
      'Austin and Dallas-Fort Worth signing volume tends to support pricing at the higher end of the range; smaller Texas markets often settle lower.',
  },
  {
    slug: 'new-york',
    tier: 'low',
    typicalMobileRate: '$55-$100',
    typicalLoanSigningRate: '$125-$200',
    majorMetros: ['New York City', 'Buffalo', 'Rochester', 'Albany'],
    strategyNote:
      "New York's $2 fee cap is among the lowest in the country, so travel fees carry almost the entire price of a local appointment here. Build your quote around travel time, not the notarial fee.",
    metroNote:
      'New York City and the surrounding metro area regularly justify pricing well above the low end given cost of living, traffic, and parking realities.',
  },
  {
    slug: 'georgia',
    tier: 'low',
    typicalMobileRate: '$45-$85',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Atlanta', 'Savannah', 'Augusta', 'Columbus'],
    strategyNote:
      "At $2 per signature, Georgia has one of the lowest notarial fee caps in the country. Nearly all of your local appointment income needs to come from a clearly stated travel fee.",
    metroNote:
      'Atlanta-area signing volume and traffic support pricing at the higher end of the range; rural Georgia markets typically run lower.',
  },
  {
    slug: 'north-carolina',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
    strategyNote:
      "North Carolina's $5 base fee (with a higher $25 cap for electronic notarization) is a moderate starting point — travel fees still do most of the work on a typical local quote.",
    metroNote:
      'Charlotte and the Raleigh-Durham Research Triangle tend to support pricing toward the top of the range given signing demand and cost of living.',
  },
  {
    slug: 'illinois',
    tier: 'low',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$110-$185',
    majorMetros: ['Chicago', 'Aurora', 'Naperville', 'Springfield'],
    strategyNote:
      "Illinois has the lowest notarial fee cap in the country at $1 per signature, so your entire local pricing strategy has to be built around travel fees, not the notarization itself.",
    metroNote:
      'Chicago and the collar suburbs regularly support pricing at the top of the range and above given cost of living and traffic; downstate Illinois markets run considerably lower.',
  },
  {
    slug: 'pennsylvania',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
    strategyNote:
      "Pennsylvania's $5 fee cap is standard, and travel fees are common practice here, which is where most of a working notary's local income comes from.",
    metroNote:
      'Philadelphia and Pittsburgh support pricing toward the higher end of the range; rural Pennsylvania markets tend to run lower.',
  },
  {
    slug: 'ohio',
    tier: 'market-rate',
    typicalMobileRate: '$50-$95',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
    strategyNote:
      "Ohio does not cap the notarial fee, so pricing is set by the local market rather than a state maximum. That gives you more flexibility, but also means you need to know what your specific area actually supports.",
    metroNote:
      'Columbus and Cincinnati signing volume tends to support pricing at the higher end of the range; smaller Ohio markets often settle lower.',
  },
  {
    slug: 'virginia',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Richmond', 'Virginia Beach', 'Arlington', 'Norfolk'],
    strategyNote:
      "Virginia's $5 base fee (with a $25 cap for electronic notarization) is standard, so travel fees still make up most of a typical local quote.",
    metroNote:
      'Northern Virginia (Arlington, Alexandria) supports pricing well above the low end given proximity to Washington, D.C. and higher cost of living.',
  },
  {
    slug: 'michigan',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing'],
    strategyNote:
      "Michigan's $10 fee cap is a standard rate nationally, giving you a reasonable base to build a local quote around before adding travel.",
    metroNote:
      'Metro Detroit and Ann Arbor tend to support pricing toward the higher end of the range; smaller Michigan markets often run lower.',
  },
  {
    slug: 'arizona',
    tier: 'standard',
    typicalMobileRate: '$50-$90',
    typicalLoanSigningRate: '$100-$175',
    majorMetros: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'],
    strategyNote:
      "Arizona's $10 fee cap is standard, and the Phoenix metro's steady growth has kept mobile notary and signing demand fairly strong.",
    metroNote:
      'The greater Phoenix area (Phoenix, Scottsdale, Mesa) tends to support pricing at the higher end of the range given growth and signing volume.',
  },
  {
    slug: 'washington',
    tier: 'high',
    typicalMobileRate: '$60-$105',
    typicalLoanSigningRate: '$125-$200',
    majorMetros: ['Seattle', 'Spokane', 'Tacoma', 'Bellevue'],
    strategyNote:
      "Washington's $15 fee cap is among the highest in the country, giving you real room to price the notarization itself rather than depending entirely on travel fees.",
    metroNote:
      'The Seattle-Tacoma-Bellevue corridor regularly supports pricing at the top of this range and above given cost of living; Eastern Washington markets tend to run lower.',
  },
  {
    slug: 'new-jersey',
    tier: 'low',
    typicalMobileRate: '$55-$95',
    typicalLoanSigningRate: '$110-$185',
    majorMetros: ['Newark', 'Jersey City', 'Trenton', 'Camden'],
    strategyNote:
      "New Jersey's $2.50 fee cap is one of the lowest in the country, so your travel fee needs to do almost all of the work on a typical local quote.",
    metroNote:
      'Northern New Jersey markets close to New York City (Newark, Jersey City) tend to support pricing at the higher end of the range given cost of living.',
  },
  {
    slug: 'nevada',
    tier: 'high',
    typicalMobileRate: '$60-$100',
    typicalLoanSigningRate: '$110-$185',
    majorMetros: ['Las Vegas', 'Reno', 'Henderson', 'Carson City'],
    strategyNote:
      "Nevada's $15 fee cap is one of the highest in the country, and steady real estate activity in Las Vegas and Reno keeps signing demand fairly consistent.",
    metroNote:
      'The Las Vegas Valley and Reno-Sparks area tend to support pricing toward the top of the range given real estate and signing volume.',
  },
];

export function getStateMarketData(slug: string): StateMarketData | undefined {
  return stateMarketData.find((state) => state.slug === slug);
}
