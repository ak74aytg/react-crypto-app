import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2"
import {
 Chart as 
 ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
} from "chart.js"


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


function Chart(props) {
    let price = [];
    let dates = [];
    for(let i=0;i<props.details.length;i++){
        if (props.days === "24h") dates.push(new Date(props.details[i][0]).toLocaleTimeString());
        else dates.push(new Date(props.details[i][0]).toLocaleDateString());
        price.push(props.details[i][1]);
    }

    const data = {
        labels: dates,
        datasets: [
          {
            label: `Price in ${props.currency}`,
            data: price,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)",
          },
        ],
      };
    

  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
    />
  )
}

export default Chart