import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  constructor(private http: HttpClient) { }

  async doSomething(zavatra:any){
    console.log(zavatra)
    return await this.http.post('http://localhost:3000/login',zavatra).pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }
}
