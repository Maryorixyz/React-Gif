
// rafc+tab
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])
  // console.log(categories);

  const onAddCategory = (newCategory) => {

    // desestructuramos para llamarlo con el SETCATEGORIES Y AGREGAMOS LO QUE QUEREMOS
    // setCategories([...categories,'Los Simpson'])
    if (categories.includes(newCategory)) {
      return;
    }
    // para que no se repita

    setCategories([newCategory ,...categories])
  }

  return (
    <>

    <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
          )
        )
      }

    </>
  )
}
