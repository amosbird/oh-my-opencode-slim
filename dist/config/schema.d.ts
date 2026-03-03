import { z } from 'zod';
declare const FALLBACK_AGENT_NAMES: readonly ["orchestrator", "oracle", "designer", "explorer", "librarian", "fixer"];
declare const MANUAL_AGENT_NAMES: readonly ["orchestrator", "oracle", "designer", "explorer", "librarian", "fixer"];
export declare const ManualAgentPlanSchema: z.ZodObject<{
    primary: z.ZodString;
    fallback1: z.ZodString;
    fallback2: z.ZodString;
    fallback3: z.ZodString;
}, z.core.$strip>;
export declare const ManualPlanSchema: z.ZodObject<{
    orchestrator: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
    oracle: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
    designer: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
    explorer: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
    librarian: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
    fixer: z.ZodObject<{
        primary: z.ZodString;
        fallback1: z.ZodString;
        fallback2: z.ZodString;
        fallback3: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strict>;
export type ManualAgentName = (typeof MANUAL_AGENT_NAMES)[number];
export type ManualAgentPlan = z.infer<typeof ManualAgentPlanSchema>;
export type ManualPlan = z.infer<typeof ManualPlanSchema>;
export type FallbackAgentName = (typeof FALLBACK_AGENT_NAMES)[number];
export declare const AgentOverrideConfigSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodString;
        variant: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>]>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    variant: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const TmuxLayoutSchema: z.ZodEnum<{
    "main-horizontal": "main-horizontal";
    "main-vertical": "main-vertical";
    tiled: "tiled";
    "even-horizontal": "even-horizontal";
    "even-vertical": "even-vertical";
}>;
export type TmuxLayout = z.infer<typeof TmuxLayoutSchema>;
export declare const TmuxConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    layout: z.ZodDefault<z.ZodEnum<{
        "main-horizontal": "main-horizontal";
        "main-vertical": "main-vertical";
        tiled: "tiled";
        "even-horizontal": "even-horizontal";
        "even-vertical": "even-vertical";
    }>>;
    main_pane_size: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type TmuxConfig = z.infer<typeof TmuxConfigSchema>;
export type AgentOverrideConfig = z.infer<typeof AgentOverrideConfigSchema>;
/** Normalized model entry with optional per-model variant. */
export type ModelEntry = {
    id: string;
    variant?: string;
};
export declare const PresetSchema: z.ZodRecord<z.ZodString, z.ZodObject<{
    model: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        id: z.ZodString;
        variant: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>]>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    variant: z.ZodCatch<z.ZodOptional<z.ZodString>>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export type Preset = z.infer<typeof PresetSchema>;
export declare const McpNameSchema: z.ZodEnum<{
    websearch: "websearch";
    context7: "context7";
    grep_app: "grep_app";
}>;
export type McpName = z.infer<typeof McpNameSchema>;
export declare const BackgroundTaskConfigSchema: z.ZodObject<{
    maxConcurrentStarts: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export type BackgroundTaskConfig = z.infer<typeof BackgroundTaskConfigSchema>;
export declare const FailoverConfigSchema: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    timeoutMs: z.ZodDefault<z.ZodNumber>;
    chains: z.ZodDefault<z.ZodObject<{
        orchestrator: z.ZodOptional<z.ZodArray<z.ZodString>>;
        oracle: z.ZodOptional<z.ZodArray<z.ZodString>>;
        designer: z.ZodOptional<z.ZodArray<z.ZodString>>;
        explorer: z.ZodOptional<z.ZodArray<z.ZodString>>;
        librarian: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fixer: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$catchall<z.ZodArray<z.ZodString>>>>;
}, z.core.$strip>;
export type FailoverConfig = z.infer<typeof FailoverConfigSchema>;
export declare const PluginConfigSchema: z.ZodObject<{
    preset: z.ZodOptional<z.ZodString>;
    scoringEngineVersion: z.ZodOptional<z.ZodEnum<{
        v1: "v1";
        "v2-shadow": "v2-shadow";
        v2: "v2";
    }>>;
    balanceProviderUsage: z.ZodOptional<z.ZodBoolean>;
    manualPlan: z.ZodOptional<z.ZodObject<{
        orchestrator: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
        oracle: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
        designer: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
        explorer: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
        librarian: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
        fixer: z.ZodObject<{
            primary: z.ZodString;
            fallback1: z.ZodString;
            fallback2: z.ZodString;
            fallback3: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strict>>;
    presets: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodObject<{
        model: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodString;
            variant: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>]>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        variant: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>>;
    agents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        model: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodString;
            variant: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>>]>>;
        temperature: z.ZodOptional<z.ZodNumber>;
        variant: z.ZodCatch<z.ZodOptional<z.ZodString>>;
        skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    disabled_mcps: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tmux: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        layout: z.ZodDefault<z.ZodEnum<{
            "main-horizontal": "main-horizontal";
            "main-vertical": "main-vertical";
            tiled: "tiled";
            "even-horizontal": "even-horizontal";
            "even-vertical": "even-vertical";
        }>>;
        main_pane_size: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    background: z.ZodOptional<z.ZodObject<{
        maxConcurrentStarts: z.ZodDefault<z.ZodNumber>;
    }, z.core.$strip>>;
    fallback: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        timeoutMs: z.ZodDefault<z.ZodNumber>;
        chains: z.ZodDefault<z.ZodObject<{
            orchestrator: z.ZodOptional<z.ZodArray<z.ZodString>>;
            oracle: z.ZodOptional<z.ZodArray<z.ZodString>>;
            designer: z.ZodOptional<z.ZodArray<z.ZodString>>;
            explorer: z.ZodOptional<z.ZodArray<z.ZodString>>;
            librarian: z.ZodOptional<z.ZodArray<z.ZodString>>;
            fixer: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$catchall<z.ZodArray<z.ZodString>>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PluginConfig = z.infer<typeof PluginConfigSchema>;
export type { AgentName } from './constants';
