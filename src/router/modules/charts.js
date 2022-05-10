/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'las la-chart-pie'
  },
  children: [
    // {
    //   path: 'area-chart',
    //   component: () => import('@/views/charts/apex-area'),
    //   name: 'area-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Area Charts', noCache: true }
    // },
    // {
    //   path: 'line-chart',
    //   component: () => import('@/views/charts/apex-line'),
    //   name: 'line-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Line Charts', noCache: true }
    // },{
    //   path: 'column-chart',
    //   component: () => import('@/views/charts/apex-column'),
    //   name: 'column-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Column Charts', noCache: true }
    // },{
    //   path: 'bar-chart',
    //   component: () => import('@/views/charts/apex-bar'),
    //   name: 'bar-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Bar Charts', noCache: true }
    // },{
    //   path: 'mixed-chart',
    //   component: () => import('@/views/charts/apex-mixed'),
    //   name: 'mixed-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Mixed Charts', noCache: true }
    // },{
    //   path: 'timeline-chart',
    //   component: () => import('@/views/charts/apex-timeline'),
    //   name: 'timeline-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Timeline Charts', noCache: true }
    // },{
    //   path: 'candlestick-chart',
    //   component: () => import('@/views/charts/apex-candlestick'),
    //   name: 'candlestick-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Candlestick Charts', noCache: true }
    // },{
    //   path: 'bubble-chart',
    //   component: () => import('@/views/charts/apex-bubble'),
    //   name: 'bubble-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Bubble Charts', noCache: true }
    // },{
    //   path: 'scatter-chart',
    //   component: () => import('@/views/charts/apex-scatter'),
    //   name: 'scatter-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Scatter Charts', noCache: true }
    // },{
    //   path: 'heatmap-chart',
    //   component: () => import('@/views/charts/apex-heatmap'),
    //   name: 'heatmap-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Heatmap Charts', noCache: true }
    // },{
    //   path: 'pie-chart',
    //   component: () => import('@/views/charts/apex-pie'),
    //   name: 'pie-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Pie & Donut Charts', noCache: true }
    // },{
    //   path: 'radialbar-chart',
    //   component: () => import('@/views/charts/apex-radialbar'),
    //   name: 'radialbar-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Radialbar Charts', noCache: true }
    // },{
    //   path: 'radar-chart',
    //   component: () => import('@/views/charts/apex-radar'),
    //   name: 'radar-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Radar Charts', noCache: true }
    // },
    // {
    //   path: 'polararea-chart',
    //   component: () => import('@/views/charts/apex-polararea'),
    //   name: 'polararea-chart',
    //   meta: { icon: 'stonehub-dot', title: 'PolarArea Charts', noCache: true }
    // },
    // {
    //   path: 'sparkline-chart',
    //   component: () => import('@/views/charts/apex-sparkline'),
    //   name: 'sparkline-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Sparkline Charts', noCache: true }
    // },
    // {
    //   path: 'misc-chart',
    //   component: () => import('@/views/charts/apex-misc'),
    //   name: 'misc-chart',
    //   meta: { icon: 'stonehub-dot', title: 'Misc', noCache: true }
    // },
  ]
}

export default chartsRouter
