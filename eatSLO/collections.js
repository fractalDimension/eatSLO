Posts = new Mongo.Collection('posts');

SloAccounts = new Mongo.Collection('sloAccounts');

//SloCoinAccounts = new Mongo.Collection('sloCoinsAccounts2');

if(Meteor.isServer) {
	Posts.allow({
		insert: function (userId, doc) {
			//logged in and owned 
			return userId && doc.owner === userId && Meteor.user().roles.admin;
		},
		update: function (userId, doc, fields, modifier) {
			//admin user
			return Meteor.user().roles.admin;
		},
		fetch: ['owner']
	});
}