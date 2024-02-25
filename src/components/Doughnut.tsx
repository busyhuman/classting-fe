import { ChartItem } from 'chart.js'
import { useEffect } from 'react'
import Chart from 'chart.js/auto'

interface Props {
  data: Array<number>
}

export default function Doughnut({ data = [] }: Props) {
  useEffect(() => {
    const chartStatus = Chart.getChart('myChart')
    if (chartStatus !== undefined) {
      chartStatus.destroy()
    }
    const ctx = document.getElementById('myChart')
    new Chart(ctx as unknown as ChartItem, {
      type: 'doughnut',
      data: {
        labels: ['정답 수', '오답 수'],
        datasets: [
          {
            data,
            backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
            hoverOffset: 4,
          },
        ],
      },
    })
  }, [])
  return (
    <div className="w-40 h-40">
      <canvas id="myChart"></canvas>
    </div>
  )
}
