var express = require('express');
var app = express();
var url = require('url');
var path = require('path');

var bodyParser = require('body-parser');
var fs = require("fs");

var melbourne_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/timeTwi1.json')));
var tracking_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/tracking_0503.json')));
var cityList_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/cityList.json')));
var cityDetail_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/cityDetail.json')));
/*
var cityMapping_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/mapping.json')));
var cityPage_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/cityPage.json')));
var health_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/HealthAU.json')));
var income_obj = JSON.parse(fs.readFileSync(path.join(__dirname,'/data/income.json')));

var cityDetail_obj = {};
Object.keys(cityMapping_obj).forEach(function(key){
	var suburbs = cityMapping_obj[key];
	for(var i=0; )
});
*/

app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/sentiment_result/json/melbourne',function(req,res){
	res.json(melbourne_obj);
});

app.get('/sentiment_result/json/stalking',function(req,res){
	var usernameList = [];
	Object.keys(tracking_obj).forEach(function(key){
		tracking_obj[key].name = tracking_obj[key].name.replace(/\s+/g,"");
		var username = tracking_obj[key].name;
		usernameList.push(username);
	});
	
	res.json(usernameList);
});

app.get('/sentiment_result/json/stalking/:username',function(req,res){
	var userInfo={};
	var username = req.params.username;
	var userList = Object.keys(tracking_obj);
	for(var i=0; i< userList.length;i++){
		var u_id = userList[i];
		var u_name = tracking_obj[u_id].name;
		if(u_name == username){
			userInfo = tracking_obj[u_id];
			break;
		}
	}
	res.json(userInfo);
});

app.get('/sentiment_result/json/city',function(req,res){
	res.json(cityList_obj);

});

app.get('/sentiment_result/json/city/:cityName',function(req,res){
	var cityname = req.params.cityName;
	var cityDetail = cityDetail_obj[cityname];
	res.json(cityDetail);

});