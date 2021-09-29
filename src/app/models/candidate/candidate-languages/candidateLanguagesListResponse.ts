import { CandidateLanguage } from "./candidate-languages";

export interface CandidateJobExperienceListResponse {
    success: boolean;
    message: string;
    data: CandidateLanguage[];
  }