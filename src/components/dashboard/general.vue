<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding: 10px 10px;
    "
  >
    <div
      style="display: flex; flex-direction: row; height: 100%; margin-top: 5px"
    >
      <div style="width: 100%">
        <div style="display: flex; flex-direction: column; align-items: center">
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
            <button
              class="relative w-max two"
              type="button"
              v-on:click="downloadCSV"
            >
              <div>
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

export default {
  name: "General",
  data() {
    return {
      allStats: {},
      downloadAllData: {},
      series: [],
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
        dataLabels: {
          enabled: true,
          enabledOnSeries: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        },
        labels: [],
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
            name: "Disappointed",
            type: "column",
            data: [
              stats[0].question1_Disappointed,
              stats[0].question2_Disappointed,
              stats[0].question3_Disappointed,
              stats[0].question4_Disappointed,
              stats[0].question5_Disappointed,
              stats[0].question6_Disappointed,
              stats[0].question7_Disappointed,
              stats[0].question8_Disappointed,
              stats[0].question9_Disappointed,
            ],
          },
          {
            name: "SlightlyDisappointed",
            type: "column",
            data: [
              stats[0].question1_SlightlyDisappointed,
              stats[0].question2_SlightlyDisappointed,
              stats[0].question3_SlightlyDisappointed,
              stats[0].question4_SlightlyDisappointed,
              stats[0].question5_SlightlyDisappointed,
              stats[0].question6_SlightlyDisappointed,
              stats[0].question7_SlightlyDisappointed,
              stats[0].question8_SlightlyDisappointed,
              stats[0].question9_SlightlyDisappointed,
            ],
          },
          {
            name: "Okay",
            type: "column",
            data: [
              stats[0].question1_Okay,
              stats[0].question2_Okay,
              stats[0].question3_Okay,
              stats[0].question4_Okay,
              stats[0].question5_Okay,
              stats[0].question6_Okay,
              stats[0].question7_Okay,
              stats[0].question8_Okay,
              stats[0].question9_Okay,
            ],
          },
          {
            name: "Good",
            type: "column",
            data: [
              stats[0].question1_Good,
              stats[0].question2_Good,
              stats[0].question3_Good,
              stats[0].question4_Good,
              stats[0].question5_Good,
              stats[0].question6_Good,
              stats[0].question7_Good,
              stats[0].question8_Good,
              stats[0].question9_Good,
            ],
          },
          {
            name: "Exceptional",
            type: "column",
            data: [
              stats[0].question1_Exceptional,
              stats[0].question2_Exceptional,
              stats[0].question3_Exceptional,
              stats[0].question4_Exceptional,
              stats[0].question5_Exceptional,
              stats[0].question6_Exceptional,
              stats[0].question7_Exceptional,
              stats[0].question8_Exceptional,
              stats[0].question9_Exceptional,
            ],
          },
        ]);
      })
      .catch((err) => {
        this.toast.error(err.message || "Something went wrong", {
          timeout: 2000,
        });
      });
  },
  methods: {
    downloadCSV() {
      this.$apollo
        .query({
          query: gql`
            query getAllSurveys {
              getAllSurveys {
                firstName
                surname
                question1
                question2
                question3
                question4
                question5
                question6
                question7
                question8
                question9
                question10
                question11
                question12
                question13
                dateOfSubmit
              }
            }
          `,
        })
        .then(({ data }) => {
          this.downloadAllData = data.getAllSurveys;
        })
        .catch((err) => {
          this.toast.error(err.message || "Something went wrong");
        });

      const options = {
        fieldSeparator: ",",
        quoteStrings: '"',
        decimalSeparator: ".",
        showLabels: true,
        showTitle: false,
        title: "Surveys ",
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      };

      const csvExporter = new ExportToCsv(options);

      csvExporter.generateCsv(this.downloadAllData);
    },
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