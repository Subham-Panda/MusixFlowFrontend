import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import SmallLoader from './SmallLoader';

const GET_GRAPH_DATA = gql`
    query {
      minteds{
        timestamp
        mintPrice
      }
    }
`


const Totalbalancechart = () => {
  const { error, loading, data } = useQuery(GET_GRAPH_DATA);
  const [labels, setlabels] = useState([]);
  const [values, setvalues] = useState([]);

  useEffect(() => {
    if (data) {
      let templabels = [];
      let tempvalues = []
      data.minteds.forEach(item => {
        templabels.push(new Date(item.timestamp * 1000).toLocaleString())
        tempvalues.push(item.mintPrice)
      })
      setvalues(tempvalues);
      setlabels(templabels);
    }
  }, [data]);

  const graphdata = {
    labels: labels,

    datasets: [
      {
        data: values,
        fill: true,
        backgroundColor: 'rgba(87, 47, 163, 1)',

        borderCapStyle: "round",
        borderJoinStyle: 'miter'
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
  return (
    <>
      {
        loading ? <SmallLoader /> : <Line data={graphdata} options={options} height={250} />
      }
    </>
  )
}


export default Totalbalancechart;