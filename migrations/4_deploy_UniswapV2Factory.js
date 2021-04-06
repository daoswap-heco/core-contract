const UniswapV2Factory = artifacts.require("UniswapV2Factory"); 

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Factory, '0x25067E8678203d841aA05BBc19acb1A098E1c50c');
};