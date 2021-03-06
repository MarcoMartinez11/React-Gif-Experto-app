
import {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) => {
  
const [state, setstate] = useState({
    data:[],
    loading: true
});

useEffect(() =>{ // efecto que se dispara a; cambiar la categoria
    getGifs(category) //Peticion http
    .then(imgs => {

        setTimeout(() => {
            setstate({
                data:imgs,
                loading:false
            });
        },3000);

      
        
    })
   


},[category])

// setTimeout(()=>{
//     setstate({
//         data: [1,2,3,4,5,6,7],
//         loading: false
//     })
// },3000);

return state;
}
