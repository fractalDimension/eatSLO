Template.network.helpers({
	networkCardList: function(){
		//TODO: sort on client end with this query
		return SloAccounts.find();
	}
});

Template.network.onCreated(function(){
	Meteor.subscribe('test-profile');
});
/*
ALL THESE EVENTS AND SESSION SETTER NEED TO BE MOVED INTO networkFilter EVENTS!!!!!
*/


Template.network.events({
	'click #slo-toggle': function(e,template){
		sessionSetter('cityFilter', 'San Luis Obispo', $('#slo-toggle').hasClass('active'));
	},
	'click #osos-toggle': function(e,template){
		sessionSetter('cityFilter', 'Los Osos', $('#osos-toggle').hasClass('active'));
		//Session.set('cityFilter', 'Los Osos');
	},
	'click #avila-toggle': function(e,template){
		sessionSetter('cityFilter', 'Avila', $('#avila-toggle').hasClass('active'));
		//Session.set('cityFilter', 'Avila');
	},
	'click #supplier-toggle': function(e,template){
		sessionSetter('typeFilter', 'supplier', $('#supplier-toggle').hasClass('active'));
	},
	'click #preparer-toggle': function(e,template){
		sessionSetter('typeFilter', 'preparer', $('#preparer-toggle').hasClass('active'));
	},
	'click #grower-toggle': function(e,template){
		sessionSetter('typeFilter', 'grower', $('#grower-toggle').hasClass('active'));
	},
	'click #toggle-all': function(e,template){
		//clear session and uncheck all buttons
		Session.set('typeFilter', new Array());
		Session.set('cityFilter', new Array());
		$('.btn-group[data-toggle="buttons-checkbox"] button').removeClass('active');
	}
});

//ask james for help on this one (maybe not any more)
var sessionSetter = function (sessionKey, filterValue, isChecked) {
	
	//if the button ends up being innactive then remove the filter term
	//Note: the truth of isChecked is conterintuitive but it probably has to do with order of operations of when events fire and change state
	if (isChecked){
		
		var prevSession = Session.get(sessionKey).slice(0);
		var index = prevSession.indexOf(filterValue);
		if (index > -1) {
			prevSession.splice(index, 1);
			//this next line might not be reative, copy array to a new one if it doesn't work
			Session.set(sessionKey, prevSession);
			console.log(prevSession);
		}
	} else {
		//if its not active then it should never have gotten in
		var prevSession = Session.get(sessionKey).slice(0);
		var newSession = [filterValue];
		Array.prototype.push.apply(newSession, prevSession);
		Session.set(sessionKey, newSession);
		console.log(newSession);
	}
}
