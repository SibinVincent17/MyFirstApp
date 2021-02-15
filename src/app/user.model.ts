import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface User {
    idToken: string;
    email: string;
    refreshToken: string;
    expiry: Date;
    localId: string;
  }