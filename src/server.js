const express = require("express");
const app = express();
const faker = require("faker");
const data = (function() {
	const categories = [
      {
        "code": "indian",
        "name": "Indian Cat"
      },
      {
        "code": "australian",
        "name": "Australian Cat"
      },
      {
        "code": "american",
        "name": "American Cat"
      },
      {
        "code": "japanese",
        "name": "Japanese Cat"
      }
    ]
	const cats = [...Array(20)].map((item, index) => {
	let category = categories[Math.floor(Math.random()*categories.length)];
	 return {
	 	type: category.code,
	 	categoryName: category.name,
	 	name: faker.name.firstName(),
	 	code: faker.random.uuid(),
	 	hobbies: faker.lorem.words(),
	 	dateOfBirth: faker.date.past(),
	 	image: `https://loremflickr.com/320/240/cat?random=${index}`
	 	//image: faker.image.cats()
	 }
	});
	return {
		categories,
		cats
	};

})();

//require("./db.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/cats", function(req, res){
	return res.json(data.cats);
});

app.get("/categories", function(req, res){
	return res.json(data.categories);
});

app.get("/catdetails", function(req, res){
	return res.json(data.cats);
});

app.listen(4000); 

console.log("Start server on 4000");