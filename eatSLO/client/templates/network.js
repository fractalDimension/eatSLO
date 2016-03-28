Meteor.startup(function() {  
   GoogleMaps.load();
});

Template.network.helpers({
   networkCardList: function(){
      //TODO: sort on client end with this query
      return SloAccounts.find();
   }
});

/*
Template.network.onCreated(function(){
   Meteor.subscribe('test-profile');
});
*/




