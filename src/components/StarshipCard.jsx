
const card = (props) => {


    return (
        <>


            <ul>


                    {props.starships.map((ship) => (

                        <li key={ship.name}>
                            <h2>{ship.name}</h2>
                            <p>Class: {ship.vehicle_class}</p>
                            <p>Manufacturer: {ship.manufacturer}</p>
                            <p>Model: {ship.model}</p>
                        </li>

                    ))}



            </ul>
















        </>
    )
}

export default card