const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
	access_token: "APP_USR-7150983809347424-072318-373e45d751e2f3a8146cd221d07685fd-1430690823",
});

app.get("/", function (req, res) {
    res.send("El servidor de MP funciona");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
            	unit_price: Number(req.body.price),
            	quantity: Number(req.body.quantity)
			}
		],
		back_urls: {
			"success": "http://localhost:3000",
			"failure": "http://localhost:3000",
			"pending": "http://localhost:3000"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.listen(8080, ()=> {
    console.log("El servidor esta corriendo en el puerto 8080")
})