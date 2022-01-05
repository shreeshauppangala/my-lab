import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import sunburst from 'highcharts/modules/sunburst.js';
sunburst(Highcharts);

let options = {
  chart: {
    height: '60%'
},
  title: { text: undefined },
  credits: {
    enabled: false
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '{point.name}'
  },
  series: [
    {
      type: 'sunburst',
      data: [
        {
          name: '$2M<br/>committed',
          id: 'id-1',
          color: '#15B9A9'
        },
        {
          name: '$1.4M <br/>total called',
          id: 'id-2',
          parent: 'id-1',
          value: 2,
          color: '#44D7B6'
        },
        {
          name: '$600K <br/>yet to call',
          parent: 'id-1',
          value: 1,
          color: '#F7B500'
        },
        {
          name: '$50K <br/>contributed paid',
          parent: 'id-2',
          value: 1,
          color: '#44D7B6'
        },
        {
          name: '$1M <br/>outstanding',
          parent: 'id-2',
          value: 1,
          color: '#44D7B6'
        }
      ],
      allowDrillToNode: true,
      credits: {
        enabled: false
      },
      cursor: 'pointer',
      dataLabels: {
        borderWidth: 0,
        filter: { property: 'innerArcLength', operator: '>', value: 16 },
        style: { borderColor: '#fff', textShadow: false, textOutline: null, color: '#fff', wordWrap: 'break-word' }
      },
      levels: [
        {
          level: 1,
          levelIsConstant: false,
          dataLabels: {
            filter: { property: 'outerArcLength', operator: '>', value: 64 },
            style: { fontSize: '8px' }
          },
          colorByPoint: true
        },
        { level: 2, colorVariation: { key: 'brightness', to: -0.3 } },
        { level: 3, colorVariation: { key: 'brightness', to: -0.3 } }
      ]
    }
  ]
};

export default function LPAccountFundPieChart() {
  return (
    <>
      <div className="_pie_chart_main">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
