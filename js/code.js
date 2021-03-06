Highcharts.chart('container', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Sexual Violence in Armed Conflicts'
    },

    subtitle: {
        text: 'Source: SVAC - <a href="http://www.sexualviolencedata.org/dataset/">click here for more info</a>'
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Reported sexual violence'
        },
        labels: {
            format: '{value}'
        },
        // min:5,
        categories: countries,

    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Reported sexual violence'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2,
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Total SV reported :</th><td>{point.y}</td></tr>'+
            '<tr><th>Rape :</th><td>{point.rape}</td></tr>'+
            '<tr><th>Sexual torture :</th><td>{point.sexual_torture}</td></tr>'+
            '<tr><th>Sexual slavery :</th><td>{point.sexual_slavery}</td></tr>',
            // '<tr><th>Other sexual violence form :</th><td>{point.undetermined}</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
      bubble: {
          minSize: 10,
          maxSize: 100
      },
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.country}'
            }
        }
    },

    series: [{
           data: datas
            }]

});
