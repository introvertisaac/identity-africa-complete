# Identify Africa

Identify Africa is a fintech company that provides secure identity verification and data validation services, enhancing trust and security across digital interactions in the African market.

## Project Overview

This project is a Next.js-based web application for Identify Africa. It includes various components such as a Privacy Policy page and a Footer component, utilizing React and Tailwind CSS for styling.

## Dependencies

- Next.js (14.2.5)
- React (18)
- React DOM (18)
- Tailwind CSS
- FontAwesome
- Framer Motion
- Swiper
- Nodemailer
- EmailJS
- React Hot Toast
- React Icons

For a full list of dependencies, see the `package.json` file.

## Setup

1. Clone the repository:
git clone https://github.com/your-username/identify-africa.git
cd identify-africa
Copy
2. Install dependencies:
npm install
Copy
3. Create a `.env.local` file in the root directory and add the following environment variables for Nodemailer setup:
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
CopyNote: The `EMAIL_PASS` should be an app password generated from Google. Do not use your regular Gmail password.

4. Run the development server:
npm run dev
Copy
5. Open `http://localhost:3000` in your browser to view the application.

## Nodemailer Setup

To use Nodemailer for sending emails:

1. Go to your Google Account settings.
2. Navigate to Security > App passwords.
3. Select "Mail" and "Other (Custom name)" from the dropdown menus.
4. Enter a name for the app password (e.g., "Identify Africa Nodemailer").
5. Click "Generate" and copy the generated password.
6. Use this password as the `EMAIL_PASS` in your `.env.local` file.

Make sure to keep your `.env.local` file secure and never commit it to version control.

## Project Structure

- `components/`: React components including Footer
- `pages/`: Next.js pages including Privacy Policy
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact us at info@identifyafrica.io.