import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../api'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    const lineChart = (
        confirmed ?
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            label: 'Infected',
                            data: dailyData.map(({ confirmed }) => confirmed),
                            borderColor: '#3333ff',
                            fill: true,
                        },
                        {
                            label: 'Deaths',
                            data: dailyData.map(({ deaths }) => deaths),
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }
                    ]
                }}
            /> : null
    )

    const barChart = (
        confirmed ?
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }
                ]
            }}
        /> : null
    )

    return (

        <div className="w-5/6 md:3/4">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart
