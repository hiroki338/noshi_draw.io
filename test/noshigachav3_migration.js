const Noshigachav3 = artifacts.require("Noshigachav3");

contract("Noshigachav3", (accounts) => {
  let lotteryInstance;

  beforeEach(async () => {
    lotteryInstance = await Lottery.new({ from: accounts[0] });
  });

  it("should return an array of players", async () => {
    const player1 = accounts[1];
    const player2 = accounts[2];

    const entryFee1 = web3.utils.toWei("0.02", "ether");
    const entryFee2 = web3.utils.toWei("0.02", "ether");

    await lotteryInstance.enter({ from: player1, value: entryFee1 });
    await lotteryInstance.enter({ from: player2, value: entryFee2 });

    const players = await lotteryInstance.getPlayers();

    assert.strictEqual(players.length, 2, "Should have two players");
    assert.strictEqual(players[0], player1, "First player should be player1");
    assert.strictEqual(players[1], player2, "Second player should be player2");
  });

  it("should return information about the latest winner", async () => {
    const manager = accounts[0];
    const player1 = accounts[1];

    const entryFee1 = web3.utils.toWei("0.02", "ether");

    await lotteryInstance.enter({ from: player1, value: entryFee1 });
    const initialBalanceManager = await web3.eth.getBalance(manager);

    await lotteryInstance.pickWinner({ from: manager });

    const latestWinnerInfo = await lotteryInstance.getLatestWinnerInfo();
    const finalBalanceManager = await web3.eth.getBalance(manager);

    assert.strictEqual(
      latestWinnerInfo[0],
      manager,
      "Latest winner should be the manager in this test scenario"
    );

    // Adjust this comparison based on your contract's logic for winnings calculation
    assert.strictEqual(
      latestWinnerInfo[1].toString(),
      "0",
      "Winnings should be 0 in this test scenario"
    );

    assert.strictEqual(
      finalBalanceManager - initialBalanceManager > 0,
      true,
      "Manager's balance should increase after picking a winner"
    );
  });
});
