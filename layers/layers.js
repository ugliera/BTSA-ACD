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
var format_deptbdcr76_1 = new ol.format.GeoJSON();
var features_deptbdcr76_1 = format_deptbdcr76_1.readFeatures(json_deptbdcr76_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr76_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr76_1.addFeatures(features_deptbdcr76_1);
var lyr_deptbdcr76_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr76_1, 
                style: style_deptbdcr76_1,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr76_1.png" /> dept bdc r76 '
            });
var format_deptbdcr75_2 = new ol.format.GeoJSON();
var features_deptbdcr75_2 = format_deptbdcr75_2.readFeatures(json_deptbdcr75_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr75_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr75_2.addFeatures(features_deptbdcr75_2);
var lyr_deptbdcr75_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr75_2, 
                style: style_deptbdcr75_2,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr75_2.png" /> dept bdc r75 '
            });
var format_fichiercompletavecUAInom_3 = new ol.format.GeoJSON();
var features_fichiercompletavecUAInom_3 = format_fichiercompletavecUAInom_3.readFeatures(json_fichiercompletavecUAInom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fichiercompletavecUAInom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fichiercompletavecUAInom_3.addFeatures(features_fichiercompletavecUAInom_3);
var lyr_fichiercompletavecUAInom_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fichiercompletavecUAInom_3, 
                style: style_fichiercompletavecUAInom_3,
                interactive: true,
                title: '<img src="styles/legend/fichiercompletavecUAInom_3.png" /> fichier complet avec UAI & nom'
            });
var format_SAPATBEYNAC_4 = new ol.format.GeoJSON();
var features_SAPATBEYNAC_4 = format_SAPATBEYNAC_4.readFeatures(json_SAPATBEYNAC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAPATBEYNAC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAPATBEYNAC_4.addFeatures(features_SAPATBEYNAC_4);
var lyr_SAPATBEYNAC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAPATBEYNAC_4, 
                style: style_SAPATBEYNAC_4,
                interactive: true,
    title: 'SAPAT + BEYNAC<br />\
    <img src="styles/legend/SAPATBEYNAC_4_0.png" /> LAP de Touscayrats à Verdalle<br />\
    <img src="styles/legend/SAPATBEYNAC_4_1.png" /> LAP Saint Christophe de Saint Pee s/ Nivelle<br />\
    <img src="styles/legend/SAPATBEYNAC_4_2.png" /> LEAP \'Maurice Clavel\' à Frontignan<br />\
    <img src="styles/legend/SAPATBEYNAC_4_3.png" /> LEGTA Pamiers<br />\
    <img src="styles/legend/SAPATBEYNAC_4_4.png" /> LEGTPA Bergerac Monbazillac<br />\
    <img src="styles/legend/SAPATBEYNAC_4_5.png" /> LEGTPA Tulle Naves<br />\
    <img src="styles/legend/SAPATBEYNAC_4_6.png" /> LPA Barbezieux<br />\
    <img src="styles/legend/SAPATBEYNAC_4_7.png" /> LPA de Narbonne<br />\
    <img src="styles/legend/SAPATBEYNAC_4_8.png" /> LPA de Poitiers<br />\
    <img src="styles/legend/SAPATBEYNAC_4_9.png" /> LPA Rivesaltes<br />\
    <img src="styles/legend/SAPATBEYNAC_4_10.png" /> LPA Tonneins<br />\
    <img src="styles/legend/SAPATBEYNAC_4_11.png" /> LPP \'Le Val de l\'Ouin\' de Mauléon<br />\
    <img src="styles/legend/SAPATBEYNAC_4_12.png" /> MFREO de Castelnau Chalosse<br />\
    <img src="styles/legend/SAPATBEYNAC_4_13.png" /> MFREO Périgord Limousin à Beynac<br />\
    <img src="styles/legend/SAPATBEYNAC_4_14.png" /> MFREO Petite Camargue à Gallargues<br />\
    <img src="styles/legend/SAPATBEYNAC_4_15.png" /> Site de Caussade du LPP \'Clair Foyer\' de Caussade<br />\
    <img src="styles/legend/SAPATBEYNAC_4_16.png" /> <br />'
        });
