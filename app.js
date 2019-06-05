'use strict';

/// TODO: research L.map in docs
// Initialize the map and set view to chosen coordinates and zoom level
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0
});

// Add map image
// map is x is 7204px y is 5107px
var bounds = [[0,0], [708,1000]];
var image = L.imageOverlay('./assets/map.jpg', bounds).addTo(map);

// fit map to bounds
map.fitBounds(bounds);