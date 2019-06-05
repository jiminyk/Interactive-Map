'use strict';

/// TODO: research L.map in docs
// Initialize the map and set view to chosen coordinates and zoom level
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1
});

// Add map image
// map is x is 3840 y is 2722
// Set bounds
var bounds = [[0, 0], [2722, 3840]];
var image = L.imageOverlay('./images/map.jpg', bounds).addTo(map);

// fit map to bounds
map.fitBounds(bounds);