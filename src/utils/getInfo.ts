const getInfo = (arr: Array<Object>, query: string) => {
  const infoIndex = arr.findIndex((row) => row.index === query)

  return arr[infoIndex]
}

export default getInfo
