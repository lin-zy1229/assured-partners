import { Component, OnInit } from '@angular/core';
import { GlobalsService, MainMenuEnum } from '../../../../services/globals.service';

@Component({
	selector: 'app-home-mapping-it-out',
	templateUrl: './home-mapping-it-out.component.html',
	styleUrls: ['./home-mapping-it-out.component.css',
		'../../../../common/common_styles.css'],
})
export class HomeMappingItOutComponent implements OnInit {

	constructor(private globals: GlobalsService) {
		GlobalsService.setSelectedMainMenu(MainMenuEnum.MappingItOut);
	}

	ngOnInit() {
	}

}
