import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class PowerBar extends Component {
  render() {
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: "0",
          backgroundColor: "rgba(255, 255, 255, .8)",
          hoverBackgroundColor: "rgba(255, 255, 255, .8)",
		      barThickness : 40
        },
      ],
    };

    const options = {
      plugins:{
        legend: false,
          responsive: true
        },
      maintainAspectRatio: false,
      scales: {
        y: 
          {
            display: false,
            max: 100,
            min: 0,
            ticks: {
              // beginAtZero: true,
              display: false,
              stepSize: 10,
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        
        x: 
          {
            display: false,
            barPercentage: 0.5,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        
      },
    };

    return (
      <div 
        // style={{ height: 140 }}
        className="pb-1"
      >
        <Bar data={data} height={140} options={options} />
      </div>
    );
  }
}

export default PowerBar;
