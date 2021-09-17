import { Image } from "../Image/Image";
import { JobAdvertisement } from "../jobAdvertisements/jobAdvertisements";
import { EmployerUpdate } from "./emplooyesUptade";

export interface Employer{
    id: number;
    email: string;
    profileImgId?: any;
    images: Image[];
    createdAt: Date;
    lastModifiedAt?: any;
    companyName: string;
    website: string;
    phoneNumber: string;
    employerUpdate: EmployerUpdate;
    verified: boolean;
    rejected?: any;
    updateVerified?: any;
    jobAdvertisements: JobAdvertisement[];
}