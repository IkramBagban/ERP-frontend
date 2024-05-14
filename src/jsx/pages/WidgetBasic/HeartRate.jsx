import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class HeartRate extends Component {
  render() {
    const data = {
      labels: [ 73, 53,
        50,
        67,
        3,
        56,
        19,
        59,
        37,
        32,
        40,
        26,
        71,
        19,
        4,
        53,
        55,
        31,
        37,
      ],
      datasets: [
        {
          label: "My First dataset",
          data: [
            73,
            53,
            50,
            67,
            3,
            56,
            19,
            59,
            37,
            32,
            40,
            26,
            71,
            19,
            4,
            53,
            55,
            31,
            37,
            67,
            10,
            21,
          ],
          borderColor: "rgba(13,153, 255,1)",
          borderWidth: "0",
          backgroundColor: "rgba(13,153, 255,1)",
          barThickness : 8.5
        },
      ],
    };

    const options = {
      plugins:{
		  legend: false,
			responsive: true,
	  },
      maintainAspectRatio: false,
      scales: {
        y :
          {
            display: false,
            ticks: {
              beginAtZero: true,
              display: false,
              max: 100,
              min: 0,
              stepSize: 7,
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        
        x: 
          {
            display: false,
            //   barPercentage: 1.2,
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
        style={{ height: 100, width: 200, display: "inline-block" }}

      >
        <Bar data={data}           
          options={options} 
        />
      </div>
    );
  }
}

export default HeartRate;
