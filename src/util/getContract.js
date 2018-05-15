import {default as contract} from 'truffle-contract'
import treasure_artifacts from '../../build/contracts/Treasure.json'

let getContract = new Promise(function (resolve, reject) {
    let Treasure = contract(treasure_artifacts);
    Treasure.setProvider(web3.currentProvider);

    if (process.env.NODE_ENV === "development") {
    //     Treasure.deployed().then(function (instance) {
    //         resolve(instance);
    //     });
    // } else {
        let address = "0xa0638722b7399aa58725aad534e354b7a57362d8"
        let treasureContractInstance = Treasure.at(address)
        resolve(treasureContractInstance)
    }
})

export default getContract
