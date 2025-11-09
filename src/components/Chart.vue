<script setup>
import { ref } from 'vue'

const series = ref([
  {
    name: 'B phone',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Some Song',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Oppa',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
])

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
    categories: [
      'Nov-1st',
      'Nov-2nd',
      'Nov-3rd',
      'Nov-4th',
      'Nov-5th',
      'Nov-6th',
      'Nov-7th',
      'Nov-8th',
      'Nov-9th',
    ],
  },
  yaxis: {
    title: {
      text: 'Success Status',
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter(val) {
        return val + ' Update Success'
      },
    },
  },
})
</script>

<template>
  <div id="app" class="p-6">
    <ApexChart type="bar" height="350" :options="chartOptions" :series="series" />
  </div>
</template>
