import React, { Component } from 'react';
import '../App.css';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {Container, CardMedia,Card,Input,TextField,Button,Grid,Paper,Box} from '@material-ui/core';
import {adddata} from '../services/api'



class Home extends Component {
    constructor (props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
        this.saveBtnClick = this.saveBtnClick.bind(this);
   
        this.state = {
    src: null,
    imageName:'',
    ImageUrl:[],
    Imag:[],
    base64Image:'',
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 9,
    },
  };
};
  handleChange(event) {
    this.setState({imageName: event.target.value});
  }
  
 
   saveBtnClick (e){
    e.preventDefault()
    console.log('vv',this.state.imageName,this.state.base64Image);
    adddata( this.state.imageName,this.state.base64Image).then(dat=>{
      console.log(dat);
      if (dat===1) {
        this.props.history.push('/GetImages') 
        alert('exist')
      }
      if (dat===2) {
        alert(' server error 3')
      } else {
        
      }
     
  }).catch(error => {
    console.log(error);
})

}  


  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
      this.setState({ImageUrl: croppedImageUrl});
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width*4;
    canvas.height = crop.height*4;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width*4,
      crop.height*4
    );
    console.log('crop',this.state.crop);
    console.log( this.state.imageName,this.state.ImageUrl);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        const base64Image = canvas.toDataURL('image/jpeg');
        this.setState({base64Image: base64Image});
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        const anchor = document.createElement('a');
        anchor.download = 'cropPreview.png';
      anchor.href = URL.createObjectURL(blob);
      
        this.fileUrl = window.URL.createObjectURL(blob);
        this.setState({Imag: anchor});
        resolve( this.fileUrl);
      }, 'image/jpeg');
    });
  }
  
  render() {
    const { crop, base64Image, src } = this.state;
    return (
<Container maxWidth="sm" className='mr-t'>  
  <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3}} className='mr-l'>
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }} >
      <Card container wrap="nowrap" spacing={2}>
      <Grid item xs={4}>
       <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={this.onSelectFile}  />
            <Button className="App" variant="contained" component="span">
                  Upload
        </Button>
      </label>
      </Grid>
      </Card>
    </Paper>
          {/* <input type="file" accept="image/*" onChange={this.onSelectFile} /> */}
       
        <form onSubmit={this.saveBtnClick} encType='multipart/form-data'>
    <Box sx={{ gridArea: 'main'}}>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={6}>
        <CardMedia  sx={{ height: 180 }}> 
        {src  && (
          <ReactCrop 
            src={src}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        </CardMedia>
        </Grid>
        </Grid>
      </Paper>
    </Box>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>  
          <Grid item xs={4}>
              {base64Image && (
                <img alt="Crop" style={{ maxWidth: '100%' }} src={base64Image}  />
                
              )}
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}> 
        <Grid container wrap="nowrap" spacing={2}>  
          <Grid item xs={4}> 
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue={this.state.value}
                onChange={this.handleChange}
              />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}> 
        <Grid container wrap="nowrap" spacing={2}>  
          <Grid item xs={4}>              
                    <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Paper>        
        </form>
        
  </Box>
</Container>
    );
  }
}

export default Home;
