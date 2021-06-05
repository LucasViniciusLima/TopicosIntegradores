import { Review } from './review.model';

export class GameTopic {
    _id: string;
    name: string;
    category: string;
    producer: string;
    reviews: Array<Review>

    constructor(nome: string, categoria: string, produtora: string) {
        this.name = nome;
        this.category = categoria;
        this.producer = produtora;            
    }
    
}