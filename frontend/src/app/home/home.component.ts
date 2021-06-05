import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { GameTopic } from '../game-topic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesTopics: Array<GameTopic>;

  constructor(private api: ApiService, private router: Router) {
    this.api.getAllGamesTopics().subscribe(games => this.gamesTopics = games);
  }

  ngOnInit(): void {
  }

  mediaScore(id: number) {
    var totalscore = 0;

    for (let i = 0; i < this.gamesTopics[id].reviews.length; i++) {
      totalscore += this.gamesTopics[id].reviews[i].score;
    }
    return totalscore / this.gamesTopics[id].reviews.length;
  }

  editItem(id: string){
    this.router.navigateByUrl("/edit-topic", {state:{ id: id }});
  }

  avaliarItem(id: string){
    this.router.navigateByUrl("/review", {state:{ id: id }});
  }

}
