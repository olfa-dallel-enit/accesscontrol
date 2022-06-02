/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CdaccesscontrolAuthenticationLog {
  /** @format uint64 */
  id?: string;
  transaction?: string;
  timestamp?: string;
  details?: string;
  decision?: string;
  function?: string;
  recipient?: string;
  creator?: string;
}

export interface CdaccesscontrolCertificate {
  /** @format uint64 */
  id?: string;
  publicKey?: CdaccesscontrolPublicKey;
  validity?: CdaccesscontrolValidity;
  creator?: string;
}

export interface CdaccesscontrolDomain {
  /** @format uint64 */
  id?: string;
  name?: string;
  domainType?: string;
  location?: string;
  certificate?: CdaccesscontrolCertificate;
  ibcConnection?: CdaccesscontrolIbcConnection;
  creator?: string;
}

export interface CdaccesscontrolIbcConnection {
  /** @format uint64 */
  id?: string;
  channel?: string;
  creator?: string;
}

export interface CdaccesscontrolMsgCreateAuthenticationLogResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdaccesscontrolMsgCreateCertificateResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdaccesscontrolMsgCreateDomainResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdaccesscontrolMsgCreateIbcConnectionResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdaccesscontrolMsgCreatePublicKeyResponse {
  /** @format uint64 */
  id?: string;
}

export interface CdaccesscontrolMsgCreateValidityResponse {
  /** @format uint64 */
  id?: string;
}

export type CdaccesscontrolMsgDeleteAuthenticationLogResponse = object;

export type CdaccesscontrolMsgDeleteCertificateResponse = object;

export type CdaccesscontrolMsgDeleteDomainResponse = object;

export type CdaccesscontrolMsgDeleteIbcConnectionResponse = object;

export type CdaccesscontrolMsgDeletePublicKeyResponse = object;

export type CdaccesscontrolMsgDeleteValidityResponse = object;

export type CdaccesscontrolMsgSendAuthenticateDomainResponse = object;

export type CdaccesscontrolMsgUpdateAuthenticationLogResponse = object;

export type CdaccesscontrolMsgUpdateCertificateResponse = object;

export type CdaccesscontrolMsgUpdateDomainResponse = object;

export type CdaccesscontrolMsgUpdateIbcConnectionResponse = object;

export type CdaccesscontrolMsgUpdatePublicKeyResponse = object;

export type CdaccesscontrolMsgUpdateValidityResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type CdaccesscontrolParams = object;

export interface CdaccesscontrolPublicKey {
  /** @format uint64 */
  id?: string;

  /** @format uint64 */
  n?: string;

  /** @format uint64 */
  e?: string;
  creator?: string;
}

export interface CdaccesscontrolQueryAllAuthenticationLogResponse {
  AuthenticationLog?: CdaccesscontrolAuthenticationLog[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryAllCertificateResponse {
  Certificate?: CdaccesscontrolCertificate[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryAllDomainResponse {
  Domain?: CdaccesscontrolDomain[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryAllIbcConnectionResponse {
  IbcConnection?: CdaccesscontrolIbcConnection[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryAllPublicKeyResponse {
  PublicKey?: CdaccesscontrolPublicKey[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryAllValidityResponse {
  Validity?: CdaccesscontrolValidity[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface CdaccesscontrolQueryGetAuthenticationLogResponse {
  AuthenticationLog?: CdaccesscontrolAuthenticationLog;
}

export interface CdaccesscontrolQueryGetCertificateResponse {
  Certificate?: CdaccesscontrolCertificate;
}

export interface CdaccesscontrolQueryGetDomainResponse {
  Domain?: CdaccesscontrolDomain;
}

export interface CdaccesscontrolQueryGetIbcConnectionResponse {
  IbcConnection?: CdaccesscontrolIbcConnection;
}

export interface CdaccesscontrolQueryGetPublicKeyResponse {
  PublicKey?: CdaccesscontrolPublicKey;
}

export interface CdaccesscontrolQueryGetValidityResponse {
  Validity?: CdaccesscontrolValidity;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CdaccesscontrolQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: CdaccesscontrolParams;
}

export interface CdaccesscontrolValidity {
  /** @format uint64 */
  id?: string;
  notBefore?: string;
  notAfter?: string;
  creator?: string;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title cdaccesscontrol/authentication_log.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthenticationLogAll
   * @summary Queries a list of AuthenticationLog items.
   * @request GET:/crossdomain/cdaccesscontrol/authentication_log
   */
  queryAuthenticationLogAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllAuthenticationLogResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/authentication_log`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAuthenticationLog
   * @summary Queries a AuthenticationLog by id.
   * @request GET:/crossdomain/cdaccesscontrol/authentication_log/{id}
   */
  queryAuthenticationLog = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetAuthenticationLogResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/authentication_log/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCertificateAll
   * @summary Queries a list of Certificate items.
   * @request GET:/crossdomain/cdaccesscontrol/certificate
   */
  queryCertificateAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllCertificateResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/certificate`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCertificate
   * @summary Queries a Certificate by id.
   * @request GET:/crossdomain/cdaccesscontrol/certificate/{id}
   */
  queryCertificate = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetCertificateResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/certificate/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomainAll
   * @summary Queries a list of Domain items.
   * @request GET:/crossdomain/cdaccesscontrol/domain
   */
  queryDomainAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllDomainResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/domain`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDomain
   * @summary Queries a Domain by id.
   * @request GET:/crossdomain/cdaccesscontrol/domain/{id}
   */
  queryDomain = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetDomainResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/domain/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcConnectionAll
   * @summary Queries a list of IbcConnection items.
   * @request GET:/crossdomain/cdaccesscontrol/ibc_connection
   */
  queryIbcConnectionAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllIbcConnectionResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/ibc_connection`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryIbcConnection
   * @summary Queries a IbcConnection by id.
   * @request GET:/crossdomain/cdaccesscontrol/ibc_connection/{id}
   */
  queryIbcConnection = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetIbcConnectionResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/ibc_connection/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/crossdomain/cdaccesscontrol/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryParamsResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPublicKeyAll
   * @summary Queries a list of PublicKey items.
   * @request GET:/crossdomain/cdaccesscontrol/public_key
   */
  queryPublicKeyAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllPublicKeyResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/public_key`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPublicKey
   * @summary Queries a PublicKey by id.
   * @request GET:/crossdomain/cdaccesscontrol/public_key/{id}
   */
  queryPublicKey = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetPublicKeyResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/public_key/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidityAll
   * @summary Queries a list of Validity items.
   * @request GET:/crossdomain/cdaccesscontrol/validity
   */
  queryValidityAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<CdaccesscontrolQueryAllValidityResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/validity`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValidity
   * @summary Queries a Validity by id.
   * @request GET:/crossdomain/cdaccesscontrol/validity/{id}
   */
  queryValidity = (id: string, params: RequestParams = {}) =>
    this.request<CdaccesscontrolQueryGetValidityResponse, RpcStatus>({
      path: `/crossdomain/cdaccesscontrol/validity/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
