const Miniswap = artifacts.require("Miniswap");

module.exports = function (deployer) {
	// mainnet
	// const weth9_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
	// ropsten or rinkeby testnet
	const weth9_address = "0xc778417E063141139Fce010982780140Aa0cD5Ab";

	deployer.deploy(Miniswap, weth9_address);
}