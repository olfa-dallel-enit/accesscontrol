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

export interface CrossdomainCooperationNetworkFeatures {
  /** @format uint64 */
  depth?: string;

  /** @format uint64 */
  cost?: string;
  interestList?: string[];
  locationList?: string[];
  lastUpdate?: string;
  creator?: string;
}

export interface CrossdomainDecisionPolicy {
  /** @format uint64 */
  depth?: string;

  /** @format uint64 */
  cost?: string;
  locationList?: string[];
  interestList?: string[];
  validity?: CrossdomainValidity;
  lastUpdate?: string;
  creator?: string;
}

export interface CrossdomainForwardPolicy {
  mode?: string;
  domainList?: string[];
  locationList?: string[];
  creator?: string;
}

export interface CrossdomainLocalDomain {
  name?: string;
  domainType?: string;
  location?: string;
  creator?: string;
}

export interface CrossdomainLocalDomainCertificate {
  value?: string;
  creator?: string;
}

export type CrossdomainMsgConfigureLocalDomainResponse = object;

export type CrossdomainMsgCreateCooperationNetworkFeaturesResponse = object;

export type CrossdomainMsgCreateDecisionPolicyResponse = object;

export type CrossdomainMsgCreateForwardPolicyResponse = object;

export type CrossdomainMsgCreateLocalDomainCertificateResponse = object;

export type CrossdomainMsgCreateLocalDomainResponse = object;

export type CrossdomainMsgCreatePrivateKeyResponse = object;

export type CrossdomainMsgCreateRootCertificateResponse = object;

export type CrossdomainMsgCreateUpdatePolicyResponse = object;

export interface CrossdomainMsgCreateValidityResponse {
  /** @format uint64 */
  id?: string;
}

export type CrossdomainMsgDeleteCooperationNetworkFeaturesResponse = object;

export type CrossdomainMsgDeleteDecisionPolicyResponse = object;

export type CrossdomainMsgDeleteForwardPolicyResponse = object;

export type CrossdomainMsgDeleteLocalDomainCertificateResponse = object;

export type CrossdomainMsgDeleteLocalDomainResponse = object;

export type CrossdomainMsgDeletePrivateKeyResponse = object;

export type CrossdomainMsgDeleteRootCertificateResponse = object;

export type CrossdomainMsgDeleteUpdatePolicyResponse = object;

export type CrossdomainMsgDeleteValidityResponse = object;

export type CrossdomainMsgUpdateCooperationNetworkFeaturesResponse = object;

export type CrossdomainMsgUpdateDecisionPolicyResponse = object;

export type CrossdomainMsgUpdateForwardPolicyResponse = object;

export type CrossdomainMsgUpdateLocalDomainCertificateResponse = object;

export type CrossdomainMsgUpdateLocalDomainResponse = object;

export type CrossdomainMsgUpdatePrivateKeyResponse = object;

export type CrossdomainMsgUpdateRootCertificateResponse = object;

export type CrossdomainMsgUpdateUpdatePolicyResponse = object;

export type CrossdomainMsgUpdateValidityResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type CrossdomainParams = object;

export interface CrossdomainPrivateKey {
  value?: string;
  creator?: string;
}

export interface CrossdomainQueryAllValidityResponse {
  Validity?: CrossdomainValidity[];

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

export interface CrossdomainQueryGetCooperationNetworkFeaturesResponse {
  CooperationNetworkFeatures?: CrossdomainCooperationNetworkFeatures;
}

export interface CrossdomainQueryGetDecisionPolicyResponse {
  DecisionPolicy?: CrossdomainDecisionPolicy;
}

export interface CrossdomainQueryGetForwardPolicyResponse {
  ForwardPolicy?: CrossdomainForwardPolicy;
}

export interface CrossdomainQueryGetLocalDomainCertificateResponse {
  LocalDomainCertificate?: CrossdomainLocalDomainCertificate;
}

export interface CrossdomainQueryGetLocalDomainResponse {
  LocalDomain?: CrossdomainLocalDomain;
}

export interface CrossdomainQueryGetPrivateKeyResponse {
  PrivateKey?: CrossdomainPrivateKey;
}

export interface CrossdomainQueryGetRootCertificateResponse {
  RootCertificate?: CrossdomainRootCertificate;
}

export interface CrossdomainQueryGetUpdatePolicyResponse {
  UpdatePolicy?: CrossdomainUpdatePolicy;
}

export interface CrossdomainQueryGetValidityResponse {
  Validity?: CrossdomainValidity;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CrossdomainQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: CrossdomainParams;
}

export interface CrossdomainRootCertificate {
  value?: string;
  creator?: string;
}

export interface CrossdomainUpdatePolicy {
  query?: boolean;
  event?: boolean;
  periodicalQuery?: boolean;
  creator?: string;
}

export interface CrossdomainValidity {
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
 * @title crossdomain/cooperation_network_features.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCooperationNetworkFeatures
   * @summary Queries a CooperationNetworkFeatures by index.
   * @request GET:/crossdomain/crossdomain/cooperation_network_features
   */
  queryCooperationNetworkFeatures = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetCooperationNetworkFeaturesResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/cooperation_network_features`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDecisionPolicy
   * @summary Queries a DecisionPolicy by index.
   * @request GET:/crossdomain/crossdomain/decision_policy
   */
  queryDecisionPolicy = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetDecisionPolicyResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/decision_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryForwardPolicy
   * @summary Queries a ForwardPolicy by index.
   * @request GET:/crossdomain/crossdomain/forward_policy
   */
  queryForwardPolicy = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetForwardPolicyResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/forward_policy`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLocalDomain
   * @summary Queries a LocalDomain by index.
   * @request GET:/crossdomain/crossdomain/local_domain
   */
  queryLocalDomain = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetLocalDomainResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/local_domain`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLocalDomainCertificate
   * @summary Queries a LocalDomainCertificate by index.
   * @request GET:/crossdomain/crossdomain/local_domain_certificate
   */
  queryLocalDomainCertificate = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetLocalDomainCertificateResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/local_domain_certificate`,
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
   * @request GET:/crossdomain/crossdomain/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryParamsResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPrivateKey
   * @summary Queries a PrivateKey by index.
   * @request GET:/crossdomain/crossdomain/private_key
   */
  queryPrivateKey = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetPrivateKeyResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/private_key`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRootCertificate
   * @summary Queries a RootCertificate by index.
   * @request GET:/crossdomain/crossdomain/root_certificate
   */
  queryRootCertificate = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetRootCertificateResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/root_certificate`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUpdatePolicy
   * @summary Queries a UpdatePolicy by index.
   * @request GET:/crossdomain/crossdomain/update_policy
   */
  queryUpdatePolicy = (params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetUpdatePolicyResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/update_policy`,
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
   * @request GET:/crossdomain/crossdomain/validity
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
    this.request<CrossdomainQueryAllValidityResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/validity`,
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
   * @request GET:/crossdomain/crossdomain/validity/{id}
   */
  queryValidity = (id: string, params: RequestParams = {}) =>
    this.request<CrossdomainQueryGetValidityResponse, RpcStatus>({
      path: `/crossdomain/crossdomain/validity/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
