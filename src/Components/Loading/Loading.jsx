import logo from '../../assets/images/logo2.svg'

const Loading = () => {
  return (
    <div className="loading">
        <div className="loading_card">
        <img src={logo} alt="" width={'100%'} />
        {/* <div className="lds-ring"><div></div><div></div><div></div><div></div></div> */}

        </div>

    </div>
  )
}

export default Loading