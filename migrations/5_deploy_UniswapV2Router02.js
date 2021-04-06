const UniswapV2Router02 = artifacts.require("UniswapV2Router02"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Router02,
        '0x7908e858E2769923bB9eb75221765656D8B8E9AC', // 工厂合约地址
        '0xc778417E063141139Fce010982780140Aa0cD5Ab' // WETH 地址
    );
};