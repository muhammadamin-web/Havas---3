import logo from '../../assets/images/logo.png'

const Loading = () => {
  return (
    <div className="loading">
        <div className="loading_card">
        <img src={logo} alt="" />
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

        </div>

    </div>
  )
}

export default Loading