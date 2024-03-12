import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {File} from "../models/File.model";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  getFiles(){
    return this.http.get(`${baseUrl}assets/all`);
  }
  addFile(file:File){
    return this.http.post(`${baseUrl}assets`,file);
  }
}
