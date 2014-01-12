var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	console.log("My app is running!");

	app.get("/hello", function (req, resp) {
		resp.write("HELLO WORLD! My name is Matt");
		resp.end();
	});


	app.get("/html", function (req, resp) {
		resp.write("<html><body><h1>Woo!! Node!!</h1><button></body></html>");
		resp.end();
	});

	app.get("/"), function (req, resp) {
		db.findArray({}, function(arr) {
			resp.render("index", { locations: arr });	
		});

	});

})

