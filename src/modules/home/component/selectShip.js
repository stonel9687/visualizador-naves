function SelectShip(props) {
  const { handleSelect, selectOn } = props
  return (
    <>
      <div className='container'>
        <form>
          <div className='selectBox'>
            <div className='select d-flex justify-content-between' id='select' onClick={handleSelect}>
              <div className='content-select '>
                <h1>Seleccion de Naves</h1>
              </div>
              <div>
                <i class='fas fa-chevron-down'></i>
              </div>
            </div>
            {selectOn && (
              <div>
                <p>executor</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default SelectShip
