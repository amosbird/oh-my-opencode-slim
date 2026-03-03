import type { ExternalSignalMap } from './types';
export declare function fetchExternalModelSignals(options?: {
    artificialAnalysisApiKey?: string;
    openRouterApiKey?: string;
}): Promise<{
    signals: ExternalSignalMap;
    warnings: string[];
}>;
