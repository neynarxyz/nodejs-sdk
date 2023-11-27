import { User as UserV1 } from "../v1";
import { User as UserV2, ActiveStatus } from "../v2";

export const convertToV2UserProfile = (v1Profile: UserV1): UserV2 => {
  let cleanProfile: UserV2 = {
    object: "user",
    fid: v1Profile.fid,
    custody_address: v1Profile.custodyAddress,
    username: v1Profile.username,
    display_name: v1Profile.displayName,
    pfp_url: v1Profile.pfp.url,
    profile: {
      bio: {
        text: v1Profile.profile.bio.text,
        mentioned_profiles: v1Profile.profile.bio?.mentionedProfiles ?? [],
      },
    },
    follower_count: v1Profile?.followerCount,
    following_count: v1Profile?.followingCount,
    verifications: v1Profile?.verifications,
    active_status:
      v1Profile?.activeStatus === "active"
        ? ActiveStatus.Active
        : ActiveStatus.Inactive,
  };

  if (v1Profile.viewerContext != null) {
    cleanProfile.viewer_context = {
      following: v1Profile.viewerContext.following,
      followed_by: v1Profile.viewerContext.followedBy,
    };
  }

  return cleanProfile;
};

export const convertToV2UserProfileList = (v1Profiles: UserV1[]): UserV2[] => {
  let v2Profiles: UserV2[] = [];
  for (let i = 0; i < v1Profiles.length; i++) {
    let v2Profile = convertToV2UserProfile(v1Profiles[i]);
    v2Profiles.push(v2Profile);
  }
  return v2Profiles;
};
