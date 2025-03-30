var wms_layers = [];


        var lyr_GSatelite_0 = new ol.layer.Tile({
            'title': 'GSatelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CPS_HPSR_Sample_1 = new ol.format.GeoJSON();
var features_CPS_HPSR_Sample_1 = format_CPS_HPSR_Sample_1.readFeatures(json_CPS_HPSR_Sample_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPS_HPSR_Sample_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPS_HPSR_Sample_1.addFeatures(features_CPS_HPSR_Sample_1);
var lyr_CPS_HPSR_Sample_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CPS_HPSR_Sample_1, 
                style: style_CPS_HPSR_Sample_1,
                popuplayertitle: 'CPS_HPSR_Sample',
                interactive: true,
                title: '<img src="styles/legend/CPS_HPSR_Sample_1.png" /> CPS_HPSR_Sample'
            });
var format_CDC_Old_Sample_2 = new ol.format.GeoJSON();
var features_CDC_Old_Sample_2 = format_CDC_Old_Sample_2.readFeatures(json_CDC_Old_Sample_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CDC_Old_Sample_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CDC_Old_Sample_2.addFeatures(features_CDC_Old_Sample_2);
var lyr_CDC_Old_Sample_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CDC_Old_Sample_2, 
                style: style_CDC_Old_Sample_2,
                popuplayertitle: 'CDC_Old_Sample',
                interactive: true,
                title: '<img src="styles/legend/CDC_Old_Sample_2.png" /> CDC_Old_Sample'
            });
var format_Wc_BndyData_3 = new ol.format.GeoJSON();
var features_Wc_BndyData_3 = format_Wc_BndyData_3.readFeatures(json_Wc_BndyData_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wc_BndyData_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wc_BndyData_3.addFeatures(features_Wc_BndyData_3);
var lyr_Wc_BndyData_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wc_BndyData_3, 
                style: style_Wc_BndyData_3,
                popuplayertitle: 'Wc_BndyData',
                interactive: true,
                title: '<img src="styles/legend/Wc_BndyData_3.png" /> Wc_BndyData'
            });

