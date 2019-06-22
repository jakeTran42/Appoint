## This is the API/Backend for Appointment Application (Backend)

### Overview & Setup

1. [NodeJS](https://nodejs.org/en/)
2. [Prisma CLI](https://www.prisma.io/docs/prisma-client/) with MongoDB ```npm install prisma -g```

### Lib/Packages Installation

##### This project uses either NPM (comes with NodeJS) or [Yarn](https://yarnpkg.com/en/) for its package management.

##### Install commands in **terminal (mac/linux)** or **command prompt (window)** in project directory. 

- [GraphQL Yoga](https://github.com/prisma/graphql-yoga)  ```npm install graphql-yoga```
- 


### Usage

1. Install NodeJS
2. Install Prisma CLI
3. To use Prisma and MongoDB locally (On Mac/Linux), you need to use [Docker](https://www.docker.com/products/container-runtime) and install the community edition. If you are on Window but do not have Window 10 Pro Edition, you need to get [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) and follow instruction for installation.
4. If you have Docker Toolbox then launch Docker Quick Start, locate ```/prisma``` directory of your project in the docker bash terminal. Enter ```docker-compose up -d``` in docker bash and wait for it to finish initializing db.
5. Go to root directory and run ```prisma deploy``` in terminal.
