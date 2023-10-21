// Token addresses
shoaibAddress= '0x1c1521cf734CD13B02e8150951c3bF2B438be780'
rayyanAddrss= '0x4432a6DcfAEAB227673B43C30c6fEf40eaBD5D30'
popUpAddress= '0x0B1a87021ec75fBaE919b1e86b2B1335FFC8F4d3'

// Uniswap contract address
wethAddress= '0x18eb8AF587dcd7E4F575040F6D800a6B5Cef6CAf'
factoryAddress= '0xA4aE77554847958aC0854f06601267c9F9C75dfD'
swapRouterAddress= '0x7c02b58029beeA7c1FcC872803dC9818f57A0E61'
nftDescriptorAddress= '0x3818eAb6Ca8Bf427222bfACFA706c514145F4104'
positionDescriptorAddress= '0x4A351C6aE3249499CBb50E8FE6566E2615386Da8'      
positionManagerAddress= '0xa8fcCF4D0e2f2c4451123fF2F9ddFc9be465Fa1d'

const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

// const { waffle } = require("hardhat");
const { Contract, BigNumber } = require("ethers");
const bn = require("bignumber.js");
const Web3Modal = require("web3modal");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const MAINNET_URL =
  "https://eth-goerli.g.alchemy.com/v2/cnURwhLXPAyeILTBwvvC3qw-iVg2VMmp";

const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);

function encodePriceSqrt(reserve1, reserve0) {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}

const nonfungiblePositionManager = new Contract(
  positionManagerAddress,
  artifacts.NonfungiblePositionManager.abi,
  provider
);

const factory = new Contract(
  factoryAddress,
  artifacts.UniswapV3Factory.abi,
  provider
);

async function deployPool(token0, token1, fee, price) {
  // const [owner] = await ethers.getSigners();
  const MAINNET_URL = "test network url";

  const WALLET_ADDRESS = "your";
  const WALLET_SECRET = "your";
  const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);
  const wallet = new ethers.Wallet(WALLET_SECRET);
  const signer = wallet.connect(provider);
  const create = await nonfungiblePositionManager
    .connect(signer)
    .createAndInitializePoolIfNecessary(token0, token1, fee, price, {
      gasLimit: 5000000,
    });

  console.log(create);
  const poolAddress = await factory
    .connect(signer)
    .getPool(token0, token1, fee);
  return poolAddress;
}

async function main() {
  const shoRay = await deployPool(
    popUpAddress,
    rayyanAddrss,
    3000,
    encodePriceSqrt(1, 1)
  );

  console.log("SHO_RAY=", `'${shoRay}'`);
}

/*
  npx hardhat run --network goerli scripts/deployPool.js
  */

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
