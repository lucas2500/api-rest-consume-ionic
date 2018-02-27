import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	private url: string = 'https://beer.symfonycasts.com.br/v1';
	public index: Array<{}>;

	constructor(public http: Http, public navCtrl: NavController) { 

		this.http.get(this.url + '/beers')
		.map(res => res.json())
		.subscribe(data => {

			console.log(data);

		});

	}
	// listarFunc() {

	// 	this.navCtrl.push(FuncionariosPage);

	// }

}
