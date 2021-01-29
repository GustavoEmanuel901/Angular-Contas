import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = {
    title: '',
    value: '0.00',
    date: new Date(),
    paid: false
  }

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    const date = String(this.formData.date)
    const splitDate = date.split(" ")

    const account = {
      title: this.formData.title,
      value: Number(this.formData.value),
      pay_day: Number(splitDate[2]),
      payment_month: splitDate[1].toUpperCase(),
      year: Number(splitDate[3]),
      paid: this.formData.paid
    }

    this.accountService.create(account).subscribe(() => {
      this.accountService.showMessage("Conta Criada com Sucesso")
      this.clear()
    })
  }

  clear(): void {
    this.formData.title = ''
    this.formData.value= '0.00',
    this.formData.paid = false,
    this.formData.date = new Date()
  }

}
