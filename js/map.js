window.onload = function () {
	var styles = [
  {
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#f6f6f6" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "off" },
      { "color": "#f6f6f6" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#e0e0e0" },
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      { "color": "#777777" },
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#b7c9e5" }
    ]
  },{
    "featureType": "poi.attraction",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.medical",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.place_of_worship",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.sports_complex",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.government",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#2c2640" }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#2c2640" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#2c2640" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.sports_complex",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
     "featureType": "poi.government",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "poi.school",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#2c2640" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }
];

var options = {
	mapTypeControlOptions: {
		mapTypeIds: ['Styled']
	},
	center: new google.maps.LatLng(51.50871, -0.069375),
	zoom: 15,
	disableDefaultUI: false,	
	mapTypeId: 'Styled'
};


var addressArray = new Array("46-48 East Smithfield Street, London, E1W 1AW");
var geocoder = new google.maps.Geocoder();

for (var i = 0; i < addressArray.length; i++) {
geocoder.geocode( { 'address': addressArray[i]}, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
var marker = new google.maps.Marker({
map: map,
position: results[0].geometry.location,
icon: 'http://iln.co.uk/new/images/map-icon.png'});
} else {
alert("Geocode was not successful: " + status);
}
});
}



var div = document.getElementById('map');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);
}
