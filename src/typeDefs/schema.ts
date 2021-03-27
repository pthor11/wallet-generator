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

type Query {
    getKeyPair(platform: Platform): JSON
}

`