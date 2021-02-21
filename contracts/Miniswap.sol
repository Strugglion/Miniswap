pragma solidity =0.6.6;

import "./libraries/TransferHelper.sol";

import "./interfaces/IMiniswap.sol";
import "./interfaces/IWETH.sol";

contract Miniswap is IMiniswap {

	address public immutable WETH;

    modifier ensure(uint deadline) {
        require(deadline >= block.timestamp, 'UniswapV2Router: EXPIRED');
        _;
    }

	constructor(address _WETH) public {
	    WETH = _WETH;
	}

	receive() external payable {
        assert(msg.sender == WETH); // only accept ETH via fallback from the WETH contract
    }

    function swapETHforWETH(uint deadline)
        external
        virtual
        override
        payable
        ensure(deadline)
    {
    	IWETH(WETH).deposit{value: msg.value}();
    	assert(IWETH(WETH).transfer(address(msg.sender), msg.value));
    }

    function swapWETHforETH(uint amount, uint deadline)
        external
        virtual
        override
        ensure(deadline)
    {
        TransferHelper.safeTransferFrom(WETH, address(msg.sender), address(this), amount);
    	IWETH(WETH).withdraw(amount);
        TransferHelper.safeTransferETH(address(msg.sender), amount);
    }
}
