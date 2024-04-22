import axios from "axios"

export const getHours = async () => {
    const response = await axios.get("http://localhost:8000/hours", {
        responseType: 'blob'
    })  
    return response.data
}

export const getContracts = async () => {
    const response = await axios.get("http://localhost:8000/contracts", {
        responseType: 'blob'
    })  
    return response.data
}
