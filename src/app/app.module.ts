import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeRepairsComponent } from './containers/home-repairs/home-repairs.component';
import { HomeRepairEntryComponent } from './components/home-repair-entry/home-repair-entry.component';
import { HomeRepairListComponent } from './components/home-repair-list/home-repair-list.component';
import { NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HomeRepairEffects } from './effects/home-repair.effects';
import { ItemExistsValidator } from './validators/itemexists.validator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HomeRepairsComponent,
    HomeRepairEntryComponent,
    HomeRepairListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([HomeRepairEffects]),
    HttpClientModule
  ],
  providers: [
    // { provide: NG_VALIDATORS, useExisting: ItemExistsValidator, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
