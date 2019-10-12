import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import * as GetSheetDone from 'get-sheet-done';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  loading: boolean
  constructor() {
    this.loading = true;
  }

  getAboutData(): Observable<string> {
    this.loading = true;
    return from(GetSheetDone.raw("1IPqAVX0sBs9v-TJH7rO2hX5Usn45lzelX7C5fnaJLTo")
      .then(
        res => {
          console.log(res)
          return res.data[0][0];
        },
        msg => {
          console.log(msg);
        }
      ));
  }

}
