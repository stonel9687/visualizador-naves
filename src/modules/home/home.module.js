import { useState } from 'react'
import SelectShip from './component/selectShip'

const Home = () => {
  const [selectOn, setSelectOn] = useState(false)

  const handleSelect = () => {
    setSelectOn(true)
  }
  return (
    <div>
      <SelectShip handleSelect={handleSelect} selectOn={selectOn} />
    </div>
  )
}

export default Home
