import { AnthropicProvider } from './implementation.js';
import type { ProviderFactoryModule } from '../../provider-factories.js';

export const providerFactory = {
  vendorKey: 'anthropic',
  create(config, options) {
    return new AnthropicProvider(config, { apiKey: options?.apiKey });
  },
} as const satisfies ProviderFactoryModule;
