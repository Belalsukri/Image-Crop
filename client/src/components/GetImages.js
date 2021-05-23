import  React,{useState,useEffect} from 'react'
import {Getdata} from '../services/api'
import {Container,Card,CardHeader,Box,Link,Button} from '@material-ui/core';
import GridList from '@material-ui/core/GridList';

import {useHistory} from 'react-router-dom'
import '../App.css';
function GetImages(props) {
    const history=useHistory()
    const intialState={
        dataImg:'',
        Img:[]
      }
    const [state,setState] = useState(intialState)
    useEffect(()=>{
        Getdata().then(data=>{
            console.log(data);
            
            switch (data) {
            case 2:
                console.log('server error');
                break;
            default:
                data.map(item=>{
                    setState({
                        ...state,
                        img: item.imgs,
                        
                        })
                })
                setState({
                    ...state,
                    dataImg: data,
                    
                    })
                  
                break;
            }
        })
    },[])

    console.log(state.img);
  
    
    if (state.dataImg) {
        const dataElement =state.dataImg.map(images=>{
            return( 


        <Container Key={images.id} maxWidth="sm"className='mr-t'>       
            <Card sx={{ maxWidth: 200 }}>
            <Container maxWidth="sm">       
                <Box > 
                    <CardHeader 
                        title= {images.title}
                    />
                </Box> 
                <Box >  
                    <GridList cellHeight={100}  > 
                   
                    <img className="img-1" src={images.imgs} alt="img"/>
                   
                    </GridList>
                </Box>  
                
            </Container>    
            </Card>
        </Container>            
            )
            })

    return (
        <Container maxWidth="sm">
             <Card>
           {dataElement}
           <Button type="submit" variant="contained"style={{marginLeft:20}}>
           <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        history.push('/') 
                        
                    }}
                    >
                    Home
            </Link>
            </Button >
            <Button type="submit" variant="contained" style={{marginLeft:20}}>
           <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        history.push('/Canvass') 
                        
                    }}
                    >
                   Draw on the picture
            </Link>
            </Button>
            </Card>
        </Container>
    )
}else {
    return (
      <div>Loading ....</div>
    )
  }
}

export default GetImages

