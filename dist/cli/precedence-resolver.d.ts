import type { AgentResolutionProvenance } from './types';
export interface AgentLayerInput {
    agentName: string;
    openCodeDirectOverride?: string;
    manualUserPlan?: string[];
    pinnedModel?: string;
    dynamicRecommendation?: string[];
    providerFallbackPolicy?: string[];
    systemDefault: string[];
}
export interface ResolvedAgentLayerResult {
    model: string;
    chain: string[];
    provenance: AgentResolutionProvenance;
}
export declare function resolveAgentWithPrecedence(input: AgentLayerInput): ResolvedAgentLayerResult;
