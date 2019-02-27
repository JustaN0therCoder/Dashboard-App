export default function(historical){
  return{

    chart: {
      type: 'area'
    },
    title: {
      text: 'Page users'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name} {point.y:,.0f}'
    },
    plotOptions: {
      area: {
        pointStart: 1,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 0,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: historical
  }
}
