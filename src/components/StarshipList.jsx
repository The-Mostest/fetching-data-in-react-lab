import StarshipCard from './StarshipCard.jsx'
// import { useState } from 'react'






const StarshipList = (props) => {



    return (
        <>




            {props.starships.map((vessle) => (

                <div key={vessle.name}>
                    
                    <StarshipCard
                        starships={vessle}
                    />

                </div>

            ))}



        </>
    )
}

export default StarshipList