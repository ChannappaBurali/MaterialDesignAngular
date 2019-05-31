import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthoServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) 
  {
     
   const headers = { headers: new HttpHeaders({ 'Content-Type': 'text/json' }) };
     
   return this.http.post<any>(`http://localhost:60120/api/user/ValidateUser/` + username + '/' + password, headers)
   
         .pipe(map((token) => {
     
         // login successful if there's a jwt token in the response
     
         console.log(token);
      
        if (token) {
             
     // store user details and jwt token in local storage to keep user logged in between page refreshes
               
   localStorage.setItem('currentUser', JSON.stringify(token));
           
   }
         
     return token;
  
        }));
  
  }
  

}
