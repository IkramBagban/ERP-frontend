import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  defaultFontFamily: "Poppins",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: "rgba(255, 29, 45,1)",
      borderWidth: "3",
      backgroundColor: "rgba(255, 29, 45, 0.1)",
	    fill:true,
	    tension:0.4
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
          padding: 5,
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
class GradientArea extends Component {
  render() {
    return (
      <>
        <Line data={data} options={options} height={150} />
      </>
    );
  }
}

export default GradientArea;
