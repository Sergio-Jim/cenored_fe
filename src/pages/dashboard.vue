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
              ref="statistics"
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
      allStats: {},
      // series: [
      //   {
      //     name: "Disappointed",
      //     data: [44, 55, 41, 37, 22, 43, 21, 40, 51],
      //   },
      //   {
      //     name: "Slightly disappointed",
      //     data: [53, 32, 33, 52, 13, 43, 32, 49, 28],
      //   },
      //   {
      //     name: "Okay",
      //     data: [12, 17, 11, 9, 15, 11, 20, 8, 13],
      //   },
      //   {
      //     name: "Good",
      //     data: [9, 7, 5, 8, 6, 9, 4, 5, 3],
      //   },
      //   {
      //     name: "Exceptional",
      //     data: [25, 12, 19, 32, 25, 24, 10, 21, 8],
      //   },
      // ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
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
          text: "Customer Satisfaction Survey Results",
        },
        xaxis: {
          categories: [
            "Question 1",
            "Question 2",
            "Question 3",
            "Question 4",
            "Question 5",
            "Question 6",
            "Question 7",
            "Question 8",
            "Question 9",
          ],
          labels: {
            formatter: function (val) {
              return val + "%";
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
              return val;
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
  created() {
    this.$apollo
      .query({
        query: gql`
          query getStatistics {
            getStatistics {
              question1_Exceptional
              question1_Good
              question1_Okay
              question1_SlightlyDisappointed
              question1_Disappointed
              question2_Exceptional
              question2_Good
              question2_Okay
              question2_SlightlyDisappointed
              question2_Disappointed
              question3_Exceptional
              question3_Good
              question3_Okay
              question3_SlightlyDisappointed
              question3_Disappointed
              question4_Exceptional
              question4_Good
              question4_Okay
              question4_SlightlyDisappointed
              question4_Disappointed
              question5_Exceptional
              question5_Good
              question5_Okay
              question5_SlightlyDisappointed
              question5_Disappointed
              question6_Exceptional
              question6_Good
              question6_Okay
              question6_SlightlyDisappointed
              question6_Disappointed
              question7_Exceptional
              question7_Good
              question7_Okay
              question7_SlightlyDisappointed
              question7_Disappointed
              question8_Exceptional
              question8_Good
              question8_Okay
              question8_SlightlyDisappointed
              question8_Disappointed
              question9_Exceptional
              question9_Good
              question9_Okay
              question9_SlightlyDisappointed
              question9_Disappointed
            }
          }
        `,
      })
      .then(({ data }) => {
        var stats = data.getStatistics;
        this.allStats = data.getStatistics;

        this.$refs.statistics.updateSeries([
          {
            name: "question 1",
            type: "column",
            data: stats.map((stat) => {
              console.log(
                stat.question1_Exceptional,
                stat.question1_Good,
                stat.question1_Okay,
                stat.question1_SlightlyDisappointed,
                stat.question1_Disappointed
              );
              return (
                stat.question1_Exceptional,
                stat.question1_Good,
                stat.question1_Okay,
                stat.question1_SlightlyDisappointed,
                stat.question1_Disappointed
              );
            }),
          },
          // {
          //   name: "question 2",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question2_Exceptional,
          //       stat.question2_Good,
          //       stat.question2_Okay,
          //       stat.question2_SlightlyDisappointed,
          //       stat.question2_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 3",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question3_Exceptional,
          //       stat.question3_Good,
          //       stat.question3_Okay,
          //       stat.question3_SlightlyDisappointed,
          //       stat.question3_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 4",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question4_Exceptional,
          //       stat.question4_Good,
          //       stat.question4_Okay,
          //       stat.question4_SlightlyDisappointed,
          //       stat.question4_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 5",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question5_Exceptional,
          //       stat.question5_Good,
          //       stat.question5_Okay,
          //       stat.question5_SlightlyDisappointed,
          //       stat.question5_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 6",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question6_Exceptional,
          //       stat.question6_Good,
          //       stat.question6_Okay,
          //       stat.question6_SlightlyDisappointed,
          //       stat.question6_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 7",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question7_Exceptional,
          //       stat.question7_Good,
          //       stat.question7_Okay,
          //       stat.question7_SlightlyDisappointed,
          //       stat.question7_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 8",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question8_Exceptional,
          //       stat.question8_Good,
          //       stat.question8_Okay,
          //       stat.question8_SlightlyDisappointed,
          //       stat.question8_Disappointed,
          //     ];
          //   }),
          // },
          // {
          //   name: "question 9",
          //   type: "column",
          //   data: stats.map((stat) => {
          //     return [
          //       stat.question9_Exceptional,
          //       stat.question9_Good,
          //       stat.question9_Okay,
          //       stat.question9_SlightlyDisappointed,
          //       stat.question9_Disappointed,
          //     ];
          //   }),
          // },
        ]);
      })
      .catch((err) => {
        this.toast.error(err.message || "Something went wrong", {
          timeout: 2000,
        });
      });
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

<!-- gql`
          query getStatistics {
            getStatistics {
              question1_Exceptional
              question1_Good
              question1_Okay
              question1_SlightlyDisappointed
              question1_Disappointed
              question2_Exceptional
              question2_Good
              question2_Okay
              question2_SlightlyDisappointed
              question2_Disappointed
              question3_Exceptional
              question3_Good
              question3_Okay
              question3_SlightlyDisappointed
              question3_Disappointed
              question4_Exceptional
              question4_Good
              question4_Okay
              question4_SlightlyDisappointed
              question4_Disappointed
              question5_Exceptional
              question5_Good
              question5_Okay
              question5_SlightlyDisappointed
              question5_Disappointed
              question6_Exceptional
              question6_Good
              question6_Okay
              question6_SlightlyDisappointed
              question6_Disappointed
              question7_Exceptional
              question7_Good
              question7_Okay
              question7_SlightlyDisappointed
              question7_Disappointed
              question8_Exceptional
              question8_Good
              question8_Okay
              question8_SlightlyDisappointed
              question8_Disappointed
              question9_Exceptional
              question9_Good
              question9_Okay
              question9_SlightlyDisappointed
              question9_Disappointed
            }
          }
        ` -->