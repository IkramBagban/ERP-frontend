import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
	defaultFontFamily: "Poppins",
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
	datasets: [
		{
      label: "My First dataset",
      data: [25, 20, 60, 41, 66, 45, 80],
      borderColor: 'rgba(0, 0, 1128, .3)',
      borderWidth: "1",
      backgroundColor: 'rgba(44, 44, 44,1)', 
      pointBackgroundColor: 'rgba(0, 0, 1128, .3)',
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
        min: 0,	
        max: 100,
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
class BasicArea extends Component {
  render() {
    return <Line data={data} options={options} height={150} />;
  }
}

export default BasicArea;
