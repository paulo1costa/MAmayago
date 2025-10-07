ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5577567.581067, -757337.327926, -4998311.208387, -482248.245761]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_regiao_ma_19set25_1 = new ol.format.GeoJSON();
var features_regiao_ma_19set25_1 = format_regiao_ma_19set25_1.readFeatures(json_regiao_ma_19set25_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regiao_ma_19set25_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regiao_ma_19set25_1.addFeatures(features_regiao_ma_19set25_1);
var lyr_regiao_ma_19set25_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_regiao_ma_19set25_1, 
                style: style_regiao_ma_19set25_1,
                popuplayertitle: 'regiao_ma_19set25',
                interactive: false,
                title: '<img src="styles/legend/regiao_ma_19set25_1.png" /> regiao_ma_19set25'
            });
var format_municipio_ma_19set25_2 = new ol.format.GeoJSON();
var features_municipio_ma_19set25_2 = format_municipio_ma_19set25_2.readFeatures(json_municipio_ma_19set25_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipio_ma_19set25_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipio_ma_19set25_2.addFeatures(features_municipio_ma_19set25_2);
var lyr_municipio_ma_19set25_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipio_ma_19set25_2, 
                style: style_municipio_ma_19set25_2,
                popuplayertitle: 'municipio_ma_19set25',
                interactive: false,
                title: '<img src="styles/legend/municipio_ma_19set25_2.png" /> municipio_ma_19set25'
            });
var format_centroides_ma_01mai25_01out25_3 = new ol.format.GeoJSON();
var features_centroides_ma_01mai25_01out25_3 = format_centroides_ma_01mai25_01out25_3.readFeatures(json_centroides_ma_01mai25_01out25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroides_ma_01mai25_01out25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroides_ma_01mai25_01out25_3.addFeatures(features_centroides_ma_01mai25_01out25_3);
cluster_centroides_ma_01mai25_01out25_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_centroides_ma_01mai25_01out25_3
});
var lyr_centroides_ma_01mai25_01out25_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_centroides_ma_01mai25_01out25_3, 
                style: style_centroides_ma_01mai25_01out25_3,
                popuplayertitle: 'centroides_ma_01mai25_01out25',
                interactive: false,
                title: '<img src="styles/legend/centroides_ma_01mai25_01out25_3.png" /> centroides_ma_01mai25_01out25'
            });
var format_voos_ma_01mai25_01out25_4 = new ol.format.GeoJSON();
var features_voos_ma_01mai25_01out25_4 = format_voos_ma_01mai25_01out25_4.readFeatures(json_voos_ma_01mai25_01out25_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voos_ma_01mai25_01out25_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voos_ma_01mai25_01out25_4.addFeatures(features_voos_ma_01mai25_01out25_4);
var lyr_voos_ma_01mai25_01out25_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voos_ma_01mai25_01out25_4, 
                style: style_voos_ma_01mai25_01out25_4,
                popuplayertitle: 'voos_ma_01mai25_01out25',
                interactive: true,
                title: '<img src="styles/legend/voos_ma_01mai25_01out25_4.png" /> voos_ma_01mai25_01out25'
            });
var format_ups_ma_01mai25_01out25_5 = new ol.format.GeoJSON();
var features_ups_ma_01mai25_01out25_5 = format_ups_ma_01mai25_01out25_5.readFeatures(json_ups_ma_01mai25_01out25_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ups_ma_01mai25_01out25_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ups_ma_01mai25_01out25_5.addFeatures(features_ups_ma_01mai25_01out25_5);
var lyr_ups_ma_01mai25_01out25_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ups_ma_01mai25_01out25_5, 
                style: style_ups_ma_01mai25_01out25_5,
                popuplayertitle: 'ups_ma_01mai25_01out25',
                interactive: false,
                title: '<img src="styles/legend/ups_ma_01mai25_01out25_5.png" /> ups_ma_01mai25_01out25'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_regiao_ma_19set25_1.setVisible(true);lyr_municipio_ma_19set25_2.setVisible(true);lyr_centroides_ma_01mai25_01out25_3.setVisible(true);lyr_voos_ma_01mai25_01out25_4.setVisible(true);lyr_ups_ma_01mai25_01out25_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_regiao_ma_19set25_1,lyr_municipio_ma_19set25_2,lyr_centroides_ma_01mai25_01out25_3,lyr_voos_ma_01mai25_01out25_4,lyr_ups_ma_01mai25_01out25_5];
