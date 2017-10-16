// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDl7YzHvZB09rNqhLgm2ITe2dHTzrCelpo',
    authDomain: 'todomvc-18a22.firebaseapp.com',
    databaseURL: 'https://todomvc-18a22.firebaseio.com',
    projectId: 'todomvc-18a22',
    storageBucket: 'todomvc-18a22.appspot.com',
    messagingSenderId: '745485400260'
  }
};
