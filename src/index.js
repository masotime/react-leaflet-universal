import decorate from './decorator';

const COMPONENTS = [
	'AttributionControl',
	'Circle',
	'CircleMarker',
	'FeatureGroup',
	'GeoJSON',
	'GridLayer',
	'ImageOverlay',
	'LayerGroup',
	'LayersControl',
	'Map',
	'MapComponent',
	'MapControl',
	'MapLayer',
	'Marker',
	'Pane',
	'Path',
	'Polygon',
	'Polyline',
	'Popup',
	'Rectangle',
	'ScaleControl',
	'TileLayer',
	'Tooltip',
	'WMSTileLayer',
	'ZoomControl'
];

const COMPONENT_MAP = COMPONENTS.reduce((map, name) => {
	map[name] = decorate(name);
	return map;
}, {});

module.exports = COMPONENT_MAP;