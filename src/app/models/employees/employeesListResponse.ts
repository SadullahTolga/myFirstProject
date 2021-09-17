import { Employer } from "./employees";


export interface EmployerListResponse {
    success:boolean;
    message:string;
    data: Employer[];
}