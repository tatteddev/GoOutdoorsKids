import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCircleChevronDown, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { getBaseUrl } from 'src/main';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  customer = <CustomerObject>{};
  faCircleChevronDown = faCircleChevronDown;
  faDollarSign = faDollarSign;
  baseUrl = "";
  titles = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    http.get<CustomerObject>(baseUrl + 'customer').subscribe(result => {
      this.customer.name = result.name;
      this.customer.title = result.title;
    }, error => console.error(error));
  }

  public getTitles() {
    this.http.get<[]>(this.baseUrl + 'customer/gettitles').subscribe(result => {
      this.titles = result;
    })
  }

  public setTitle(title: string) {
    this.customer = { ...this.customer, title: title };
  }
}

interface CustomerObject {
  name: string;
  title: string;
}