// #Users and permissions -> Adding the accounts packages
Accounts.config({
    forbidClientAccountCreation: true
});

// # Users and Permissions -> Adding permissions
if(Meteor.isClient) {
    Meteor.subscribe("userRoles");
}


//this is to protect against malicious queries
queryConstructor = function (cityNameArray, typeNameArray) {
	//create empty parameter that would return all results
	var parameters = {};

	
	//dont add if empty array
	if (cityNameArray.length > 0){ 
		var cityObject = new Object();
		cityObject.$in = cityNameArray;
		//the city dot notation protects the query
		parameters.city = cityObject;
		// example of finished query
		//{ city: { $in: ['San Luis Obispo', 'Avila'] } } 
	};
	if (typeNameArray.length > 0){ 
		var typeObject = new Object();
		typeObject.$in = typeNameArray;

		parameters.accountType = typeObject;
	};
	
	return parameters;

}
