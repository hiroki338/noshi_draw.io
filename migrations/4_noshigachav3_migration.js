// var noshigachav3 = artifacts.require("noshigachav3");

// module.exports = function(deployer) {
  // deployment steps
 // deployer.deploy(noshigachav3);
//};

const Noshigachav3 = artifacts.require("Noshigachav3"); // Make sure this matches the actual contract name
module.exports = function (deployer) {
  deployer.deploy(Noshigachav3);
};
