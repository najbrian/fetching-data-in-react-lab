const BASE_URL = 'https://swapi.dev/api/'

const show = async () => {
  try {
    const queryString=`starships/`
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json()
    console.log('Data: ', data)
    return data
  } catch(error) {
    console.log(error)
  }
}

export { show }