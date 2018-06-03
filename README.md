# A simple implementation of REST APIs using node.js, express.js, mongodb


GET: 
/api/ninjas?lng=12.32&lat=9.23


POST:
/api/ninjas

{
	"name":"N3",
	"available":false,
	"rank":"black belt",
		"geometry":{
		"type":"Point",
		"coordinates":[132.50,21.56]
	}
}


PUT:
/api/ninjas/5b13c2696fa8ad0d9af88ed9

{
	"geometry":{
		"type":"Point",
		"coordinates":[112.50,12.56]
	}
}

DELETE:
/api/ninjas/5b1192c3a02e100ee0e15db3

