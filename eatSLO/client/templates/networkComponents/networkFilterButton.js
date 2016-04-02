Template.networkFilterButton.onCreated( function() 
{
   //create reactive dict within the scope of the template instance that gets destroyed
   this.mapState = new ReactiveDict();
   this.mapState.set(
   {
      growerChecked: false,
      supplierChecked: false,
      preparerChecked: false
   });
});


Template.networkFilterButton.events(
{
   'click #supplier-toggle': function(e,template)
   {
      toggleMapState('supplierChecked');
      sessionSetter('typeFilter', 'supplier', template.mapState.get('supplierChecked'));
      
   },
   'click #preparer-toggle': function(e,template)
   {
      toggleMapState('preparerChecked');
      sessionSetter('typeFilter', 'preparer', template.mapState.get('preparerChecked'));
   },
   'click #grower-toggle': function(e,template)
   {
      toggleMapState('growerChecked');
      sessionSetter('typeFilter', 'grower', template.mapState.get('growerChecked'));
   },
   'click #toggle-all': function(e,template)
   {
      //clear session and uncheck all buttons
      Session.set('typeFilter', new Array());
      Session.set('cityFilter', new Array());
      template.mapState.set(
      {
         growerChecked: false,
         supplierChecked: false,
         preparerChecked: false
      });
   }
});

//this sets the session variable that the network page subscription is taking as a parameter
var sessionSetter = function (sessionKey, filterValue, isChecked) 
{
   if (isChecked)
   {
      //add item to session array to construct query with
      var prevSession = Session.get(sessionKey).slice(0);
      var newSession = [filterValue];
      Array.prototype.push.apply(newSession, prevSession);
      Session.set(sessionKey, newSession);
      //console.log(newSession);
   } else 
   {
      //if the button is un checked then remove item from session array 
      var prevSession = Session.get(sessionKey).slice(0);
      var index = prevSession.indexOf(filterValue);
      if (index > -1) 
      {
         prevSession.splice(index, 1);
         //this next line might not be reative, copy array to a new one if it doesn't work
         Session.set(sessionKey, prevSession);
         //console.log(prevSession);
      }
   }
}

var toggleMapState = function (stateName)
{
   Template.instance().mapState.set(stateName, !Template.instance().mapState.get(stateName));
}