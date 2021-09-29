import { CandidateSkill } from "./candidate-skill";

export interface CandidateJobExperienceListResponse {
    success: boolean;
    message: string;
    data: CandidateSkill[];
  }