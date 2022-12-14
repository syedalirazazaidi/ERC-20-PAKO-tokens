// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20PresetMinterPauser {
    constructor() ERC20PresetMinterPauser("MyToken", "MTK") {}
}
