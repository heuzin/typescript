export const dateStringToDate = (dateString: string): Date => {
    // 29/10/2018 - 
    let dateParts = dateString
      .split('/') // ['28', '10', '2018']
      .map((value: string): number => {
        return parseInt(value)
    }) // [28, 10, 2018]

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}