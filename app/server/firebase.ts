import config from 'config';
import invariant from 'tiny-invariant';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp , getApp, getApps, AppOptions, applicationDefault } from 'firebase-admin/app'

const firebaseConfig: AppOptions = config.get('Firebase.config');
const { projectId, databaseURL } = firebaseConfig;

// Make sure all config are set or throw an error
invariant(typeof projectId === 'string' && projectId.length !== 0)
invariant(typeof databaseURL === 'string' && databaseURL.length !== 0)

let app = getApps.length > 0 ? getApp() : undefined;
if (!app && process.env.NODE_ENV === 'development') {
    app = initializeApp({ projectId, databaseURL })
} else if (!app && process.env.NODE_ENV === 'production') {
    app = initializeApp({ credential: applicationDefault()})
}

export { app };