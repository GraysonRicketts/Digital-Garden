# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

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

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

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