# React Stepper Trip Planner - Backend

This is a RESTful API implementation needed for the React Stepper Trip Planner project. It provides endpoints to manage countries, destinations, trip packages, and retrieve weather forecasts.

## Technologies Used

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A document-based, NoSQL database used to store application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Setup

### Prerequisites

- **MongoDB**: Ensure you have MongoDB installed and running.
- **Node.js**: Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone
   ```
2. **Navigate to the Project directory**

    ```bash
    cd react-stepper-trip-planner-backend
    ```

3. **Setup environmental variables:**
    Copy the example environment file sample.env to .env:

    ```bash
    cp sample.env .env
    ```

    Edit the .env file with your specific environment settings (e.g., MongoDB URI, API keys).

4. **Install dependencies:**

    ```bash
    npm install
    ```

5. **Start the development server:**

    ```bash
    npm run dev
    ```


## API Endpoints

#### Countries

* GET `/api/v1/countries`

Retrieves a list of all countries

```bash
curl -X GET http://localhost:4000/api/v1/countries
```

* POST `/api/v1/countries`

Adds a new country

```bash
curl -X POST http://localhost:4000/api/v1/countries \
    -H "Content-Type: application/json" \
    -d '{"name": "Japan", "capital": "Tokyo", "continent": "Asia", "currency": "JPY", "languages": ["Japanese"]}'
```

#### Destinations

* GET `/api/v1/destinations`

Retrieves a list of all destinations.


```bash
curl -X GET http://localhost:4000/api/v1/destinations
```


* POST `/api/v1/destinations`

Adds a new destination.

```bash
curl -X POST http://localhost:4000/api/v1/destinations \
  -H "Content-Type: application/json" \
  -d '{"name": "Kyoto Imperial Palace", "location": {"city": "Kyoto", "country": "Japan", "coordinates": [135.7621, 35.027]}, "description": "The former ruling palace of the Emperor of Japan.", "tags": ["historical", "palace", "Kyoto", "Japan"]}'
```

#### Trip Packages

* GET `/api/v1/tripPackages`

Retrieves a list of all trip packages.

```bash
curl -X GET http://localhost:4000/api/v1/tripPackages
```

* POST `/api/v1/tripPackages`

Adds a new trip package.

```bash
curl -X POST http://localhost:4000/api/v1/tripPackages \
  -H "Content-Type: application/json" \
  -d '{"name": "Highlights of Japan Tour", "description": "Experience the best of Japan with this 10-day tour.", "duration": 10, "price": 2000, "country": "Japan", "destinations": ["669d4968190353615b17e0e5", "669d4ae4190353615b17e0f3", "669d49c9190353615b17e0e8"]}'
```

#### Weather Forecast

* POST `/api/v1/weather-forecast`

```bash
curl -X POST http://localhost:4000/api/v1/weather-forecast \
  -H "Content-Type: application/json" \
  -d '{"packageId": "669d4d38190353615b17e0fb", "startDate": "2024-08-01", "endDate": "2024-08-10"}'
```



### Author

Yosef S.