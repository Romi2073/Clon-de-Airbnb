import "../Stylesheets/yourhome.css"
import MapComponent from "../Pages/MapApi"

const YourHome = () => {
    return (
        <div className="container">
            <div className="container-form">
                <h1 className="text-5xl text-red-500 font-semibold">Hazlo Airbnb.</h1>
                <h2 className="text-5xl text-black font-semibold">Podrías ganar</h2>
                <h3 className="text-7xl text-black font-semibold">$7,847 MXN</h3>
                <p>8 noches a unos $1,121 MXN por noche</p>
            </div>

            <div className="container-map">
            <MapComponent/>
            </div>

        </div>

    )
}

export default YourHome;