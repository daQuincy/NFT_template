# NFT deployment template

Simple NFT deployment template based on [Opensea's tutorial](https://docs.opensea.io/docs/getting-started-1). 

## How to run
Clone this repo  
```
$ git clone <repo>
```

Install dependencies
```
$ npm install
```

Put images in the ```images/``` folder and name them by numbers. In the metadata folder, create copies of ```1.example``` and name them according to their corresponding image name. Fill up the metadata files in json format and don't worry about having an extension for the filenames. 
```
images
├── 1.jpg
├── 2.jpg
└── 3.jpg
metadata
├── 1
├── 2
└── 3
```

The ```image``` field of the metadata can be filled after the following step. Compile the images and metadata into .car format. Upload the resulting .car files to [nft.storage](https://nft.storage/).
```
$ npx ipfs-car --pack images --output images.car

# Fill up the image field with the image url you got from nft.storage in the metadata files.

$ npx ipfs-car --pack metadata --output metadata.car
```

Make a copy a of ```.env.example``` and name it ```.env```. Fill up all the fields except for smart contract address.
```
$ cp .env.example .env
```

Make any desired changes to the smart contract and compile it.
```
$ npx hardhat compile
```

Deploy the smart contract
```
$ npx hardhat deploy
```

Verify the smart contract and fill up the smart  contract address field in the ```.env``` file.
```
$ npx hardhat verify <smart contract address>
```

Set the base token url for this NFT smart contract.
```
$ npx hardhat set-base-token-uri --base-url "https://xxxxxxxxxxxipfs.nftstorage.link/metadata/"
```

Mint the token by passing in the receiver's address.
```
$ npx hardhat mint --address <address>
```

View token information.
```
$ npx hardhat token-uri --token-id 1
```

## TODO
- [ ] Python scripts to interact with the deployed smart contract.
- [ ] Try other media files other than images.
- [ ] ChainLink integration for lootbox