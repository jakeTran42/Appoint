require('dotenv').config()

const { prisma } = require('../prisma/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
          ...request,
          prisma,
        }
    },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))