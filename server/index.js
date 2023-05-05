const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

console.log("Base URL = " + process.env.PORT);

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/items", async (req, res) => {

  const fetchAPI = async () => {
    try {
        const { q: query } = req.query;
        const url = process.env.SEARCH_URL + query;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching products");
      }
  }

  const api = await fetchAPI();

  const getCategories = async (data) => {  // make a new fetch to get the Categories form the fisrt item 
    if (data.results[0].category_id) {
      const resultCategories = await fetch(
        process.env.CATEGORIES_URL + data.results[0].category_id
      );
      const infoCategories = await resultCategories.json();

      return infoCategories.path_from_root;
    } else {
      const resultCategories = await fetch(
        process.env.CATEGORIES_URL + data.available_filters[0].values[0].id
      );
      const infoCategories = await resultCategories.json();
      return infoCategories.path_from_root;
    }
  };

  const getItems = (data) => { // function to get the item data in the correct format 
    const itemsApiInfo = data.results.map((result) => {
      return {
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: "",
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shippin: result.shipping.free_shipping,
        location: result.address.state_name,
      };
    });

    return itemsApiInfo;
  };
  const categories = await getCategories(api);
  const items = getItems(api);

  const author = {
    name: "Matias",
    lastname: "Garcia",
  };

  const resultData = {
    author,
    categories: categories,
    items: items,
  };

  res.json(resultData);
});

app.listen(port, () => {
  console.log(`Servidor en línea en el puerto ${port}`);
});
