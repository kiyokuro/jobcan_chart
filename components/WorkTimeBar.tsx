import React, { useState } from 'react'
import { readCsvFile, mapCSVToArray } from '../components/readCsvFile'
import { workTimeParse } from '../components/workTimeParser'
import { colorPattern } from './colorPattern'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const WorkTimeBar = () => {
  const [chartData, setChartData] = useState({})

  const parseCsv = async (file: File) => {
    setChartData({})
    const textCsvData = await readCsvFile(file)
    const arrayData = mapCSVToArray(textCsvData)
    const formatedData = workTimeParse(arrayData.slice(1))
    setChartData(formatedData)
  }

  const workTimeChart = (key: string) => {
    return (
      <div key={key}>
        <div>
          {key}
        </div>
        <BarChart
          width={800}
          height={400}
          data={chartData[key]['workTimes']}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis label={{ value: 'minutes', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          {
            chartData[key]['tasks'].map((task: string, index: number) => {
              return <Bar dataKey={task} stackId='a' fill={colorPattern(index)} key={task} />
            })
          }
          <Legend width={250} height={350} layout='vertical' verticalAlign='top' align='right' wrapperStyle={{overflow: 'auto', paddingLeft: '20px'}} />
        </BarChart>
      </div>
    )
  }

  return (
    <div>
      <input type='file' accept='text/csv' onChange={(e) => parseCsv(e.target.files[0])}/>
      <div style={
        {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }>
        {
          Object.keys(chartData).map((key) => {
            return workTimeChart(key)
          })
        }
      </div>
    </div>
  )
}
