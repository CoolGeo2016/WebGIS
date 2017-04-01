

var map = L.map("brmap", {
    // center: [37.71, -99.88],
    center: [23, 113.25],
    zoom: 10,
    zoomControl: false,
    attributionControl:false
});

customBaselayer= L.esri.basemapLayer("TianDiTuVec");
map.addLayer(customBaselayer);  
layerLabels = L.esri.basemapLayer("TianDiTuVec_A");
map.addLayer(layerLabels);  

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
         edit: {
             featureGroup: drawnItems
         },
         position: 'topright',
     });
map.addControl(drawControl);
  map.on('draw:created', function(e) {
            var type = e.layerType,
                layer = e.layer;

            drawnItems.addLayer(layer);
        });


// L.control.layers(baseLayers, null).addTo(map);
L.control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小'
}).addTo(map);

var loc = new L.control.loc();
loc.addTo(map)


// gdimage.addTo(map);
// esri.dynamicMapLayer({
//     url: 'https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer',
//     opacity: 0.7
//   }).addTo(map);

// var dxt = L.esri.tiledMapLayer({
//     url: "http://14.23.112.28:81//arcgis//rest//services//SL//KG//MapServer",
//     detectRetina: false,
//     minZoom: 5,
//     maxZoom: 10,
//     maptype:'dxt'
//   });


var dxt = L.esri.dynamicMapLayer({
    url: 'http://14.23.112.28:81/arcgis/rest/services/SL/TDJZ/MapServer',
    maptype:'dxt',
    opacity: 0.7
  })

var dxtfirst = false;
var dxtMapon = true;

$('.list-group-item').on('click',function(e){
    var className = e.target.className
    if($(e.target).hasClass('active')){
        $(e.target).removeClass('active')
         map.eachLayer(function(layer){
                    if(layer.options.maptype == 'dxt'){
                        // layer.setOpacity(0);
                        map.removeLayer(layer);
                        dxtMapon = false;
                    }
                })
    }else{
        $(e.target).addClass('active')
        $(e.target).siblings().removeClass('active')
        if(!dxtfirst){
            dxt.addTo(map);
            dxtfirst = true;
        }else{
            if(!dxtMapon){     
                map.addLayer(dxt)           
                // map.eachLayer(function(layer){
                //     if(layer.options.maptype == 'dxt'){
                //         // layer.setOpacity(1);
                //         dxtMapon = true;
                //     }
                // })
                dxtMapon = true;
            }
        }
    }
})

var setBaseMap = function(cdom){    
        $('#bl-text')[0].innerText = cdom.innerText
        var mapid= cdom.id;
        if(customBaselayer){
          map.removeLayer(customBaselayer);
        }
        if(layerLabels){
          map.removeLayer(layerLabels);
        }                
        if(mapid=="chinagray"){
          customBaselayer= L.esri.basemapLayer("chinagray");
          map.addLayer(customBaselayer);        
        }else if(mapid=="chinacolor"){
          customBaselayer= L.esri.basemapLayer("chinacolor");
          map.addLayer(customBaselayer);  
        }else if(mapid=="TianDiTuVec")
        {          
          customBaselayer= L.esri.basemapLayer("TianDiTuVec");
          map.addLayer(customBaselayer);  
          layerLabels = L.esri.basemapLayer("TianDiTuVec_A");
          map.addLayer(layerLabels);  
        }else if(mapid=="TianDiTuSat")
        {          
          customBaselayer= L.esri.basemapLayer("TianDiTuSat");
          map.addLayer(customBaselayer);  
          layerLabels = L.esri.basemapLayer("TianDiTuSat_A");
          map.addLayer(layerLabels);  
        }else if(mapid=="GaodeVec")
        {          
          customBaselayer= L.esri.basemapLayer("GaodeVec");
          map.addLayer(customBaselayer); 
        }else if(mapid=="GaodeSat")
        {          
          customBaselayer= L.esri.basemapLayer("GaodeSat");
          map.addLayer(customBaselayer); 
          layerLabels = L.esri.basemapLayer("GaodeSat_A");
          map.addLayer(layerLabels);  
        }
      };

$('#baselayers li').on('click',function(e){
    var cdom = e.target
    setBaseMap(cdom);
})