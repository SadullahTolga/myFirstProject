import { CandidateJobExperience } from "../candidate-job-experience/candidate-job-experience";
import { Cv } from "../cv/cv";
import { Image } from "../Image/Image";
import { JobAdvertisement } from "../jobAdvertisements/jobAdvertisements";
import { Language } from "../language/language";
import { School } from "../school/school";
import { Skill } from "../skill/skill";

export interface Candidate{
    id:number
    email:string
    password:string
    profileImgId:string
    images:Image[]
    createdAt:string
    lastModifiedAt:string
    firstName:string
    lastName:string
    nationalityId:string
    birthYear:number
    githubAccount:string
    linkedinAccount:string
    cvs:Cv[]
    candidateJobExperiences:CandidateJobExperience[]
    candidateLanguages:Language[]
    candidateSchools:School[]
    candidateSkills:Skill[]
    favoriteJobAdvertisements:JobAdvertisement[]
    
}