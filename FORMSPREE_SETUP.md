# Formspree Signup Setup

This site now posts email signups to `POST /api/subscribe`, and that route forwards each signup to Formspree.

To connect it:

1. Copy your Formspree form endpoint.
   Example: `https://formspree.io/f/your-form-id`
2. Add this environment variable in Vercel:
   `FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id`
3. Redeploy the site.

The homepage and footer signup forms will start working as soon as that variable is set.
