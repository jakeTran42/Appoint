require('dotenv').config()

const { prisma } = require('../prisma/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Appointment = require('./resolvers/Appointment')

const resolvers = {
    Query,
    Mutation,
    User,
    Appointment
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