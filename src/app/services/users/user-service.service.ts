import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl=`https://dummyjson.com/`
  constructor(private _httpClient:HttpClient) { }

  getAllUsers():Observable<any>{
    return this._httpClient.get(`${this.baseUrl}users`)
  }
  addUser(data:any):Observable<any>{
   return this._httpClient.post(`${this.baseUrl}user/add`,data)
  }
    updateUser(data:any,id:number):Observable<any>{
   return this._httpClient.put(`${this.baseUrl}user/${id}`,data)
  }
    getUserById(id:number):Observable<any>{
   return this._httpClient.get(`${this.baseUrl}user/${id}`)
  }
    DeleteUserById(id:number):Observable<any>{
   return this._httpClient.delete(`${this.baseUrl}user/${id}`)
  }


  
}
