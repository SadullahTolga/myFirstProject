import { Department } from "./departmen";

export interface DepartmentListResponse {
    success:boolean;
    message:string;
    data: Department[];
}