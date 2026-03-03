import type { AgentConfig } from '@opencode-ai/sdk/v2';
export interface AgentDefinition {
    name: string;
    description?: string;
    config: AgentConfig;
    /** Priority-ordered model entries for runtime fallback resolution. */
    _modelArray?: Array<{
        id: string;
        variant?: string;
    }>;
}
export declare function createOrchestratorAgent(model?: string | Array<string | {
    id: string;
    variant?: string;
}>, customPrompt?: string, customAppendPrompt?: string): AgentDefinition;
