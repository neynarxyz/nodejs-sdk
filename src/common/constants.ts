// DO NOT CHANGE ANY VALUES IN THIS CONSTANT
export const SIGNED_KEY_REQUEST_VALIDATOR_EIP_712_DOMAIN = {
  name: "Farcaster SignedKeyRequestValidator",
  version: "1",
  chainId: 10,
  verifyingContract:
    "0x00000000fc700472606ed4fa22623acf62c60553" as `0x${string}`,
};

// DO NOT CHANGE ANY VALUES IN THIS CONSTANT
export const SIGNED_KEY_REQUEST_TYPE = [
  { name: "requestFid", type: "uint256" },
  { name: "key", type: "bytes" },
  { name: "deadline", type: "uint256" },
];
