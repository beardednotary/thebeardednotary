# Formspree Signup Setup

This site is a static export, so the signup form posts directly to Formspree from the browser.

To connect it:

1. Copy your Formspree form endpoint.
   Example: `https://formspree.io/f/your-form-id`
2. Add this environment variable in Vercel:
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`
3. Redeploy the site.

The homepage and footer signup forms will start working as soon as that variable is set.
