
const card = ({ starships }) => {


    return (
        <>


            <ul>

                <li key={starships.name}>
                    <h2>{starships.name}</h2>
                    <p>Class: {starships.vehicle_class}</p>
                    <p>Manufacturer: {starships.manufacturer}</p>
                    <p>Model: {starships.model}</p>
                </li>

            </ul>
















        </>
    )
}

export default card