export interface SDKConfigurationParameters {
  apiKey: string;
  basePath?: string;
  baseOptions?: any;
}

export class Configuration implements SDKConfigurationParameters {
  public apiKey: string;
  public basePath?: string;
  public baseOptions?: any;

  constructor(params: SDKConfigurationParameters) {
    this.apiKey = params.apiKey;
    this.basePath = params.basePath;
    this.baseOptions = params.baseOptions;
  }
}
