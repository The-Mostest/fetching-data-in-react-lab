
const card = ({starships}) => {


    return (
        <>
{console.log(starships)}

            <ul>


                    {starships.starships.map((ship) => (

                        <li key={ship.name}>
                            <h2>name: {ship.name}</h2>
                            {/* <p>Class: {ship.class}</p>
                            <p>Manufacturer:{ship.manufacturer}</p>
                            <p>Model:{ship.model}</p> */}
                        </li>

                    ))}



            </ul>
<p>Working</p>















        </>
    )
}

export default card