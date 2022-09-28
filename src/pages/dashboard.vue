<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding: 20px 30px;
    "
  >
    <div
      class="border-b-2"
      style="display: flex; justify-content: space-between; align-items: center"
    >
      <img src="@/assets/logo.png" style="height: 80px; margin-bottom: 10px" />

      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        "
        v-on:click="this.$router.push('/login')"
      >
        <span class="mb-1 cursor-pointer">logout</span>
        <img
          src="@/assets/icon-logout.png"
          style="height: 30px; margin-bottom: 10px"
        />
      </div>
    </div>
    <div
      style="display: flex; flex-direction: row; height: 100%; margin-top: 5px"
    >
      <div style="width: 100%">
        <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 3%;
          "
        >
          <div>
            <h1 class="text-2xl">Customer Satisfaction Survey Data Analysis</h1>
          </div>
          <div id="chart" style="width: 100%">
            <apexchart
              type="bar"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
          <div>
            <button class="relative w-max two" type="button">
              <div class="py-2">
                <span>Download All Data</span>
                <span
                  class="
                    absolute
                    -bottom-1
                    left-1/2
                    w-0
                    transition-all
                    h-1
                    bg-cenoredgreen
                  "
                ></span>
                <span
                  class="
                    absolute
                    -bottom-1
                    right-1/2
                    w-0
                    transition-all
                    h-1
                    bg-cenoredgreen
                  "
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import VueApexCharts from "vue3-apexcharts";
import { ExportToCsv } from "export-to-csv";
import { ref } from "vue";

export default {
  name: "DashboardLanding",
  data() {
    return {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21, 40, 51],
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32, 49, 28],
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20, 8, 13],
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4, 5, 3],
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10, 21, 8],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: "Fiction Books Sales",
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          labels: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
};
</script>

<style>
.one:hover span:last-child {
  width: 100%;
}

.two:hover span {
  width: 50%;
}

.three:hover span {
  height: 100%;
}
</style>