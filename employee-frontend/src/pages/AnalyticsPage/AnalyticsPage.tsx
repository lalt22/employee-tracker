import { useEffect, useState } from "react"
import { getContracts, getHours } from "../../services/analyticsService"
import "./AnalyticsPage.scss"

const AnalyticsPage = () => {
    const [hoursGraph, setHoursGraph] = useState<Blob | null>()
    const [contractsGraph, setContractsGraph] = useState<Blob | null>()

    useEffect(() => {
        getHours().then((res) => setHoursGraph(res))
        getContracts().then((res) => setContractsGraph(res))
    }, [])

    useEffect(() => {
      console.log("hours graph", hoursGraph)
      console.log("contracts graph", contractsGraph)
    }, [hoursGraph, contractsGraph])
    
    

    return (
        <div className="analytics">
            {hoursGraph && <div className="hours-graph">
                <img src={URL.createObjectURL(hoursGraph)} />
            </div>}
            {contractsGraph && <div className="contracts-graph">
                <img src={URL.createObjectURL(contractsGraph)} />
            </div>}

        </div>
    )
}

export default AnalyticsPage