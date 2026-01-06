import { TileLayer } from 'react-leaflet';

export const tileLayerOptions = [
    {
        component: <TileLayer
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
                url = "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                maxNativeZoom={ 17} // This tile layer goes up to zoom level 16
                maxZoom={ 30} // Allow zooming in further. Makes map blurry though
        />,
        name: 'Default (Open Topo)'
    },
    {
        component: <TileLayer
                attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
                url = "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
                maxNativeZoom={ 16} // This tile layer goes up to zoom level 16
                maxZoom={ 30} // Allow zooming in further. Makes map blurry though
        />,
        name: 'U.S. Geological Survey'
    },
    {
        component: <TileLayer
                attribution='Tiles © Esri'
                url = "https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}"
                maxNativeZoom={ 16} // This tile layer goes up to zoom level 16
                maxZoom={ 30} // Allow zooming in further. Makes map blurry though
        />,
        name: 'Esri Topo'
    },
];