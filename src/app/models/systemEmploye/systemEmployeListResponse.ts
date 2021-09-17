import { SystemEmployee } from "./systemEmploye";

export interface SystemEmployeeListResponse {
    success: boolean;
    message: string;
    data: SystemEmployee[];
  }