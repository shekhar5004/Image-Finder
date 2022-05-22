import axios from 'axios';


const API_KEY='23784481-564f7d474a8c2a4921b835913';
const URL='https://pixabay.com/api/'

export const getImages =  (text,count) =>{
    try{
      return axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
    }
    catch(error){
      console.log(error);  
    }
}










// 23784481-564f7d474a8c2a4921b835913