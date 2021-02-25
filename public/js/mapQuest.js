function initMap() {
	L.mapquest.key = '0g7cNFSH14Hgq7p28aPltgiXC9CwKGA3';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [36.115815856537935, -115.17340760247174],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});

L.marker([36.115815856537935, -115.17340760247174]).addTo(map);
}