<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useToastStore } from '@/stores/toastStore'
import axios from 'axios'

const devicesMaps = ref([])
const series = ref([
  {
    name: 'Projector',
    data: [],
  },
  {
    name: 'Monitor',
    data: [],
  },
  {
    name: 'Robot Vacuum',
    data: [],
  },
])
const toast = useToastStore()
const { open } = toast

const router = useRouter()

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem('kumo')
const header = { headers: { Authorization: `Bearer ${token}` } }

// made by ai
const getLast7Days = () => {
  const categoriesList = []
  const today = new Date()

  for (let i = 0; i <= 6; i++) {
    const date = new Date()
    date.setDate(today.getDate() - i)

    const month = date.toLocaleString('en-US', { month: 'short' })
    const day = date.getDate()

    const suffix = getDaySuffix(day)

    categoriesList.push(`${month}-${day}${suffix}`)
  }

  return categoriesList
}

// made by ai
const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) return 'th'

  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false, // close the menu bar at the right top
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: getLast7Days(),
  },
  yaxis: {
    title: {
      text: 'Received Status',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter(val, { seriesIndex, dataPointIndex }) {
        const devices = devicesMaps.value[seriesIndex]?.[dataPointIndex] || []

        return `${val} received ${devices.join(', ')}`
      },
    },
  },
})

onMounted(async () => {
  try {
    const result = await axios.get(`${BASE_URL}/api/report/received`, header)
    if (result.data?.status == 2) {
      localStorage.removeItem('kumo')
      await router.push('/')
      return
    } else if (result.data?.status != 1) {
      return open('Something wrong!', 'error')
    }

    const { deviceMap, projector, monitor, robotVacuum } = result.data?.data
    devicesMaps.value = deviceMap
    series.value = [
      {
        name: 'Projector',
        data: projector,
      },
      {
        name: 'Monitor',
        data: monitor,
      },
      {
        name: 'Robot Vacuum',
        data: robotVacuum,
      },
    ]
  } catch (error) {
    console.log(error)
    open('error', 'error')
  }
})
</script>

<template>
  <div id="app" class="p-6">
    <ApexChart type="bar" height="350" :options="chartOptions" :series="series" />
  </div>
</template>
