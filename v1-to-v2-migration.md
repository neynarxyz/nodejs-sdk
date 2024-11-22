## Table of Contents

1. [Installation](#installation)
2. [Client Initialization](#client-initialization)
3. [Removed Methods and Changes in Method Names](#removed-methods-and-changes-in-method-names)
   - [Removed Methods](#removed-methods)
   - [Renamed Methods](#renamed-methods)
   - [Methods Updated to v2 API](#methods-updated-to-v2-api)
4. [Enum Changes](#enum-changes)
   - [Renamed enums](#renamed-enums)
   - [Enum Key Changes](#enum-key-changes)
5. [Import Path Changes](#import-path-changes)
6. [Affected v1 API Methods](#affected-v1-api-methods)
7. [Affected v2 API Methods](#affected-v2-api-methods)
   - [Users](#users)
     - [`searchUser`](#searchuser)
     - [`fetchBulkUsers`](#fetchbulkusers)
     - [`fetchBulkUsersByEthereumAddress`](#fetchbulkusersbyethereumaddress)
     - [`lookupUserByCustodyAddress`](#lookupuserbycustodyaddress)
     - [`lookupUserByUsernameV2`](#lookupuserbyusernamev2)
     - [`fetchUsersByLocation`](#fetchusersbylocation)
     - [`fetchPopularCastsByUser`](#fetchpopularcastsbyuser)
     - [`fetchRepliesAndRecastsForUser`](#fetchrepliesandrecastsforuser)
     - [`fetchCastsForUser`](#fetchcastsforuser)
     - [`followUser`](#followuser)
     - [`unfollowUser`](#unfollowuser)
     - [`registerAccount`](#registeraccount)
     - [`updateUser`](#updateuser)
     - [`publishVerification`](#publishverification)
     - [`deleteVerification`](#deleteverification)
     - [`fetchAuthorizationUrl`](#fetchauthorizationurl)
   - [Signer](#signer)
     - [`lookupSigner`](#lookupsigner)
     - [`registerSignedKey`](#registersignedkey)
     - [`lookupDeveloperManagedSigner`](#lookupdevelopermanagedsigner)
     - [`registerSignedKeyForDeveloperManagedSigner`](#registersignedkeyfordevelopermanagedsigner)
     - [`publishMessageToFarcaster`](#publishmessagetofarcaster)
   - [Cast](#cast)
     - [`lookUpCastByHashOrWarpcastUrl`](#lookupcastbyhashorwarpcasturl)
     - [`publishCast`](#publishcast)
     - [`deleteCast`](#deletecast)
     - [`fetchBulkCasts`](#fetchbulkcasts)
     - [`searchCasts`](#searchcasts)
     - [`lookupCastConversation`](#lookupcastconversation)
     - [`fetchComposerActions`](#fetchcomposeractions)
   - [Feed](#feed)
     - [`fetchUserFollowingFeed`](#fetchuserfollowingfeed)
     - [`fetchFeedForYou`](#fetchfeedforyou)
     - [`fetchFeedByChannelIds`](#fetchfeedbychannelids)
     - [`fetchFeedByParentUrls`](#fetchfeedbyparenturls)
     - [`fetchFeed`](#fetchfeed)
     - [`fetchFramesOnlyFeed`](#fetchframesonlyfeed)
     - [`fetchTrendingFeed`](#fetchtrendingfeed)
   - [Reaction](#reaction)
     - [`publishReactionToCast`](#publishreactiontocast)
     - [`deleteReactionFromCast`](#deletereactionfromcast)
     - [`fetchUserReactions`](#fetchuserreactions)
     - [`fetchReactionsForCast`](#fetchreactionsforcast)
   - [Notifications](#notifications)
     - [`fetchAllNotifications`](#fetchallnotifications)
     - [`fetchChannelNotificationsForUser`](#fetchchannelnotificationsforuser)
     - [`fetchNotificationsByParentUrlForUser`](#fetchnotificationsbyparenturlforuser)
     - [`markNotificationsAsSeen`](#marknotificationsasseen)
   - [Channel](#channel)
     - [`searchChannels`](#searchchannels)
     - [`fetchBulkChannels`](#fetchbulkchannels)
     - [`lookupChannel`](#lookupchannel)
     - [`removeChannelMember`](#removechannelmember)
     - [`fetchChannelMembers`](#fetchchannelmembers)
     - [`inviteChannelMember`](#invitechannelmember)
     - [`respondChannelInvite`](#respondchannelinvite)
     - [`fetchFollowersForAChannel`](#fetchfollowersforachannel)
     - [`fetchRelevantFollowersForAChannel`](#fetchrelevantfollowersforachannel)
     - [`fetchUserChannels`](#fetchuserchannels)
     - [`fetchUserChannelMemberships`](#fetchuserchannelmemberships)
     - [`followChannel`](#followchannel)
     - [`unfollowChannel`](#unfollowchannel)
     - [`fetchTrendingChannels`](#fetchtrendingchannels)
     - [`fetchUsersActiveChannels`](#fetchusersactivechannels)
   - [Follows](#follows)
     - [`fetchUserFollowersV2`](#fetchuserfollowersv2)
     - [`fetchRelevantFollowers`](#fetchrelevantfollowers)
     - [`fetchUserFollowingV2`](#fetchuserfollowingv2)
     - [`fetchFollowSuggestions`](#fetchfollowsuggestions)
   - [Storage](#storage)
     - [`lookupUserStorageAllocations`](#lookupuserstorageallocations)
     - [`lookupUserStorageUsage`](#lookupuserstorageusage)
     - [`buyStorage`](#buystorage)
   - [Frame](#frame)
     - [`postFrameAction`](#postframeaction)
     - [`validateFrameAction`](#validateframeaction)
     - [`fetchValidateFrameAnalytics`](#fetchvalidateframeanalytics)
     - [`lookupNeynarFrame`](#lookupneynarframe)
     - [`deleteNeynarFrame`](#deleteneynarframe)
     - [`fetchFrameMetaTagsFromUrl`](#fetchframemetatagsfromurl)
     - [`postFrameActionDeveloperManaged`](#postframeactiondevelopermanaged)
   - [fname](#fname)
     - [`isFnameAvailable`](#isfnameavailable)
   - [Webhook](#webhook)
     - [`lookupWebhook`](#lookupwebhook)
     - [`publishWebhook`](#publishwebhook)
     - [`updateWebhookActiveStatus`](#updatewebhookactivestatus)
     - [`updateWebhook`](#updateWebhook)
     - [`deleteWebhook`](#deletewebhook)
   - [Action](#action)
     - [`publishFarcasterAction`](#publishfarcasteraction)
   - [Mute](#mute)
     - [`fetchMuteList`](#fetchmutelist)
     - [`publishMute`](#publishmute)
     - [`deleteMute`](#deletemute)
   - [Block](#block)
     - [`publishBlock`](#publishblock)
     - [`deleteBlock`](#deleteblock)
   - [Ban](#ban)
     - [`publishBans`](#publishbans)
     - [`deleteBans`](#deletebans)
   - [Onchain](#onchain)
     - [`fetchUserBalance`](#fetchuserbalance)
     - [`fetchSubscriptionsForFid`](#fetchsubscriptionsforfid)
     - [`fetchSubscribedToForFid`](#fetchsubscribedtoforfid)
     - [`fetchSubscribersForFid`](#fetchsubscribersforfid)
     - [`fetchSubscriptionCheck`](#fetchsubscriptioncheck)

---

## Installation

```shell
yarn add @neynar/nodejs-sdk
```

OR

```shell
npm install @neynar/nodejs-sdk
```

## Client Initialization

v1

```typescript
import { NeynarAPIClient } from "@neynar/nodejs-sdk";

const client = new NeynarAPIClient("API_KEY", {
  baseOptions: {
    headers: {
      "x-neynar-experimental": true,
    },
  },
});
```

v2

```typescript
import { NeynarAPIClient, Configuration } from "@neynar/nodejs-sdk";

const config = new Configuration({
  apiKey: "API_KEY",
  baseOptions: {
    headers: {
      "x-neynar-experimental": true,
    },
  },
});

const client = new NeynarAPIClient(config);
```

---

## Removed Methods and Changes in Method Names

**Note: All Neynar API v1-related methods have been removed from SDK v2. This version of the SDK will only support Neynar API v2.**

#### Removed Methods

The following methods have been removed entirely from SDK v2:

| **Removed Method**                  | **Replacement**                                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `fetchRecentUsers`                  | Use [webhook](https://docs.neynar.com/docs/how-to-setup-webhooks-from-the-dashboard) or [kafka](https://docs.neynar.com/docs/from-kafka-stream) |
| `fetchAllCastsLikedByUser`          | [`fetchUserReactions`](#fetchuserreactions)                                                                                                     |
| `lookupUserByFid`                   | [`fetchBulkUsers`](#fetchbulkusers)                                                                                                             |
| `lookupCustodyAddressForUser`       | [`fetchBulkUsers`](#fetchbulkusers)                                                                                                             |
| `lookUpCastByHash`                  | [`lookUpCastByHashOrWarpcastUrl`](#lookupcastbyhashorwarpcasturl)                                                                               |
| `fetchAllCastsInThread`             | [`lookupCastConversation`](#lookupcastconversation)                                                                                             |
| `fetchAllCastsCreatedByUser`        | [`fetchCastsForUser`](#fetchcastsforuser)                                                                                                       |
| `fetchRecentCasts`                  | Use [webhook](https://docs.neynar.com/docs/how-to-setup-webhooks-from-the-dashboard) or [kafka](https://docs.neynar.com/docs/from-kafka-stream) |
| `fetchUserVerifications`            | [`fetchBulkUsers`](#fetchbulkusers)                                                                                                             |
| `lookupUserByVerification`          | [`fetchBulkUsersByEthOrSolAddress`](#fetchbulkusersbyethereumaddress)                                                                           |
| `fetchMentionAndReplyNotifications` | [`fetchAllNotifications`](#fetchallnotifications)                                                                                               |
| `fetchUserLikesAndRecasts`          | [`fetchUserReactions`](#fetchuserreactions)                                                                                                     |

Checkout [Affected v1 API Methods](#affected-v1-api-methods) on how to replace it.

#### Renamed Methods

Several methods in SDK v2 have been renamed for consistency and clarity:

| v1 Method Name                    | v2 Method Name                    |
| --------------------------------- | --------------------------------- |
| `lookUpCastByHashOrWarpcastUrl`   | `lookupCastByHashOrWarpcastUrl`   |
| `publishReactionToCast`           | `publishReaction`                 |
| `deleteReactionFromCast`          | `deleteReaction`                  |
| `fetchReactionsForCast`           | `fetchCastReactions`              |
| `fetchBulkUsersByEthereumAddress` | `fetchBulkUsersByEthOrSolAddress` |

#### Methods Updated to v2 API

These methods retain the original method names but now use the v2 version of the neynar API:

| v1 Method Name           | v2 Method Name         |
| ------------------------ | ---------------------- |
| `fetchUserFollowersV2`   | `fetchUserFollowers`   |
| `fetchUserFollowingV2`   | `fetchUserFollowing`   |
| `lookupUserByUsernameV2` | `lookupUserByUsername` |

---

## Enum Changes

#### Renamed enums

The following enums have been renamed in SDK v2 to align with the updated naming conventions:

| v1 Enum Name             | v2 Enum Name                          |
| ------------------------ | ------------------------------------- |
| `TimeWindow`             | `FetchTrendingChannelsTimeWindowEnum` |
| `TrendingFeedTimeWindow` | `FetchTrendingFeedTimeWindowEnum`     |
| `BulkCastsSortType`      | `FetchBulkCastsSortTypeEnum`          |
| `BulkUserAddressTypes`   | `BulkUserAddressType`                 |

#### Enum Key Changes

Certain enum keys have been modified in SDK v2. If you were using the following enums, be aware that their key formats may have changed:

- `NotificationType`
- `ValidateFrameAggregateWindow`
- `FetchTrendingChannelsTimeWindowEnum` (formerly `TimeWindow`)
- `FetchTrendingFeedTimeWindowEnum` (formerly `TrendingFeedTimeWindow`)
- `FetchBulkCastsSortTypeEnum` (formerly `BulkCastsSortType`)
- `BulkUserAddressType` (formerly `BulkUserAddressTypes`)

---

## Import Path Changes

All the api-related enums and schemas are now centralized and exported from `/build/api` directory instead of `/build/neynar-api/v2/*`

```typescript
import {CastParamType, NotificationTypeEnum, User, Cast, ...etc } from '@neynar/nodejs-sdk/build/api'
```

Note: Imports for following `isApiErrorResponse` utility function and Webhook interfaces remains the same

```typescript
import { isApiErrorResponse, WebhookFollowCreated, WebhookFollowDeleted, WebhookReactionCreated, WebhookReactionDeleted, WebhookCastCreated, WebhookUserCreated, WebhookUserUpdated } form '@neynar/nodejs-sdk'
```

---

## Affected v1 API Methods

The following methods have been completely removed in SDK v2 (Ref. [Removed Methods](#removed-methods)). As a result, the response structure will be different in the new methods that replace the deprecated v1 methods.

#### `fetchAllCastsLikedByUser` (Use `fetchUserReactions`)

`fetchAllCastsLikedByUser`

```typescript
const fid = 3;
const viewerFid = 2;
const limit = 50;

client
  .fetchAllCastsLikedByUser(fid, {
    viewerFid,
    limit,
  })
  .then((response) => {
    const { likes, reactor, next } = response.result;
    console.log("likes", likes); // likes.reaction, likes.cast, likes.cast_author
    console.log("reactor", reactor);
    console.log("nextCursor", next.cursor);
  });
```

`fetchUserReactions`

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const viewerFid = 2;
const limit = 50;
const type = ReactionsType.Likes;

client.fetchUserReactions({ fid, type, viewerFid, limit }).then((response) => {
  const { reactions } = response; // This structure is changed
  console.log("likes", reactions);
});
```

#### `lookupUserByFid` (Use `fetchBulkUsers`)

`lookupUserByFid`

```typescript
const fid = 19960;
const viewerFid = 194;

client.lookupUserByFid(fid, viewerFid).then((response) => {
  const { user } = response.result;
  console.log("user", user);
});
```

`fetchBulkUsers`

```typescript
const fid = 3;
const viewerFid = 2;

client.fetchBulkUsers({ fids: [fid], viewerFid }).then((res) => {
  const { users } = res;
  console.log("user", users[0]); // This structure is changed
});
```

#### `lookupCustodyAddressForUser` (Use `fetchBulkUsers`)

`lookupCustodyAddressForUser`

```typescript
const fid = 19960;

client.lookupCustodyAddressForUser(fid).then((response) => {
  const { fid, custodyAddress } = response.result;
  console.log("fid:", fid);
  console.log("custodyAddress:", custodyAddress);
});
```

`fetchBulkUsers`

```typescript
const fid = 19960;

client.fetchBulkUsers({ fids: [fid] }).then((res) => {
  const { users } = res;
  console.log("fid:", users[0].fid);
  console.log("custodyAddress", users[0].custody_address);
});
```

#### `lookUpCastByHash` (Use `lookupCastByHashOrWarpcastUrl`)

`lookUpCastByHash`

```typescript
const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const viewerFid = 3;

client
  .lookUpCastByHash(hash, {
    viewerFid,
  })
  .then((response) => {
    const { cast } = response.result;
    console.log(cast);
  });
```

`lookupCastByHashOrWarpcastUrl`

```typescript
import { CastParamType } from "@neynar/nodejs-sdk/build/api";

const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const viewerFid = 3;
const type = CastParamType.Hash;

client
  .lookupCastByHashOrWarpcastUrl({
    identifier: hash,
    type,
    viewerFid,
  })
  .then((response) => {
    const { cast } = response;
    console.log("cast", cast); // This structure is changed
  });
```

#### `fetchAllCastsInThread` (Use `lookupCastConversation`)

`fetchAllCastsInThread`

```typescript
const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const viewerFid = 3;

client.fetchAllCastsInThread(hash, viewerFid).then((response) => {
  const { casts } = response.result;
  console.log("conversation", casts);
});
```

`lookupCastConversation`

```typescript
import { CastParamType } from "@neynar/nodejs-sdk/build/api";

const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const viewerFid = 3;
const type = CastParamType.Hash;

client
  .lookupCastConversation({
    identifier: hash,
    type,
    viewerFid,
  })
  .then((response) => {
    const { cast } = response.conversation;
    console.log("conversation", cast); // This structure is changed
  });
```

#### `fetchAllCastsCreatedByUser` (Use `fetchCastsForUser`)

`fetchAllCastsCreatedByUser`

```typescript
const fid = 3;
const parentUrl = "https://ethereum.org";
const viewerFid = 2;
const limit = 5;

client
  .fetchAllCastsCreatedByUser(fid, {
    parentUrl,
    viewerFid,
    limit,
  })
  .then((response) => {
    const { casts } = response.result;
    console.log("User Casts:", casts);
  });
```

`fetchCastsForUser`

```typescript
const fid = 3;
const parentUrl = "https://ethereum.org";
const viewerFid = 2;
const limit = 5;

client
  .fetchCastsForUser({ fid, parentUrl, viewerFid, limit })
  .then((response) => {
    const { casts } = response;
    console.log("Users casts: ", casts); // This structure is changed
  });
```

#### `fetchUserVerifications` (Use `fetchBulkUsers`)

`fetchUserVerifications`

```typescript
const fid = 3;

client.fetchUserVerifications(fid).then((response) => {
  const { fid, username, display_name, verifications } = response.result;
  console.log("fid ", fid);
  console.log("username ", username);
  console.log("display_name ", display_name);
  console.log("verifications ", verifications);
});
```

`fetchBulkUsers`

```typescript
const fid = 3;

client.fetchBulkUsers({ fids: [fid] }).then((response) => {
  const { fid, username, display_name, verified_addresses } = response.users[0];
  console.log("fid ", fid);
  console.log("username ", username);
  console.log("display_name ", display_name);
  console.log("verifications ", verified_addresses);
});
```

#### `lookupUserByVerification` (Use `fetchBulkUsersByEthOrSolAddress`)

`lookupUserByVerification`

```typescript
const address = "0x7ea5dada4021c2c625e73d2a78882e91b93c174c";

client.lookupUserByVerification(address).then((response) => {
  const { user } = response.result;
  console.log("User:", user);
});
```

`fetchBulkUsersByEthOrSolAddress`

```typescript
import { BulkUserAddressType } from "@neynar/nodejs-sdk/build/api";

const addresses = ["0x7ea5dada4021c2c625e73d2a78882e91b93c174c"];
const addressTypes = [BulkUserAddressType.VerifiedAddress];

client
  .fetchBulkUsersByEthOrSolAddress({ addresses, addressTypes })
  .then((response) => {
    const user = response[addresses[0]];
    console.log("User:", user[0]); // This structure is changed
  });
```

#### `fetchMentionAndReplyNotifications` (Use `fetchAllNotifications`)

`fetchMentionAndReplyNotifications`

```typescript
const fid = 3;
const viewerFid = 2;

client
  .fetchMentionAndReplyNotifications(fid, {
    viewerFid,
  })
  .then((response) => {
    console.log("Notifications:", response.result);
  });
```

`fetchAllNotifications`

```typescript
const fid = 3;

client.fetchAllNotifications({ fid }).then((response) => {
  console.log("response:", response); // This structure is changed
});
```

#### `fetchUserLikesAndRecasts` (Use `fetchUserReactions`)

`fetchUserLikesAndRecasts`

```typescript
const fid = 12345;
const viewerFid = 67890;
const limit = 5;

client
  .fetchUserLikesAndRecasts(fid, {
    viewerFid,
    limit,
  })
  .then((response) => {
    const { notifications } = response.result;
    console.log("User Reactions : ", notifications);
  });
```

`fetchUserReactions`

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk/build/api";

const fid = 12345;
const viewerFid = 67890;
const limit = 5;

client
  .fetchUserReactions({ fid, type: ReactionsType.All, viewerFid, limit })
  .then((response) => {
    const { reactions } = response;
    console.log("User Reactions : ", reactions);
  });
```

## Affected v2 API Methods

1. **Arguments Format**:  
   In SDK v2, all methods now accept arguments as key-value pairs (kvargs). In SDK v1, only optional parameters were passed as key-value pairs, while required arguments were simple parameters.

### Users

#### `searchUser`

#### **v1**

```typescript
const q = "ris";
const viewerFid = 19960;
const limit = 10;

client.searchUser(q, viewerFid, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const q = "ris";
const viewerFid = 19960;
const limit = 10;

client.searchUser({ q, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchBulkUsers`

#### **v1**

```typescript
const fids = [2, 3];
const viewerFid = 19960;

client.fetchBulkUsers(fids, { viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fids = [2, 3];
const viewerFid = 19960;

client.fetchBulkUsers({ fids, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchBulkUsersByEthereumAddress`

#### **v1**

```typescript
import { BulkUserAddressTypes } from "@neynar/nodejs-sdk";

const addresses = [
  "0xa6a8736f18f383f1cc2d938576933e5ea7df01a1",
  "0x7cac817861e5c3384753403fb6c0c556c204b1ce",
];
const addressTypes = [BulkUserAddressTypes.CUSTODY_ADDRESS];
const viewerFid = 3;

client
  .fetchBulkUsersByEthereumAddress(addresses, { addressTypes, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `fetchBulkUsersByEthereumAddress` is renamed to `fetchBulkUsersByEthOrSolAddress` (Ref. [Renamed Methods](#renamed-methods))
2. `BulkUserAddressTypes` is renamed to `BulkUserAddressType` (Ref. [Renamed enums](#renamed-enums))
3. Import path for `BulkUserAddressType` is changed (Ref. [Import path changes](#import-path-changes))
4. Enum key changed from `CUSTODY_ADDRESS` to `CustodyAddress` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { BulkUserAddressType } from "@neynar/nodejs-sdk/build/api";

const addresses = [
  "0xa6a8736f18f383f1cc2d938576933e5ea7df01a1",
  "0x7cac817861e5c3384753403fb6c0c556c204b1ce",
];
const addressTypes = [BulkUserAddressType.CustodyAddress];
const viewerFid = 3;

client
  .fetchBulkUsersByEthOrSolAddress({ addresses, addressTypes, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `lookupUserByCustodyAddress`

#### **v1**

```typescript
const custodyAddress = "0xd1b702203b1b3b641a699997746bd4a12d157909";

client.lookupUserByCustodyAddress(custodyAddress).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const custodyAddress = "0xd1b702203b1b3b641a699997746bd4a12d157909";

client.lookupUserByCustodyAddress({ custodyAddress }).then((response) => {
  console.log("response:", response);
});
```

#### `lookupUserByUsernameV2`

This method is renamed to `lookupUserByUsername`.

#### **v1**

```typescript
const username = "manan";
const viewerFid = 3;

client.lookupUserByUsernameV2(username, { viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: `lookupUserByUsernameV2` is now renamed to `lookupUserByUsername` (Ref. [Methods Updated to v2 API](#methods-updated-to-v2-api))

```typescript
const username = "manan";
const viewerFid = 3;

client.lookupUserByUsername({ username, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchUsersByLocation`

#### **v1**

```typescript
const latitude = 37.7749;
const longitude = -122.4194;
const viewerFid = 3;
const limit = 5;

client
  .fetchUsersByLocation(latitude, longitude, { viewerFid, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const latitude = 37.7749;
const longitude = -122.4194;
const viewerFid = 3;
const limit = 5;

client
  .fetchUsersByLocation({ latitude, longitude, viewerFid, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchPopularCastsByUser`

#### **v1**

```typescript
const fid = 3;
const viewerFid = 19960;

client.fetchPopularCastsByUser(fid, { viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const viewerFid = 19960;

client.fetchPopularCastsByUser({ fid, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchRepliesAndRecastsForUser`

#### **v1**

```typescript
const fid = 3;
const limit = 25;
const viewerFid = 19960;

client
  .fetchRepliesAndRecastsForUser(fid, { limit, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const fid = 3;
const limit = 25;
const viewerFid = 3;

client
  .fetchRepliesAndRecastsForUser({ fid, limit, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchCastsForUser`

#### **v1**

```typescript
const fid = 3;
const viewerFid = 3;
const limit = 25;
const includeReplies = false;

client
  .fetchCastsForUser(fid, {
    limit,
    viewerFid,
    includeReplies,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const fid = 3;
const viewerFid = 3;
const limit = 25;
const includeReplies = false;

client
  .fetchCastsForUser({ fid, viewerFid, limit, includeReplies })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `followUser`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetFids = [3, 2, 1];

client.followUser(signerUuid, targetFids).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetFids = [3, 2, 1];

client.followUser({ signerUuid, targetFids }).then((response) => {
  console.log("response:", response);
});
```

#### `unfollowUser`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetFids = [3, 2, 1];

client.unfollowUser(signerUuid, targetFids).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetFids = [3, 2, 1];

client.unfollowUser({ signerUuid, targetFids }).then((response) => {
  console.log("response:", response);
});
```

#### `registerAccount`

#### **v1**

```typescript
const signature = "signatureString";
const fid = 12345;
const requestedUserCustodyAddress = "0x123...abc";
const deadline = 1672531200;
const fname = "newUsername";

client
  .registerAccount(fid, signature, requestedUserCustodyAddress, deadline, {
    fname,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const signature = "signatureString";
const fid = 12345;
const requestedUserCustodyAddress = "0x123...abc";
const deadline = 1672531200;
const fname = "newUsername";

client
  .registerAccount({
    signature,
    fid,
    requestedUserCustodyAddress,
    deadline,
    fname,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `updateUser`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const bio = "New bio here";
const pfpUrl = "https://example.com/pfp.jpg";
const username = "newUsername";
const displayName = "New Display Name";

client
  .updateUser(signerUuid, {
    bio,
    pfpUrl,
    username,
    displayName,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const bio = "New bio here";
const pfpUrl = "https://example.com/pfp.jpg";
const username = "newUsername";
const displayName = "New Display Name";

client
  .updateUser({ signerUuid, bio, pfpUrl, username, displayName })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `publishVerification`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const address = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const blockHash =
  "0x191905a9201170abb55f4c90a4cc968b44c1b71cdf3db2764b775c93e7e22b29";
const ethSignature =
  "0x2fc09da1f4dcb723fefb91f77932c249c418c0af00c66ed92ee1f35002c80d6a1145280c9f361d207d28447f8f7463366840d3a9309036cf6954afd1fd331beb1b";

client
  .publishVerification(signerUuid, address, blockHash, ethSignature)
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const address = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const blockHash =
  "0x191905a9201170abb55f4c90a4cc968b44c1b71cdf3db2764b775c93e7e22b29";
const ethSignature =
  "0x2fc09da1f4dcb723fefb91f77932c249c418c0af00c66ed92ee1f35002c80d6a1145280c9f361d207d28447f8f7463366840d3a9309036cf6954afd1fd331beb1b";

client
  .publishVerification({ signerUuid, address, blockHash, ethSignature })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `deleteVerification`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const address = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";

client.deleteVerification(signerUuid, address).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const address = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";

client.deleteVerification({ signerUuid, address }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchAuthorizationUrl`

#### **v1**

```typescript
import { AuthorizationUrlResponseType } from "@neynar/nodejs-sdk";

const clientId = "your-client-id";
const responseType = AuthorizationUrlResponseType.Code;

client.fetchAuthorizationUrl(clientId, responseType).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: The import path for `AuthorizationUrlResponseType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { AuthorizationUrlResponseType } from "@neynar/nodejs-sdk/build/api";

const clientId = "your-client-id";
const responseType = AuthorizationUrlResponseType.Code;

client.fetchAuthorizationUrl({ clientId, responseType }).then((response) => {
  console.log("response:", response);
});
```

#### Signer

#### `lookupSigner`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";

client.lookupSigner(signerUuid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";

client.lookupSigner({ signerUuid }).then((response) => {
  console.log("response:", response);
});
```

#### `registerSignedKey`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const signature = "0xsig_1";
const appFid = 18949;
const deadline = 1625097600;
const sponsor = {
  fid: 0,
  signature: `0xsig_2`,
};

client
  .registerSignedKey(signerUuid, appFid, deadline, signature, { sponsor })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const signature = "0xsig_1";
const appFid = 18949;
const deadline = 1625097600;
const sponsor = {
  fid: 0,
  signature: `0xsig_2`,
};

client
  .registerSignedKey({ signerUuid, signature, appFid, deadline, sponsor })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `lookupDeveloperManagedSigner`

#### **v1**

```typescript
const publicKey =
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

client.lookupDeveloperManagedSigner(publicKey).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const publicKey =
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

client.lookupDeveloperManagedSigner({ publicKey }).then((response) => {
  console.log("response:", response);
});
```

#### `registerSignedKeyForDeveloperManagedSigner`

#### **v1**

```typescript
const publicKey =
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
const signature = "0xsig_1";
const appFid = 12345;
const deadline = 1625097600;
const sponsor = {
  fid: 0,
  signature: `0xsig_2`,
};

client
  .registerSignedKeyForDeveloperManagedSigner(
    publicKey,
    signature,
    appFid,
    deadline,
    { sponsor }
  )
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const publicKey =
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
const signature = "0xsig_1";
const appFid = 12345;
const deadline = 1625097600;
const sponsor = {
  fid: 0,
  signature: `0xsig_2`,
};

client
  .registerSignedKeyForDeveloperManagedSigner({
    publicKey,
    signature,
    appFid,
    deadline,
    sponsor,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `publishMessageToFarcaster`

#### **v1**

```typescript
const body = {};

client.publishMessageToFarcaster(body).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const body = {};

client.publishMessageToFarcaster({ body }).then((response) => {
  console.log("response:", response);
});
```

#### Cast

#### `lookUpCastByHashOrWarpcastUrl`

#### **v1**

```typescript
import { CastParamType } from "@neynar/nodejs-sdk";

const identifier = "https://warpcast.com/rish/0x9288c1";
const type = CastParamType.Url;
const viewerFid = 3;

client
  .lookUpCastByHashOrWarpcastUrl(identifier, type, { viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `lookUpCastByHashOrWarpcastUrl` is renamed to `lookupCastByHashOrWarpcastUrl` (Ref. [Renamed Methods](#renamed-methods))
2. The import path for `CastParamType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { CastParamType } from "@neynar/nodejs-sdk/build/api";

const identifier = "https://warpcast.com/rish/0x9288c1";
const type = CastParamType.Url;
const viewerFid = 3;

client
  .lookupCastByHashOrWarpcastUrl({ identifier, type, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `publishCast`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const text = "Testing publishCast() method";
const embeds = [
  {
    url: "https://warpcast.com/harper.eth/0x3c974d78",
  },
];
const replyTo = "0x9e95c380791fce11ffbb14b2ea458b233161bafd";
const idem = "my-cast-idem";
const parent_author_fid = 6131;

client
  .publishCast(signerUuid, text, {
    replyTo,
    idem,
    embeds,
    parent_author_fid,
  })
  .then((response) => {
    console.log("cast:", response);
  });
```

#### **v2**

Note:

1. `replyTo` param is now renamed to `parent`
2. `parent_author_fid` is now cam camelCase (`parentAuthorFid`)
3. sdk v1 `response` object is sdk v2 `response.cast` object

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const text = "Testing publishCast() method";
const embeds = [
  {
    url: "https://warpcast.com/harper.eth/0x3c974d78",
  },
];
const replyTo = "0x9e95c380791fce11ffbb14b2ea458b233161bafd";
const idem = "my-cast-idem";
const parentAuthorFid = 6131;

client
  .publishCast({
    signerUuid,
    text,
    embeds,
    parent: replyTo,
    idem,
    parentAuthorFid,
  })
  .then((response) => {
    console.log("cast:", response.cast);
  });
```

#### `deleteCast`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetHash = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";

client.deleteCast(signerUuid, targetHash).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const targetHash = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";

client.deleteCast({ signerUuid, targetHash }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchBulkCasts`

#### **v1**

```typescript
import { BulkCastsSortType } from "@neynar/nodejs-sdk";

const casts = [
  "0xa896906a5e397b4fec247c3ee0e9e4d4990b8004",
  "0x27ff810f7f718afd8c40be236411f017982e0994",
];
const viewerFid = 3;
const sortType = BulkCastsSortType.LIKES;

client
  .fetchBulkCasts(casts, {
    viewerFid,
    sortType,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `BulkCastsSortType` is renamed to `FetchBulkCastsSortTypeEnum` (Ref. [Renamed enums](#renamed-enums))
2. Enum key is changed now `LIKES` is `Likes` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { FetchBulkCastsSortTypeEnum } from "@neynar/nodejs-sdk";

const casts = [
  "0xa896906a5e397b4fec247c3ee0e9e4d4990b8004",
  "0x27ff810f7f718afd8c40be236411f017982e0994",
];
const viewerFid = 3;
const sortType = FetchBulkCastsSortTypeEnum.LIKES;

client.fetchBulkCasts({ casts, viewerFid, sortType }).then((response) => {
  console.log("response:", response);
});
```

#### `searchCasts`

#### **v1**

```typescript
const q = "We are releasing a v2 of our nodejs sdk.";
const authorFid = 19960;
const viewerFid = 3;
const limit = 3;

client.searchCasts(q, { authorFid, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const q = "We are releasing a v2 of our nodejs sdk.";
const authorFid = 19960;
const viewerFid = 3;
const limit = 3;

client.searchCasts({ q, authorFid, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `lookupCastConversation`

#### **v1**

```typescript
import { CastParamType } from "@neynar/nodejs-sdk";

const identifier = "https://warpcast.com/rish/0x9288c1";
const type = CastParamType.Url;
const replyDepth = 2;
const includeChronologicalParentCasts = true;
const viewerFid = 3;
const fold = "above";
const limit = 2;

client
  .lookupCastConversation(
    "https://warpcast.com/rish/0x9288c1",
    CastParamType.Url,
    {
      replyDepth,
      includeChronologicalParentCasts,
      fold,
      viewerFid,
      limit,
    }
  )
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `CastParamType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { CastParamType } from "@neynar/nodejs-sdk/build/api";

const identifier = "https://warpcast.com/rish/0x9288c1";
const type = CastParamType.Url;
const replyDepth = 2;
const includeChronologicalParentCasts = true;
const viewerFid = 3;
const fold = "above";
const limit = 2;

client
  .lookupCastConversation({
    identifier,
    type,
    replyDepth,
    includeChronologicalParentCasts,
    viewerFid,
    fold,
    limit,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchComposerActions`

#### **v1**

```typescript
import { CastComposerType } from "@neynar/nodejs-sdk/neynar-api/v2";

const list = CastComposerType.Top;
const limit = 25;

client.fetchComposerActions(list, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: The import path for `CastComposerType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { CastComposerType } from "@neynar/nodejs-sdk/build/api";

const list = CastComposerType.Top;
const limit = 25;

client.fetchComposerActions({ list, limit }).then((response) => {
  console.log("response:", response);
});
```

#### Feed

#### `fetchUserFollowingFeed`

#### **v1**

```typescript
const fid = 3;
const viewerFid = 100;
const withRecasts = true;
const limit = 30;

client
  .fetchUserFollowingFeed(fid, {
    withRecasts,
    limit,
    viewerFid,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const fid = 3;
const viewerFid = 100;
const withRecasts = true;
const limit = 30;

client
  .fetchUserFollowingFeed({ fid, viewerFid, withRecasts, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFeedForYou`

#### **v1**

```typescript
import { ForYouProvider } from "@neynar/nodejs-sdk/neynar-api/v2";

const fid = 3;
const viewerFid = 10;
const provider = ForYouProvider.Mbd;
const limit = 20;
const providerMetadata = encodeURIComponent(
  JSON.stringify({
    filters: {
      channels: ["https://farcaster.group/founders"],
    },
  })
);

client
  .fetchFeedForYou(fid, {
    limit,
    viewerFid,
    provider,
    providerMetadata: providerMetadata,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `ForYouProvider` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ForYouProvider } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const viewerFid = 10;
const provider = ForYouProvider.Mbd;
const limit = 20;
const providerMetadata = encodeURIComponent(
  JSON.stringify({
    filters: {
      channels: ["https://farcaster.group/founders"],
    },
  })
);

client
  .fetchFeedForYou({ fid, viewerFid, provider, limit, providerMetadata })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFeedByChannelIds`

#### **v1**

```typescript
const channelIds = ["neynar", "farcaster"];
const withRecasts = true;
const viewerFid = 100;
const withReplies = true;
const limit = 30;
const shouldModerate = false;

client
  .fetchFeedByChannelIds(channelIds, {
    withRecasts,
    withReplies,
    limit,
    viewerFid,
    shouldModerate,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const channelIds = ["neynar", "farcaster"];
const withRecasts = true;
const viewerFid = 100;
const withReplies = true;
const limit = 30;
const shouldModerate = false;

client
  .fetchFeedByChannelIds({
    channelIds,
    withRecasts,
    viewerFid,
    withReplies,
    limit,
    shouldModerate,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFeedByParentUrls`

#### **v1**

```typescript
const parentUrls = [
  "chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc",
];
const withRecasts = true;
const viewerFid = 100;
const withReplies = true;
const limit = 30;

client
  .fetchFeedByParentUrls(parentUrls, {
    withRecasts,
    withReplies,
    limit,
    viewerFid,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const parentUrls = [
  "chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc",
];
const withRecasts = true;
const viewerFid = 100;
const withReplies = true;
const limit = 30;

client
  .fetchFeedByParentUrls({
    parentUrls,
    withRecasts,
    viewerFid,
    withReplies,
    limit,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFeed`

#### **v1**

```typescript
import { FeedType } from "@neynar/nodejs-sdk/neynar-api/v2";

const feedType = FeedType.Following;
const fid = 3;
const withRecasts = true;
const limit = 50;
const viewerFid = 100;

client
  .fetchFeed(feedType, { fid, limit, withRecasts, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `FeedType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { FeedType } from "@neynar/nodejs-sdk/build/api";

const feedType = FeedType.Following;
const fid = 3;
const withRecasts = true;
const limit = 50;
const viewerFid = 100;

client
  .fetchFeed({ feedType, fid, withRecasts, limit, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFramesOnlyFeed`

#### **v1**

```typescript
const limit = 30;
const viewerFid = 3;

client.fetchFramesOnlyFeed({ limit, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const limit = 30;
const viewerFid = 3;

client.fetchFramesOnlyFeed({ limit, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchTrendingFeed`

#### **v1**

```typescript
import { TrendingFeedTimeWindow } from "@neynar/nodejs-sdk";

const limit = 10;
const viewerFid = 3;
const timeWindow = TrendingFeedTimeWindow.SIX_HOUR;
const channelId = "farcaster";
const provider = "mbd";
const providerMetadata = encodeURIComponent(
  JSON.stringify({
    filters: {
      channels: ["https://farcaster.group/founders"],
    },
  })
);

client
  .fetchTrendingFeed({
    limit,
    timeWindow,
    channelId,
    viewerFid,
    provider,
    providerMetadata,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `TrendingFeedTimeWindow` is renamed to `FetchTrendingFeedTimeWindowEnum` (Ref. [Renamed enums](#renamed-enums))
2. The import path is for `FetchTrendingFeedTimeWindowEnum` changed. (Ref. [Import path changes](#import-path-changes))
3. Enum Keys have changed `SIX_HOUR` to `_6h` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { FetchTrendingFeedTimeWindowEnum } from "@neynar/nodejs-sdk/build/api";

const limit = 10;
const viewerFid = 3;
const timeWindow = FetchTrendingFeedTimeWindowEnum._6h;
const channelId = "farcaster";
const provider = "mbd";
const providerMetadata = encodeURIComponent(
  JSON.stringify({
    filters: {
      channels: ["https://farcaster.group/founders"],
    },
  })
);

client
  .fetchTrendingFeed({
    limit,
    viewerFid,
    timeWindow,
    channelId,
    provider,
    providerMetadata,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### Reaction

#### `publishReactionToCast`

#### **v1**

```typescript
import { ReactionType } from "@neynar/nodejs-sdk";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const reactionType = ReactionType.Like;
const target = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const idem = "my-reaction-idem";

client
  .publishReactionToCast(signerUuid, reactionType, target, { idem })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `publishReactionToCast` is renamed to `publishReaction` (Ref. [Renamed Methods](#renamed-methods))
2. The import path for `ReactionType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ReactionType } from "@neynar/nodejs-sdk/build/api";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const reactionType = ReactionType.Like;
const target = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const idem = "my-reaction-idem";

client
  .publishReaction({ signerUuid, reactionType, target, idem })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `deleteReactionFromCast`

#### **v1**

```typescript
import { ReactionType } from "@neynar/nodejs-sdk";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const reactionType = ReactionType.Like;
const target = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const idem = "my-reaction-idem";

client
  .deleteReactionFromCast(signerUuid, reactionType, target, { idem })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `deleteReactionFromCast` is renamed to `deleteReaction` (Ref. [Renamed Methods](#renamed-methods))
2. The import path for `ReactionType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ReactionType } from "@neynar/nodejs-sdk/build/api";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const reactionType = ReactionType.Like;
const target = "0x1ea99cbed57e4020314ba3fadd7c692d2de34d5f";
const idem = "my-reaction-idem";

client
  .deleteReaction({ signerUuid, reactionType, target, idem })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchUserReactions`

#### **v1**

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk";

const fid = 3;
const type = ReactionsType.All;
const viewerFid = 19960;
const limit = 50;

client
  .fetchUserReactions(fid, type, {
    limit,
    viewerFid,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `ReactionsType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const type = ReactionsType.All;
const viewerFid = 19960;
const limit = 50;

client.fetchUserReactions({ fid, type, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchReactionsForCast`

#### **v1**

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk";

const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const types = ReactionsType.All;
const viewerFid = 3;
const limit = 50;

client
  .fetchReactionsForCast(hash, types, {
    limit,
    viewerFid,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `fetchReactionsForCast` is now renamed to `fetchCastReactions` (Ref. [Renamed Methods](#renamed-methods))
2. The import path for `ReactionsType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ReactionsType } from "@neynar/nodejs-sdk/build/api";

const hash = "0xfe90f9de682273e05b201629ad2338bdcd89b6be";
const types = ReactionsType.All;
const viewerFid = 3;
const limit = 50;

client
  .fetchCastReactions({ hash, types, viewerFid, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### Notifications

#### `fetchAllNotifications`

#### **v1**

```typescript
import { NotificationType } from "@neynar/nodejs-sdk";

const fid = 3;
const type = NotificationType.LIKES;
const priorityMode = false;

client
  .fetchAllNotifications(fid, {
    type,
    priorityMode,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `isPriority` is removed.
2. The import path is for `NotificationType` changed. (Ref. [Import path changes](#import-path-changes))
3. Enum Keys have changed `LIKES` to `Likes` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { NotificationType } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const type = NotificationType.Likes;
const priorityMode = false;

client.fetchAllNotifications({ fid, type, priorityMode }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchChannelNotificationsForUser`

#### **v1**

```typescript
const fid = 3;
const channelIds = ["neynar", "farcaster"];
const priorityMode = false;

client
  .fetchChannelNotificationsForUser(fid, channelIds, {
    priorityMode,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: `isPriority` is removed.

```typescript
const fid = 3;
const channelIds = ["neynar", "farcaster"];
const priorityMode = false;

client
  .fetchChannelNotificationsForUser({ fid, channelIds, priorityMode })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchNotificationsByParentUrlForUser`

#### **v1**

```typescript
const fid = 3;
const parentUrls = [
  "chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc",
  "chain://eip155:1/erc721:0xfd8427165df67df6d7fd689ae67c8ebf56d9ca61",
];
const priorityMode = false;

client
  .fetchNotificationsByParentUrlForUser(fid, parentUrls, { priorityMode })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: `isPriority` is removed.

```typescript
const fid = 3;
const parentUrls = [
  "chain://eip155:1/erc721:0xd4498134211baad5846ce70ce04e7c4da78931cc",
  "chain://eip155:1/erc721:0xfd8427165df67df6d7fd689ae67c8ebf56d9ca61",
];
const priorityMode = false;

client
  .fetchNotificationsByParentUrlForUser({ fid, parentUrls, priorityMode })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `markNotificationsAsSeen`

#### **v1**

```typescript
import { NotificationType } from "@neynar/nodejs-sdk";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const type = NotificationType.FOLLOWS;

client.markNotificationsAsSeen(signerUuid, { type }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note:

1. The import path for `NotificationType` is changed. (Ref. [Import path changes](#import-path-changes))
2. Enum Keys have changed `FOLLOWS` to `Follows` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { NotificationType } from "@neynar/nodejs-sdk/build/api";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const type = NotificationType.Follows;

client.markNotificationsAsSeen({ signerUuid, type }).then((response) => {
  console.log("response:", response);
});
```

#### Channel

#### `searchChannels`

#### **v1**

```typescript
const q = ux;
const limit = 5;

client.searchChannels("ux", { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const q = ux;
const limit = 5;

client.searchChannels({ q, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchBulkChannels`

#### **v1**

```typescript
import { ChannelType } from "@neynar/nodejs-sdk";

const ids = ["neynar", "farcaster"];
const type = ChannelType.Id;
const viewerFid = 3;

client.fetchBulkChannels(ids, { viewerFid, type }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: The import path for `ChannelType` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
const ids = ["neynar", "farcaster"];
const type = ChannelType.Id;
const viewerFid = 3;

client.fetchBulkChannels({ ids, type, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `lookupChannel`

#### **v1**

```typescript
import { ChannelType } from "@neynar/nodejs-sdk";

const id = "neynar";
const type = ChannelType.Id;
const viewerFid = 3;

client.lookupChannel("neynar", { viewerFid, type }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
import { ChannelType } from "@neynar/nodejs-sdk/build/api";

const id = "neynar";
const type = ChannelType.Id;
const viewerFid = 3;

client.lookupChannel({ id, type, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `removeChannelMember`

#### **v1**

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/neynar-api/v2";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const fid = 3;
const role = ChannelMemberRole.Member;

client
  .removeChannelMember(signerUuid, channelId, fid, role)
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `ChannelMemberRole` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/build/api";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const fid = 3;
const role = "member";

client
  .removeChannelMember({ signerUuid, channelId, fid, role })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchChannelMembers`

#### **v1**

```typescript
const channelId = "neynar";
const fid = 194;
const limit = 10;

client.fetchChannelMembers(channelId, { limit, fid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const channelId = "neynar";
const fid = 194;
const limit = 10;

client.fetchChannelMembers({ channelId, fid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `inviteChannelMember`

#### **v1**

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/neynar-api/v2";

const signnerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const fid = 3;
const role = ChannelMemberRole.Member;

client
  .inviteChannelMember(signnerUuid, channelId, fid, role)
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `ChannelMemberRole` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/build/api";

const signnerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const fid = 3;
const role = ChannelMemberRole.Member;

client
  .inviteChannelMember({ signerUuid, channelId, fid, role })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `respondChannelInvite`

#### **v1**

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/neynar-api/v2";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const role = ChannelMemberRole.Member;
const accept = true;

client
  .respondChannelInvite(signerUuid, channelId, role, accept)
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: The import path for `ChannelMemberRole` is changed. (Ref. [Import path changes](#import-path-changes))

```typescript
import { ChannelMemberRole } from "@neynar/nodejs-sdk/build/api";

const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";
const role = ChannelMemberRole.Member;
const accept = true;

client
  .respondChannelInvite({ signerUuid, channelId, role, accept })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFollowersForAChannel`

#### **v1**

```typescript
const id = "founders";
const viewerFid = 3;
const limit = 50;

client.fetchFollowersForAChannel(id, { limit, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const id = "founders";
const viewerFid = 3;
const limit = 50;

client.fetchFollowersForAChannel({ id, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchRelevantFollowersForAChannel`

#### **v1**

```typescript
const id = "why";
const viewerFid = 3;

client.fetchRelevantFollowersForAChannel(id, viewerFid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const id = "why";
const viewerFid = 3;

client.fetchRelevantFollowersForAChannel({ id, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchUserChannels`

#### **v1**

```typescript
const fid = 3;
const limit = 5;

client.fetchUserChannels(fid, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const limit = 5;

client.fetchUserChannels({ fid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchUserChannelMemberships`

#### **v1**

```typescript
const fid = 3;
const limit = 10;

client.fetchUserChannelMemberships(fid, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const limit = 10;

client.fetchUserChannelMemberships({ fid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `followChannel`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";

client.followChannel(signerUuid, channelId).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";

client.followChannel({ signerUuid, channelId }).then((response) => {
  console.log("response:", response);
});
```

#### `unfollowChannel`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";

client.unfollowChannel(signerUuid, channelId).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const channelId = "neynar";

client.unfollowChannel({ signerUuid, channelId }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchTrendingChannels`

#### **v1**

```typescript
import { TimeWindow } from "@neynar/nodejs-sdk";

const timeWindow = TimeWindow.SEVEN_DAYS;
const limit = 20;

client.fetchTrendingChannels(timeWindow, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note:

1. `TimeWindow` is renamed to `FetchTrendingChannelsTimeWindowEnum` (Ref. [Renamed enums](#renamed-enums))
2. `FetchTrendingChannelsTimeWindowEnum` import is changed (Ref. [Import Path Changes](#import-path-changes))
3. Enums key is changed from `SEVEN_DAYS` to `_7d` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import { FetchTrendingChannelsTimeWindowEnum } from "@neynar/nodejs-sdk/build/api";

const timeWindow = FetchTrendingChannelsTimeWindowEnum._7d;
const limit = 20;

client.fetchTrendingChannels({ timeWindow, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchUsersActiveChannels`

#### **v1**

```typescript
const fid = 3;
const limit = 10;

client.fetchUsersActiveChannels(fid, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const limit = 10;

client.fetchUsersActiveChannels({ fid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### Follows

#### `fetchUserFollowersV2`

#### **v1**

```typescript
import { FollowSortType } from "@neynar/nodejs-sdk";

const fid = 3;
const viewerFid = 23;
const sortType = FollowSortType.DescChron;
const limit = 10;

client
  .fetchUserFollowersV2(fid, { limit, viewerFid, sortType })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `fetchUserFollowersV2` is now renamed to `fetchUserFollowers` (Ref. [Methods Updated to v2 API](#methods-updated-to-v2-api))
2. `FollowSortType` import is changed (Ref. [Import Path Changes](#import-path-changes))

```typescript
import { FollowSortType } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const viewerFid = 23;
const sortType = FollowSortType.DescChron;
const limit = 10;

client
  .fetchUserFollowers({ fid, viewerFid, sortType, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchRelevantFollowers`

#### **v1**

```typescript
const targetFid = 3;
const viewerFid = 19960;

client.fetchRelevantFollowers(targetFid, viewerFid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const targetFid = 3;
const viewerFid = 19960;

client.fetchRelevantFollowers({ targetFid, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchUserFollowingV2`

#### **v1**

```typescript
import { FollowSortType } from "@neynar/nodejs-sdk";

const fid = 3;
const viewerFid = 23;
const sortType = FollowSortType.DescChron;
const limit = 10;

client
  .fetchUserFollowingV2(fid, { limit, viewerFid, sortType })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1. `fetchUserFollowingV2` is now renamed to `fetchUserFollowing` (Ref. [Methods Updated to v2 API](#methods-updated-to-v2-api))
2. `FollowSortType` import is changed (Ref. [Import Path Changes](#import-path-changes))

```typescript
import { FollowSortType } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const viewerFid = 23;
const sortType = FollowSortType.DescChron;
const limit = 10;

client
  .fetchUserFollowing({ fid, viewerFid, sortType, limit })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchFollowSuggestions`

#### **v1**

```typescript
const fid = 3;
const viewerFid = 19950;
const limit = 5;

client.fetchFollowSuggestions(fid, { limit, viewerFid }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const viewerFid = 19950;
const limit = 5;

client.fetchFollowSuggestions({ fid, viewerFid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### Storage

#### `lookupUserStorageAllocations`

#### **v1**

```typescript
const fid = 3;

client.lookupUserStorageAllocations(fid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;

client.lookupUserStorageAllocations({ fid }).then((response) => {
  console.log("response:", response);
});
```

#### `lookupUserStorageUsage`

#### **v1**

```typescript
const fid = 3;

client.lookupUserStorageUsage(3).then((response) => {
  console.log("User Storage Usage:", response);
});
```

#### **v2**

```typescript
const fid = 3;

client.lookupUserStorageUsage({ fid }).then((response) => {
  console.log("response:", response);
});
```

#### `buyStorage`

#### **v1**

```typescript
const fid = 3;
const units = 1;
const idem = "some_random_unique_key";

client.buyStorage(fid, { units, idem }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const units = 1;
const idem = "some_random_unique_key";

client.buyStorage({ fid, units, idem }).then((response) => {
  console.log("response:", response);
});
```

#### Frame

#### `postFrameAction`

#### **v1**

```typescript
const signerUuid = "signerUuid";
const castHash = "castHash";
const action = {
  button: {
    title: "Button Title",
    index: 1,
  },
  frames_url: "frames Url",
  post_url: "Post Url",
};

client.postFrameAction(signerUuid, castHash, action).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "signerUuid";
const castHash = "castHash";
const action = {
  button: {
    title: "Button Title",
    index: 1,
  },
  frames_url: "frames Url",
  post_url: "Post Url",
};

client.postFrameAction({ signerUuid, castHash, action }).then((response) => {
  console.log("response:", response);
});
```

#### `validateFrameAction`

#### **v1**

```typescript
const messageBytesInHex = "messageBytesInHex";
const castReactionContext = false;
const followContext = true;
const signerContext = true;
const channelFollowContext = true;

client
  .validateFrameAction(messageBytesInHex, {
    castReactionContext,
    followContext,
    signerContext,
    channelFollowContext,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const messageBytesInHex = "messageBytesInHex";
const castReactionContext = false;
const followContext = true;
const signerContext = true;
const channelFollowContext = true;

client
  .validateFrameAction({
    messageBytesInHex,
    castReactionContext,
    followContext,
    signerContext,
    channelFollowContext,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchValidateFrameAnalytics`

#### **v1**

```typescript
import {
  ValidateFrameAnalyticsType,
  ValidateFrameAggregateWindow,
} from "@neynar/nodejs-sdk";

const frameUrl = "https://shorturl.at/bDRY9";
const analyticsType = ValidateFrameAnalyticsType.InteractionsPerCast;
const start = "2024-04-06T06:44:56.811Z";
const stop = "2024-04-08T06:44:56.811Z";
const aggregateWindow = ValidateFrameAggregateWindow.TWELVE_HOURS;

client
  .fetchValidateFrameAnalytics(frameUrl, analyticsType, start, stop, {
    aggregateWindow,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note:

1.  Import for `ValidateFrameAnalyticsType` and `ValidateFrameAggregateWindow` is changed (Ref. [Import Path Changes](#import-path-changes))
2.  Enums key is changed from `TWELVE_HOURS` to `_12h` (Ref. [Enum Key Changes](#enum-key-changes))

```typescript
import {
  ValidateFrameAnalyticsType,
  ValidateFrameAggregateWindow,
} from "@neynar/nodejs-sdk/build/api";

const frameUrl = "https://shorturl.at/bDRY9";
const analyticsType = ValidateFrameAnalyticsType.InteractionsPerCast;
const start = "2024-04-06T06:44:56.811Z";
const stop = "2024-04-08T06:44:56.811Z";
const aggregateWindow = ValidateFrameAggregateWindow._12h;

client
  .fetchValidateFrameAnalytics({
    frameUrl,
    analyticsType,
    start,
    stop,
    aggregateWindow,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `lookupNeynarFrame`

#### **v1**

```typescript
import { FrameType } from "@neynar/nodejs-sdk";

const type = FrameType.Uuid;
const uuid = "your-frame-uuid";

client.lookupNeynarFrame(uuid, { type }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: Import for `FrameType` is changed (Ref. [Import Path Changes](#import-path-changes))

```typescript
import { FrameType } from "@neynar/nodejs-sdk/build/api";

const type = FrameType.Uuid;
const uuid = "your-frame-uuid";

client.lookupNeynarFrame({ type, uuid }).then((response) => {
  console.log("response:", response);
});
```

#### `deleteNeynarFrame`

#### **v1**

```typescript
const uuid = "your-frame-uuid";

client.deleteNeynarFrame(uuid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const uuid = "your-frame-uuid";

client.deleteNeynarFrame({ uuid }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchFrameMetaTagsFromUrl`

#### **v1**

```typescript
const url = "https://frames.neynar.com/f/862277df/ff7be6a4";

client.fetchFrameMetaTagsFromUrl(url).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const url = "https://frames.neynar.com/f/862277df/ff7be6a4";

client.fetchFrameMetaTagsFromUrl({ url }).then((response) => {
  console.log("response:", response);
});
```

#### `postFrameActionDeveloperManaged`

#### **v1**

```typescript
const action = // Example action
const signature_packet = // Example signature packet
const castHash = "castHash";

client
  .postFrameDeveloperManagedAction(action, signature_packet, {
    castHash: castHash,
  })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const action = // Example action
const signature_packet = // Example signature packet
const castHash = "castHash";

client.postFrameActionDeveloperManaged({castHash, action, signaturePacket}).then(response => {
  console.log('response:', response);
});
```

#### fname

#### `isFnameAvailable`

#### **v1**

```typescript
const fname = "shreyas-chorge";

client.isFnameAvailable(fname).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fname = "shreyas-chorge";

client.isFnameAvailable({ fname }).then((response) => {
  console.log("response:", response);
});
```

#### Webhook

#### `lookupWebhook`

#### **v1**

```typescript
const webhookId = "yourWebhookId";

client.lookupWebhook(webhookId).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const webhookId = "yourWebhookId";

client.lookupWebhook({ webhookId }).then((response) => {
  console.log("response:", response);
});
```

#### `publishWebhook`

#### **v1**

```typescript
const name = "Cast created Webhook";
const url = "https://example.com/webhook";
const subscription = {
  "cast.created": {
    author_fids: [3, 196, 194],
    mentioned_fids: [196],
  },
  "user.created": {},
};

client.publishWebhook(name, url, { subscription }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const name = "Cast created Webhook";
const url = "https://example.com/webhook";
const subscription = {
  "cast.created": {
    author_fids: [3, 196, 194],
    mentioned_fids: [196],
  },
  "user.created": {},
};

client.publishWebhook({ name, url, subscription }).then((response) => {
  console.log("response:", response);
});
```

#### `updateWebhookActiveStatus`

#### **v1**

```typescript
const webhookId = "yourWebhookId";
const active = false;

client.updateWebhookActiveStatus(webhookId, active).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const webhookId = "yourWebhookId";
const active = false;

client.updateWebhookActiveStatus({ webhookId, active }).then((response) => {
  console.log("response:", response);
});
```

#### `updateWebhook`

#### **v1**

```typescript
const webhookId = "existingWebhookId";
const name = "UpdatedWebhookName";
const url = "https://example.com/new-webhook-url";
const subscription = {
  "cast.created": {
    author_fids: [2, 4, 6],
    mentioned_fids: [194],
  },
  "user.created": {},
};

client
  .updateWebhook(webhookId, name, url, { subscription })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const webhookId = "existingWebhookId";
const name = "UpdatedWebhookName";
const url = "https://example.com/new-webhook-url";
const subscription = {
  "cast.created": {
    author_fids: [2, 4, 6],
    mentioned_fids: [194],
  },
  "user.created": {},
};

client
  .updateWebhook({ name, url, subscription, webhookId })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `deleteWebhook`

#### **v1**

```typescript
const webhookId = "yourWebhookId";

client.deleteWebhook(webhookId).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const webhookId = "yourWebhookId";

client.deleteWebhook({ webhookId }).then((response) => {
  console.log("response:", response);
});
```

#### Action

#### `publishFarcasterAction`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const baseUrl = "https://appb.example.com";
const action = {
  type: "sendMessage",
  payload: {
    message: "Hello from App A!",
  },
};

client.publishFarcasterAction(signerUuid, baseUrl, action).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const baseUrl = "https://appb.example.com";
const action = {
  type: "sendMessage",
  payload: {
    message: "Hello from App A!",
  },
};

client
  .publishFarcasterAction({ signerUuid, baseUrl, action })
  .then((response) => {
    console.log("response:", response);
  });
```

#### Mute

#### `fetchMuteList`

#### **v1**

```typescript
const fid = 3;
const limit = 10;

client.fetchMuteList(fid, { limit }).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const limit = 10;

client.fetchMuteList({ fid, limit }).then((response) => {
  console.log("response:", response);
});
```

#### `publishMute`

#### **v1**

```typescript
const fid = 3;
const mutedFid = 19960;

client.publishMute(fid, mutedFid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const mutedFid = 19960;

client.publishMute({ fid, mutedFid }).then((response) => {
  console.log("response:", response);
});
```

#### `deleteMute`

#### **v1**

```typescript
const fid = 3;
const mutedFid = 19960;

client.deleteMute(fid, mutedFid).then((response) => {
  console.log("Mute Response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const mutedFid = 19960;

client.deleteMute({ fid, mutedFid }).then((response) => {
  console.log("response:", response);
});
```

#### Block

#### `publishBlock`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const blockedFid = 19960;

client.publishBlock(signerUuid, blockedFid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const blockedFid = 19960;

client.publishBlock({ signerUuid, blockedFid }).then((response) => {
  console.log("response:", response);
});
```

#### `deleteBlock`

#### **v1**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const blockedFid = 19960;

client.deleteBlock(signerUuid, blockedFid).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const signerUuid = "19d0c5fd-9b33-4a48-a0e2-bc7b0555baec";
const blockedFid = 19960;

client.deleteBlock({ signerUuid, blockedFid }).then((response) => {
  console.log("response:", response);
});
```

#### Ban

#### `publishBans`

#### **v1**

```typescript
const fids = [3, 19960];

client.publishBan(fids).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fids = [3, 19960];

client.publishBans({ fids }).then((response) => {
  console.log("response:", response);
});
```

#### `deleteBans`

#### **v1**

```typescript
const fids = [3, 19960];

client.deleteBans(fids).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fids = [3, 19960];

client.deleteBans({ fids }).then((response) => {
  console.log("response:", response);
});
```

#### Onchain

#### `fetchUserBalance`

#### **v1**

```typescript
const fid = 3;
const networks = Networks.Base;

client.fetchUserBalance(fid, networks).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

```typescript
const fid = 3;
const networks = Networks.Base;

client.fetchUserBalance({ fid, networks }).then((response) => {
  console.log("response:", response);
});
```

#### `fetchSubscriptionsForFid`

#### **v1**

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;

client.fetchSubscriptionsForFid(fid, subscriptionProvider).then((response) => {
  console.log("response:", response);
});
```

#### **v2**

Note: Import for `SubscriptionProvider` is changed (Ref. [Import Path Changes](#import-path-changes))

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;

client
  .fetchSubscriptionsForFid({ fid, subscriptionProvider })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchSubscribedToForFid`

#### **v1**

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;
const viewerFid = 1231;

client
  .fetchSubscribedToForFid(fid, subscriptionProvider, { viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

Note: Import for `SubscriptionProvider` is changed (Ref. [Import Path Changes](#import-path-changes))

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;
const viewerFid = 1231;

client
  .fetchSubscribedToForFid({ fid, subscriptionProvider, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchSubscribersForFid`

#### **v1**

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;
const viewerFid = 1231;

client
  .fetchSubscribedToForFid(fid, subscriptionProvider, { viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
import { SubscriptionProvider } from "@neynar/nodejs-sdk/build/api";

const fid = 3;
const subscriptionProvider = SubscriptionProvider.FabricStp;
const viewerFid = 1231;

client
  .fetchSubscribersForFid({ fid, subscriptionProvider, viewerFid })
  .then((response) => {
    console.log("response:", response);
  });
```

#### `fetchSubscriptionCheck`

#### **v1**

```typescript
const addresses = [
  "0xedd3783e8c7c52b80cfbd026a63c207edc9cbee7",
  "0x5a927ac639636e534b678e81768ca19e2c6280b7",
];
const contractAddress = "0x76ad4cb9ac51c09f4d9c2cadcea75c9fa9074e5b";
const chainId = "8453";

client
  .fetchSubscriptionCheck(addresses, contractAddress, chainId)
  .then((response) => {
    console.log("response:", response);
  });
```

#### **v2**

```typescript
const addresses = [
  "0xedd3783e8c7c52b80cfbd026a63c207edc9cbee7",
  "0x5a927ac639636e534b678e81768ca19e2c6280b7",
];
const contractAddress = "0x76ad4cb9ac51c09f4d9c2cadcea75c9fa9074e5b";
const chainId = "8453";

client
  .fetchSubscriptionCheck({ addresses, contractAddress, chainId })
  .then((response) => {
    console.log("response:", response);
  });
```

---

This guide should assist in updating your existing code to SDK v2. If you encounter any issues or have further questions, please reach out to us. [Warpcast](https://warpcast.com/~/channel/neynar) [Telegram](https://t.me/rishdoteth)
