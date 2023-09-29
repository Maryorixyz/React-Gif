import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One punch')

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    // console.log(inputValue);
    // setCategories(categories => [...categories, inputValue])
    onNewCategory(inputValue.trim())
    setInputValue('')

   }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  )
}
