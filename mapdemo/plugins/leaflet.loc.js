/*
*  Simple navigation control that allows back and forward navigation through map's view history
*/

(function() {
  L.Control.Loc = L.Control.extend({
    options: {
      position: 'bottomright',
      //center:,
      //zoom :,
      //bbox:, //Alternative to center/zoom for home button, takes precedence if included
      homeTitle: 'Location'
    },

    onAdd: function(map) {

      // Set options
      if (!this.options.center) {
        this.options.center = map.getCenter();
      }
      if (!this.options.zoom) {
        this.options.zoom = map.getZoom();
      }
      var options = this.options;

      // Create toolbar
      var controlName = 'leaflet-control-location',
      container = L.DomUtil.create('div', controlName + ' leaflet-bar');

      // Add toolbar buttons
      this._homeButton = this._createButton(options.homeTitle, 'glyphicon glyphicon-record', container, this._goHome);
      
      return container;
    },


    _goHome: function() {
      if (this.options.bbox){
        try {
          this._map.fitBounds(this.options.bbox);
        } catch(err){
          this._map.setView(this.options.center, this.options.zoom); //Use default if invalid bbox input.
        }
      }
      this._map.setView(this.options.center, this.options.zoom);
    },


    _createButton: function(title, className, container, fn) {
      // Modified from Leaflet zoom control

      var link = L.DomUtil.create('a', className, container);
      link.href = '#';
      link.title = title;
      link.style.fontSize = '18px'

      L.DomEvent
      .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
      .on(link, 'click', L.DomEvent.stop)
      .on(link, 'click', fn, this)
      .on(link, 'click', this._refocusOnMap, this);

      return link;
    },
  });

  L.control.loc = function(options) {
    return new L.Control.Loc(options);
  };

})();