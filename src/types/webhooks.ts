import { Cast, User } from "../api";

interface UserDehydrated {
  fid: number;
  object: "user_dehydrated";
  username: string;
}

interface CastDehydrated {
  hash: string;
  author: UserDehydrated;
  object: "cast_dehydrated";
}

export interface WebhookFollowCreated {
  data: {
    event_timestamp: string;
    user: UserDehydrated;
    object: "follow";
    timestamp: string;
    target_user: UserDehydrated;
  };
  type: "follow.created";
  created_at: number;
}

export interface WebhookFollowDeleted {
  data: {
    event_timestamp: string;
    user: UserDehydrated;
    object: "unfollow";
    timestamp: string;
    target_user: UserDehydrated;
  };
  type: "follow.deleted";
  created_at: number;
}

export interface WebhookReactionCreated {
  data: {
    cast: CastDehydrated;
    event_timestamp: string;
    user: UserDehydrated;
    object: "reaction";
    timestamp: string;
    reaction_type: 1 | 2;
  };
  type: "reaction.created";
  created_at: number;
}

export interface WebhookReactionDeleted {
  data: {
    cast: CastDehydrated;
    event_timestamp: string;
    user: UserDehydrated;
    object: "reaction";
    timestamp: string;
    reaction_type: 1 | 2;
  };
  type: "reaction.deleted";
  created_at: number;
}

export interface WebhookCastCreated {
  data: Cast;
  type: "cast.created";
  created_at: number;
  event_timestamp: string;
}

export interface WebhookUserCreated {
  data: User;
  type: "user.created";
  created_at: number;
  event_timestamp: string;
}

export interface WebhookUserUpdated {
  data: User;
  type: "user.updated";
  created_at: number;
  event_timestamp: string;
}
