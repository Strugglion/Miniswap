pragma solidity =0.6.6;

interface IMiniswap {

	function swapETHforWETH(uint deadline) external payable;

    function swapWETHforETH(uint amount, uint deadline) external;
	
}
