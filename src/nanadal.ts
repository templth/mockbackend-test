import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NanaDal {
	constructor(private http: Http) {

	}

	getItems() {
		return this.http.get('http://localhost/service/126').map(res => res.json());
	}
}