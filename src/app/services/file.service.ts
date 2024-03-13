import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {FileAsset} from "../models/File.model";
import {Observable} from "rxjs";
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }

  getFiles(){
    return this.http.get(`${baseUrl}assets/all`);
  }
  addFile(file:FileAsset): Observable<any>{

    return this.http.post(`${baseUrl}assets`,file);
  }
  uploadFile(file: File,assetId:number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file,file.name);
    return this.http.post(`${baseUrl}assets/uploadFile/${assetId}`, formData);

  }
}
