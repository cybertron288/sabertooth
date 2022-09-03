import React, { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"


const MainChart = () => {
    const  { chartData } = useContext(GlobalContext)
    const [Data, setData] = useState([])
    useEffect(() => {
      let updatedChart = chartData.map((item, index)=>{
        return { ...item, label: index }
      })
      setData(updatedChart)
    
    }, [chartData])
    
  return (
    <>
      <ResponsiveContainer width="100%" height="95%">
        <AreaChart
          data={Data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DC74C6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#DC74C6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E2795B" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E2795B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="label" />
          <YAxis />
          <CartesianGrid />
          <Tooltip />
          <Area
            dataKey="rate_open"
            stroke="#DC74C6"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            dataKey="rate_close"
            stroke="#E2795B"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default MainChart
