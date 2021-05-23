export const adddata=(imageName,imageCrs)=>{
    
    return new Promise((resolve, reject)=>{
        const fd = new FormData()
        fd.append('imageName', imageName)
        fd.append('imageCrs', imageCrs)
      console.log('sendD',fd);
        fetch('/addimg',{
            method:'POST',
           
            body:fd
        }).then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                   console.log(data);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(new Error('can not send data to server. response number is :'+response.status))
            }
        }).catch(error => {
            reject(error)
        })

    })
    
}
export const Getdata=()=>{
    return new Promise((resolve, reject)=>{
     fetch('/getdata',{
         method:'POST',
         headers:{
            'Content-Type':'application/json'
        },
     }).then(response => {
        if (response.status === 200) {
            response.json().then(data => {
               console.log('api',data);
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        }else{
            reject(new Error('can not send data to server. response number is :'+response.status))
        }
    }).catch(error => {
        reject(error)
    })
})
    }

