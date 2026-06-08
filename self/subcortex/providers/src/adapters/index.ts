export {
  AdapterCapabilitiesSchema,
  defineProviderAdapter,
  ProviderAdapterModuleSchema,
} from './types.js';
export type {
  AdapterCapabilities,
  AdapterFormatInput,
  AdapterFormattedRequest,
  AdapterRegistry,
  ProviderAdapter,
  ProviderAdapterCreateOptions,
  ProviderAdapterModule,
} from './types.js';

export {
  detectAndStripNarration,
  parseModelOutput,
} from './output.js';
export type { ParsedModelOutput } from './output.js';

export {
  anthropicAdapter,
  createAnthropicAdapter,
} from './anthropic-adapter.js';
export {
  chatCompletionsAdapter,
  createChatCompletionsAdapter,
} from './chat-completions-adapter.js';
export {
  createOllamaAdapter,
  isToolCapableModel,
  ollamaAdapter,
} from './ollama-adapter.js';
export {
  createTextAdapter,
  textAdapter,
} from './text-adapter.js';
export {
  ADAPTER_MODULES,
  ADAPTER_REGISTRY,
  buildAdapterRegistry,
  normalizeAdapterKey,
  resolveAdapter,
  resolveAdapterKeyFromConfig,
  resolveAdapterWithLog,
  resolveProviderTypeFromConfig,
} from './registry.js';
export type { AdapterRegistryInstance } from './registry.js';
