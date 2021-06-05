import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GameTopic } from '../game-topic.model';
import { FormsModule } from '@angular/forms';
import { getMaxListeners } from 'process';
import { Review } from '../review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  id: string;
  nome: string;
  produtora: string;
  categoria: string;
  reviews: Array<Review>; 


  constructor(private api: ApiService, private route: Router) {

  }

  ngOnInit(): void {
    
  }

  atualizarTopico(score: number, description: string){   
    /*this.reviews.push(new Review(score,description));
    var gamet: GameTopic = new GameTopic(this.nome, this.categoria, this.produtora);
    gamet.reviews = this.reviews;

    this.api.updateGameTopic(this.id,gamet).subscribe(
      game=>{
        console.log(game);
      });
    alert('Avaliação Feita com sucesso!');  
    this.route.navigateByUrl('/');*/
  }

}
