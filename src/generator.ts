import { ECPair, networks } from "bitcoinjs-lib";
import TronWeb from "tronweb";
import { TRX_FULL_HOST } from "./config";

const tronweb = new TronWeb({ fullHost: TRX_FULL_HOST })
const network = networks.bitcoin

const Platform = {
    btc: 'btc',
    bch: 'bch',
    ltc: 'ltc',
    eth: 'etc',
    trx: 'trx'
}

const generateNewAddress = (platform: string): { address: string, privateKey: string } => {
    const keyPair = ECPair.makeRandom({ network })

    switch (platform) {
        case Platform.trx:
            const privateKey = keyPair.privateKey!.toString('hex')
            const address = tronweb.address.fromPrivateKey(privateKey)
            return { address, privateKey }

        default: throw new Error(`type ${platform} not supported yet`)
    }
}

export {
    Platform,
    generateNewAddress
}