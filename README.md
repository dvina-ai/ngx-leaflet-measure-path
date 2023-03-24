# @dvina/ngx-leaflet-measure-path

A plugin to show measurements on paths for leaflet in angular. Using [leaflet-measure-path](https://github.com/ProminentEdge/leaflet-measure-path)

## Install

Install the package and its peer dependencies via npm (or yarn):

```shell
npm install leaflet
npm install @dvina/ngx-leaflet-measure-path
```

### Usage

Use via directive;

```
<div
	class="map"
	leaflet
	leafletMeasurePath
	[leafletOptions]="options"
	(leafletMapReady)="onMapReady($event)"
></div>
```

### Demo

[Demo](https://prominentedge.com/leaflet-measure-path/)
