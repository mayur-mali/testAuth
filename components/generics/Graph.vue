<template>
  <canvas
    ref="canvas"
    class="p-4"
  ></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Graph',

  props: {
    labels: {
      type: Array,
      default: () => [],
    },

    type: {
      type: String,
      default: 'line',
      validator: (value) => {
        return [
          'pie',
          'bar',
          'line',
          'radar',
          'doughnut',
          'polarArea',
        ].includes(value);
      },
    },

    datasets: {
      type: Array,
      default: () => [],
      validator: (items) => {
        let isValid = true;
        for (let i = 0; i < items.length; i++) {
          if (!('label' in items[i]) || !('data' in items[i])) {
            isValid = false;
            break;
          }
        }

        return isValid;
      },
    },

    options: {
      type: Object,
      default: () => {
        return {
          responsive: true,
        };
      },
    },
  },

  data () {
    return {
      chart: null,
    };
  },

  mounted () {
    this.$nextTick(function () {
      this.chart = new Chart(this.$refs.canvas.getContext('2d'), {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: this.datasets,
        },
        options: this.options,
      });
    });
  },

  beforeDestroy () {
    this.chart.destroy();
  },
};
</script>
