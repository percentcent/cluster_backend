var map;

function initMap()
{
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -28.024, lng: 135.887 },
        styles:[
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
    });
}