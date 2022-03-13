const fs = require('fs')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    const NFT = await deploy('NFT', {
        from: deployer,
        log: true
    })
    //const NFTContract = await ethers.getContractFactory('NFT')
    //const accounts = await hre.ethers.getSigners()
    //const signer = accounts[0]
    //const nft = new ethers.Contract(NFTContract.address, NFTContract.interface, signer)
}

module.exports.tags = ['NFT']

