import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';




const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgba(87, 47, 163, 1)',
        
        borderCapStyle:"round",
        borderJoinStyle:'miter'
      },
    ],
  };
  
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  

class Totalbalancechart extends Component{
    render() {
        return(
            <Line data={data} options={options} height={250} />
        )
    }
}


export default Totalbalancechart