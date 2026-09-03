export type StateFeeEntry = {
  name: string;
  slug: string;
  acknowledgmentFee: string;
  juratFee: string;
  feeNotes: string;
};

// Maximum fee per notarial act (acknowledgment/jurat), as published on the pricing guide.
// Single source of truth: both the national pricing guide and the per-state pages read from here.
export const stateFees: StateFeeEntry[] = [
  { name: 'Alabama', slug: 'alabama', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Alaska', slug: 'alaska', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Arizona', slug: 'arizona', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Arkansas', slug: 'arkansas', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'California', slug: 'california', acknowledgmentFee: '$15', juratFee: '$15', feeNotes: 'High fee state' },
  { name: 'Colorado', slug: 'colorado', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Connecticut', slug: 'connecticut', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Delaware', slug: 'delaware', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Florida', slug: 'florida', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Online: $25' },
  { name: 'Georgia', slug: 'georgia', acknowledgmentFee: '$2', juratFee: '$2', feeNotes: 'Lowest fees, rely on travel' },
  { name: 'Hawaii', slug: 'hawaii', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Standard rate' },
  { name: 'Idaho', slug: 'idaho', acknowledgmentFee: '$2', juratFee: '$2', feeNotes: 'Very low' },
  { name: 'Illinois', slug: 'illinois', acknowledgmentFee: '$1', juratFee: '$1', feeNotes: 'Lowest in US' },
  { name: 'Indiana', slug: 'indiana', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Iowa', slug: 'iowa', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Kansas', slug: 'kansas', acknowledgmentFee: '$1', juratFee: '$1', feeNotes: 'Very low' },
  { name: 'Kentucky', slug: 'kentucky', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Louisiana', slug: 'louisiana', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Maine', slug: 'maine', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Maryland', slug: 'maryland', acknowledgmentFee: '$4', juratFee: '$4', feeNotes: 'Low fee state' },
  { name: 'Massachusetts', slug: 'massachusetts', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Michigan', slug: 'michigan', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Minnesota', slug: 'minnesota', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Mississippi', slug: 'mississippi', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Missouri', slug: 'missouri', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Can charge travel' },
  { name: 'Montana', slug: 'montana', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Nebraska', slug: 'nebraska', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Nevada', slug: 'nevada', acknowledgmentFee: '$15', juratFee: '$15', feeNotes: 'High fee state' },
  { name: 'New Hampshire', slug: 'new-hampshire', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'New Jersey', slug: 'new-jersey', acknowledgmentFee: '$2.50', juratFee: '$2.50', feeNotes: 'Very low' },
  { name: 'New Mexico', slug: 'new-mexico', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'New York', slug: 'new-york', acknowledgmentFee: '$2', juratFee: '$2', feeNotes: 'Lowest fees' },
  { name: 'North Carolina', slug: 'north-carolina', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Electronic: $25' },
  { name: 'North Dakota', slug: 'north-dakota', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Ohio', slug: 'ohio', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Oklahoma', slug: 'oklahoma', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Oregon', slug: 'oregon', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Pennsylvania', slug: 'pennsylvania', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Travel fees common' },
  { name: 'Rhode Island', slug: 'rhode-island', acknowledgmentFee: '$4', juratFee: '$4', feeNotes: 'Low fee state' },
  { name: 'South Carolina', slug: 'south-carolina', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'South Dakota', slug: 'south-dakota', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Tennessee', slug: 'tennessee', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market-based' },
  { name: 'Texas', slug: 'texas', acknowledgmentFee: '$6', juratFee: '$6', feeNotes: 'Can charge travel' },
  { name: 'Utah', slug: 'utah', acknowledgmentFee: '$10', juratFee: '$10', feeNotes: 'Standard rate' },
  { name: 'Vermont', slug: 'vermont', acknowledgmentFee: 'No max', juratFee: 'No max', feeNotes: 'Market rate' },
  { name: 'Virginia', slug: 'virginia', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Electronic: $25' },
  { name: 'Washington', slug: 'washington', acknowledgmentFee: '$15', juratFee: '$15', feeNotes: 'High fee state' },
  { name: 'West Virginia', slug: 'west-virginia', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Wisconsin', slug: 'wisconsin', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
  { name: 'Wyoming', slug: 'wyoming', acknowledgmentFee: '$5', juratFee: '$5', feeNotes: 'Low fee state' },
];

export function getStateFee(slug: string): StateFeeEntry | undefined {
  return stateFees.find((state) => state.slug === slug);
}
