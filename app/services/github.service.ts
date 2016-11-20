import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = '196293c2c0e3a2b12c5d';
  private client_secret = 'c395c9180037e71a888025cbbed3fc921b96e26a';

  constructor(private __http: Http){
    console.log('Github Service Ready....')
    this.username =  ''
  } 
  getUser(){
    return this.__http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }
  getRepos(){
    return this.__http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res => res.json());
  }
  updateUser(username: string){
    this.username = username;
  }
}