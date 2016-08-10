import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Artist } from './../../models/Artist';

@Component({
	 moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class SearchComponent  { 

	private searchStr: string;

	private artists : Artist[];

	constructor(private _spotifyService:SpotifyService) {

	}

	searchMusic() {
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe( result => {
				this.artists = result.artists.items;
			})
	}
}
