//web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));web3.eth.defaultAccount = web3.eth.accounts[0];eatSloCoinAbi = [{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"member","type":"address"}],"name":"getBalance","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}];eatSloCoinContract = web3.eth.contract(eatSloCoinAbi);eatSloCoin = eatSloCoinContract.at('0x41aa07d29e357c3d6fe033c6d574ee9c092d622b');GuessNumberAbi = [{"constant":true,"inputs":[],"name":"foobar","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"givenNumber","type":"uint8"}],"name":"setNumber","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"givenNumber","type":"uint8"}],"name":"guessNumber","outputs":[{"name":"","type":"bool"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[],"name":"SetNumber","type":"event"}];GuessNumberContract = web3.eth.contract(GuessNumberAbi);GuessNumber = GuessNumberContract.at('0xeb84dad4b65017a2342dc1babbc86a485fe9ce4f');partnerPointsAbi = [{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"},{"name":"coin","type":"uint256"}],"name":"sendPoints","outputs":[{"name":"successful","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"senderFinalPoints","type":"uint256"},{"indexed":false,"name":"receiver","type":"address"},{"indexed":false,"name":"receiverFinalPoints","type":"uint256"},{"indexed":false,"name":"coin","type":"uint256"}],"name":"PointsUpdated","type":"event"}];partnerPointsContract = web3.eth.contract(partnerPointsAbi);partnerPoints = partnerPointsContract.at('0xdf244cc911a0e3cd64e8266be9b231f84d0ee0cf');