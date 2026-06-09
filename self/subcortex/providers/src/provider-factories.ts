import type {
  IModelProvider,
  ModelProviderConfig,
  ProviderVendor,
} from '@nous/shared';

export interface ProviderFactoryCreateOptions {
  apiKey?: string;
}

export interface ProviderFactoryModule {
  readonly vendorKey: ProviderVendor;
  create(
    config: ModelProviderConfig,
    options?: ProviderFactoryCreateOptions,
  ): IModelProvider;
}

export {
  CERTIFIED_PROVIDER_FACTORIES,
  resolveProviderFactory,
} from './generated/provider-factories.generated.js';
export type {
  CertifiedProviderFactoryVendorKey,
} from './generated/provider-factories.generated.js';
