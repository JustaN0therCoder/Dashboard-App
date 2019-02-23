export default function(historical){
  return{

    title: {
      text: ''
    },

    yAxis: {
      title: {
        text: 'Email Campaign'
      }
    },
    xAxis:{type: 'datetime'},
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2018
      }
    },

    series: historical,
    // These add more lines to the graph, Saving for future expirmentation
    // {
    //   name: 'Manufacturing',
    //   data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    // }
    //, {
    //   name: 'Sales & Distribution',
    //   data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    // }, {
    //   name: 'Project Development',
    //   data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    // }, {
    //   name: 'Other',
    //   data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    // }

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}
