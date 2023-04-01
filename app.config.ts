import * as dotenv from 'dotenv'

export const appConfig = () => {
    const config = dotenv.parse('.env')

    if (!config) {
        throw new Error('config is not defined')
    }

    return {
        appConfig: config
    }
}