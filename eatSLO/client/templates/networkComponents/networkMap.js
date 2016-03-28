Template.networkMap.onCreated(function() 
{
   GoogleMaps.ready('map', function(map) 
   {
      console.log("I'm ready!");

      // place to store map markers
      var markers = {};

      SloAccounts.find().observe(
      {
         added: function(document)
         {
            //console.log("doc added: ");

            //create marker for the document
            var marker = new google.maps.Marker(
            {
               animation: google.maps.Animation.DROP,
               position: new google.maps.LatLng(document.lat, document.lng),
               map: map.instance,
               id: document._id
            });

            markers[document._id] = marker;
         },
         removed: function(oldDocument) 
         {
            //console.log("doc removed");
            
            //remove marker from the map
            markers[oldDocument._id].setMap(null);

            delete markers[oldDocument._id];
         }   
      });
   });
});

Template.networkMap.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.281694, -120.659695),
        zoom: 15,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
      };
    }
  }
});