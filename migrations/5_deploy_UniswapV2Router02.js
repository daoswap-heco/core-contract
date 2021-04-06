const UniswapV2Router02 = artifacts.require("UniswapV2Router02"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Router02,
        '0x7908e858E2769923bB9eb75221765656D8B8E9AC', // 工厂合约地址
        '0x7aF326B6351C8A9b8fb8CD205CBe11d4Ac5FA836' // WHT 地址
    );
};