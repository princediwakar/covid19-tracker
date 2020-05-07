import React, {useState, useEffect} from 'react'
import { fetchCountries } from '../api'

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
    }, [fetchedCountries])

    return (
        <div className="my-5">
            <p className="text-center">Select region</p>
            <select className="border border-gray-500" name="country-picker" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    fetchedCountries.map((country, i) => {
                        return <option key={i} value={country} >{country}</option>
                    })
                }
            </select>
        </div>
    )
}

export default CountryPicker
