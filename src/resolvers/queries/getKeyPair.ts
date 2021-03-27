import { generateNewAddress } from "../../generator"

const getKeyPair = async (root: any, args: any, ctx: any) => {
    try {
        const { platform } = args

        const keyPair = generateNewAddress(platform)

        return { keyPair, platform }
    } catch (e) {
        throw e
    }
}

export { getKeyPair }