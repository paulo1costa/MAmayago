ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-5479059.120813, -757337.327926, -5096575.260970, -482248.245761]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Map_1 = new ol.format.GeoJSON();
var features_Map_1 = format_Map_1.readFeatures(json_Map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Map_1.addFeatures(features_Map_1);
var lyr_Map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Map_1, 
                style: style_Map_1,
                popuplayertitle: 'Map',
                interactive: false,
                title: '<img src="styles/legend/Map_1.png" /> Map'
            });
var format_Regio_2 = new ol.format.GeoJSON();
var features_Regio_2 = format_Regio_2.readFeatures(json_Regio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regio_2.addFeatures(features_Regio_2);
var lyr_Regio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regio_2, 
                style: style_Regio_2,
                popuplayertitle: 'Região',
                interactive: false,
                title: '<img src="styles/legend/Regio_2.png" /> Região'
            });
var format_Municipios_3 = new ol.format.GeoJSON();
var features_Municipios_3 = format_Municipios_3.readFeatures(json_Municipios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_3.addFeatures(features_Municipios_3);
var lyr_Municipios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_3, 
                style: style_Municipios_3,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios'
            });
var format_base_maio_agosto_4 = new ol.format.GeoJSON();
var features_base_maio_agosto_4 = format_base_maio_agosto_4.readFeatures(json_base_maio_agosto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_base_maio_agosto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_base_maio_agosto_4.addFeatures(features_base_maio_agosto_4);
var lyr_base_maio_agosto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_base_maio_agosto_4, 
                style: style_base_maio_agosto_4,
                popuplayertitle: 'base_maio_agosto',
                interactive: true,
                title: '<img src="styles/legend/base_maio_agosto_4.png" /> base_maio_agosto'
            });
var format_centroides_maio_agosto_5 = new ol.format.GeoJSON();
var features_centroides_maio_agosto_5 = format_centroides_maio_agosto_5.readFeatures(json_centroides_maio_agosto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroides_maio_agosto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroides_maio_agosto_5.addFeatures(features_centroides_maio_agosto_5);
cluster_centroides_maio_agosto_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_centroides_maio_agosto_5
});
var lyr_centroides_maio_agosto_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_centroides_maio_agosto_5, 
                style: style_centroides_maio_agosto_5,
                popuplayertitle: 'centroides_maio_agosto',
                interactive: false,
                title: 'centroides_maio_agosto'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Map_1.setVisible(true);lyr_Regio_2.setVisible(true);lyr_Municipios_3.setVisible(true);lyr_base_maio_agosto_4.setVisible(true);lyr_centroides_maio_agosto_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Map_1,lyr_Regio_2,lyr_Municipios_3,lyr_base_maio_agosto_4,lyr_centroides_maio_agosto_5];
lyr_Map_1.set('fieldAliases', {'FID': 'FID', 'layer': 'layer', 'path': 'path', });
lyr_Regio_2.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA': 'SIGLA', 'NM_REGIAO': 'NM_REGIAO', });
lyr_Municipios_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', });
lyr_base_maio_agosto_4.set('fieldAliases', {'Name': 'Name', 'Aircraft_N': 'Aircraft_N', 'Flight_Con': 'Flight_Con', 'Pilot_Name': 'Pilot_Name', 'Mode_Selec': 'Mode_Selec', 'Data': 'Data', 'Altura (m)': 'Altura (m)', 'Vel (Km/h)': 'Vel (Km/h)', 'faixa (m)': 'faixa (m)', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', });
lyr_centroides_maio_agosto_5.set('fieldAliases', {'Name': 'Name', 'Aircraft_N': 'Aircraft_N', 'Flight_Con': 'Flight_Con', 'Pilot_Name': 'Pilot_Name', 'Mode_Selec': 'Mode_Selec', 'Data': 'Data', 'Altura (m)': 'Altura (m)', 'Vel (Km/h)': 'Vel (Km/h)', 'faixa (m)': 'faixa (m)', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', });
lyr_Map_1.set('fieldImages', {'FID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Regio_2.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA': 'TextEdit', 'NM_REGIAO': 'TextEdit', });
lyr_Municipios_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_base_maio_agosto_4.set('fieldImages', {'Name': 'TextEdit', 'Aircraft_N': 'TextEdit', 'Flight_Con': 'TextEdit', 'Pilot_Name': 'TextEdit', 'Mode_Selec': 'TextEdit', 'Data': 'DateTime', 'Altura (m)': 'TextEdit', 'Vel (Km/h)': 'TextEdit', 'faixa (m)': '', 'NM_MUN': '', 'SIGLA': '', });
lyr_centroides_maio_agosto_5.set('fieldImages', {'Name': 'TextEdit', 'Aircraft_N': 'TextEdit', 'Flight_Con': 'TextEdit', 'Pilot_Name': 'TextEdit', 'Mode_Selec': 'TextEdit', 'Data': 'DateTime', 'Altura (m)': 'TextEdit', 'Vel (Km/h)': 'TextEdit', 'faixa (m)': '', 'NM_MUN': '', 'SIGLA': '', });
lyr_Map_1.set('fieldLabels', {'FID': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Regio_2.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA': 'no label', 'NM_REGIAO': 'no label', });
lyr_Municipios_3.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', 'AREA_KM2': 'no label', });
lyr_base_maio_agosto_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'Aircraft_N': 'inline label - visible with data', 'Flight_Con': 'inline label - visible with data', 'Pilot_Name': 'inline label - visible with data', 'Mode_Selec': 'inline label - visible with data', 'Data': 'inline label - visible with data', 'Altura (m)': 'inline label - visible with data', 'Vel (Km/h)': 'inline label - visible with data', 'faixa (m)': 'inline label - visible with data', 'NM_MUN': 'inline label - visible with data', 'SIGLA': 'inline label - visible with data', });
lyr_centroides_maio_agosto_5.set('fieldLabels', {'Name': 'no label', 'Aircraft_N': 'no label', 'Flight_Con': 'no label', 'Pilot_Name': 'no label', 'Mode_Selec': 'no label', 'Data': 'no label', 'Altura (m)': 'no label', 'Vel (Km/h)': 'no label', 'faixa (m)': 'no label', 'NM_MUN': 'no label', 'SIGLA': 'no label', });
lyr_centroides_maio_agosto_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});