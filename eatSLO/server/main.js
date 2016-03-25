Meteor.startup(function(){

	console.log('Server started');

	if(Meteor.users.find().count() === 0) {

		console.log('Created Admin user');

		var userId = Accounts.createUser({
			username: 'johndoe',
			email: 'johndoe@example.com',
			password: '1234',
			profile: {
				name: 'John Doe'
			}
		});
		
		Meteor.users.update(userId, {$set: {
			roles: {admin: true},
		}})
		
	}

	if(SloAccounts.find().count() === 0) {
		console.log('Adding dummy accounts');

		var dummySloAccounts = [
			{
				name: 'Bliss Cafe',
				slug: 'bliss-cafe',
				city: 'San Luis Obispo',
				accountType: 'preparer',
				//test moving these to a sub-object (might cause trouble with reactivity)
				lat: 35.279858,
				lng: -120.663549,
				profile: 
				{
					address: '123 Higuera st',
					website: 'blisscafeslo.com',
					description: "We're a local vegan cafe!",
					owner: 'David Fintel',
					story: 'We started out as a food booth and grew into the devoted restaurant you see today.'
				},
				network: 
				{
					receives: 
					{
						name: ['Chumash Farms']
					},
					gives: 
					{
						name: ['Food Bank']
					}
				}
			},
			{
				name: 'Chumash Farms',
				slug: 'chumash-farms',
				city: 'Los Osos',
				//does this need square brackets to make it an array?
				accountType: 'grower',
				profile: 
				{
					address: '647 Main st',
					website: 'chumashfarms.com',
					description: "I'm a farm that Scott is involved with.",
					owner: 'Steve Aoki',
					story: 'We grow lots of this and Scott helps us out a bunch. He can paint signs and connect us with awesome people.'
				},
				network: 
				{
					gives: 
					{
						name: ['Bliss Cafe', 'Food Bank']
					}
				}
			},
			{
				name: "Linaea's",
				slug: "linaeas",
				city: 'San Luis Obispo',
				accountType: 'preparer',
				lat: 35.279123,
				lng: -120.663250,
				profile: 
				{
					address: '475 Garden st',
					website: 'coffeshop.com',
					description: "Locally owned coffee shop.",
					owner: 'Ms. Linaea',
					story: 'This is a coffee shop that Michael finds enjoyable. He will often head down to eat there before work.'
				},
				network: 
				{
					receives: 
					{
						name: ['Chumash Farms']
					},
					gives: 
					{
						name: ['Food Bank']
					}
				}
			},
			{
				name: 'Cal Poly Organic Farm',
				slug: 'cal-poly-organic-farm',
				city: 'San Luis Obispo',
				accountType: 'grower',
				profile: 
				{
					address: 'Cal Poly Campus',
					website: 'calpoly.org',
					description: "we sell things",
					owner: 'Cal Poly Corp.',
					story: 'The Cal Poly Organic Farm is an 11 acre production unit in the Horticulture and Crop Science Department that is certified organic by California Certified Organic Farmers (CCOF) with the primary mission of providing undergraduate students a place to experience hands-on learning in organic and sustainable farming and gardening practices. Our vegetable production includes dozens of varieties of produce that are marketed in several local direct sales events like farmer’s markets, a campus farm market and to local vendors and restaurants; produce not sold is donated to the Food Bank.'
				},
				network: 
				{
					gives: 
					{
						name: ['Bliss Cafe', 'Food Bank']
					}
				}
			},
			{
				name: 'See Canyon Fruit Ranch',
				slug: 'see-canyon-fruit-ranch',
				city: 'Avila',
				accountType: 'grower',
				profile: 
				{
					address: '2345 See Canyon Road',
					website: 'http://www.seecanyonwedding.com/',
					description: "We're a local vegan cafe!",
					owner: 'Guy Dude',
					story: 'The Cal Poly Organic Farm is an 11 acre production unit in the Horticulture and Crop Science Department that is certified organic by California Certified Organic Farmers (CCOF) with the primary mission of providing undergraduate students a place to experience hands-on learning in organic and sustainable farming and gardening practices. Our vegetable production includes dozens of varieties of produce that are marketed in several local direct sales events like farmer’s markets, a campus farm market and to local vendors and restaurants; produce not sold is donated to the Food Bank.'
				},
				network: 
				{
					gives: 
					{
						name: ['Bliss Cafe', 'Food Bank', "Linaea's"]
					}
				}
			},
			{
				name: 'Bear Creek Ranch',
				slug: 'bear-creek-ranch',
				city: 'Los Osos',
				accountType: 'supplier',
				profile: 
				{
					address: '3698 clark valley rd',
					website: 'http://www.localharvest.org/bear-creek-ranch-M42544',
					description: "Growing sub-tropical fruits",
					owner: 'Guy Dude',
					story: 'Bear Creek Ranch is a 600 acre ranch nestled at the end of Clark Valley Road in between Los Osos and San Luis Obispo.Through rotational grazing we strive to create healthy native grasslands and oak woodlands. Our goals are sustainibility, biodiversity, promoting native grasses, and overall health of our land' 
				},
				network: 
				{
					gives: 
					{
						name: ['Bliss Cafe', 'Food Bank', "Linaea's"]
					}
				}
			},
			{
				name: 'Good Tides',
				slug: 'good-tides',
				city: 'Los Osos',
				accountType: 'supplier',
				profile: 
				{
					address: '1326 2nd Street, Baywood Park ',
					website: 'http://www.goodtides.com/',
					description: "Organic Bistro",
					owner: 'Guy Dude',
					story: 'Good Tides offers you a wholesome, full menu of Organic meals and other delicious goodies. ' 
				},
				network: 
				{
					receives: 
					{
						name: ['Cal Poly Organic Farm']
					}
				}
			}

			


		];

		_.each(dummySloAccounts, function(account){
			SloAccounts.insert(account);
		});
	}

	// #Storing Data -> Adding example posts
	if(Posts.find().count() === 0) {

		console.log('Adding dummy posts');

		var dummyPosts = [
			{
				title: 'My First entry',
				slug: 'my-first-entry',
				description: 'Lorem ipsum dolor sit amet.',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				timeCreated: moment().subtract(7, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'My Second entry',
				slug: 'my-second-entry',
				description: 'Borem ipsum dolor sit amet, consetetur sadipscing.',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				timeCreated: moment().subtract(5, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'My Third entry',
				slug: 'my-third-entry',
				description: 'Dorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				timeCreated: moment().subtract(3, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'My Fourth entry',
				slug: 'my-fourth-entry',
				description: 'Sorem ipsum dolor sit amet, consetetur sadipscing.',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				timeCreated: moment().subtract(2, 'days').unix(),
				author: 'John Doe'
			},
			{
				title: 'My Fifth entry',
				slug: 'my-fifth-entry',
				description: 'Korem ipsum dolor sit amet, consetetur sadipscing elitr.',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
				timeCreated: moment().subtract(1, 'days').unix(),
				author: 'John Doe'
			}
		];

		// we add the dummyPosts to our database
		_.each(dummyPosts, function(post){
			Posts.insert(post);
		});
	}
});