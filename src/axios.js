import axios from 'axios'

const instance = axios.create({
    baseURL:"https://tiktok-clone-0015.herokuapp.com/"
})

export default instance