import { FirebaseApp, FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app';
import config from 'config';
import invariant from 'tiny-invariant';
import { getAuth } from 'firebase-admin/auth';

const firebaseConfig: FirebaseOptions = config.get('Firebase.config')

// Make sure all config are set or throw an error
invariant(typeof firebaseConfig.authDomain === 'string' && firebaseConfig.authDomain.length !== 0)
invariant(typeof firebaseConfig.projectId === 'string' && firebaseConfig.projectId.length !== 0)
invariant(typeof firebaseConfig.storageBucket === 'string' && firebaseConfig.storageBucket.length !== 0)
invariant(typeof firebaseConfig.messagingSenderId === 'string' && firebaseConfig.messagingSenderId.length !== 0)
invariant(typeof firebaseConfig.appId === 'string' && firebaseConfig.appId.length !== 0)
invariant(typeof firebaseConfig.measurementId === 'string' && firebaseConfig.measurementId.length !== 0)

const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export { app, auth };