// #Controlling the data flow -> Lazy load posts or how to change subscriptions
Meteor.publish('lazyload-posts', function (limit) {
	return Posts.find({}, {
		limit: limit,
		fields: {
			text: 0
		},
		sort: {timeCreated: -1}
	});
});

Meteor.publish("single-post", function(slug) {
	return Posts.find({slug: slug});
});

Meteor.publish("single-account", function(slug) {
	return SloAccounts.find({slug: slug});
});

Meteor.publish("filtered-results", function(city, type) {
	return SloAccounts.find(queryConstructor(city, type), {
		//this limits the fields sent to the client
		fields: {
			name: 1,
			city: 1,
			"profile.description": 1,
			accountType: 1
		}
	});
});

Meteor.publish("single-profile", function(profileName) {
	return SloAccounts.find({name: profileName});
});

Meteor.publish("test-profile", function() {
	return SloAccounts.find({slug: 'bliss-cafe'});
});
/*
Meteor.publish("slo-coin-accounts", function() {
	return SloCoinAccounts.find();
});

Meteor.publish("posts-ethereum", function() {
	return Posts.find();
});

Meteor.publish("posts-ethereum", function() {
	return Posts.find();
});
*/

// # Users and Permissions -> Adding permissions
Meteor.publish("userRoles", function () {
	if (this.userId) {
		return Meteor.users.find({_id: this.userId}, {fields: {roles: 1}});
	} else {
		this.ready();
	}
});