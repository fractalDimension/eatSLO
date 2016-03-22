Template.networkModal.onCreated(function (){
	//initialize
	var instance = this;

	instance.autorun(function () {
		//var profileName = Session.get('modalProfileName');
		instance.subscribe('single-profile', Session.get('modalProfileName'));
	});

});

Template.networkModal.helpers({
	currentProfile: function() {
		//console.log("what the helpers sees for modalProfileName:");
		//console.log(Session.get('modalProfileName'));
		/*
		
		console.log(SloAccounts.findOne({name: profileName}));
		var profile = SloAccounts.findOne({name: profileName});
		return profile;
		*/
		var profileName = Session.get('modalProfileName');
		var profile = SloAccounts.findOne({name: profileName});
		return profile;
	}
});