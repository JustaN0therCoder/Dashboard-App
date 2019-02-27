export default function(historical){
  return{
    chart: {
      type: 'column'
    },

    title: {
      text: 'Total Email Stats'
    },

    xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May']
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Number of fruits'
      }
    },

    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },

    series: historical
  }
}
