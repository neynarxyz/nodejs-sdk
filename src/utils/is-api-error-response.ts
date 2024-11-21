import { AxiosError } from "axios";
import type { SetRequired } from "type-fest";
import { ErrorRes } from "../api";

/**
 * Utility for parsing errors returned by the Neynar API servers. Returns true
 * if the given error is caused by an error response from the server, and
 * narrows the type of `error` accordingly.
 */
export const isApiErrorResponse = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
): error is SetRequired<AxiosError<ErrorRes>, "response"> => {
  if (!(error instanceof AxiosError)) return false;
  return error.response?.data !== undefined && "message" in error.response.data;
};
