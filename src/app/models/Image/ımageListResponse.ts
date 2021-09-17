import { Image } from "./Image";


export interface ImageListResponse {
    success:boolean;
    message:string;
    data: Image[];
}