Highcharts.chart('GDP', {

    title: {
        text: 'United States GDP 2009-2018'
    },

    subtitle: {
        text: 'Source: The World Bank'
    },

    yAxis: {
        title: {
            text: '$ in trillions'
        }
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2009
        }
    },

    series: [{
        name: 'United States GDP',
        data: [14448933025000, 14992052727000, 15542581104000, 16197007349000, 16784849190000, 17521746534000, 18219297584000, 18707188235000, 19485393853000, 20494100000000]
    }],

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

});




Highcharts.chart('exports', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Total USA Merchandise Exports to World'
    },
    subtitle: {
        text: 'Source: International Trade Administration, US Department of Commerce'
    },
    xAxis: {
        categories: [
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ],
        crosshair: true
    },
    yAxis: {
        min: 1000000000000,
        title: {
            text: '$ in billions'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total USA Merchandise Exports',
        data: [1056042963028, 1278494525839, 1482507755226, 1545820839892, 1578516879950, 1621873792910, 1503328349746, 1451459683815, 1546473450240, 1665992031822]

    }]
});
