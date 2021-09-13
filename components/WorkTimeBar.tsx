import React, { useState } from 'react'
import { readCsvFile, mapCSVToArray } from '../components/readCsvFile'
import { workTimeParse } from '../components/workTimeParser'
import { colorPattern } from './colorPattern'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { WorkTimeSearchForm } from './WorkTimeSearchForm'

export const WorkTimeBar = () => {
  const [chartData, setChartData] = useState({})
  const [selectedWorkers, setSelectedWorkers] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])

  const parseCsv = async (file: File) => {
    setChartData({})
    if (!file) return

    const textCsvData = await readCsvFile(file)
    const arrayData = mapCSVToArray(textCsvData)
    const formatedData = workTimeParse(arrayData.slice(1))
    setChartData(formatedData)
  }

  const workTimeChart = (key: string) => {
    if (selectedWorkers.length > 0 && selectedWorkers.indexOf(key) < 0) return
    if (selectedTasks.length > 0 && chartData[key]['tasks'].filter((task: string) => selectedTasks.indexOf(task) >= 0).length < 1) return

    return (
      <div key={key}>
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
              if (selectedTasks.length > 0 && selectedTasks.indexOf(task) < 0) return

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
      <WorkTimeSearchForm
        workerNames={ Object.keys(chartData).map((key) => { return key }) }
        taskNames={ [...new Set(Object.values(chartData).flatMap((value) => { return value['tasks'] }))] }
        setSelectedTasks={setSelectedTasks}
        setSelectedWorkers={setSelectedWorkers}
      />
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
