var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_17_difference_map_1 = new ol.format.GeoJSON();
var features_17_difference_map_1 = format_17_difference_map_1.readFeatures(json_17_difference_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_difference_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_difference_map_1.addFeatures(features_17_difference_map_1);
var lyr_17_difference_map_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_difference_map_1, 
                style: style_17_difference_map_1,
                popuplayertitle: "17_difference_map",
                interactive: true,
                title: '<img src="styles/legend/17_difference_map_1.png" /> 17_difference_map'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_17_difference_map_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_17_difference_map_1];
lyr_17_difference_map_1.set('fieldAliases', {'way_id': 'way_id', 'highway': 'highway', 'max_speed': 'max_speed', 'max_volume': 'max_volume', 'direction': 'direction', 'surface': 'surface', 'number_of_lanes': 'number_of_lanes', 'street_name': 'street_name', 'zoom': 'zoom', 'detector_group_id': 'detector_group_id', 'first_lat': 'first_lat', 'first_long': 'first_long', 'last_lat': 'last_lat', 'last_long': 'last_long', 'volume_15_mins': 'volume_15_mins', 'speed_15_mins': 'speed_15_mins', 'hazard_15_mins': 'hazard_15_mins', 'volume_30_mins': 'volume_30_mins', 'speed_30_mins': 'speed_30_mins', 'hazard_30_mins': 'hazard_30_mins', 'volume_45_mins': 'volume_45_mins', 'speed_45_mins': 'speed_45_mins', 'hazard_45_mins': 'hazard_45_mins', 'volume_60_mins': 'volume_60_mins', 'speed_60_mins': 'speed_60_mins', 'hazard_60_mins': 'hazard_60_mins', 'volume_difference_15_mins': 'volume_difference_15_mins', 'speed_difference_15_mins': 'speed_difference_15_mins', 'hazard_difference_15_mins': 'hazard_difference_15_mins', 'volume_difference_30_mins': 'volume_difference_30_mins', 'speed_difference_30_mins': 'speed_difference_30_mins', 'hazard_difference_30_mins': 'hazard_difference_30_mins', 'volume_difference_45_mins': 'volume_difference_45_mins', 'speed_difference_45_mins': 'speed_difference_45_mins', 'hazard_difference_45_mins': 'hazard_difference_45_mins', 'volume_difference_60_mins': 'volume_difference_60_mins', 'speed_difference_60_mins': 'speed_difference_60_mins', 'hazard_difference_60_mins': 'hazard_difference_60_mins', });
lyr_17_difference_map_1.set('fieldImages', {'way_id': 'TextEdit', 'highway': 'TextEdit', 'max_speed': 'TextEdit', 'max_volume': 'TextEdit', 'direction': 'TextEdit', 'surface': 'TextEdit', 'number_of_lanes': 'Range', 'street_name': 'TextEdit', 'zoom': 'Range', 'detector_group_id': 'TextEdit', 'first_lat': 'TextEdit', 'first_long': 'TextEdit', 'last_lat': 'TextEdit', 'last_long': 'TextEdit', 'volume_15_mins': 'TextEdit', 'speed_15_mins': 'TextEdit', 'hazard_15_mins': 'TextEdit', 'volume_30_mins': 'TextEdit', 'speed_30_mins': 'TextEdit', 'hazard_30_mins': 'TextEdit', 'volume_45_mins': 'TextEdit', 'speed_45_mins': 'TextEdit', 'hazard_45_mins': 'TextEdit', 'volume_60_mins': 'TextEdit', 'speed_60_mins': 'TextEdit', 'hazard_60_mins': 'TextEdit', 'volume_difference_15_mins': 'TextEdit', 'speed_difference_15_mins': 'TextEdit', 'hazard_difference_15_mins': 'TextEdit', 'volume_difference_30_mins': 'TextEdit', 'speed_difference_30_mins': 'TextEdit', 'hazard_difference_30_mins': 'TextEdit', 'volume_difference_45_mins': 'TextEdit', 'speed_difference_45_mins': 'TextEdit', 'hazard_difference_45_mins': 'TextEdit', 'volume_difference_60_mins': 'TextEdit', 'speed_difference_60_mins': 'TextEdit', 'hazard_difference_60_mins': 'TextEdit', });
lyr_17_difference_map_1.set('fieldLabels', {'way_id': 'no label', 'highway': 'no label', 'max_speed': 'no label', 'max_volume': 'no label', 'direction': 'no label', 'surface': 'no label', 'number_of_lanes': 'no label', 'street_name': 'no label', 'zoom': 'no label', 'detector_group_id': 'no label', 'first_lat': 'no label', 'first_long': 'no label', 'last_lat': 'no label', 'last_long': 'no label', 'volume_15_mins': 'no label', 'speed_15_mins': 'no label', 'hazard_15_mins': 'no label', 'volume_30_mins': 'no label', 'speed_30_mins': 'no label', 'hazard_30_mins': 'no label', 'volume_45_mins': 'no label', 'speed_45_mins': 'no label', 'hazard_45_mins': 'no label', 'volume_60_mins': 'no label', 'speed_60_mins': 'no label', 'hazard_60_mins': 'no label', 'volume_difference_15_mins': 'no label', 'speed_difference_15_mins': 'no label', 'hazard_difference_15_mins': 'no label', 'volume_difference_30_mins': 'no label', 'speed_difference_30_mins': 'no label', 'hazard_difference_30_mins': 'no label', 'volume_difference_45_mins': 'no label', 'speed_difference_45_mins': 'no label', 'hazard_difference_45_mins': 'no label', 'volume_difference_60_mins': 'no label', 'speed_difference_60_mins': 'no label', 'hazard_difference_60_mins': 'no label', });
lyr_17_difference_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});