import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0x9eb52339B52e71B1EFD5537947e75D23b3a7719B";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0x92b0d1Cc77b84973B7041CB9275d41F09840eaDd";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x32cd5ecdA7f2B8633C00A0434DE28Db111E60636";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xbeC6419cD931e29ef41157fe24C6928a0C952f0b";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0x55027d3dBBcEA0327eF73eFd74ba0Af42A13A966";
export const userStorageDataABI = userStorgeData.abi;
