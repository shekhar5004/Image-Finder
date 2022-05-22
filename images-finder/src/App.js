import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";
import { Box } from "@material-ui/core";
import {getImages} from './services/api';
import { useEffect,useState} from "react";
import Images from "./components/Images";
function App() {

  const [data,getData]=useState([]);
  const [text,getText]=useState("mountain");
  const [count,getCount]=useState(10);
  useEffect(() => {
     if(count<3||count>200)
     return ;
      getImages(text,count).then(response  =>{
        getData(response.data.hits)
        
      });
  }, [text,count])
  const ontextchange = (e) =>{
    getText(e.target.value);
  }
  const oncountchange = (e) =>{
    getCount(e.target.value)
  }
  return (
    <Box>
    <NavBar/>  
    <BreadCrumb ontextchange={ontextchange} oncountchange={oncountchange}/>
    <Images data={data}/>
    </Box>
  );
}

export default App;
