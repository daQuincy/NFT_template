// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import this to withdraw minting fee
//import "@openzeppelin/contracts/security/PullPayment.sol";

contract NFT is ERC721, Ownable {
    uint256 private constant TOTAL_SUPPLY = 5;
    // uint256 public constant MINT_PRICE = 0.08 ether;
    using Counters for Counters.Counter;
    Counters.Counter private currentTokenId;
    string public baseTokenURI;
    
    constructor() ERC721("NFTTutorial", "NFT") {}
    
    function mintTo(address recipient)
        public
        returns (uint256)
    {
        uint256 tokenId = currentTokenId.current();
        require(tokenId < TOTAL_SUPPLY, "Max supply reached");
        // remember to make function payable
        // require(msg.value == MINT_PRICE, "Transaction value did not equal the mint price");

        currentTokenId.increment();
        uint256 newItemId = currentTokenId.current();
        _safeMint(recipient, newItemId);
        return newItemId;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function totalSupply() public pure returns (uint256) {
        return TOTAL_SUPPLY;
    }

    /// @dev Overridden in order to make it an onlyOwner function
    // function withdrawPayments(address payable payee) public override onlyOwner virtual {
    //     super.withdrawPayments(payee);
    // }
}
