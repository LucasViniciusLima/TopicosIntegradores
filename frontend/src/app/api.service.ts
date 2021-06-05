import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { GameTopic } from './game-topic.model';

const apiUrl = 'http://localhost:3333/games';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getAllGamesTopics(): Observable<GameTopic[]>{
    return this.http.get<GameTopic[]>(apiUrl+'/getAll').pipe(
      tap(gameTopic => console.log('todos games Topics lidos')),
      catchError(this.handleError('getAllGamestopics',[]))
    );
  }
  
  getOneGameTopic(id: string): Observable<GameTopic> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<GameTopic>(url).pipe(
      tap(_ => console.log(`leu gameT id=${id}`)),
      catchError(this.handleError<any>(`getOneGameTopic id=${id}`))
    );
  }
  
  addGameTopic (gameTopic: GameTopic): Observable<GameTopic> {
    return this.http.post<GameTopic>(apiUrl+'/', gameTopic).pipe(
      tap((game: GameTopic) => console.log(`adicionou o gameTopic com w/ id=${game._id}`)),
      catchError(this.handleError<any>('gameTopic'))
    );
  }

  updateGameTopic(id, gameTopic): Observable<GameTopic> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, gameTopic).pipe(
      tap(_ => console.log(`atualiza gameTopic com id=${id}`)),
      catchError(this.handleError<any>('updateGameTopic'))
    );
  }

  deleteGameTopic (id:string): Observable<GameTopic> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<GameTopic>(url).pipe(
      tap(_ => console.log(`remove gameTopic id=${id}`)),
      catchError(this.handleError<any>('deleteGameTopic'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
