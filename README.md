# MEBID Medical healthcare Backend 🚑

It is a backend application buit with postgres and express focused on the provision of services to MEBID a platform of medical services where a user can purchase pharmaceutical products and schedule appointments in different areas of medicine, on the other hand, provide an administration interface to facilitate the management of the different services of the application.

### ENDPOINTS

Our endpoint documentation is located in a file within a folder called 'docs' at the root of the application. To access this documentation, please import the file into a Postman project and set the port of your application as a variable in Postman called 'mebid'. This will give you access to all the available endpoints.

### Tech

Mebid use a number of technologies to work properly:

- [Node](https://nodejs.org/es) - is an open-source, cross-platform JavaScript runtime environment.
- [Express](https://expressjs.com/) - fast node.js network app framework
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Prisma](https://www.prisma.io/) - Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.
- [Postgres](https://www.postgresql.org/) - PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development

## Installation

MEBID requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
pnpm i
pnpm run dev
```

For run seeders and develop with an initial data:

```sh
pnpm run prisma:migrate
pnpm run prisma:seeders
```

For reset your database:

```sh
pnpm run prisma:reset
```

### Environment Variables

We provide a file called '.env.example' at the root of the project. Please read this file and fill it with your credentials before running the application.

### DEVELOPERS

[Jean Carlo Vittory Jiménez Laguna](https://github.com/JeanVittory) & [Sebastian Alvarez Henao](https://github.com/Salvarez0212)
