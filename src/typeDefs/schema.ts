import { gql } from "apollo-server";

export const typeDefs = gql`

scalar JSON

enum Platform {
    btc
    bch
    ltc
    eth
    etc
    trx
}

enum TronNetwork {
    nile
    main
}

type Query {
    getKeyPair(platform: Platform!): JSON
    decodeTronTransaction(network: TronNetwork!, txid: String!): JSON
}

`