lyr_GSatelite_0.setVisible(true);lyr_CPS_HPSR_Sample_1.setVisible(true);lyr_CDC_Old_Sample_2.setVisible(true);lyr_Wc_BndyData_3.setVisible(true);
var layersList = [lyr_GSatelite_0,lyr_CPS_HPSR_Sample_1,lyr_CDC_Old_Sample_2,lyr_Wc_BndyData_3];
lyr_CPS_HPSR_Sample_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PSU_NO_M': 'PSU_NO_M', 'EA_CODE': 'EA_CODE', 'EA_GTYPE': 'EA_GTYPE', 'EA_TYPE': 'EA_TYPE', 'SUB_EA_NR': 'SUB_EA_NR', 'SUB_EA_COD': 'SUB_EA_COD', 'SUB_EA_G_T': 'SUB_EA_G_T', 'SUB_EA_TYP': 'SUB_EA_TYP', 'DU_COUNT': 'DU_COUNT', 'DU_STATUS': 'DU_STATUS', 'FIELDWORKE': 'FIELDWORKE', 'FIELDWOR_1': 'FIELDWOR_1', 'SUPERVISOR': 'SUPERVISOR', 'SUPERVIS_1': 'SUPERVIS_1', 'FOO_NR': 'FOO_NR', 'FOO': 'FOO', 'MONITOR_NR': 'MONITOR_NR', 'MONITOR': 'MONITOR', 'ALTERNATE': 'ALTERNATE', 'EA_2011': 'EA_2011', 'SP_CODE': 'SP_CODE', 'SAL_CODE': 'SAL_CODE', 'GEO_ASSESS': 'GEO_ASSESS', 'GEO_POINT_': 'GEO_POINT_', 'FILTER_UPD': 'FILTER_UPD', 'FILTER_PRO': 'FILTER_PRO', 'EDITOR': 'EDITOR', 'EDITOR_STA': 'EDITOR_STA', 'QA_ASSURER': 'QA_ASSURER', 'QA_STATUS': 'QA_STATUS', 'QA_ASSUR_1': 'QA_ASSUR_1', 'QA_STATUS2': 'QA_STATUS2', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'SP_NAME': 'SP_NAME', 'MP_CODE': 'MP_CODE', 'MP_NAME': 'MP_NAME', 'MN_MDB_C': 'MN_MDB_C', 'MN_CODE': 'MN_CODE', 'MN_NAME': 'MN_NAME', 'MN_TYPE': 'MN_TYPE', 'DC_MDB_C': 'DC_MDB_C', 'DC_MN_C': 'DC_MN_C', 'DC_NAME': 'DC_NAME', 'PR_MDB_C': 'PR_MDB_C', 'PR_NAME': 'PR_NAME', 'ESTIMATED_': 'ESTIMATED_', 'OBSERVED_D': 'OBSERVED_D', 'QA_DU_COUN': 'QA_DU_COUN', 'MRN_COUNT': 'MRN_COUNT', 'HH_COUNT': 'HH_COUNT', 'SDI_COUNT': 'SDI_COUNT', 'GATED_COMM': 'GATED_COMM', 'OTHER': 'OTHER', 'PSU_STATUS': 'PSU_STATUS', 'COMMENTS': 'COMMENTS', 'EA_COUNT': 'EA_COUNT', 'MERGED_EA_': 'MERGED_EA_', 'Shape_Area': 'Shape_Area', 'PSU24': 'PSU24', 'PSUNO_M': 'PSUNO_M', });
lyr_CDC_Old_Sample_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PSU_NO_M': 'PSU_NO_M', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wc_BndyData_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'DC_NAME': 'DC_NAME', 'CPS_HPSR': 'CPS_HPSR', 'CDC': 'CDC', 'Comment': 'Comment', });
lyr_CPS_HPSR_Sample_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'PSU_NO_M': 'TextEdit', 'EA_CODE': 'TextEdit', 'EA_GTYPE': 'TextEdit', 'EA_TYPE': 'TextEdit', 'SUB_EA_NR': 'TextEdit', 'SUB_EA_COD': 'TextEdit', 'SUB_EA_G_T': 'TextEdit', 'SUB_EA_TYP': 'TextEdit', 'DU_COUNT': 'TextEdit', 'DU_STATUS': 'TextEdit', 'FIELDWORKE': 'TextEdit', 'FIELDWOR_1': 'TextEdit', 'SUPERVISOR': 'TextEdit', 'SUPERVIS_1': 'TextEdit', 'FOO_NR': 'TextEdit', 'FOO': 'TextEdit', 'MONITOR_NR': 'TextEdit', 'MONITOR': 'TextEdit', 'ALTERNATE': 'TextEdit', 'EA_2011': 'TextEdit', 'SP_CODE': 'TextEdit', 'SAL_CODE': 'TextEdit', 'GEO_ASSESS': 'TextEdit', 'GEO_POINT_': 'TextEdit', 'FILTER_UPD': 'TextEdit', 'FILTER_PRO': 'TextEdit', 'EDITOR': 'TextEdit', 'EDITOR_STA': 'TextEdit', 'QA_ASSURER': 'TextEdit', 'QA_STATUS': 'TextEdit', 'QA_ASSUR_1': 'TextEdit', 'QA_STATUS2': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'SP_NAME': 'TextEdit', 'MP_CODE': 'TextEdit', 'MP_NAME': 'TextEdit', 'MN_MDB_C': 'TextEdit', 'MN_CODE': 'TextEdit', 'MN_NAME': 'TextEdit', 'MN_TYPE': 'TextEdit', 'DC_MDB_C': 'TextEdit', 'DC_MN_C': 'TextEdit', 'DC_NAME': 'TextEdit', 'PR_MDB_C': 'TextEdit', 'PR_NAME': 'TextEdit', 'ESTIMATED_': 'TextEdit', 'OBSERVED_D': 'TextEdit', 'QA_DU_COUN': 'TextEdit', 'MRN_COUNT': 'TextEdit', 'HH_COUNT': 'TextEdit', 'SDI_COUNT': 'TextEdit', 'GATED_COMM': 'TextEdit', 'OTHER': 'TextEdit', 'PSU_STATUS': 'TextEdit', 'COMMENTS': 'TextEdit', 'EA_COUNT': 'TextEdit', 'MERGED_EA_': 'TextEdit', 'Shape_Area': 'TextEdit', 'PSU24': 'TextEdit', 'PSUNO_M': 'TextEdit', });
lyr_CDC_Old_Sample_2.set('fieldImages', {'OBJECTID': 'Range', 'PSU_NO_M': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Wc_BndyData_3.set('fieldImages', {'OBJECTID': 'Range', 'DISTRICT': 'TextEdit', 'DC_NAME': 'TextEdit', 'CPS_HPSR': 'TextEdit', 'CDC': 'TextEdit', 'Comment': 'TextEdit', });
lyr_CPS_HPSR_Sample_1.set('fieldLabels', {'OBJECTID': 'no label', 'PSU_NO_M': 'inline label - always visible', 'EA_CODE': 'inline label - always visible', 'EA_GTYPE': 'no label', 'EA_TYPE': 'no label', 'SUB_EA_NR': 'no label', 'SUB_EA_COD': 'no label', 'SUB_EA_G_T': 'no label', 'SUB_EA_TYP': 'no label', 'DU_COUNT': 'no label', 'DU_STATUS': 'no label', 'FIELDWORKE': 'no label', 'FIELDWOR_1': 'no label', 'SUPERVISOR': 'no label', 'SUPERVIS_1': 'no label', 'FOO_NR': 'no label', 'FOO': 'no label', 'MONITOR_NR': 'no label', 'MONITOR': 'no label', 'ALTERNATE': 'no label', 'EA_2011': 'no label', 'SP_CODE': 'no label', 'SAL_CODE': 'no label', 'GEO_ASSESS': 'no label', 'GEO_POINT_': 'no label', 'FILTER_UPD': 'no label', 'FILTER_PRO': 'no label', 'EDITOR': 'no label', 'EDITOR_STA': 'no label', 'QA_ASSURER': 'no label', 'QA_STATUS': 'no label', 'QA_ASSUR_1': 'no label', 'QA_STATUS2': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'SP_NAME': 'no label', 'MP_CODE': 'no label', 'MP_NAME': 'no label', 'MN_MDB_C': 'no label', 'MN_CODE': 'no label', 'MN_NAME': 'no label', 'MN_TYPE': 'no label', 'DC_MDB_C': 'no label', 'DC_MN_C': 'no label', 'DC_NAME': 'no label', 'PR_MDB_C': 'no label', 'PR_NAME': 'no label', 'ESTIMATED_': 'no label', 'OBSERVED_D': 'no label', 'QA_DU_COUN': 'no label', 'MRN_COUNT': 'no label', 'HH_COUNT': 'no label', 'SDI_COUNT': 'no label', 'GATED_COMM': 'no label', 'OTHER': 'no label', 'PSU_STATUS': 'no label', 'COMMENTS': 'no label', 'EA_COUNT': 'no label', 'MERGED_EA_': 'no label', 'Shape_Area': 'no label', 'PSU24': 'no label', 'PSUNO_M': 'inline label - visible with data', });
lyr_CDC_Old_Sample_2.set('fieldLabels', {'OBJECTID': 'no label', 'PSU_NO_M': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wc_BndyData_3.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'inline label - always visible', 'DC_NAME': 'inline label - always visible', 'CPS_HPSR': 'inline label - always visible', 'CDC': 'inline label - always visible', 'Comment': 'no label', });
lyr_Wc_BndyData_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});