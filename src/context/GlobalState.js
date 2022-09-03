import GlobalContext from "./GlobalContext"
import React, { useEffect, useState } from "react"
import ApiService from "../services/ApiService"

const GlobalState = ({ children }) => {
const [assets, setAssets] = useState([])
const [assetsLoaded, setAssetsLoaded] = useState(false)
const [firstDate, setFirstDate] = useState(new Date())
const [secondDate, setSecondDate] = useState(new Date())
const [chartData, setChartData] = useState([])
const  { getAssets, getTimeSeries } = ApiService

  useEffect(() => {
    if (!assetsLoaded) {
      getAssets().then(({data})=>{
        setAssets(data)
        setAssetsLoaded(true)
      })
      getTimeSeries().then(({data})=>{
        setChartData(data)
      })
    }
 
  }, [assetsLoaded, getAssets, getTimeSeries])

  return (
    <GlobalContext.Provider
      value={{ assets, setFirstDate, firstDate, setSecondDate, secondDate, chartData, assetsLoaded }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
