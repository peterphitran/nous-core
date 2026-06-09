import { OllamaProvider } from '../../ollama-provider.js';
import type { ProviderFactoryModule } from '../../provider-factories.js';

export const providerFactory = {
  vendorKey: 'ollama',
  create(config) {
    return new OllamaProvider(config);
  },
} as const satisfies ProviderFactoryModule;
