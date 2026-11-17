# Weather Cube — free website

A responsive coming-soon landing page for Weather Cube. No build tools, framework, or paid hosting required.

## Preview on your computer

Open `index.html` in Chrome, Safari, or another browser. All images, styles, and scripts are included.

## Publish free using GitHub Pages

1. Create a free account at https://github.com if you do not have one.
2. Create a **public** repository, for example `weather-cube-site`.
3. Upload **the contents of this folder** (not the outer folder): `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder. Use **Add file → Upload files → Commit changes**.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**. Set **Branch: main** and **Folder: /(root)**, then click **Save**.
6. GitHub will display your published website link on the Pages screen. It normally looks like `https://YOUR-USERNAME.github.io/weather-cube-site/` (the actual URL depends on your username and repository).

## Connect email signup later (important!)

The email form is intentionally **not connected yet**, so it does **not** pretend to save emails. To connect it using the free FormSubmit service:

1. Decide which email inbox should receive customer signups.
2. Open `script.js` and change `const WAITLIST_RECEIVER_EMAIL = '';` to your email address inside the quotes.
3. Commit and upload the updated script to GitHub.
4. Submit a test signup on your published website. FormSubmit should send the inbox an activation message. Follow the provider's verification instructions.
5. Submit another test. Confirm that the email arrives successfully before advertising the waitlist.
6. Read FormSubmit's privacy and spam guidance. The receiving address appears in public website source, so use a dedicated business inbox rather than a personal email address.

FormSubmit: https://formsubmit.co/ — third-party service; subject to its terms and availability. If you would rather avoid exposing an inbox address, use an external hosted waitlist form and replace the HTML signup form with the URL.

## Important before public promotion

- The hero artwork is a **concept render**, not a photograph of the working prototype.
- The interactive scene switcher is **illustrative**, not connected to live weather.
- No price, delivery date, or product specifications are promised.
- The business name and slogan should be reviewed for trademark and domain conflicts before substantial investment.
- Keep product images and code free of private information: GitHub Pages repositories on the free plan are public.

## Edit text or images

- Brand text and page sections: `index.html`
- Colors, typography, layout: `styles.css` (`--blue` controls accent blue)
- Weather preview labels and email signup setting: `script.js`
- Hero image: replace `assets/madison-cube.jpg` with a same-named image

Everything here is a portable static site and can later be moved to a paid domain or ecommerce storefront.
