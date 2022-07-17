import { ethers } from "ethers";

async function getEth() {
    //@ts-ignore
    const eth = window.ethereum;
    if (!eth){
        throw new Error("get metamask and a positive attitude");
    }
    return eth;
}
