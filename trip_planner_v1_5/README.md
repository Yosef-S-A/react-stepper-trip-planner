# React Stepper Trip Planner - Frontend

This is the frontend part of the React Stepper Trip Planner project. It is a simple UI stepper component that allows users to select a travel package, choose travel dates, view weather forecasts, and confirm their trip.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

## Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**:

```bash
git clone
```

2. **Navigate to the project directory**

```bash
cd react-stepper-trip-planner-frontend
```

3. **Install dependencies**

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

#### Project Structure

* **/src**: Contains the source code for the application.
    * /components: Contains reusable React components like Stepper, StepNavigation, SelectPackage, SelectTravelDate, WeatherForecast, etc.

    * /styles: Contains CSS and SCSS files for styling the components.

#### Usage

1. **Select a Destination Package**: Choose a travel package from the available options.
2. **Select Travel Dates**: Pick start and end dates for your trip.
3. **View Weather Forecast**: Check the weather forecast for your selected travel dates and destinations.
4. **Confirmation**: Review your selections and confirm your trip.


#### API Endpoints
The frontend interacts with the following API endpoints provided by the backend:

1. **GET /api/v1/countries**: Fetches a list of countries.
2. **GET /api/v1/destinations**: Fetches a list of destinations.
3. **GET /api/v1/tripPackages**: Fetches a list of trip packages.
4. **POST /api/v1/weather-forecast**: Retrieves weather forecast data.


#### Author

Yosef S.