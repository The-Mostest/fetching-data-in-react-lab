import StarshipCard from './StarshipCard.jsx'
// import { useState } from 'react'






const StarshipList = (props) => {


    return (
        <>

<div className="StarList">
<StarshipCard
    starships={props.starships}

/>


    
</div>













        </>
    )
}

export default StarshipList