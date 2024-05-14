import React, { useState, useRef, useLayoutEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {Nav, Tab} from 'react-bootstrap';

const EarningTab = [
	{ title: 'Day', type:'day' },
	{ title: 'Week', type:'week'},
	{ title: 'Month', type:'month'},
	{ title: 'Year', type:'year'},	
];

const  EarningChart = () =>{
	const earningRef = useRef();
	const chartWidth = useRef(null);
	const [width, setWidth] = useState(0);
	useLayoutEffect(() => {
		setWidth(chartWidth.current.offsetWidth);
	}, []);

    const  series = [
        {
          name: "Net Profit",
          data: [700,650, 680, 600, 700, 610,710,620],
        },
    ];
   const options = {
        chart: {
            type: 'area',
			height: 350,        	
            width: width + 55,
			offsetX : -45,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },           
        },
        colors:['var(--primary)'],
       
		dataLabels: {
		  enabled: false,
		},
        legend: {
			show: false,
		},
		stroke: {
            show: true,
            width: 2,
            curve:'straight',
            colors:['var(--primary)'],
        },
		grid: {
			show:true,
			borderColor: '#eee',
			xaxis: {
				lines: {
					show: true
				}
			},   
			yaxis: {
				lines: {
					show: false
				}
			},  
		},
		yaxis: {			
			show: true,
			tickAmount: 4,
			min: 0,
			max: 800,
			labels:{
				offsetX:50,
			}
		},
		xaxis: {
			
			categories: ['','May ', 'June', 'July', 'Aug', 'Sep ', 'Oct', ""],
			overwriteCategories: undefined,
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: true,
				// offsetX:5,
				style: {
					fontSize: '12px',

				}
			},
		},
		fill: {
		  opacity: 0.5,
		  colors:'var(--primary)',
		  type: 'gradient', 
		  gradient: {
			colorStops:[ 
				
				{
				  offset: 0.6,
				  color: 'var(--primary)',
				  opacity: .2
				},
				{
				  offset: 0.6,
				  color: 'var(--primary)',
				  opacity: .15
				},
				{
				  offset: 100,
				  color: 'white',
				  opacity: 0
				}
			  ],
			  
			}
		},
		tooltip: {
			enabled:true,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + ""
				}
			}
		}
   }   

   const dataSeries = (seriesType) =>{   
		var columnData = [];		
		switch(seriesType) {
			case "day":
				columnData = [700,650, 680, 650, 700, 610,710,620];
				break;
			case "week":
				columnData = [700,700, 650, 630, 700, 625,720,620];
				break;
			case "month":
				columnData = [700,650, 690, 640, 700, 670,710,620];
				break;
			case "year":
				columnData = [700,650, 590, 650, 700, 610,710,630];
				break;
			default:
				columnData = [700,650, 680, 650, 700, 610,710,620];
			}
		  earningRef.current.chart.ctx.updateSeries([
			{
				name: "Net Profit",
				data: columnData
			}
		]);
	}
    return (
		<div className="card-body px-0 overflow-hidden">
			<div className="total-earning">
				<h2>$6,743.00</h2>
				<Tab.Container defaultActiveKey={'Day'}>
					<Nav as="ul" className="nav nav-pills mb-3 earning-tab earning-chart" >
						{EarningTab.map((item, ind)=>(
							<Nav.Item as="li" key={ind}>
								<Nav.Link as="button" eventKey={item.title}
									onClick={()=>dataSeries(item.type)}
								>{item.title}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>					
					<div id="earningChart" ref={chartWidth}>
						<ReactApexChart
							options={options}
							series={series}
							type="area"
							height={350}	
							ref={earningRef}	
							width={width+55}
						/>
					</div>
					
				</Tab.Container>
			</div>	
		</div>		
    );
  
}

export default EarningChart;
