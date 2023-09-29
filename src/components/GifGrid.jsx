

import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"



// eslint-disable-next-line react/prop-types
export const GifGrid = ({category}) => {
  
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>) : null
        // isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
{/* llamamos a images porque ya esta trae todas las funcionalidades del getgifs */}
        {
          images.map( (imagenes) => (
            <GifItem
              key={imagenes.id}
              title={imagenes.title}
              url={imagenes.url}
            />
          ))
        }
      </div>
    </>
  )
}
