import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Album } from './../../models/Album';

@Component({
	 moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AlbumComponent implements OnInit { 

	id: string;
	album: Album;

	constructor(private _spotifyService: SpotifyService,
					private _route: ActivatedRoute) {

	}

	ngOnInit() {
		this._route.params
			.map(params => params['id'])
			.subscribe(id => {
				this._spotifyService.getAlbum(id)
					.subscribe(album => {
						this.album = album;
					})
			})
	}
}