var format_candidatsisoles2024super_5 = new ol.format.GeoJSON();
var features_candidatsisoles2024super_5 = format_candidatsisoles2024super_5.readFeatures(json_candidatsisoles2024super_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_candidatsisoles2024super_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_candidatsisoles2024super_5.addFeatures(features_candidatsisoles2024super_5);
var lyr_candidatsisoles2024super_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_candidatsisoles2024super_5, 
                style: style_candidatsisoles2024super_5,
                interactive: true,
                title: '<img src="styles/legend/candidatsisoles2024super_5.png" /> candidatsisoles2024super'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_deptbdcr76_1.setVisible(true);lyr_deptbdcr75_2.setVisible(true);lyr_fichiercompletavecUAInom_3.setVisible(true);lyr_SAPATBEYNAC_4.setVisible(true);lyr_candidatsisoles2024super_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_deptbdcr76_1,lyr_deptbdcr75_2,lyr_fichiercompletavecUAInom_3,lyr_SAPATBEYNAC_4,lyr_candidatsisoles2024super_5];
lyr_deptbdcr76_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_deptbdcr75_2.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_fichiercompletavecUAInom_3.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', });
lyr_SAPATBEYNAC_4.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', });
lyr_candidatsisoles2024super_5.set('fieldAliases', {'civilite': 'civilite', 'nomusage': 'nomusage', 'nompatro': 'nompatro', 'prenomusag': 'prenomusag', 'prenometat': 'prenometat', 'NumInaa': 'NumInaa', 'AdresseLG1': 'AdresseLG1', 'AdresseCPD': 'AdresseCPD', 'AdresseCom': 'AdresseCom', 'AdresseDep': 'AdresseDep', 'examen': 'examen', 'CodeDgerEx': 'CodeDgerEx', 'Filiere': 'Filiere', 'CAS_INSCRI': 'CAS_INSCRI', 'ModaliteEv': 'ModaliteEv', 'CodeOrigin': 'CodeOrigin', 'CP': 'CP', 'correspond': 'correspond', 'correspo_1': 'correspo_1', 'correspo_8': 'correspo_8', 'liste comm': 'liste comm', 'liste co_1': 'liste co_1', 'liste co_2': 'liste co_2', 'liste co_3': 'liste co_3', 'insee': 'insee', 'commune 20': 'commune 20', 'commune _1': 'commune _1', 'commune _2': 'commune _2', });
lyr_deptbdcr76_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': '', 'y': '', });
lyr_deptbdcr75_2.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': '', 'y': '', });
lyr_fichiercompletavecUAInom_3.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', });
lyr_SAPATBEYNAC_4.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', });
lyr_candidatsisoles2024super_5.set('fieldImages', {'civilite': 'TextEdit', 'nomusage': 'TextEdit', 'nompatro': 'TextEdit', 'prenomusag': 'TextEdit', 'prenometat': 'TextEdit', 'NumInaa': 'TextEdit', 'AdresseLG1': 'TextEdit', 'AdresseCPD': 'TextEdit', 'AdresseCom': 'TextEdit', 'AdresseDep': 'TextEdit', 'examen': 'TextEdit', 'CodeDgerEx': 'TextEdit', 'Filiere': 'TextEdit', 'CAS_INSCRI': 'TextEdit', 'ModaliteEv': 'TextEdit', 'CodeOrigin': 'TextEdit', 'CP': 'TextEdit', 'correspond': 'TextEdit', 'correspo_1': 'TextEdit', 'correspo_8': 'TextEdit', 'liste comm': 'TextEdit', 'liste co_1': 'TextEdit', 'liste co_2': 'TextEdit', 'liste co_3': 'TextEdit', 'insee': 'TextEdit', 'commune 20': 'TextEdit', 'commune _1': 'TextEdit', 'commune _2': 'TextEdit', });
lyr_deptbdcr76_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_deptbdcr75_2.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_fichiercompletavecUAInom_3.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', });
lyr_SAPATBEYNAC_4.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', });
lyr_candidatsisoles2024super_5.set('fieldLabels', {'civilite': 'no label', 'nomusage': 'no label', 'nompatro': 'no label', 'prenomusag': 'no label', 'prenometat': 'no label', 'NumInaa': 'no label', 'AdresseLG1': 'no label', 'AdresseCPD': 'no label', 'AdresseCom': 'inline label', 'AdresseDep': 'no label', 'examen': 'no label', 'CodeDgerEx': 'no label', 'Filiere': 'no label', 'CAS_INSCRI': 'no label', 'ModaliteEv': 'no label', 'CodeOrigin': 'no label', 'CP': 'no label', 'correspond': 'no label', 'correspo_1': 'no label', 'correspo_8': 'no label', 'liste comm': 'no label', 'liste co_1': 'no label', 'liste co_2': 'no label', 'liste co_3': 'no label', 'insee': 'no label', 'commune 20': 'no label', 'commune _1': 'no label', 'commune _2': 'no label', });
lyr_candidatsisoles2024super_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});