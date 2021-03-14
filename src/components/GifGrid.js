import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifgridItem } from './GifgridItem';

export const GifGrid = ({category}) => {

//     const [images,setImages] = useState([]);

const {data:images, loading} = useFetchGifs(category);

// console.log(data);
// console.log(loading);

// useEffect(() =>{
//     getGifs(category)
//     .then(setImages);
// },[category])

    return (
        <>
          <h3>{category}</h3>
          {loading && <p>Loading</p>}
           {/*loading? 'Cargando...':'Data cargada'*/}

        <div className="card-grid">
          
                {
                    images.map(img => (
                        <GifgridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
               
        </div> 
        </>
    )
}
