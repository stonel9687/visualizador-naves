import { useState } from 'react'
import SelectShip from './component/selectShip'

const Home = () => {
  const [selectOn, setSelectOn] = useState(true)
  const handleSelect = () => {
    let seleccion = selectOn ? false : true
    setSelectOn(seleccion)
  }
  return (
    <div>
      <SelectShip handleSelect={handleSelect} selectOn={selectOn} />
    </div>
  )
}

export default Home
