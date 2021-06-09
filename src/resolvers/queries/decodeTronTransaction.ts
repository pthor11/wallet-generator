import Decoder from "../../decoder.js";


const decodeTronTransaction = async (root: any, args: any, ctx: any) => {
    try {
        const { txid, network } = args

        const decoder = new Decoder({ mainnet: network === 'main' ? true : false })

        const [result, revert] = await Promise.all([
            decoder.decodeResultById(txid),
            decoder.decodeRevertMessage(txid),
        ])

        return { result, revert }
    } catch (e) {
        throw e
    }
}

export { decodeTronTransaction }