const express = require("express");
const app = express();
const fetch = require("node-fetch");

async function getCategoryResponse() {
  const response = await fetch("http://localhost:4000/facets");
  const data = await response.json();
  let CategoryObjects = data;
  let MasterFieldObj = {};
  const Masterkeys = Object.keys(data[0].data.en);
  const AdditionalFieldskeys = Object.keys(data[0].data.additionalProperties);
  Masterkeys.map((item, idx) => {
    MasterFieldObj[data[0].data.en[item]] = {
      field: "",
      isEnabled: true,
    };
  });
  let AdditonalFieldObj = {};
  AdditionalFieldskeys.map((item, idx) => {
    AdditonalFieldObj[data[0].data.additionalProperties[item]] = {
      displayName: "",
      field: "",
      isEnabled: true,
    };
  });
  CategoryObjects[0].data.en = MasterFieldObj;
  CategoryObjects[0].data.additionalProperties = AdditonalFieldObj;
  return CategoryObjects;
}

async function getCardPropsResponse() {
  const response = await fetch("http://localhost:4000/cardprops");
  const data = await response.json();
  let CardpropsObject = data;
  let obj = [];
  data[0].data.en.map((item, idx) => {
    obj.push({
      name: item,
      label: "",
      isEnabled: "true",
      styles: {
        width: "100%",
      },
    });
  });
  CardpropsObject[0].data.en = obj;
  return CardpropsObject;
}

app.get("/", (req, res) => {
  res.json({ message: "Hello World !!" });
});

app.get("/form", async (req, res) => {
  const val = await getCategoryResponse();
  console.log(val);
  res.json(val);
});

app.get("/card", async (req, res) => {
  const val = await getCardPropsResponse();
  console.log(val);
  res.json(val);
});

app.listen(3000, () => {
  console.log("Running on Port 3000");
});
