let pathMap = echarts.init(document.querySelector('#main'))

let mapOption = {
  title: {
    text: '洪洞大槐树移民路线可视化',
    textStyle: {
      color: 'white',
    }
  },

  // 调色盘
  color: ['red'],

  /** 地理坐标系组件。 */
  geo: {
    map: 'china',
    roam: true,
    zoom: 1.2,
    scaleLimit: {
      max: 2,
      min: 0.5
    },
    emphasis: {
      label: {
        show: false
      },
      itemStyle: {
        areaColor: '#92959e'
      }
    },
  },

  series: [
    // 用于带有起点和终点信息的线数据的绘制，路线的可视化。
    {
      type: 'lines',
      name: '大槐树移民路线',
      zlevel: 1,
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#70f3ff' // 0% 处的颜色
          }, {
            offset: 1, color: 'blue' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
 
      ,
        width: 1,
        opacity: 1,
        curveness: 0.2
      },
      // 线特效的配置
      effect: {
        show: true,
        // 特效动画的时间，单位为 s。
        period: 14,
        symbol: 'arrow',
        symbolSize: 6,
        trailLength: 0.2
      },
      data: data.line,
    },

    // 绘制涟漪特效的地点
    {
      type: 'effectScatter',
      name: '出发地',
      coordinateSystem: 'geo',
      zlevel: 2,
      symbolSize: 5,
      rippleEffect: {
        period: 6,
        scale: 5,
        brushType: 'stroke'
        // brushType: 'fill'
      },
      label: {
        show: true,
        offset: [32, 0],
        formatter: function (params) {
          return params.data[2]
        },
        color: 'black',
        fontSize: 14,
        // 文字描边
        textBorderColor: 'white',
        textBorderWidth: 1
      },
      data: [...data.point,
        {
          value: [111.5, 36.08],
  
          //自定义特殊 itemStyle，仅对该数据项有效
          label: {
              offset: [0,0],
              formatter: '',
              textBorderColor: 'white',
              textBorderWidth: 2
            },
          itemStyle: {}
        },
        ]
      }
    ]
  
  }
pathMap.setOption(mapOption)
