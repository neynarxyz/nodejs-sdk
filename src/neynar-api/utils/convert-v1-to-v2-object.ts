import {
  User as IUserV1,
  Cast as ICastV1,
  CastWithInteractions as ICastWithInteractionsV1,
} from "../v1";
import { User as IUserV2, ActiveStatus, Cast as ICastV2 } from "../v2";

export const convertToV2User = (v1User: IUserV1): IUserV2 => {
  const v2User: IUserV2 = {
    object: "user",
    fid: v1User.fid,
    custody_address: v1User.custodyAddress,
    username: v1User.username,
    display_name: v1User.displayName,
    pfp_url: v1User.pfp.url,
    profile: {
      bio: {
        text: v1User.profile.bio.text,
        mentioned_profiles: v1User.profile.bio?.mentionedProfiles ?? [],
      },
    },
    follower_count: v1User?.followerCount,
    following_count: v1User?.followingCount,
    verifications: v1User?.verifications,
    active_status:
      v1User?.activeStatus === "active"
        ? ActiveStatus.Active
        : ActiveStatus.Inactive,
    ...(v1User.viewerContext
      ? {
          following: v1User.viewerContext.following,
          followed_by: v1User.viewerContext.followedBy,
        }
      : {}),
  };

  return v2User;
};

export const convertToV2UserList = (v1Users: IUserV1[]): IUserV2[] => {
  const v2Users: IUserV2[] = [];
  for (let i = 0; i < v1Users.length; i++) {
    const v2User = convertToV2User(v1Users[i]);
    v2Users.push(v2User);
  }
  return v2Users;
};

export const convertToV2Cast = (
  v1Cast: ICastV1 | ICastWithInteractionsV1
): ICastV2 => {
  const v2Cast = {
    object: "cast_hydrated",
    hash: v1Cast.hash,
    thread_hash: v1Cast.threadHash,
    parent_hash: v1Cast.parentHash,
    parent_url: v1Cast.parentUrl ? v1Cast.parentUrl : null,
    parent_author: {
      fid: v1Cast.parentAuthor.fid,
    },
    author: convertToV2User(v1Cast.author as IUserV1),
    text: v1Cast.text,
    timestamp: v1Cast.timestamp,
    embeds: v1Cast.embeds.map((embed) => {
      // Currently transformEmbeds is not being used. Leaving it here for now in case we need it later.
      // if (embed.castId) {
      //   return { cast_id: embed.castId }; // changed 'castId' to 'cast_id'
      // } else {
      //   return embed; // If there is no 'castId', return the embed object as is
      // }
      return embed;
    }),
    ...((v1Cast as ICastWithInteractionsV1).reactions
      ? {
          reactions: {
            likes: (v1Cast as ICastWithInteractionsV1).reactions?.fids.map(
              (fid, idx) => {
                return {
                  fid: fid,
                  fname: (v1Cast as ICastWithInteractionsV1).reactions?.fnames[
                    idx
                  ],
                };
              }
            ),
            // assuming v1Cast.recasts is an array of fids and v1Cast.recasters is an array of fames
            recasts: (v1Cast as ICastWithInteractionsV1).recasts?.fids.map(
              (fid, idx) => {
                return {
                  fid: fid,
                  fname: (v1Cast as ICastWithInteractionsV1).recasters[idx],
                };
              }
            ),
          },
        }
      : {}),
    ...((v1Cast as ICastWithInteractionsV1).replies
      ? {
          replies: {
            count: (v1Cast as ICastWithInteractionsV1).replies.count,
          },
        }
      : {}),
    mentioned_profiles: convertToV2UserList(v1Cast.mentionedProfiles),
  };
  return v2Cast;
};

export const convertToV2CastsList = (
  v1Casts: ICastV1[] | ICastWithInteractionsV1[]
): ICastV2[] => {
  const v2Casts = [];
  for (let i = 0; i < v1Casts.length; i++) {
    const v1Cast = v1Casts[i];
    const v2Cast = convertToV2Cast(v1Cast);
    v2Casts.push(v2Cast);
  }
  return v2Casts;
};
