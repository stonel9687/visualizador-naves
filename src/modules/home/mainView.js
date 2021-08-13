import { useEffect, useState } from 'react'
import SelectShip from './component/selectShip'

const Home = () => {
  const [selectOn, setSelectOn] = useState(false)
  const [selectName, setSelectName] = useState('Seleccion de Naves')
  const [shipDetail, setShipDetail] = useState([])
  const [shipList, setShipList] = useState([])
  const handleSelect = () => {
    let seleccion = selectOn ? false : true
    setSelectOn(seleccion)
  }

  const shipDetails = (ship) => {
    fetch(`${ship.url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setShipDetail(data)
      })
      .catch((error) => console.log('Error:', error))
  }

  const showShip = () => {
    fetch('https://swapi.dev/api/starships/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setShipList(data.results)
      })
      .catch((error) => console.log('Error:', error))
  }

  useEffect(() => {
    showShip()
  }, [])

  return (
    <div>
      <SelectShip
        handleSelect={handleSelect}
        selectOn={selectOn}
        selectName={selectName}
        shipList={shipList}
        shipDetails={shipDetails}
        shipDetail={shipDetail}
      />
    </div>
  )
}

export default Home
