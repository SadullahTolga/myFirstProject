import { CandidateSchool } from "./candidate-school";

export interface CandidateJobExperienceListResponse {
    success: boolean;
    message: string;
    data: CandidateSchool[];
  }