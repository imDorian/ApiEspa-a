const mongoose = require('mongoose');
const Comunidad = require('../api/model/comunidades');
//const dotenv = require('dotenv')

const comunidades = [
  {
    "name": "Andalucía",
    "code": "01",
    "capital": "Sevilla"
  },
  {
    "name": "Aragón",
    "code": "02",
    "capital": "Zaragoza"
  
  },
  {
    "name": "Principado de Asturias",
    "code": "03",
    "capital": "Oviedo"
  },
  {
    "name": "Balears, Illes",
    "code": "04",
    "capital": "Palma de Mallorca"
  },
  {
    "name": "Canarias",
    "code": "05",
    "capital": "Santa Cruz de Tenerife y Las Palmas de Gran Canarias"
  },
  {
    "name": "Cantabria",
    "code": "06",
    "capital": "Santander"
  },
  {
    "name": "Castilla y León",
    "code": "07",
    "capital": "Valladolid"
  },
  {
    "name": "Castilla - La Mancha",
    "code": "08",
    "capital": "Toledo"
  },
  {
    "name": "Cataluńa",
    "code": "09",
    "capital": "Barcelona"
  },
  {
    "name": "Comunitat Valenciana",
    "code": "10",
    "capital": "Valencia"
  },
  {
    "name": "Extremadura",
    "code": "11",
    "capital": "Mérida"
  },
  {
    "name": "Galicia",
    "code": "12",
    "capital": "Santiago de Compostela"
  },
  {
    "name": "Comunidad de Madrid",
    "code": "13",
    "capital": "Madrid"
  },
  {
    "name": "Región de Murcia",
    "code": "14",
    "capital": "Cartagena"
  },
  {
    "name": "Comunidad Foral de Navarra",
    "code": "15",
    "capital": "Pamplona"
  },
  {
    "name": "País Vasco",
    "code": "16",
    "capital": "Vitoria"
  },
  {
    "name": "La Rioja",
    "code": "17",
    "capital": "Logroño"
  },
  {
    "name": "Ceuta",
    "code": "18",
    "capital": "Ceuta"
  },
  {
    "name": "Melilla",
    "code": "19",
    "capital": "Melilla"
  }
];
const comunidadDocuments = comunidades.map(comunidad => new Comunidad(comunidad));
mongoose
  .connect('mongodb+srv://root:root@cluster0.54md9ja.mongodb.net/project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allComunidades = await Comunidad.find();
    if (allComunidades.length) {
      await Comunidad.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Comunidad.insertMany(comunidadDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());