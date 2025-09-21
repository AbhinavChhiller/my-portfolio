# 3D Developer Portfolio

A modern, interactive 3D developer portfolio built with React, Three.js, and Vite. Showcase your skills, projects, and contact information with stunning visuals and smooth animations.

## Features
- 3D animated hero section
- Interactive floating balls with tech icons
- Responsive design for desktop and mobile
- Contact form with EmailJS integration
- Animated transitions using Framer Motion
- Custom 3D Earth canvas
- Tailwind CSS for styling

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up your `.env` file in the project root:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

### Running the Project
```sh
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (default Vite port).

## Project Structure
```
project_3D_developer_portfolio-main/
├── public/
│   └── ... (3D assets, textures, logos)
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── canvas/     # 3D canvas components
│   │   └── ...
│   ├── styles.js       # Custom styles
│   ├── index.css       # Tailwind CSS
│   └── main.jsx        # App entry point
├── .env                # Environment variables
├── index.html          # Main HTML file
├── package.json        # Project metadata
└── README.md           # Project documentation
```

## Customization
- Update your information in the relevant components (e.g., `Hero.jsx`, `About.jsx`, `Contact.jsx`).
- Replace images and icons in `src/assets/` and `public/` as needed.
- Adjust 3D models and textures in `public/desktop_pc/` and `public/planet/`.

## Deployment
You can deploy this project to Vercel, Netlify, or any static hosting provider. Build the project with:
```sh
npm run build
# or
yarn build
```
The output will be in the `dist/` folder.

## Credits
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## License
This project is licensed under the MIT License.
