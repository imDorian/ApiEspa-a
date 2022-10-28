const mongoose = require('mongoose');
const Pais = require('../api/model/pais.model');
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = process.env.MONGO_DB

const paises = [{
    "name": "Andorra",
    "code": "AD"
  }, {
    "name": "Albania",
    "code": "AL"
  }, {
    "name": "Austria",
    "code": "AT"
  }, {
    "name": "Åland Islands",
    "code": "AX"
  }, {
    "name": "Bosnia and Herzegovina",
    "code": "BA"
  }, {
    "name": "Belgium",
    "code": "BE"
  }, {
    "name": "Bulgaria",
    "code": "BG"
  }, {
    "name": "Belarus",
    "code": "BY"
  }, {
    "name": "Switzerland",
    "code": "CH"
  }, {
    "name": "Cyprus",
    "code": "CY"
  }, {
    "name": "Czech Republic",
    "code": "CZ"
  }, {
    "name": "Germany",
    "code": "DE"
  }, {
    "name": "Denmark",
    "code": "DK"
  }, {
    "name": "Estonia",
    "code": "EE"
  }, {
    "_id": "63500948d75758bc4c8d94a8",
    "name": "España",
    "paises": [
        "63500ed536d98f906329ea9e",
        "63500ed536d98f906329ea9f",
        "63500ed536d98f906329eaa0",
        "63500ed536d98f906329eaa1",
        "63500ed536d98f906329eaa2",
        "63500ed536d98f906329eaa3",
        "63500ed536d98f906329eaa4",
        "63500ed536d98f906329eaa5",
        "63500ed536d98f906329eaa6",
        "63500ed536d98f906329eaa7",
        "63500ed536d98f906329eaa8",
        "63500ed536d98f906329eaa9",
        "63500ed536d98f906329eaaa",
        "63500ed536d98f906329eaab",
        "63500ed536d98f906329eaac",
        "63500ed536d98f906329eaad",
        "63500ed536d98f906329eaae",
        "63500ed536d98f906329eaaf",
        "63500ed536d98f906329eab0"
    ],
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    "__v": 0
}, {
    "name": "Finland",
    "code": "FI"
  }, {
    "name": "Faroe Islands",
    "code": "FO"
  }, {
    "name": "France",
    "code": "FR"
  }, {
    "name": "United Kingdom",
    "code": "GB"
  }, {
    "name": "Guernsey",
    "code": "GG"
  }, {
    "name": "Greece",
    "code": "GR"
  }, {
    "name": "Croatia",
    "code": "HR"
  }, {
    "name": "Hungary",
    "code": "HU"
  }, {
    "name": "Ireland",
    "code": "IE"
  }, {
    "name": "Isle of Man",
    "code": "IM"
  }, {
    "name": "Iceland",
    "code": "IC"
  }, {
    "name": "Italy",
    "code": "IT"
  }, {
    "name": "Jersey",
    "code": "JE"
  }, {
    "name": "Liechtenstein",
    "code": "LI"
  }, {
    "name": "Lithuania",
    "code": "LT"
  }, {
    "name": "Luxembourg",
    "code": "LU"
  }, {
    "name": "Latvia",
    "code": "LV"
  }, {
    "name": "Monaco",
    "code": "MC"
  }, {
    "name": "Moldova, Republic of",
    "code": "MD"
  }, {
    "name": "Macedonia, The Former Yugoslav Republic of",
    "code": "MK"
  }, {
    "name": "Malta",
    "code": "MT"
  }, {
    "name": "Netherlands",
    "code": "NL"
  }, {
    "name": "Norway",
    "code": "NO"
  }, {
    "name": "Poland",
    "code": "PL"
  }, {
    "name": "Portugal",
    "code": "PT"
  }, {
    "name": "Romania",
    "code": "RO"
  }, {
    "name": "Russian Federation",
    "code": "RU"
  }, {
    "name": "Sweden",
    "code": "SE"
  }, {
    "name": "Slovenia",
    "code": "SI"
  }, {
    "name": "Svalbard and Jan Mayen",
    "code": "SJ"
  }, {
    "name": "Slovakia",
    "code": "SK"
  }, {
    "name": "San Marino",
    "code": "SM"
  }, {
    "name": "Ukraine",
    "code": "UA"
  }, {
    "name": "Holy See (Vatican City State)",
    "code": "VA"
  }]
  

const paisDocuments = paises.map(pais => new Pais(pais));
mongoose
  .connect(DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPaises = await Pais.find();
    if (allPaises.length) {
      await Pais.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Pais.insertMany(paisDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());