lyr_regiao_ma_19set25_1.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA': 'SIGLA', 'NM_REGIAO': 'NM_REGIAO', });
lyr_municipio_ma_19set25_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', });
lyr_centroides_ma_01mai25_01out25_3.set('fieldAliases', {'Name': 'Name', 'Aircraft_N': 'Aircraft_N', 'Flight_Con': 'Flight_Con', 'Pilot_Name': 'Pilot_Name', 'Mode_Selec': 'Mode_Selec', 'Altura (m)': 'Altura (m)', 'Faixa (m)': 'Faixa (m)', 'Vel (Km/h)': 'Vel (Km/h)', 'Data': 'Data', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'UP': 'UP', 'Tx (l/ha)': 'Tx (l/ha)', });
lyr_voos_ma_01mai25_01out25_4.set('fieldAliases', {'Name': 'Name', 'Aircraft_N': 'Aircraft_N', 'Flight_Con': 'Flight_Con', 'Pilot_Name': 'Pilot_Name', 'Mode_Selec': 'Mode_Selec', 'Altura (m)': 'Altura (m)', 'Faixa (m)': 'Faixa (m)', 'Vel (Km/h)': 'Vel (Km/h)', 'Data': 'Data', 'Tx (l/ha)': 'Tx (l/ha)', 'layer': 'layer', 'path': 'path', });
lyr_ups_ma_01mai25_01out25_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'UP': 'UP', 'AREA_HA': 'AREA_HA', 'CODUNIDADE': 'CODUNIDADE', 'NOME': 'NOME', 'DATA_EXPOR': 'DATA_EXPOR', 'layer': 'layer', 'path': 'path', });
lyr_regiao_ma_19set25_1.set('fieldImages', {'CD_UF': '', 'NM_UF': '', 'SIGLA': 'TextEdit', 'NM_REGIAO': '', });
lyr_municipio_ma_19set25_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_centroides_ma_01mai25_01out25_3.set('fieldImages', {'Name': 'TextEdit', 'Aircraft_N': 'TextEdit', 'Flight_Con': 'TextEdit', 'Pilot_Name': 'TextEdit', 'Mode_Selec': 'TextEdit', 'Altura (m)': 'TextEdit', 'Faixa (m)': 'TextEdit', 'Vel (Km/h)': 'TextEdit', 'Data': 'DateTime', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'UP': 'TextEdit', 'Tx (l/ha)': 'TextEdit', });
lyr_voos_ma_01mai25_01out25_4.set('fieldImages', {'Name': 'TextEdit', 'Aircraft_N': 'TextEdit', 'Flight_Con': 'TextEdit', 'Pilot_Name': 'TextEdit', 'Mode_Selec': 'TextEdit', 'Altura (m)': 'TextEdit', 'Faixa (m)': 'TextEdit', 'Vel (Km/h)': 'TextEdit', 'Data': 'DateTime', 'Tx (l/ha)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ups_ma_01mai25_01out25_5.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'UP': '', 'AREA_HA': '', 'CODUNIDADE': '', 'NOME': '', 'DATA_EXPOR': '', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_regiao_ma_19set25_1.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA': 'no label', 'NM_REGIAO': 'no label', });
lyr_municipio_ma_19set25_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', 'AREA_KM2': 'no label', });
lyr_centroides_ma_01mai25_01out25_3.set('fieldLabels', {'Name': 'no label', 'Aircraft_N': 'no label', 'Flight_Con': 'no label', 'Pilot_Name': 'no label', 'Mode_Selec': 'no label', 'Altura (m)': 'no label', 'Faixa (m)': 'no label', 'Vel (Km/h)': 'no label', 'Data': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', 'UP': 'no label', 'Tx (l/ha)': 'no label', });
lyr_voos_ma_01mai25_01out25_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Aircraft_N': 'inline label - visible with data', 'Flight_Con': 'inline label - visible with data', 'Pilot_Name': 'inline label - visible with data', 'Mode_Selec': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'Faixa (m)': 'inline label - visible with data', 'Vel (Km/h)': 'inline label - visible with data', 'Data': 'inline label - visible with data', 'Tx (l/ha)': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_ups_ma_01mai25_01out25_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'UP': 'no label', 'AREA_HA': 'no label', 'CODUNIDADE': 'no label', 'NOME': 'no label', 'DATA_EXPOR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ups_ma_01mai25_01out25_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});