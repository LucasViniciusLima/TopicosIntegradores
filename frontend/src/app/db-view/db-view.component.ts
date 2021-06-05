import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GameTopic } from '../game-topic.model';

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.css']
})
export class DbViewComponent implements OnInit {

  allItens: Array<GameTopic>;

  constructor(private api: ApiService, private router: Router) { 
    this.api.getAllGamesTopics().subscribe(list=>this.allItens = list);
  }

  ngOnInit(): void {
  }

  editItem(id: string){
    this.router.navigateByUrl("/edit-topic", {state:{ id: id }});
  }

}
