import React, { useState } from 'react'

export const WorkTimeSearchForm = (props) => {
  const { taskNames, workerNames, setSelectedTasks, setSelectedWorkers } = props

  return (
    <div>
      <select name="wokerName" id="wokerName" onChange={(e) => setSelectedWorkers(e.target.value)}>
        <option value=''>全て</option>
        {
          workerNames && workerNames.map((workerName: string) => {
            return <option value={workerName}>{workerName}</option>
          })
        }
      </select>
      <select name="taskName" id="taskName" onChange={(e) => setSelectedTasks(e.target.value)}>
        <option value=''>全て</option>
        {
          taskNames && taskNames.map((taskName: string) => {
            return <option value={taskName}>{taskName}</option>
          })
        }
      </select>
    </div>
  )
}
