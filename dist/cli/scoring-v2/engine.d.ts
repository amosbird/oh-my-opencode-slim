import type { DiscoveredModel, ExternalSignalMap } from '../types';
import type { ScoredCandidate, ScoringAgentName } from './types';
export declare function scoreCandidateV2(model: DiscoveredModel, agent: ScoringAgentName, externalSignals?: ExternalSignalMap): ScoredCandidate;
export declare function rankModelsV2(models: DiscoveredModel[], agent: ScoringAgentName, externalSignals?: ExternalSignalMap): ScoredCandidate[];
