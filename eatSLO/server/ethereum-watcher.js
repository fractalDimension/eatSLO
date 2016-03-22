/*
partnerPoints.PointsUpdated({},{fromBlock: 0, toBlock: 'latest'}).watch(function(e, log) {
    if(!e) {
        console.log('Points! From:'+ log.args.sender);

        // add both final account info to our collection
        SloCoinAccounts.update(
        	//selector
        	{accountHash: log.args.sender},
        	{
        		//modifier
                $set: {
                    account: {
            		  name: log.args.coin.toString(10),
            		  points: log.args.senderFinalPoints.toString(10)
                    },
                    lastBlockNumber: log.blockNumber
                },
            	
        	},
            { upsert: true }
        );
        SloCoinAccounts.update(
        	//selector
        	{accountHash: log.args.receiver},
        	{
                //modifier
        		$set: {
                    account: {
                        name: log.args.coin.toString(10),
                        points: log.args.receiverFinalPoints.toString(10)
                    },
                    lastBlockNumber: log.blockNumber
                }		
            },
            { upsert: true }
        );
    }
});
*/