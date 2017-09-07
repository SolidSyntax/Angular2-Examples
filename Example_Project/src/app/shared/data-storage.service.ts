import {Injectable} from '@angular/core';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    // Adding the authentication token is moved to an interceptor (auth.interceptor.ts)
    // const token = this.authService.getToken();


    // Default with HttpClient
    // return this.httpClient.put(
    //   // `${environment.firebase_database}/recipes.json?auth=${token}`,
    //   `${environment.firebase_database}/recipes.json`,
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: 'events', // Return HttpEvent instead of the default Response
    //     headers: new HttpHeaders().set('key', 'value'), // Set or append custom headers
    //     params: new HttpParams().set('auth', token) // Query parameters
    //   });

    // With progress report
    const req = new HttpRequest(
      'PUT',
      `${environment.firebase_database}/recipes.json`,
      this.recipeService.getRecipes(),
      { // Options
        reportProgress: true, // Report on the progress of the request
        // params: new HttpParams().set('auth', token)
      });

    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();

    // Get with defaults
    this.httpClient.get<Recipe[]>(`${environment.firebase_database}/recipes.json`) // ?auth=${token}`)
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )

      // Get with custom datatype
      // this.httpClient.get(`${environment.firebase_database}/recipes.json?auth=${token}`,
      //   {
      //     observe: 'response', // return the entire response, not just the body
      //     responseType: 'text'
      //   })
      //   .map(
      //     (response) => {
      //       console.log(response);
      //       return [];
      //     }
      //   )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
