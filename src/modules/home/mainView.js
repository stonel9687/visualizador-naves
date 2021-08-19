import { useEffect, useState } from 'react'
import SelectShip from './component/selectShip'

const Home = () => {
  const [selectOn, setSelectOn] = useState(false)
  const [selectName, setSelectName] = useState('Seleccion de Naves')
  const [shipDetail, setShipDetail] = useState([])
  const [shipList, setShipList] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [showPilots, setShowPilots] = useState([])
  const handleSelect = () => {
    //  let seleccion = selectOn ? false : true
    setSelectOn(selectOn ? false : true)
  }

  let array = []

  const shipDetails = async (ship) => {
    await fetch(`${ship.url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        setShipDetail(data)
        setSelectName(data.name)
        setShowDetails(true)
        setSelectOn(false)
      })
      .catch((error) => console.log('Error:', error))
    const pilots = ship.pilots

    const newPilots = pilots.map(function (i) {
      return i
    })
    //////////////////////////////////////////////////////////////
    newPilots.forEach((iter) => {
      array = [
        ...array,
        () => {
          fetch(`${iter}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => {
              return resp.json()
            })
            .then((data) => {
              console.log(`otra prueba`, data.name)
            })
            .catch((error) => console.log('Error:', error))
        },
      ]
    })
    ///////////////////////////////////////
    console.log(array)
    console.log(`nombre de pilotos`, newPilots)
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
    <div className='mobile-bg'>
      <SelectShip
        handleSelect={handleSelect}
        selectOn={selectOn}
        selectName={selectName}
        shipList={shipList}
        shipDetails={shipDetails}
        shipDetail={shipDetail}
        showDetails={showDetails}
        showPilots={showPilots}
      />
    </div>
  )
}

export default Home
