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

export const SIGNED_KEY_REQUEST_VALIDATOR = {
  name: "Farcaster SignedKeyRequestValidator",
  version: "1",
  chainId: 10,
  verifyingContract:
    "0x00000000fc700472606ed4fa22623acf62c60553" as `0x${string}`,
};

export const SIGNED_KEY_REQUEST_TYPE_FOR_ADD_FOR = [
  { name: "owner", type: "address" },
  { name: "keyType", type: "uint32" },
  { name: "key", type: "bytes" },
  { name: "metadataType", type: "uint8" },
  { name: "metadata", type: "bytes" },
  { name: "nonce", type: "uint256" },
  { name: "deadline", type: "uint256" },
];

export enum TimeWindow {
  ONE_DAY = "1d",
  SEVEN_DAYS = "7d",
  THIRTY_DAYS = "30d",
}

export enum TrendingFeedTimeWindow {
  ONE_HOUR = "1h",
  SIX_HOUR = "6h",
  TWELVE_HOUR = "12h",
  TWENTY_FOUR_HOUR = "24h",
}

export enum BulkCastsSortType {
  TRENDING = "trending",
  LIKES = "likes",
  RECASTS = "recasts",
  REPLIES = "replies",
  RECENT = "recent",
}

export enum BulkUserAddressTypes {
  CUSTODY_ADDRESS = "custody_address",
  VERIFIED_ADDRESS = "verified_address"
}

export enum ValidateFrameAggregateWindow {
  TEN_SECONDS = "10s",
  ONE_MINUTE = "1m",
  TWO_MINUTES = "2m",
  FIVE_MINUTES = "5m",
  TEN_MINUTES = "10m",
  TWENTY_MINUTES = "20m",
  THIRTY_MINUTES = "30m",
  TWO_HOURS = "2h",
  TWELVE_HOURS = "12h",
  ONE_DAY = "1d",
  SEVEN_DAYS = "7d",
}

export enum NotificationType {
  LIKES = "likes",
  RECASTS = "recasts",
  REPLIES = "replies",
  FOLLOWS = "follows",
  MENTIONS = "mentions",
}
