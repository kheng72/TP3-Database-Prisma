# PostgreSQL with Prisma Demo
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/kheng72/TP3-Database-Prisma.git)

This repository serves as a starter project demonstrating how to integrate Prisma ORM with a PostgreSQL database in a Node.js application. The database is containerized using Docker Compose for easy setup and teardown.

## Features

-   **Prisma ORM**: Modern database toolkit for TypeScript and Node.js.
-   **PostgreSQL**: A powerful, open-source object-relational database system.
-   **Docker**: The PostgreSQL instance is managed via Docker Compose, ensuring a consistent development environment.
-   **Connection Pooling**: Utilizes `@prisma/adapter-pg` for efficient database connection management.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [Docker](https://www.docker.com/get-started/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/kheng72/tp3-database-prisma.git
cd tp3-database-prisma
```

### 2. Configure Environment Variables

Create a `.env` file by copying the example file. This file will hold your database connection string.

```bash
cp .env.example .env
```

The default `DATABASE_URL` in `.env.example` is configured to work with the provided Docker Compose setup.

```
DATABASE_URL="postgresql://prisma:prisma123@127.0.0.1:5432/mydb?schema=public"
```

### 3. Start the Database

Run the following command to start the PostgreSQL database container in the background.

```bash
docker compose up -d
```
This command uses the `docker-compose.yml` file to create and run a PostgreSQL 16 container named `postgres_db`.

### 4. Install Dependencies

Install the project dependencies defined in `package.json`.

```bash
npm init -y
```

### 5. Apply Database Migrations

Apply the database schema to your running PostgreSQL instance using Prisma Migrate.

```bash
npx prisma migrate dev --name init
```
This command will read your `prisma/schema.prisma` file and execute the SQL found in the `prisma/migrations` directory to create the `User` table.

## Usage

To run the application, execute the main script. This script will create a new user and then fetch all users from the database.

```bash
node index.js
```

You should see output similar to this in your console:
```
Created user: {
  id: 1,
  email: 'kheng@example.com',
  name: 'Kheng',
  createdAt: 2024-05-23T12:00:00.000Z
}
All users: [
  {
    id: 1,
    email: 'kheng@example.com',
    name: 'Kheng',
    createdAt: 2024-05-23T12:00:00.000Z
  }
]
```

## Database Schema

The database schema is defined in `prisma/schema.prisma`. The project starts with a single `User` model.

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL") // The url is loaded from the .env file
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

## Stopping the Database

To stop and remove the PostgreSQL container and its associated volume, run:

```bash
docker-compose down --volumes
