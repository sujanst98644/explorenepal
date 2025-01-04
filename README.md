# Explore Nepal

Explore Nepal is a multi-page travel website showcasing the beauty of Nepal, including destinations, cultural insights, and travel activities. Built with React, Tailwind CSS, and deployed on Vercel, this project demonstrates responsiveness and interactivity for an enhanced user experience.

## Features

- **Home Page**: A hero section with an introduction to Nepal, top destinations, and navigation.
- **About Nepal Page**: Details about Nepal's history, culture, and geography, alongside popular travel activities.
- **Destinations List Page**:
  - Displays a list of travel destinations from static JSON data.
  - Includes filters by region, type, and rating.
  - Sorting options by rating and popularity.
- **Destination Detail Page**:
  - Detailed view of a single destination including name, region, description, rating, images, and popular activities.
  - User reviews (hardcoded).
  - A back button to return to the Destinations List Page.
- **Responsive Design**: Adapts seamlessly to various screen sizes using Tailwind CSS.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsiveness.
- **React Router**: For navigation between pages.
- **Vercel**: For deployment.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sujanst98644/explorenepal.git
   ```
2. Navigate to the project directory:
   ```bash
   cd explorenepal
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App Locally

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
2. Open your browser and go to `http://localhost:3000` to view the app.

### Deployment

The app is deployed on [Vercel](https://vercel.com). Visit the live demo at: [Explore Nepal](https://explorenepal.vercel.app)

To deploy your own version:
1. Push your code to a GitHub repository.
2. Connect the repository to your Vercel account.
3. Configure the deployment settings and deploy.

## Folder Structure

```
explorenepal/
├── public/Images/    # Images 
├── src/
│   ├── components/   # Reusable components (Navbar, Footer, etc.)
│   ├── pages/        # Page components (Home, About, Destinations, etc.)
│   ├── data/         # Static JSON data for destinations
│   ├── App.jsx       # Root component with routing
│   └── index.css     # Tailwind CSS entry point
├── README.md         # Project documentation
├── package.json      # Project dependencies
└── tailwind.config.js# Tailwind configuration
```

## Static Data

The destinations are stored in a JSON file (`src/data/destinations.json`) with the following structure:
```json
[
  {
    "id": 1,
    "name": "Pokhara",
    "region": "Gandaki",
    "type": "Adventure",
    "rating": 4.8,
    "description": "Pokhara is a gateway to the Annapurna mountain range.",
    "images": ["image1.jpg", "image2.jpg"],
    "activities": ["Boating", "Hiking", "Paragliding"]
  }
]
```

## Routes

- `/home` → Home Page
- `/about` → About Nepal Page
- `/destinations` → Destinations List Page
- `/destination/:id` → Destination Detail Page

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- Inspiration from Nepal's rich culture and breathtaking landscapes.
- Icons from [FontAwesome](https://fontawesome.com).
- Deployed using [Vercel](https://vercel.com).
