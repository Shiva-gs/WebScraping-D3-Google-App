//Put this in body tag 
<div id="legend">
  <h4 class = "test-center> Travel Project </h4>
<svg height = "270" width = "100">
  <rect x = "10" y = "10" height = "30" width = "50"
  style = "stroke-width:4; stroke: deeppink; fill:yellow;fill-opacity:0.5;"/> 
<line x1 = "10" y1 = "50" x2 = "40" y2 = "10"
style="stroke: peru; stroke-width:2;"/>
<circle cx="30" cy="95" r="15" style = "stroke-width:4; stroke;deeppink; stroke-dasharray: 5.5; fill:cyan; fill-opacity:0.5;"/>
<text x = "70" y="15" style="font-family: sans-serif; font-size:16px;"> Pipeline </text>
</svg>
</div>
//Bar Markers 
var bar_markers = [
  {
    "name": "Los Tres Chiflados",
    "lat": 40.6455,
    "long": -73.95837,
    "reviews": "88 reviews",
    "cost": "$$"
  },
  {
    "name": "Jajaja",
    "lat": 40.7142,
    "long": -73.99039,
    "reviews": "73 reviews",
    "cost": "$$"
  },
  {
    "name": "The Dead Rabbit",
    "lat": 40.703289,
    "long": -74.011017,
    "reviews": "1531 reviews",
    "cost": "$$"
  },
  {
    "name": "Livingston Manor",
    "lat": 40.6894,
    "long": -73.986137,
    "reviews": "119 reviews",
    "cost": "$$"
  },
  {
    "name": "The Belfry",
    "lat": 40.732639,
    "long": -73.986382,
    "reviews": "509 reviews",
    "cost": "$$"
  },
  {
    "name": "The Up & Up",
    "lat": 40.729671,
    "long": -74.00045,
    "reviews": "425 reviews",
    "cost": "$$"
  },
  {
    "name": "Gowanus Gardens",
    "lat": 40.67654,
    "long": -73.9841,
    "reviews": "10 reviews",
    "cost": "unknown"
  },
  {
    "name": "BED STUY Barb's",
    "lat": 40.6841,
    "long": -73.93843,
    "reviews": "1 review",
    "cost": "unknown"
  },
  {
    "name": "Boilery",
    "lat": 40.7932,
    "long": -73.9714,
    "reviews": "94 reviews",
    "cost": "unknown"
  },
  {
    "name": "District Social",
    "lat": 40.7536,
    "long": -73.9915,
    "reviews": "661 reviews",
    "cost": "$$"
  },
  {
    "name": "Whiskey Tavern",
    "lat": 40.71647,
    "long": -73.99966,
    "reviews": "771 reviews",
    "cost": "$$"
  },
  {
    "name": "Attaboy",
    "lat": 40.7189,
    "long": -73.9914,
    "reviews": "531 reviews",
    "cost": "$$"
  },
  {
    "name": "Apotheke",
    "lat": 40.714329,
    "long": -73.998192,
    "reviews": "1440 reviews",
    "cost": "$$$"
  },
  {
    "name": "The Binc",
    "lat": 40.69931,
    "long": -73.9923,
    "reviews": "69 reviews",
    "cost": "$$"
  },
  {
    "name": "1 Rooftop Garden & Bar",
    "lat": 40.743938,
    "long": -73.987984,
    "reviews": "47 reviews",
    "cost": "$$$"
  },
  {
    "name": "Nitecap",
    "lat": 40.71913,
    "long": -73.98573,
    "reviews": "328 reviews",
    "cost": "$$"
  },
  {
    "name": "The Library",
    "lat": 40.7226,
    "long": -73.9864,
    "reviews": "405 reviews",
    "cost": "$"
  },
  {
    "name": "FREEHOLD",
    "lat": 42.3593,
    "long": -74.0499,
    "reviews": "504 reviews",
    "cost": "$$"
  },
  {
    "name": "Someday Bar",
    "lat": 40.68734,
    "long": -73.98631,
    "reviews": "16 reviews",
    "cost": "unknown"
  },
  {
    "name": "The Ship",
    "lat": 40.71982,
    "long": -73.99944,
    "reviews": "324 reviews",
    "cost": "$$"
  },
  {
    "name": "Botanica Bar",
    "lat": 40.72459,
    "long": -73.99478,
    "reviews": "372 reviews",
    "cost": "$"
  },
  {
    "name": "The Dead Poet",
    "lat": 40.78498,
    "long": -73.97736,
    "reviews": "417 reviews",
    "cost": "$$"
  },
  {
    "name": "The Freak Bar",
    "lat": 40.575371,
    "long": -73.979843,
    "reviews": "38 reviews",
    "cost": "$$"
  },
  {
    "name": "The Flamingo",
    "lat": 40.687771,
    "long": -73.978867,
    "reviews": "62 reviews",
    "cost": "$$"
  },
  {
    "name": "The Tippler",
    "lat": 40.74239,
    "long": -74.00625,
    "reviews": "670 reviews",
    "cost": "$$"
  },
  {
    "name": "Elsa",
    "lat": 40.69024,
    "long": -73.99536,
    "reviews": "102 reviews",
    "cost": "$$"
  },
  {
    "name": "House Of Wax",
    "lat": 40.69074,
    "long": -73.98327,
    "reviews": "91 reviews",
    "cost": "$$"
  },
  {
    "name": "Superfine",
    "lat": 40.70224,
    "long": -73.98743,
    "reviews": "448 reviews",
    "cost": "$$"
  },
  {
    "name": "St Tropez - Soho",
    "lat": 40.72498,
    "long": -74.00328,
    "reviews": "52 reviews",
    "cost": "$$"
  }
];
//Restaurant Markers
var rest_markers = [
  {
    "name": "Upstate",
    "lat": 40.72641,
    "long": -73.98658,
    "reviews": "1817 reviews",
    "address": "95 1st Ave"
  },
  {
    "name": "LoveMama",
    "lat": 40.73037,
    "long": -73.98598,
    "reviews": "4731 reviews",
    "address": "174 2nd Ave"
  },
  {
    "name": "Burger & Lobster",
    "lat": 42.77196,
    "long": -77.9046,
    "reviews": "5328 reviews",
    "address": "39 W 19th St"
  },
  {
    "name": "Thai Villa",
    "lat": 40.73902,
    "long": -73.99068,
    "reviews": "3049 reviews",
    "address": "5 E 19th St"
  },
  {
    "name": "Aunt Jakes",
    "lat": 40.7191,
    "long": -73.99769,
    "reviews": "1392 reviews",
    "address": "149 Mulberry St"
  },
  {
    "name": "Ipanema Restaurant",
    "lat": 40.75695,
    "long": -73.98059,
    "reviews": "1317 reviews",
    "address": "43 W 46th St"
  },
  {
    "name": "Bogota Latin Bistro",
    "lat": 40.73996,
    "long": -73.99036,
    "reviews": "2137 reviews",
    "address": "141 5th Ave"
  },
  {
    "name": "Barn Joo",
    "lat": 40.73697,
    "long": -73.99097,
    "reviews": "1553 reviews",
    "address": "35 Union Sq W"
  },
  {
    "name": "Uglyduckling",
    "lat": 40.68602,
    "long": -73.9913,
    "reviews": "468 reviews",
    "address": "166 Smith St"
  },
  {
    "name": "Paesano of Mulberry Street",
    "lat": 40.71844,
    "long": -73.99738,
    "reviews": "829 reviews",
    "address": "136 Mulberry St"
  },
  {
    "name": "Juliana's Pizza",
    "lat": 40.70277,
    "long": -73.99342,
    "reviews": "2117 reviews",
    "address": "19 Old Fulton St"
  },
  {
    "name": "Salt + Charcoal",
    "lat": 40.7196,
    "long": -73.99837,
    "reviews": "428 reviews",
    "address": "171 Grand St"
  },
  {
    "name": "Boucherie West Village",
    "lat": 40.73302,
    "long": -74.00286,
    "reviews": "1325 reviews",
    "address": "99 7th Ave S"
  },
  {
    "name": "Gelso & Grand",
    "lat": 42.91432,
    "long": -74.58502,
    "reviews": "854 reviews",
    "address": "186 Grand St"
  },
  {
    "name": "Barn Joo 35",
    "lat": 40.74955,
    "long": -73.98582,
    "reviews": "1828 reviews",
    "address": "34 W 35th St"
  },
  {
    "name": "Pig and Khao",
    "lat": 42.99865,
    "long": -78.15497,
    "reviews": "1571 reviews",
    "address": "68 Clinton St"
  },
  {
    "name": "Joe's Shanghai",
    "lat": 40.71458,
    "long": -73.99777,
    "reviews": "6001 reviews",
    "address": "9 Pell St"
  },
  {
    "name": "nonono",
    "lat": 42.0894,
    "long": -76.79785,
    "reviews": "597 reviews",
    "address": "118 Madison Ave"
  },
  {
    "name": "Chama Mama",
    "lat": 40.73849,
    "long": -73.99886,
    "reviews": "174 reviews",
    "address": "149 W 14th St"
  },
  {
    "name": "Atrium Dumbo",
    "lat": 42.82228,
    "long": -77.66947,
    "reviews": "659 reviews",
    "address": "15 Main St"
  },
  {
    "name": "Alta",
    "lat": 40.73437,
    "long": -73.99826,
    "reviews": "1871 reviews",
    "address": "64 W 10th St"
  },
  {
    "name": "Somtum Der",
    "lat": 42.65005,
    "long": -73.93169,
    "reviews": "702 reviews",
    "address": "85 Ave A"
  },
  {
    "name": "Balzem",
    "lat": 40.72139,
    "long": -73.99545,
    "reviews": "415 reviews",
    "address": "202 Mott St"
  },
  {
    "name": "Antica Ristorante",
    "lat": 40.70384,
    "long": -74.0123,
    "reviews": "491 reviews",
    "address": "8 Stone St"
  },
  {
    "name": "Bea",
    "lat": 40.75937,
    "long": -73.99249,
    "reviews": "2432 reviews",
    "address": "403 W 43rd St"
  },
  {
    "name": "The MasalaWala",
    "lat": 40.72192,
    "long": -73.98666,
    "reviews": "1439 reviews",
    "address": "179 Essex St"
  },
  {
    "name": "Fishmarket Restaurant",
    "lat": 42.92157,
    "long": -73.56591,
    "reviews": "540 reviews",
    "address": "111 South St"
  },
  {
    "name": "Soco",
    "lat": 40.69385,
    "long": -73.96452,
    "reviews": "2085 reviews",
    "address": "509 Myrtle Ave"
  },
  {
    "name": "Toloache 50",
    "lat": 40.76224,
    "long": -73.98559,
    "reviews": "1900 reviews]",
    "address": "251 West 50th St"
  }
];
//Attraction Markers 

