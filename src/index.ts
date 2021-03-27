import { ApolloServer } from "apollo-server"
import { typeDefs } from "./typeDefs/schema"
import { resolvers } from "./resolvers"
import { PORT } from "./config"

const start = async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            // context: ({ req }) => req
            // debug: true
            
        })

        console.log({ PORT });


        const { url } = await server.listen({ port: PORT })

        console.log(`🚀 wallet-paper-generator graphql ready at ${url}`);
    } catch (e) {
        throw e
    }
}

start()