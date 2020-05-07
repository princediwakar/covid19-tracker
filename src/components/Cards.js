import React from 'react'
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (

        <div className="flex flex-wrap">
            <div className="flex-grow m-2 p-6 border-b-8 border-blue-500 shadow">
                <h3 className="text-gray-500 text-lg">Infected</h3>
                <h2 className="text-2xl">
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        duration={1}
                        separator="," />
                </h2>
                <p className="text-gray-500 text-sm">{new Date(lastUpdate).toDateString()}</p>
                <p className="text-gray-900 text-sm">Number of active cases of COVID-19</p>
            </div>
            <div className="flex-grow m-2 p-6 border-b-8 border-green-500 shadow">
                <h3 className="text-gray-500 text-lg">Recovered</h3>
                <h2 className="text-2xl">
                <CountUp
                        start={0}
                        end={recovered.value}
                        duration={1}
                        separator="," />
                </h2>
                <p className="text-gray-500 text-sm">{new Date(lastUpdate).toDateString()}</p>
                <p className="text-gray-900 text-sm">Number of recoveries from COVID-19</p>
            </div>
            <div className="flex-grow m-2 p-6 border-b-8 border-red-500 shadow">
                <h3 className="text-gray-500 text-lg">Deaths</h3>
                <h2 className="text-2xl">
                <CountUp
                        start={0}
                        end={deaths.value}
                        duration={1}
                        separator="," />
                </h2>
                <p className="text-gray-500 text-sm">{new Date(lastUpdate).toDateString()}</p>
                <p className="text-gray-900 text-sm">Number of deaths caused by COVID-19</p>
            </div>

        </div>

    )
}

export default Cards
