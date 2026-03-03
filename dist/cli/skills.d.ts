/**
 * A recommended skill to install via `npx skills add`.
 */
export interface RecommendedSkill {
    /** Human-readable name for prompts */
    name: string;
    /** GitHub repo URL for `npx skills add` */
    repo: string;
    /** Skill name within the repo (--skill flag) */
    skillName: string;
    /** List of agents that should auto-allow this skill */
    allowedAgents: string[];
    /** Description shown to user during install */
    description: string;
    /** Optional commands to run after the skill is added */
    postInstallCommands?: string[];
}
/**
 * A skill that is managed externally (e.g. user-installed) and needs
 * permission grants but is NOT installed by this plugin's CLI.
 */
export interface PermissionOnlySkill {
    /** Skill name — must match the name OpenCode uses for permission checks */
    name: string;
    /** List of agents that should auto-allow this skill */
    allowedAgents: string[];
    /** Human-readable description (for documentation only) */
    description: string;
}
/**
 * List of recommended skills.
 * Add new skills here to include them in the installation flow.
 */
export declare const RECOMMENDED_SKILLS: RecommendedSkill[];
/**
 * Skills managed externally (not installed by this plugin's CLI).
 * Entries here only affect agent permission grants — nothing is installed.
 */
export declare const PERMISSION_ONLY_SKILLS: PermissionOnlySkill[];
/**
 * Install a skill using `npx skills add`.
 * @param skill - The skill to install
 * @returns True if installation succeeded, false otherwise
 */
export declare function installSkill(skill: RecommendedSkill): boolean;
/**
 * Get permission presets for a specific agent based on recommended skills.
 * @param agentName - The name of the agent
 * @param skillList - Optional explicit list of skills to allow (overrides recommendations)
 * @returns Permission rules for the skill permission type
 */
export declare function getSkillPermissionsForAgent(agentName: string, skillList?: string[]): Record<string, 'allow' | 'ask' | 'deny'>;
