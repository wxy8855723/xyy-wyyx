import axios from 'axios'

export default function (url,data={},method='GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method='GET') {
      promise = axios.get(url,data)
    } else {
      promise = axios.post(url,data)
    }
    promise.then( (respones) => {
      resolve(respones.data)
    }).catch( (error) => {
      console.log(error)
    })
  })
}
