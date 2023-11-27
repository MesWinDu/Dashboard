// const { InfluxDB,Point} = require('@influxdata/influxdb-client')

// const url = 'http://localhost:8086'
// const token = 'qcgzfBkmbWZjelK1CJdOBvotfIwUS3YTGnIbkn_3SlLfANmQ9dgPN0s2pdOfo9qma64d4dumYGnE19iYt246Wg=='
// const org = 'KMUTNB'
// const bucket = 'Test'

// const influxDB = new InfluxDB({url,token})
// const queryApi = influxDB.getQueryApi(org)
// const fluxQuery = `from(bucket:${bucket}) |> range(start: -1h, stop: -10m)`

// exports.retrievedb = async (req,res) =>{
// for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)){
//   const o = tableMeta.toObject(values)
//   res.json(`${o._time}`)
// }
// }

const convertUnixTimestampToDateTime = require("./Fucntions")

exports.retrievedbcontroller = async (req,res) =>{
console.log(process.env.INFLUX_BUCKET)
  const { InfluxDB } = require('@influxdata/influxdb-client');
  const influxDB = new InfluxDB({
    url: process.env.INFLUX_URL,
    token: process.env.INFLUX_TOKEN,
  });
  const query1 = `
    from(bucket: "${process.env.INFLUX_BUCKET}")
      |> range(start: 0)
      |> filter(fn: (r) => r._measurement == "PowerMeter1" and r._field == "Timestamp")
  `;
  const query2 = `
    from(bucket: "${process.env.INFLUX_BUCKET}")
      |> range(start: 0)
      |> filter(fn: (r) => r._measurement == "PowerMeter1" and r._field == "Voltage")
  `;
  const timeLines = [];
  const Voltage = [];
  await influxDB.getQueryApi(process.env.INFLUX_ORG).queryLines(query1, {
    next(line) {
      // Handle each row of data
      // console.log(line);
      timeLines.push({ line }); // Accumulate rows
    },
    error(error) {
      console.error(error);
    },
    complete() {

    var LinesFilter = timeLines.slice(4,timeLines.length)
    // console.log(LinesFilter)
    const DateTimeFilter = []
    LinesFilter.forEach((data)=>{
      const line = data.line
      const fields = line.split(',')
      const lastTimestamp = fields[6]
      const datetime = convertUnixTimestampToDateTime(lastTimestamp)
      const SplitDateTime = datetime.split(' ')
      DateTimeFilter.push(SplitDateTime)
    })
    timeLines = DateTimeFilter
    },
  });

}
 //Query completed
      //  console.log('Query completed');
      //  console.log('Lines:', Lines);
 // res.json(LinesFilter)

      // const data = [
      //   {
      //     line: ',,0,1970-01-01T00:00:00Z,2023-11-25T08:54:39.108667335Z,2023-11-22T04:24:51.790678123Z,229.8,Voltage,PowerMeter1'
      //   }
      // ];
// LinesFilter.forEach((data)=>{
    //   const line = data.line
    //   const fields = line.split(',')
    //   const lastTimestamp = fields[5]
    //   if(lastTimestamp) { 
    //   const SplitT = lastTimestamp.split('T')
    //   const Filtered = [SplitT[0],SplitT[1].slice(0,-1)]
    //   DateTimeFilter.push(Filtered)
    //   }
    // }) 