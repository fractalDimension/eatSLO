Template.networkCard.helpers({
	//delete me is not used
	log: function () {
    	console.log(this);
  	}
});

Template.networkCard.events({
	'click #card-name': function(e,template){
		console.log('THIS for card event click:');
		console.log(this);

		var profileName = this.name;
		console.log('profile name getting set: ');
		console.log(profileName)

		Session.set('modalProfileName', profileName);
		console.log('value of modalProfileName:')
		console.log(Session.get('modalProfileName'));

		// open the modal template
		Modal.show('networkModal');
	}
});