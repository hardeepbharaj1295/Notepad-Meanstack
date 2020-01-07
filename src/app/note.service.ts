import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Note } from './note';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class NoteService {

  /**
   * Select, Insert, Update, Delete
   * connection url
   */
  private _getUrl = "/api/note";
  private _postUrl = "/api/note";
  private _putUrl = "/api/note/";
  private _deleteUrl = "/api/note/";

  constructor(private _http: Http) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
};
  /**
   * method to get data from the db
   */
  getNotes(): Observable<any> {
    return this._http.get(this._getUrl).pipe(
      map((response: Response) => response.json()),
      catchError(this.handleError));
}

  /**
   * MEthod to insert data into db
   */
  addNote(note : Note){
      let headers = new Headers({ 'Content-Type' : 'application/json'});
      let options = new RequestOptions({ headers : headers});
      return this._http.post(this._postUrl,JSON.stringify(note), options)
      .pipe(
        map((response: Response) => response.json()),
        catchError(this.handleError));
  }

  /**
   * Method to update data into db
   */
  updateNote(note : Note){
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this._http.put(this._putUrl + note._id,JSON.stringify(note), options)
    .pipe(
      map((response: Response) => response.json()),
      catchError(this.handleError));
  }

  /**
   * Method to delete data into db
   */
  deleteNote(note : Note){
    return this._http.delete(this._deleteUrl + note._id)
    .pipe(
      map((response: Response) => response.json()),
      catchError(this.handleError));
  }
}
