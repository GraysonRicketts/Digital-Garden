## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`



## Tech used
* Remix
* Styling
  * https://github.com/necolas/normalize.css
  * http://getskeleton.com/
* Prisma


## Local DB setup
1. Install postgres
2. Start `sudo service postgresql start`
3. To create
   1. Connect `sudo -u postgres psql`
   2. Setup DB
```sql
CREATE USER server_user;
ALTER USER server_user WITH PASSWORD;

CREATE DATABASE digital_garden;
GRANT CONNECT ON DATABASE digital_garden TO server_user;
GRANT USAGE ON SCHEMA public TO server_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO server_user;

SET TIMEZONE='GMT';
```
   3. Make DB changes `yarn prisma migrate dev --name <name>`

## Migrations
`yarn prisma migrate dev --name <name>`


## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
yarn add -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
yarn add -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```


## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
