import React from 'react'
import { colorPattern } from './colorPattern'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const WorkTimeBarChrt = ({ chartData: chartData, workerName: workerName, selectedWorkers: selectedWorkers, selectedTasks: selectedTasks }) => {
  return (
    <div key={workerName}>
      <div>
        {workerName}
      </div>
      <BarChart
        width={800}
        height={400}
        data={chartData['workTimes']}
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
          chartData['tasks'].map((task: string, index: number) => {
            if (selectedTasks.length > 0 && selectedTasks.indexOf(task) < 0) return

            return <Bar dataKey={task} stackId='a' fill={colorPattern(index)} key={task} />
          })
        }
        <Legend width={250} height={350} layout='vertical' verticalAlign='top' align='right' wrapperStyle={{overflow: 'auto', paddingLeft: '20px'}} />
      </BarChart>
    </div>
  )
}
