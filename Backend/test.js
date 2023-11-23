// const { InfluxDB,Point} = require('@influxdata/influxdb-client')

// const url = 'http://localhost:8086'
// const token = 'qcgzfBkmbWZjelK1CJdOBvotfIwUS3YTGnIbkn_3SlLfANmQ9dgPN0s2pdOfo9qma64d4dumYGnE19iYt246Wg=='
// const org = 'KMUTNB'
// const bucket = 'Test'

// const influxDB = new InfluxDB({url,token})
// const queryApi = influxDB.getQueryApi(org)
// const fluxQuery =   `
//                     from(bucket:'Test') 
//                     |> range(start: -1h, stop: -10m)
//                     `
// console.log(fluxQuery)

// const retrievedb = async () =>{
//     for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)){
//       const o = tableMeta.toObject(values)
//       console.log(`${o._time}`)
//     }
//     }

// retrievedb()
const { InfluxDB } = require('@influxdata/influxdb-client');

async function retrieveData() {
  const influxDB = new InfluxDB({
    url: "https://eu-central-1-1.aws.cloud2.influxdata.com/",
    token: "aveL8vq653VXaypg3TJbwGYx-WBDldyDZrye5aS4gpCjx0tJ8kPJmxITibIAfe2b14_3UMSdIGW2bR0jtF2Qgg==",
  });

  const query = `
    from(bucket: "test_influx")
      |> range(start: 0)
      |> filter(fn: (r) => r._measurement == "PowerMeter1" and r._field == "Voltage")
  `;

  const allRows = [];

  await influxDB.getQueryApi("253d16b9bf102ea9").queryLines(query, {
    next(line, tableMeta) {
      // Handle each row of data
      console.log(line, tableMeta);
      allRows.push({ line, tableMeta }); // Accumulate rows
    },
    error(error) {
      console.error(error);
    },
    complete() {
      // Query completed
      console.log('Query completed');

      // Now you can work with allRows array
      console.log('All Rows:', allRows);

    },
  });
}

retrieveData();


