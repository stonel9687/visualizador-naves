function SelectShip(props) {
  const { handleSelect, selectOn, selectName, shipList, shipDetails, shipDetail, showDetails, showPilots } = props
  return (
    <>
      <div className='row mb-5 box-img'>
        <form className='col-lg-6 col-md-6 col-sm-12 col-12  mx-auto'>
          <div className='selectBox col-lg-6 col-md-6 col-sm-12 col-12  mx-auto'>
            <div className='select d-flex justify-content-between' id='select' onClick={handleSelect}>
              <div className='content-select'>
                <p>{selectName}</p>
              </div>
              <div>
                <i class='fas fa-chevron-down'></i>
              </div>
            </div>
            {selectOn && (
              <>
                <div className='select-ship '>
                  {shipList.map((s) => {
                    return (
                      <p
                        onClick={() => {
                          shipDetails(s)
                        }}
                        className='content-option:hover'
                      >
                        {s.name}
                      </p>
                    )
                  })}
                </div>
              </>
            )}

            {showDetails && (
              <div className='description'>
                <div>
                  <h2>{shipDetail?.name}</h2>
                  <span>{shipDetail?.model}</span>
                  <hr />
                  <h4>Fabricante</h4>
                  <span> {shipDetail?.manufacturer}</span>
                  <h3>largo</h3>
                  <span>{shipDetail?.length}</span>
                  <h4>valor</h4>
                  <span>{shipDetail?.cost_in_credits} creditos</span>
                  <h4>cantidad de pasajeros</h4>
                  <span>{shipDetail?.passengers}</span>
                  <hr />
                </div>
                <div className='description'>
                  <h2>Pasajeros</h2>
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
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default SelectShip
