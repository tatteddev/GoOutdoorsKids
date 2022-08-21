import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCircleChevronDown, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {
  customer = <CustomerObject>{};
  faCircleChevronDown = faCircleChevronDown;
  faDollarSign = faDollarSign;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<CustomerObject>(baseUrl + 'customer').subscribe(result => {
      this.customer.name = result.name;
      this.customer.title = result.title;
    }, error => console.error(error));
  }

  public getTitles() {
    this.http.get
  }
}

interface CustomerObject {
  name: string;
  title: string;
}