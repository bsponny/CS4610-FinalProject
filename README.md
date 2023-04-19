# CS 4610 Final Project

## Get Started
### Install the dependencies

With yarn
```bash
cd recipieServer
yarn
```

With npm
```bash
npm install
```

## Development
### .env
Copy the contents of `.env.example` into a new file called `.env`.

### Database
Create the database by running
```bash
yarn db:migrate
```
You will need the re-run this command anytime you make changes to the schema file.

### Running thhe server
Start the server by running:

With yarn
```bash
yarn dev
```

With npm
```bash
npm run dev
```

## Production
Build the project by running

With yarn
```bash
yarn build
```

With npm
```bash
npm run build
```
