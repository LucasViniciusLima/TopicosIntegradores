export class Review {
    _id: string;
    score: number;
    description: string;

    constructor(score: number, description: string){
        this.score = score;
        this.description = description;
    }
}