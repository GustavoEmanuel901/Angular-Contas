import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  baseUrl = 'http://localhost:3333/accounts';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'message'
    });
  }

  create(account: Account): Observable<Account> {
    return this.http.post<Account>(this.baseUrl, account)
  }

  readByKey(key: string): Observable<Account[]> {
    const url = `${this.baseUrl}/${key}`;
    return this.http.get<Account[]>(url)
  }

  delete(id: string): Observable<Account> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Account>(url)
  }

  updatePaid(id: string, currentState: boolean): Observable<Account> {
    const url = `${this.baseUrl}/${id}`
    return this.http.put<Account>(url, currentState)
  }
}
