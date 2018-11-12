import express from 'express'
import axios from 'axios'

const app = express()

app.get('/api/getRecommends',async(req,res)=>{
    let {code,data} = await axios.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg')
    if(code) { console.log('/api/getRecommend Error')}
    else if(data){
        res.json(data)
    }
})

app.all("*", function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");

    next();
});
app.use(express.static('./dist'))
export default app.listen(8300,function (err) {
    if (err) {
        console.log(err)
        return
    }
})

