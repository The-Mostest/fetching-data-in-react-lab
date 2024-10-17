import { useState } from "react"





const StarshipSearch = (props) => {

    const [findShip, setFindShip] = useState('')


    const handleChange = (event) => (
        setFindShip(event.target.value)
    )


    const handleSubmit = (event) => {
        event.preventDefault()
        props.setFilter(findShip)
        setFindShip('')
        console.log(findShip)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="findShip">Type In Ship Deets</label>
                <input id='findShip ' type="text" name='findShip' value={findShip} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </>
    )





}


export default StarshipSearch