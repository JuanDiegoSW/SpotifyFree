import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
var cliente_id = '9312adbe2e424f328ba1415090d11d62';
var cliente_secret = 'b773c9f559164c1dac3548a649db56ec';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
    'Authorization': 'Bearer BQBqWe7tqdGkIRegD8f6ptrON8k6nVC3Z455zuxI96mP4WlqZq8KpXmCJdLmheAkCIg1aohOgCaNY17LALs'
    
          });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));

  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`);
                // .pipe( map( data => data['artists'].items));

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }

}
