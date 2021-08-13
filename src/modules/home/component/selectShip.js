function SelectShip(props) {
  const { handleSelect, selectOn, selectName, shipList, shipDetails, shipDetail } = props
  return (
    <>
      <div className='container'>
        <form>
          <div className='selectBox'>
            <div className='select d-flex justify-content-between' id='select' onClick={handleSelect}>
              <div className='content-select '>
                <h1>{selectName}</h1>
              </div>
              <div>
                <i class='fas fa-chevron-down'></i>
              </div>
            </div>
            {selectOn && (
              <>
                <div>
                  {shipList.map((s) => {
                    return (
                      <p
                        onClick={() => {
                          shipDetails(s)
                        }}
                      >
                        {s.name}
                      </p>
                    )
                  })}
                </div>
              </>
            )}

            <div className='bg-primary'>
              <div className='description'>
                <h1>{shipDetail?.name}</h1>
                <span>{shipDetail?.model}</span>
                <hr />
                <h3>Fabricante</h3>
                <span> {shipDetail?.manufacturer}</span>
                <h3>largo</h3>
                <span>{shipDetail?.length}</span>
                <h3>valor</h3>
                <span>{shipDetail?.cost_in_credits} creditos</span>
                <h3>cantidad de pasajeros</h3>
                <span>{shipDetail?.passengers}</span>
                <hr />
              </div>
              <div className='passanger'>
                <h1>Pasajeros</h1>
                <hr />
                <span> chewacca</span>
                <br />
                <span> han solo</span>
                <br />
                <span> lando</span>
                <br />
                <span> nien</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SelectShip
