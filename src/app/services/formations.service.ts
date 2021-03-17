import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { baseUrl } from '../shared/baseUrl';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Formation } from '../shared/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }
  getFormations(): Observable<Array<Formation>>{
    return this.http.get< Array<Formation> >(baseUrl + 'formations')
      .pipe(catchError(this.processHttpmsgService.handleError));
  }
}
