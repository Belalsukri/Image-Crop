const mongoose =require('mongoose')
const fs= require("fs")
const connectionString = 'mongodb+srv:????????????????'
function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
                console.log('hello mongoose');
            }).catch(error => {
                reject(error)
            })
        }
    })
  }
  const Schema = mongoose.Schema
  // ..................................................................... //
  const dataSchema = new Schema({
  
      title:{
          type:String,
          required:true,
          unique : true
      },
      imgs:{
          type:String,
          required:true,
          
      },
  
  })
  const data =mongoose.model('data',dataSchema)
  function addImages(title,imgs) {
    return new Promise((resolve, reject) => {
        connect().then(()=>{
            data.findOne({title: title,}).then(findP => {
              
                 if(findP) {
                   reject(3)
                 } else {
                    
                      const newData =new data({
                        title: title,
                        imgs: imgs,
                        date:Date() 
                        
                    })
                    newData.save().then(response => {
                        console.log('dataModel' ,response);

                              resolve()

                      }).catch(error => {
                        console.log(error.code);

                      })
                }
            }).catch(error => {

              reject(error)
            })

    }).catch(error => {
        reject(error)
    })
})
}
function getdataimg() {
    return new Promise((resolve, reject) => {
     
        connect().then(() => {
          
            data.find().then(dataimg => {
                resolve(dataimg)
            }).catch(error => {
              
                reject(error)
            })
            })
                
    }).catch(error => {

        reject(error)
    })

}

module.exports={
    addImages,
    getdataimg
}

