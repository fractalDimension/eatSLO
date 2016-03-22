contract partnerPoints {

	mapping (address => mapping (uint => uint)) public balances;

	event PointsUpdated(address sender, uint senderFinalPoints, address receiver, uint receiverFinalPoints, uint coin); 

	function partnerPoints() {
		//give available points to intial account who deploys contract
		balances[msg.sender][0] = 108; //bliss
		balances[msg.sender][1] = 9000; //organic farm
	}

	function sendPoints(address receiver, uint amount, uint coin) returns(bool successful) {
		if (balances[msg.sender][coin] < amount) return false;
		balances[msg.sender][coin] -= amount;
		balances[receiver][coin] += amount;
		PointsUpdated(msg.sender, balances[msg.sender][coin], receiver, balances[receiver][coin], coin);
		return true;
	}

	//added comment just to change the blockchin state fghfghfgh

}