var attraction_markers = [
  {
    "attraction": "The National 9/11 Memorial & Museum",
    "lat": 40.7115,
    "long": -74.0134,
    "reviews": "93,375 reviews"
  },
  {
    "attraction": "The Metropolitan Museum of Art",
    "lat": 40.7794,
    "long": -73.9632,
    "reviews": "54,046 reviews"
  },
  {
    "attraction": "Central Park",
    "lat": 40.7829,
    "long": -73.9654,
    "reviews": "131,042 reviews"
  },
  {
    "attraction": "Empire State Building",
    "lat": 40.7484,
    "long": -73.9857,
    "reviews": "88,163 reviews"
  },
  {
    "attraction": "Top of the Rock",
    "lat": 40.7591,
    "long": -73.9795,
    "reviews": "77,823 reviews"
  },
  {
    "attraction": "Statue of Liberty",
    "lat": 40.689247,
    "long": -74.044502,
    "reviews": "42,605 reviews"
  },
  {
    "attraction": "Brooklyn Bridge",
    "lat": 40.7061,
    "long": -73.9969,
    "reviews": "24,259 reviews"
  },
  {
    "attraction": "Manhattan Skyline",
    "lat": 40.7635,
    "long": -73.978,
    "reviews": "20,946 reviews"
  },
  {
    "attraction": "The High Line",
    "lat": 40.748,
    "long": -74.0048,
    "reviews": "61,574 reviews"
  },
  {
    "attraction": "Grand Central Terminal",
    "lat": 40.7527,
    "long": -73.9772,
    "reviews": "43,437 reviews"
  },
  {
    "attraction": "One World Observatory",
    "lat": 40.7127,
    "long": -74.0134,
    "reviews": "26,918 reviews"
  },
  {
    "attraction": "Broadway",
    "lat": 40.759,
    "long": -73.9845,
    "reviews": "29,876 reviews"
  },
  {
    "attraction": "The Met Cloisters",
    "lat": 40.8649,
    "long": -73.9317,
    "reviews": "5,003 reviews"
  },
  {
    "attraction": "Intrepid Sea, Air & Space Museum",
    "lat": 40.7645,
    "long": -73.9996,
    "reviews": "9,201 reviews"
  },
  {
    "attraction": "Bryant Park",
    "lat": 40.7536,
    "long": -73.9832,
    "reviews": "23,009 reviews"
  },
  {
    "attraction": "Radio City Music Hall",
    "lat": 40.76,
    "long": -73.98,
    "reviews": "9,004 reviews"
  },
  {
    "attraction": "Rockefeller Center",
    "lat": 40.7587,
    "long": -73.9787,
    "reviews": "24,789 reviews"
  },
  {
    "attraction": "New York Public Library",
    "lat": 40.7051,
    "long": -74.0087,
    "reviews": "14,088 reviews"
  },
  {
    "attraction": "St. Patrick's Cathedral",
    "lat": 40.7585,
    "long": -73.976,
    "reviews": "14,554 reviews"
  },
  {
    "attraction": "The Oculus",
    "lat": 40.7126,
    "long": -74.0099,
    "reviews": "2,386 reviews"
  },
  {
    "attraction": "Ellis Island",
    "lat": 40.6995,
    "long": -74.0396,
    "reviews": "7,151 reviews"
  },
  {
    "attraction": "Greenwich Village",
    "lat": 40.7336,
    "long": -74.0027,
    "reviews": "3,781 reviews"
  },
  {
    "attraction": "Times Square",
    "lat": 40.758,
    "long": -73.9855,
    "reviews": "54,799 reviews"
  },
  {
    "attraction": "Staten Island Ferry",
    "lat": 40.671946,
    "long": -74.042495,
    "reviews": "22,256 reviews"
  },
  {
    "attraction": "Gulliver's Gate",
    "lat": 40.7576,
    "long": -73.987,
    "reviews": "2,728 reviews"
  },
  {
    "attraction": "American Museum of Natural History",
    "lat": 40.781324,
    "long": -73.973988,
    "reviews": "25,171 reviews"
  },
  {
    "attraction": "Chelsea Market",
    "lat": 40.7424,
    "long": -74.0061,
    "reviews": "9,367 reviews"
  },
  {
    "attraction": "Christmas Spectacular Starring the Radio City Rockettes",
    "lat": 40.759976,
    "long": -73.979977,
    "reviews": "2,344 reviews"
  },
  {
    "attraction": "The Museum of Modern Art",
    "lat": 40.7614,
    "long": -73.9776,
    "reviews": "17,616 reviews"
  },
  {
    "attraction": "The Roosevelt Island Tramway",
    "lat": 40.7616,
    "long": -73.9646,
    "reviews": "3,618 reviews"
  }
];

