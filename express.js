import express from 'express'
const app = express()



app.use(express.static('./dist'))
export default app.listen(8300,function (err) {
    if (err) {
        console.log(err)
        return
    }
})

