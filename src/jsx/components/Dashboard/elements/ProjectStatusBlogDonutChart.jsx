import React from "react";
import ReactApexChart from "react-apexcharts";

class ProjectStatusBlogDonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        series: [30, 40, 20, 10],

      options: {
        chart: {
			type: 'donut',
			width: 250,
		},
        colors: ['#FF9F00', 'var(--primary)', '#3AC977','#FF5E5E'],
        labels: ["Compete", "Pending", "Yet to Start", "Cancelled"],
        dataLabels: {
            enabled: false,
        },      
        
        legend: {
          show: false,
        },
        plotOptions: {          
            pie: {
                donut: {
                  size: '90%',
                  labels: {
                      show: true,
                      name: {
                          show: true,
                          offsetY: 12,
                      },
                      value: {
                          show: true,
                          fontSize: '24px',
                          fontFamily:'Arial',
                          fontWeight:'500',
                          offsetY: -17,
                      },
                      total: {
                          show: true,
                          fontSize: '11px',
                          fontWeight:'500',
                          fontFamily:'Arial',
                          label: 'Total projects',
                         
                          formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                              return a + b
                            }, 0)
                          }
                      }
                  }
                }
            }

        },
       
      },
    };
  }

  render() {
    return (
        <div id="projectChart" className="project-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={250}
        />
      </div>
    );
  }
}

export default ProjectStatusBlogDonutChart;