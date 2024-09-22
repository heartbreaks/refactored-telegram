## Installation to run in your local environment

Be sure to have Node.js and Postgresql / psql terminal installed before continuing. ~ The project has recently migrated to typescript so you can also run:

```
npm i -g typescript
```


Inside your .env in the root directory (there is also one for client but we will get to that later) file include:

```env
NODE_ENV = Development
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY = your_access_key_here
UNPLASH_SECRET_KEY = your_secret_key_here
NEXT_PUBLIC_SUPABASE_URL= your_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon_key
```

```sh
  npm install
```

Start the server - server will run on port 3000

```sh
  npm run dev
```
open port 3000
```sh
  open localhost:3000
```

