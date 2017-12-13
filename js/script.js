function myMap() {
    'use strict';
var myCenter = new google.maps.LatLng(48.196431, 16.359352),
    mapCanvas = document.getElementById("map"),
    mapOptions = {center: myCenter, zoom: 18},
    map = new google.maps.Map(mapCanvas, mapOptions),
    marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
      'use strict';
    map.setZoom(5);
    map.setCenter(marker.getPosition());
  });
}


/* =========== TypText =======================
==============================================*/
 var typed = new Typed("#typed", {
              strings: ["Effective", "Efficient","Electrifying", "Energetic", "Enriching", "Essential", "Exciting", "Expressive", "Extraordinary", "Extravagant", "Experienced", "Enthusiastic"],
              smartBackspace: true, // Default value
              typeSpeed: 70,
              backSpeed: 30,
              loopCount: Infinity,
              cursorChar: ""
            });