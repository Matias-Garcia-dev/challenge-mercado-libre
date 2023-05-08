# Mercado Libre Challenge

This project is a coding challenge for the Mercado Libre company. It is a simple search interface for the Mercado Libre API, which displays the search results and allows the user to view the details of a selected product.

## Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Matias-Garcia-dev/challenge-mercado-libre.git
   ```

2. Navigate to the project directory:

   ```
   cd Challenge-mercado-libre
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Usage

To start the development server, navigate to the `server` directory and run the following command:

```
cd server
npm run dev
```

This will start the server on port 5000.

To start the React app, open a new terminal window, navigate to the project directory, and run the following command:

```
npm start
```

This will start the app on port 3000 and open it in your default browser.

## Project Structure

The project is divided into two main directories: `client` and `server`.

### Client

The `client` directory contains the React app, which is responsible for rendering the search interface and displaying the search results.

The main components of the app are:

- `App`: The root component of the app. It contains the search bar and the routing logic.
- `SearchResults`: A component that displays the search results.
- `ProductDetails`: A component that displays the details of a selected product.

### Server

The `server` directory contains a simple Express server, which acts as a proxy for the Mercado Libre API. The server is responsible for making requests to the API on behalf of the client, and returning the results.

The server has the following endpoints:

- `/api/items?q={query}`: Returns a list of search results for the given query.
- `/api/items/:id`: Returns the details of the product with the given ID.

## Credits

This project was created by [Matias Garcia] for the Mercado Libre Challenge.