import type { DiscoveredModel, ExternalSignalMap } from '../types';
import type { FeatureVector, ScoringAgentName } from './types';
export declare function extractFeatureVector(model: DiscoveredModel, agent: ScoringAgentName, externalSignals?: ExternalSignalMap): FeatureVector;
