singleProfile = {
	coinHolder: 'Bliss Patron',
	coinPairs: [
		{
			coinName: 'Bliss Points',
			coinAmount: '108'
		},
		{
			coinName: 'Farm Points',
			coinAmount: '9000'
		}
	]
};

Session.setDefault('latestBlock', {});

Template['ethereum'].helpers({
    currentBlock: function () {
    	console.log("currentBlock ran");
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    },
    primaryAccount: function() {
    	console.log("primmary account given");
    	return firstAccount;
    }
});

/*
Template.ethereum.helpers({
    // #Storing Data -> Querying a collection
    activeAccountList: function(){
    	return SloCoinAccounts.find({}, {sort: {timeCreated: -1}});
    }
});
*/

Template.ethereum.helpers({
    singleProfile: function(){
    	return singleProfile;
    }
});

Template.body.events({
    "submit .account-lookup": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var accountHex = event.target.text.value;
 
      // Insert a task into the collection
      //-------------------------------------------------------return data to display
 
      // Clear form
      event.target.text.value = "";
    }
});


