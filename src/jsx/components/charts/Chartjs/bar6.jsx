import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Black",
          backgroundColor: "rgba(44, 44, 44, 1)",
          hoverBackgroundColor: "rgba(44, 44, 44, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Glacier",
          backgroundColor: "rgba(149, 105, 255, 1)",
          hoverBackgroundColor: "rgba(149, 105, 255, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Red",
          backgroundColor: "rgba(250,56,64, 1)",
          hoverBackgroundColor: "rgba(250,56,64, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
      ],
    };
    const options = {
      plugins:{
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
		    tooltips: {
			   mode: "index",
			    intersect: false,
		    },
		    responsive: true,
	   },
      scales: {
        x:
          {
            stacked: true,
            grid:{
              color:"rgba(255, 255, 255, 0.1)"
            }
          },
        y:
          {
            stacked: true,
            grid:{
              color:"rgba(255, 255, 255, 0.1)"
            }
          },
      },
    };

    return (
      <>
        <Bar data={data} height={150} options={options} />
      </>
    );
  }
}

export default BarChart6;
