import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export enum MainMenuEnum { BlueprintProcess, LeverageRelation, MappingItOut, ProactiveService, Prospecting, TheTruth }

export class GlobalsService {
	static setSelectedMainMenu(mainmenu: MainMenuEnum) {
		GlobalsService.selectedMainMenu = mainmenu;
	}

	getSelectedMainMenuString(): string {
		switch (GlobalsService.selectedMainMenu) {
			case MainMenuEnum.BlueprintProcess:
				return "Blueprint Process";
			case MainMenuEnum.LeverageRelation:
				return "Leverage Relation";
			case MainMenuEnum.MappingItOut:
				return "Mapping It Out";
			case MainMenuEnum.ProactiveService:
				return "Proactive Service";
			case MainMenuEnum.Prospecting:
				return "Prospecting";
			case MainMenuEnum.TheTruth:
				return " The Truth";
			default:
				return "EMPTY";
		}
	}

	static selectedMainMenu: MainMenuEnum = MainMenuEnum.BlueprintProcess;

	constructor() { }
}



