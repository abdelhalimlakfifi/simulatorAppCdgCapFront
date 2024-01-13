import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class LogService {
    private apiUrl = "http://localhost:8080/api/v1/";
    constructor(private http:HttpClient) {}


    onSuccess() {
        return this.http.get(`${this.apiUrl}success`).subscribe(
            (response) => {
              console.log('Success response:', response);
            },
            (error) => {
              console.log(error);
            }
          );
    }
}
