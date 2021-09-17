import { Image } from "../Image/Image";

export interface SystemEmployee {
    id: number;
    email: string;
    profileImgId?: any;
    images: Image[];
    createdAt: Date;
    lastModifiedAt?: any;
    firstName: string;
    lastName: string;
}