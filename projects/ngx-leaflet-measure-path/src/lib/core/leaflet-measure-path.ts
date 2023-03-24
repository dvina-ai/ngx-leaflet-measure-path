import * as L from 'leaflet';
import * as geojson from 'geojson';

declare module 'leaflet' {
	namespace control {
		//function browserPrint(options?: any): Control.BrowserPrint;
		function showMeasurements(options?: any): Control.ShowMeasurements;
		function hideMeasurements(options?: any): Control.HideMeasurements;
	}

	namespace Control {
		interface ShowMeasurements {
			addTo(map: Map): any;
		}
		interface HideMeasurements {
			addTo(map: Map): any;
		}
	}

	function geoJSON<P = any>(geojson?: geojson.GeoJsonObject, options?: ShowMeasurementsOptions): GeoJSON<P>;

	interface ShowMeasurementsOptions extends GeoJSONOptions {
		showMeasurements?: boolean;
	}

	interface Layer {
		showMeasurements();
		hideMeasurements();
		updateMeasurements();
	}

	interface Polygon {
		showMeasurements();
		hideMeasurements();
		updateMeasurements();
	}
	interface Polyline {
		showMeasurements();
		hideMeasurements();
		updateMeasurements();
	}
	interface Circle {
		showMeasurements();
		hideMeasurements();
		updateMeasurements();
	}
}
