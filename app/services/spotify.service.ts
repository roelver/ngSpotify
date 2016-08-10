import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SpotifyService {

	constructor(private _http:Http) {

	}

	searchMusic(str:string, type:string='artist') {
		const searchUrl = 'https://api.spotify.com/v1/search?market=US&offset=0&limit=20&type='+ type +'&q='+str;
		return this._http.get(searchUrl)
		   .map(res => res.json());		
	}

	getArtist(id:string) {
		const artistUrl:string = 'https://api.spotify.com/v1/artists/'+id;
		return this._http.get(artistUrl)
		   .map(res => res.json());		
	}

	getAlbums(artistId:string) {
		const albumUrl:string = 'https://api.spotify.com/v1/artists/'+artistId+'/albums?market=US';
		return this._http.get(albumUrl)
		   .map(res => res.json());
	}

	getAlbum(albumId:string) {
		const albumUrl:string = 'https://api.spotify.com/v1/albums/'+albumId;
		return this._http.get(albumUrl)
		   .map(res => res.json());
	}
}
