export const workTimeParse = (workTimeArray: string[][]): any => {
  const workDateIndex = (workerName: any, workDate: string): number => {
    return workerName.map((work: { [key: string]: string }) => work['name']).indexOf(workDate)
  }

  const elapsedMinutes = (taskTime: string): number => {
    return new Date('1997/01/01 ' + taskTime).getHours() * 60 + new Date('1997/01/01 ' + taskTime).getMinutes()
  }

  const result =  workTimeArray.reduce((workTimeByName: any, data: string[]) => {
    const workDate: string = data[0]
    const workerName: string = data[2]
    const taskName: string = data[7] + ':' + data[9]
    const taskTime: string = data[10]

    if (!workTimeByName[workerName]) workTimeByName[workerName] = { tasks: [], workTimes: [] }
    if (!(workTimeByName[workerName]['tasks'].indexOf(taskName) >= 0)) workTimeByName[workerName]['tasks'].push(taskName)

    const index: number = workDateIndex(workTimeByName[workerName]['workTimes'], workDate)

    if (index >= 0) {
      workTimeByName[workerName]['workTimes'][index][taskName] = elapsedMinutes(taskTime)
    } else {
      workTimeByName[workerName]['workTimes'].push(
        {
          name: workDate,
          [taskName]: elapsedMinutes(taskTime)
        }
      )
    }
    return workTimeByName
  }, {})

  return result
}
