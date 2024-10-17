const BASE_URL = `https://swapi.dev/api/vehicles`

export const index = async () => {

    try {
        // const query = `&q=${ship}`
        const res = await fetch(BASE_URL)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}