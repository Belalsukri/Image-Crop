const express = require('express')
const fs = require('fs')
const fileupload = require('express-fileupload')
const dataModule = require('./client/modules/mongooseDataModule')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
 app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

app.use(express.static(__dirname + '/client/build'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(fileupload({
    limits: { fileSize: 50 * 1024 * 1024 }
}))

app.post('/addimg', (req, res) => {
    console.log(req.files);
   
    const imageName = req.body.imageName
    const imageCrs = req.body.imageCrs
    
     console.log( imageName,req.body.imageCrs);
    
   
    dataModule.addImages(imageName,imageCrs).then(() => {
            res.json(1)
        }).catch(error => {
            if (error == 3) {
                res.json(3)
            }else{
                res.json(4)
            }
        })
    
    
    })
    app.post('/getdata',(req,res)=>{
        dataModule.getdataimg().then(dataimg => {
            res.json(dataimg)
            console.log(dataimg);
        }).catch(error => {
            res.json(error)
        })
    })
app.use(cors())
app.use('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/client/build/index.html', 'utf-8')
    res.send(html);
})