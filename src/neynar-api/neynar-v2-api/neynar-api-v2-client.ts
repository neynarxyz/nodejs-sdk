import {
  CastApi,
  SignerApi,
  Signer,
  Cast,
  CastParamType,
  PostCastResponseCast,
  DeleteCastReqBody,
  ReactionApi,
  ReactionReqBody,
  ReactionType,
  OperationResponse,
  FollowApi,
  FollowReqBody,
  BulkFollowResponse,
  CastEmbed,
  Configuration,
  ErrorRes,
  FeedApi,
  UserApi,
  SignerApiRegisterSignedKeyRequest,
  CastApiPostCastRequest,
  CastWithInteractions,
  SearchedUser,
} from "./openapi-farcaster";
import axios, { AxiosError, AxiosInstance } from "axios";
import { silentLogger, Logger } from "../common/logger";
import type { SetRequired } from "type-fest";

const BASE_PATH = "https://api.neynar.com/v2";

export class NeynarV2APIClient {
  private readonly logger: Logger;

  public readonly apis: {
    cast: CastApi;
  };

  /**
   * Instantiates a NeynarV1APIClient
   *
   * Note: A Wallet must be provided if the API client is to mint new AuthTokens
   */
  constructor(
    apiKey: string,
    {
      logger = silentLogger,
      axiosInstance,
    }: { logger?: Logger; axiosInstance?: AxiosInstance } = {}
  ) {
    this.logger = logger;

    if (apiKey === "") {
      throw new Error(
        "Attempt to use an authenticated API method without first providing an api key"
      );
    }

    if (axiosInstance === undefined) {
      axiosInstance = axios.create();
    }
    axiosInstance.defaults.decompress = true;
    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (NeynarV2APIClient.isApiErrorResponse(error)) {
          const apiErrors = error.response.data;
          this.logger.warn(`API errors: ${JSON.stringify(apiErrors)}`);
        }
        throw error;
      }
    );

    const config: Configuration = new Configuration({
      basePath: BASE_PATH,
      apiKey: apiKey,
    });
    this.apis = {
      cast: new CastApi(config, undefined, axiosInstance),
    };
  }

  /**
   * Utility for parsing errors returned by the Neynar API servers. Returns true
   * if the given error is caused by an error response from the server, and
   * narrows the type of `error` accordingly.
   */
  public static isApiErrorResponse(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any
  ): error is SetRequired<AxiosError<ErrorRes>, "response"> {
    if (!(error instanceof AxiosError)) return false;
    return (
      error.response?.data !== undefined && "message" in error.response.data
    );
  }

  /**
   * Gets information about an individual cast.
   * See [Neynar documentation](https://docs.neynar.com/reference/cast)
   *
   */
  public async fetchCast(castOrCastHash: Cast | string): Promise<Cast | null> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }
    try {
      const response = await this.apis.cast.cast({
        type: CastParamType.Hash,
        identifier: castHash,
      });
      return response.data.cast;
    } catch (error) {
      if (NeynarV2APIClient.isApiErrorResponse(error)) {
        const status = error.response.status;
        if (status === 404) {
          return null;
        }
      }
      throw error;
    }
  }

  /**
   * Gets information about an array of casts. See [Neynar documentation](https://docs.neynar.com/reference/get-array-of-casts)
   */
  public async fetchCasts(castHashes: string[]): Promise<Cast[] | null> {
    try {
      const response = await this.apis.cast.casts({
        getCastsReqBody: {
          casts: castHashes.map((hash) => ({ hash })),
        },
      });
      return response.data.result.casts;
    } catch (error) {
      if (NeynarV2APIClient.isApiErrorResponse(error)) {
        const status = error.response.status;
        if (status === 404) {
          return null;
        }
      }
      throw error;
    }
  }

  /**
   * Publishes a cast for the currently authenticated user. See [Neynar documentation](https://docs.neynar.com/reference/post-a-cast)
   */
  public async publishCast(
    signerUuid: string,
    text: string,
    options?: { embeds?: CastEmbed[]; replyTo?: string }
  ): Promise<PostCastResponseCast> {
    const request: CastApiPostCastRequest = {
      postCastReqBody: {
        signer_uuid: signerUuid,
        text: text,
        embeds: options?.embeds,
        parent: options?.replyTo,
      },
    };
    const response = await this.apis.cast.postCast(request);
    return response.data.cast;
  }

  /**
   * Delete a cast. See [Neynar documentation](https://docs.neynar.com/reference/delete-a-cast)
   */
  public async deleteCast(
    signerUuid: string,
    castOrCastHash: Cast | string
  ): Promise<void> {
    let castHash: string;
    if (typeof castOrCastHash === "string") {
      castHash = castOrCastHash;
    } else {
      castHash = castOrCastHash.hash;
    }
    const body: DeleteCastReqBody = {
      signer_uuid: signerUuid,
      target_hash: castHash,
    };
    await this.apis.cast.deleteCast({ deleteCastReqBody: body });
  }
}
