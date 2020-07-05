import React from 'react'

import {fetchData} from './api'
import Cards from './components/Cards'
import Chart from './components/Chart'
import CountryPicker from './components/CountryPicker'

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }


    handleCountryChange = async (country) => {
        // fetch the data
        const fetchedData = await fetchData(country)
        // set the state
        this.setState({data: fetchedData, country: country})
    }

    render () {
        const {data, country} = this.state
        return (
            <div className="flex flex-col justify-center items-center h-screen p-20">
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}


export default App;