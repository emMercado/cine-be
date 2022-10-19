import { connect } from 'mongoose'

(async () => {
    try {
        const db = await connect(`mongodb://localhost:27017/cine`)
        console.log("conected", db.connection.name)
    } catch (error) {
        console.error("error")
    }
})();