import decorate from './decorator';

const COMPONENTS = [
	'AttributionControl',
	'Circle',
	'CircleMarker',
	'ControlledLayer',
	'DivOverlay',
	'FeatureGroup',
	'GeoJSON',
	'GridLayer',
	'ImageOverlay',
	'LayerGroup',
	'LayersControl',
	'Map',
	'MapComponent',
	'MapControl',
	'MapEvented',
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
	'VideoOverlay',
	'WMSTileLayer',
	'ZoomControl'
];

const COMPONENT_MAP = COMPONENTS.reduce((map, name) => {
	map[name] = decorate(name);
	return map;
}, {});

module.exports = COMPONENT_MAP;