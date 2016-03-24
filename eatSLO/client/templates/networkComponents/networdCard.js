Template.networkCard.onCreated( function() {
	//create reactive var within the scope of the template instance
	this.borderType = new ReactiveVar;
	this.borderType.set(this.data.accountType);
});

Template.networkCard.helpers({
	borderColor: function () 
	{
		//use the account type to return a specific color
		var borderType = Template.instance().borderType.get();
		
		switch(borderType)
		{
			case 'grower':
				return "#00CC00";
			case 'preparer':
				return "#0000FF";
			case 'supplier':
				return "#FF9900";
			default:
				console.log("no border color found for type: " + borderType);
				return "black";
		}
	}
});

Template.networkCard.events({
	'click #card-name': function(e,template)
	{
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