export const ATTRIBUTION_KEYS = {
  landingPage: "bn_landing_page",
  referrer: "bn_referrer",
  utmSource: "bn_utm_source",
  utmMedium: "bn_utm_medium",
  utmCampaign: "bn_utm_campaign",
  pendingSignup: "bn_pending_signup",
} as const;

export type PendingSignupPayload = {
  form_source: string;
  page_path: string;
  landing_page: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  method: string;
};
