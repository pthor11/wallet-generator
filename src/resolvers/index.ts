import { getKeyPair } from "./queries/getKeyPair";
import { decodeTronTransaction } from "./queries/decodeTronTransaction";


const resolvers = {
    Query: {
        getKeyPair,
        decodeTronTransaction
    }
}

export { resolvers }