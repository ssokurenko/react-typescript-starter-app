import axios from 'axios'

const useConfig = () => {
  return {
    getQuotes: (url: string) => axios.get(url)
  }
}

export default useConfig
