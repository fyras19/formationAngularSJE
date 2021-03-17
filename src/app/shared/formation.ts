import { Comment } from "./comments";

export class Formation {
    id: string;
    name: string;
    image: string;
    category: string;
    online: boolean;
    price: number;
    description: string;
    comments: Array<Comment>;
}