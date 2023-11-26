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
// const { InfluxDB } = require('@influxdata/influxdb-client');

// async function retrieveData() {
//   const influxDB = new InfluxDB({
//     url: "https://eu-central-1-1.aws.cloud2.influxdata.com/",
//     token: "aveL8vq653VXaypg3TJbwGYx-WBDldyDZrye5aS4gpCjx0tJ8kPJmxITibIAfe2b14_3UMSdIGW2bR0jtF2Qgg==",
//   });
//   const query = `
//     from(bucket: "test_influx")
//       |> range(start: 0)
//       |> filter(fn: (r) => r._measurement == "PowerMeter1" and r._field == "Voltage")
//   `;
//   const Lines = [];
//   await influxDB.getQueryApi("253d16b9bf102ea9").queryLines(query, {
//     next(line, tableMeta) {
//       // Handle each row of data
//       console.log(line, tableMeta);
//       Lines.push({ line, tableMeta }); // Accumulate rows
//     },
//     error(error) {
//       console.error(error);
//     },
//     complete() {
//       // Query completed
//       console.log('Query completed');
//       console.log('Lines:', Lines);
//     },
//   });
// }
// retrieveData();


// const data = [
//   {
//     line: ',,0,1970-01-01T00:00:00Z,2023-11-25T08:54:39.108667335Z,2023-11-22T04:24:51.790678123Z,229.8,Voltage,PowerMeter1'
//   }
// ];

// // Extract the timestamp from the last index
// const line = data[0].line;
// const fields = line.split(',');

// // // Assuming the timestamp is at the 4th index (0-indexed)
// // const lastTimestamp = fields[5];

// require('dotenv').config();

// // Load environment variables from the .env file in the root folder

// const x = process.env.INFLUX_ORG
// // Now you can access environment variables using process.env
// console.log(x);
// // console.log("Last Timestamp:", lastTimestamp);


function convertUnixTimestampToDateTime(unixTimestamp) {
  // Multiply by 1000 to convert seconds to milliseconds
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);

  // Format the date and time
  const year = dateObject.getFullYear();
  const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObject.getDate()).slice(-2);
  const hours = ('0' + dateObject.getHours()).slice(-2);
  const minutes = ('0' + dateObject.getMinutes()).slice(-2);
  const seconds = ('0' + dateObject.getSeconds()).slice(-2);

  // Construct the formatted date and time string
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}

// Example usage:
const unixTimestamp = 1700905988; // Replace with your Unix timestamp
const formattedDateTime = convertUnixTimestampToDateTime(unixTimestamp);
console.log(typeof(TyeformattedDateTime))
const x = []
x.push(formattedDateTime.split(' '))
console.log(x)