var barMarks = [];
var restMarks = [];
var attracMarks =[];

for ( var i=0; i < bar_markers.length; ++i )
  // Setting the marker radius for the city by passing population into the markerSize function
  barMarks.push(
    L.marker(bar_markers[i].lat, bar_markers[i].long, {icon: myIcon1}).bindPopup("<h1>" + bar_markers[i].name + "</h1>")
    );
  
  var barLayer = L.layerGroup(barMarks);


  for ( var i=0; i < rest_markers.length; ++i )
  // Setting the marker radius for the city by passing population into the markerSize function
  restMarks.push(
    L.marker(rest_markers[i].lat, rest_markers[i].long, {icon: myIcon2}).bindPopup("<h1>" + rest_markers[i].name + "</h1>")
    );
  
  var restLayer = L.layerGroup(restMarks);



  for ( var i=0; i < attraction_markers.length; ++i )
  // Setting the marker radius for the city by passing population into the markerSize function
  attracMarks.push(
    L.marker(attraction_markers[i].lat, attraction_markers[i].long, {icon: myIcon3}).bindPopup("<h1>" + attraction_markers[i].attraction + "</h1>")
    );
  
  var attracLayer = L.layerGroup(attracMarks);

var layers = {
  Attractions: new L.LayerGroup(),
  Restaurants: new L.LayerGroup(),
  Bars: new L.LayerGroup(),
}; 

