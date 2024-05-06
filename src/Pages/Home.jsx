import Card from "./Card";
import "../Stylesheets/home.css"

const Home = () => {
    return (
        <>
            <div className='home'>

                <div className='home__section'>

                    <Card
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-900891950206269231/original/7cc71402-9430-48b4-b4f1-e8cac69fd7d3.jpeg?im_w=960"
                        title="OVNI Guadalupe"
                        description="Alojamiento entero en Francisco Zarco (Valle de Guadalupe), México"
                        price="$5,546 MXN por noche"
                    />

                    <Card
                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq"
                        title="Despega en la casa de Up"
                        description="Abiquiú, Nuevo México, Estados Unidos."
                        price="$0 MXN por huésped"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=1440&im_q=highq"
                        title="Juega con Khaby Lame"
                        description="Milán, Italia"
                        price="$0 MXN por huésped"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg?im_w=1440&im_q=highq"
                        title="Ve de gira con Feith"
                        description="Filadelfia, Pensilvania, Estados Unidos"
                        price="$314 MXN por huésped"
                    />
                </div>
                <div className='home__section'>
                    <Card
                        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                        title="3 Bedroom Flat in Bournemouth"
                        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                        price="£130/night"
                    />
                    <Card
                        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                        title="Penthouse in London"
                        description="Enjoy the amazing sights of London with this stunning penthouse"
                        price="£350/night"
                    />
                    <Card
                        src="https://media.nomadicmatt.com/2018/apartment.jpg"
                        title="1 Bedroom apartment"
                        description="Superhost with great amenities and a fabolous shopping complex nearby"
                        price="£70/night"
                    />

                    <Card
                        src="https://a0.muscache.com/im/pictures/1f6c495e-b877-4a48-9f2c-d8012f640166.jpg?im_w=720"
                        title="The Kellogg Doolittle House"
                        description="Estancia Luxury en Joshua Tree, California, Estados Unidos"
                        price="$110,398 MXN por noche"
                    />

                </div>
            </div>
        </>
    )
}

export default Home;