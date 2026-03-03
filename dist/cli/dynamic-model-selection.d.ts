import type { DiscoveredModel, DynamicModelPlan, ExternalSignalMap, InstallConfig, ScoringEngineVersion } from './types';
declare const AGENTS: readonly ["orchestrator", "oracle", "designer", "explorer", "librarian", "fixer"];
type AgentName = (typeof AGENTS)[number];
export type V1RankedScore = {
    model: string;
    totalScore: number;
    baseScore: number;
    externalSignalBoost: number;
};
export declare function rankModelsV1WithBreakdown(models: DiscoveredModel[], agent: AgentName, externalSignals?: ExternalSignalMap): V1RankedScore[];
export declare function buildDynamicModelPlan(catalog: DiscoveredModel[], config: InstallConfig, externalSignals?: ExternalSignalMap, options?: {
    scoringEngineVersion?: ScoringEngineVersion;
}): DynamicModelPlan | null;
export {};
