import StarshipCard from './StarshipCard.jsx'
// import { useState } from 'react'






const StarshipList = (props) => {

    const filteredShip = props.starships.filter(vessle => {
        return vessle.name === props.filter
    })


    return (
        <>




{props.filter 
? 

<ul>
    {filteredShip.map((vessle) => {
        return <StarshipCard key={vessle.name} starships={vessle} />
    })}
</ul>

: 

<ul>
    {props.starships.map((vessle) => {
        return <StarshipCard key={vessle.name} starships={vessle} />
    })}
</ul>
}


        </>
    )
}

export default StarshipList