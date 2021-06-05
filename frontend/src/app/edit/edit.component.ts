import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { GameTopic } from '../game-topic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: string;
  nome: string = '';
  produtora: string = '';
  categoria: string;

  constructor(private api: ApiService, private router: Router) { 
    this.id = this.router.getCurrentNavigation().extras.state.id;

    this.api.getOneGameTopic(this.id).subscribe(topic=>{
      this.nome = topic.name;
      this.produtora = topic.producer;
      this.categoria = topic.category;
    })
  }

  ngOnInit(): void {    
  }

  atualizarTopico(inputGenero: any){
    var gameT: GameTopic = new GameTopic(this.nome, inputGenero.value, this.produtora);
    this.api.updateGameTopic(this.id,gameT).subscribe(game=>console.log(game));
    alert('Tópico de Jogo atualizado com sucesso!');  
    this.router.navigateByUrl('/');
  }

  excluirItem(){
    this.api.deleteGameTopic(this.id).subscribe(game=>console.log(game));
    alert('Tópico DELETADO!');  
    this.router.navigateByUrl('/');
  }

  

}
