import { Comment } from "./comment.model";

export class CommentList {
    count: number;
    results: Comment[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => {
            return new Comment(x);
        }) || [];
    }
}