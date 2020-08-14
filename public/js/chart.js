Highcharts.chart('container', {
    title: {
        text: ''
    },
    subtitle: {
        textg: ''
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
    },
    labels: {
        items: [{

            style: {
                left: '50px',
                top: '18px',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'black'
            }
        }]
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    tooltip: {
      
        valueSuffix: '명'
    },
    series: [{
        type: 'pie',
        name: '확진자',
        data: [{
            name: '경기도',
            y: chart_size,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: '충청도',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: '전라도',
            y: 19,
            color: Highcharts.getOptions().colors[3] // Joe's color
        }, {
            name: '강원도',
            y: 19,
            color: Highcharts.getOptions().colors[4] // Joe's color
        }, {
            name: '경상도',
            y: 19,
            color: Highcharts.getOptions().colors[5] // Joe's color
        }, {
            name: '제주도',
            y: 19,
            color: Highcharts.getOptions().colors[6] // Joe's color
        }],

        size: 242,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});