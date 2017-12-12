function myMap() {
  var myCenter = new google.maps.LatLng(48.196431, 16.359352);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 18};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  // Zoom to 9 when clicking on marker
  google.maps.event.addListener(marker,'click',function() {
    map.setZoom(18);
    map.setCenter(marker.getPosition());
  });
}