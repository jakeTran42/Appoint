## This is the API/Backend for Appointment Application (Backend)

### Overview & Setup

1. [NodeJS](https://nodejs.org/en/) Download / Install this first
2. [Prisma CLI](https://www.prisma.io/docs/prisma-client/) with MongoDB ```npm install prisma -g```

### Lib/Packages Installation

##### This project uses either NPM (comes with NodeJS) or [Yarn](https://yarnpkg.com/en/) for its package management.

##### Install commands in **terminal (mac/linux)** or **command prompt (window)** in project directory. 

- To Install Packages  ```npm install``` or ```yarn install``` in terminal / command prompt


### Instructions

1. Install NodeJS
2. Install packages/libraries
3. Install Prisma CLI (**Ignore this for now**)
   1. To use Prisma and MongoDB locally (On Mac/Linux), you need to use [Docker](https://www.docker.com/products/container-runtime) and install the community edition. If you are on Window but do not have Window 10 Pro Edition, you need to get [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) and follow instruction for installation.
   2. If you have Docker Toolbox, then launch Docker Quick Start, and then follow [**these**](https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-TYPESCRIPT-t002/) instructions.
4. Go to root directory and run ```prisma deploy``` in terminal. **This project will use a demo server hosted by AWS Aurora**
5. In terminal enter ```node src/index.js``` while in root directory. (you need to stop this process and restart it everytime changes are made in files)
6. Create a ```.env``` file in root directory and type ```APP_SECRET=_____```. Replace ```____``` with any string you want. This is environment configuration file to ensure passwords are secured.

### Usages

* You can use the playground by going into your browser and go to url ```http://localhost:4000/```. Playground will enable you to use **graphql** method of querying, mutation, and subcription events which is similar to an RESTful API methods.

* You can use the schema definition (on the right of playground) as documentation for any query,muation,subscription event

![Schema](/usage/schema.png)

* Querying Data
![Querying events](/usage/query.png)

* Mutation (post) Data

![Mutation events](/usage/mutation.png)