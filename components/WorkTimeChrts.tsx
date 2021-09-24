import React, { useState } from 'react'
import { readCsvFile, mapCSVToArray } from './readCsvFile'
import { workTimeParse } from './workTimeParser'
import { WorkTimeSearchForm } from './WorkTimeSearchForm'
import { WorkTimeBarChrt } from './WorkTimeBarChart'

export const WorkTimeChrts = () => {
  const [chartData, setChartData] = useState({})
  const [selectedWorkers, setSelectedWorkers] = useState([])
  const [selectedTasks, setSelectedTasks] = useState([])
  const [displayLoader, setDisplayLoader] = useState(false)

  const parseCsv = async (file: File) => {
    setChartData({})
    if (!file) return

    setDisplayLoader(true)
    const textCsvData = await readCsvFile(file)
    const arrayData = mapCSVToArray(textCsvData)
    const formatedData = workTimeParse(arrayData.slice(1))
    setChartData(formatedData)
    setDisplayLoader(false)
  }

  return (
    <div>
      <div style={
        {
          display: 'flex',
          justifyContent: 'center'
        }
      }>
        { displayLoader && '読み込み中...' }
      </div>
      <input type='file' accept='text/csv' onChange={(e) => parseCsv(e.target.files[0])}/>
      {
        Object.keys(chartData).length > 0 &&
        <WorkTimeSearchForm
          workerNames={ Object.keys(chartData).map((key) => { return key }) }
          taskNames={ [...new Set(Object.values(chartData).flatMap((value) => { return value['tasks'] }).sort())] }
          setSelectedTasks={setSelectedTasks}
          setSelectedWorkers={setSelectedWorkers}
        />
      }
      <div style={
        {
          display: 'flex',
          flexWrap: 'wrap'
        }
      }>
        {
          Object.keys(chartData).map((workerName) => {
            if (selectedWorkers.length > 0 && selectedWorkers.indexOf(workerName) < 0) return
            if (selectedTasks.length > 0 && (chartData[workerName]['tasks'].filter((task: string) => selectedTasks.indexOf(task) >= 0).length < 1)) return

            return (
              <WorkTimeBarChrt
                key={workerName}
                chartData={chartData[workerName]}
                workerName={workerName}
                selectedTasks={selectedTasks}
              />
            )
          })
        }
      </div>
    </div>
  )
}
