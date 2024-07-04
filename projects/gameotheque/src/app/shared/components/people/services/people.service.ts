import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Persons } from '../models';
import { environment } from '../../../../../environments/environment';

type OnePeopleApiReturn = {
 
  name: string,
  gender: string
}

type PeopleApiReturn = {
  results: OnePeopleApiReturn[]
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly http = inject(HttpClient)

  getAll(pageIndex = 1): Observable<Persons> {
  // TODO: var env
    return this.http.get<PeopleApiReturn>(environment.apis.people).pipe(
      map(returnApi => {
        return returnApi.results.map(item => ({name: `${item.gender}. ${item.name}`}))
      })
    )
  }
}
