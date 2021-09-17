import { JobAdvertisement } from "./jobAdvertisements";

export interface JobAdvertisementListResponse {
    success:boolean;
    message:string;
    data: JobAdvertisement[];
}