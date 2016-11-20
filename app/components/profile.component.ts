import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: `profile.component.html`
})
export class ProfileComponent {
  user:any;
  repos:any[];
  username: string; 

  constructor(private __githubservice: GithubService){
    this.user = false;
  }
  searchUser(){
    this.__githubservice.updateUser(this.username);

    this.__githubservice.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    })
    this.__githubservice.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
  }
 }