// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Noshigachav3 {
    address public manager;
    address[] public players;
    uint public winnings;
    address public winner;
    uint public lotteryId;
    mapping(uint => address payable) public lotteryHistory;

    constructor() {
        manager = msg.sender;
        lotteryId = 1;
    }

    function getPlayersCount() public view returns (uint) {
        return players.length;
    }

    function getPlayerByIndex(uint index) public view returns (address) {
        require(index < players.length, "Index out of bounds");
        return players[index];
    }

    function getLatestWinner() public view returns (address payable) {
        return lotteryHistory[lotteryId - 1];
    }

    function getLatestWinnerInfo() public view returns (address payable, uint) {
        address payable latestWinner = lotteryHistory[lotteryId - 1];
        uint latestWinnings = (address(this).balance * 97) / 100; // Adjust this based on your contract's logic

        return (latestWinner, latestWinnings);
    }

    function enter() public payable {
        require(msg.value > 0.01 ether, "Minimum entry fee is 0.01 ether");
        players.push(payable(msg.sender));
    }

    function random() internal view returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    function pickWinner() public {
        require(
            msg.sender == manager,
            "Only the manager can call this function"
        );
        require(players.length > 0, "No participants in the lottery");
        uint index = random() % players.length;
        winner = players[index];
        address payable winnerAddress = payable(winner);
        winnerAddress.transfer((address(this).balance * 97) / 100);
        payable(manager).transfer(
            address(this).balance - (address(this).balance * 97) / 100
        ); // Remaining balance for the manager
        lotteryHistory[lotteryId] = winnerAddress;
        lotteryId++;

        players = new address[](0); // Reset the players array for the next round
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}
