import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "bulletin-board-4dcbc", appId: "1:578318851180:web:7b4ff578ab4e48bbf68c49", storageBucket: "bulletin-board-4dcbc.firebasestorage.app", apiKey: "AIzaSyBUYeV5lWzWPKJAdscLARi93uYifu9g0Bk", authDomain: "bulletin-board-4dcbc.firebaseapp.com", messagingSenderId: "578318851180" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
