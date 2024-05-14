import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "rgba(44, 44, 44, 1)",
      borderWidth: "1",
      backgroundColor: "rgba(44, 44, 44, .9)",
      tension:0.4,
      fill:true
    },
    {
      label: "My First dataset",
      data: [5, 25, 20, 41, 36, 75, 70],
      borderColor: "rgba(250, 56, 64,1)",
      borderWidth: "1",
      backgroundColor: "rgba(250, 56, 64, .5)",
      tension:0.4,
      fill:true
    },
  ],
};

const options = {
  plugins:{
	  legend: false,
  },
  scales: {
    y: 
      {
		    max: 100,
        min: 0,
        ticks: {
          beginAtZero: true,
          stepSize: 20,
          padding: 10,
        },
        grid:{
          color:"rgba(255, 255, 255, 0.1)"
        }
      },
    
    x: 
      {
        ticks: {
          padding: 5,
        },
        grid:{
          color:"rgba(255, 255, 255, 0.1)"
        }
      },
    
  },
};
class DualArea extends Component {
  render() {
    return (
      <>
        <Line data={data} options={options} height={150} />
      </>
    );
  }
}

export default DualArea;
