import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GameTopic } from '../game-topic.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nome: string = '';
  produtora: string = '';

  constructor(private api: ApiService, private router: Router) { 
  }

  ngOnInit(): void {    
  }

  salvarNovoTopico(inputGenero: any){
    var gameT: GameTopic = new GameTopic(this.nome, inputGenero.value, this.produtora);
    this.api.addGameTopic(gameT).subscribe(game=>console.log(game));
    alert('Tópico de Jogo criado com sucesso!');  
    this.router.navigateByUrl('/');

  }

}