var overlays = {
  "attractions": layers.Attractions, 
  "restaurants": layers.Restaurants,
  "bars": layers.Bars
};
L.control.layers(null,overlays).addTo(map);
map.on('overlayadd',function(e){
  alert(e.name + "was just turned on");
});

map.on('overlayremove',function(e){
  alert(e.name + "was just turned off");
});

// Create map object and set default layers
var myMap = L.map("map", {
  center: [42.2276, -72.2137],
  zoom: 7,
  layers: [streetmap, overlays]
});

var streetmap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets"
}).addTo(map);




// info.onAdd = function() {
//   var div = L.DomUtil.create('div','legend'),;
//   return div; 
// }; 
// info.addTo(map); 
var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )
var myIcon1 = L.icon({
  iconUrl: myURL + 'images/pin29.png',
  iconRetinaUrl: myURL + 'images/pin30.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})
var myIcon2 = L.icon({
  iconUrl: myURL + 'images/pin22.png',
  iconRetinaUrl: myURL + 'images/pin26.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})
var myIcon3 = L.icon({
  iconUrl: myURL + 'images/pin17.png',
  iconRetinaUrl: myURL + 'images/pin19.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})
for ( var i=0; i < bar_markers.length; ++i )
{
 var bar_mark = L.marker( [bar_markers[i].lat, bar_markers[i].long], {icon: myIcon1} )
  .bindPopup( '<a href=www.yelp.com"' + bar_markers[i].url + '" target="_blank">' + bar_markers[i].name + '</a>' )
  .addTo( map );
 
}
for ( var i=0; i < rest_markers.length; ++i )
{
 L.marker( [rest_markers[i].lat, rest_markers[i].long], {icon: myIcon2} )
  .bindPopup( '<a href="' + rest_markers[i].url + '" target="_blank">' + rest_markers[i].name + '</a>' )
  .addTo( map );
}
for ( var i=0; i < attraction_markers.length; ++i )
{
 L.marker( [attraction_markers[i].lat, attraction_markers[i].long], {icon: myIcon3} )
  .bindPopup( '<a href="' + attraction_markers[i].url + '" target="_blank">' + attraction_markers[i].attraction + '</a>' )
  .addTo( map );
}