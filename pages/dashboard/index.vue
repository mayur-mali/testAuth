<template>
  <div>
    <Graph
      :labels="labels"
      :datasets="datasets"
    />

    <Graph
      type="bar"
      :labels="labels"
      :datasets="datasets"
    />

    <Graph
      type="radar"
      :labels="labels"
      :datasets="datasets"
    />

    <Graph
      type="pie"
      :labels="labels"
      :datasets="datasets"
    />

    <Graph
      type="doughnut"
      :labels="labels"
      :datasets="datasets"
    />

    <Graph
      type="polarArea"
      :labels="labels"
      :datasets="datasets"
    />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  name: 'DashboardPage',
  middleware: 'auth',

  data () {
    return {
      labels: ['Jan', 'Feb', 'March'],
      datasets: [
        {
          label: '2020',
          data: [10, 20, 30],
          backgroundColor: 'rgb(255, 0, 0, 0.4)',
        },
        {
          label: '2021',
          data: [12, 22, 35],
          backgroundColor: 'rgb(0, 255, 0, 0.4)',
        },
        {
          label: '2022',
          data: [1, 2, 5],
          backgroundColor: 'rgba(0, 0, 255, 0.4)',
        },
      ],
    };
  },
};
</script>
