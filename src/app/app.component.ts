import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Subscription } from 'rxjs';
import {APIService, Restaurant} from "./API.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'realtime';

  createForm: FormGroup;

  private subscription: Subscription | null = null;

  restaurants: Array<Restaurant> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name:        ['', Validators.required],
      description: ['', Validators.required],
      city:        ['', Validators.required],
    });
  }

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListRestaurants().then((event) => {
      this.restaurants = event.items as Restaurant[];
    });

    this.subscription = <Subscription>(
      this.api.OnCreateRestaurantListener.subscribe((event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.restaurants = [newRestaurant, ...this.restaurants];
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log("item created!");
        this.createForm.reset();
      })
      .catch((e) => {
        console.log("error creating restaurant...", e);
      });
  }
}
