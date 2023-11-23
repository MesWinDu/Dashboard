const { InfluxDB,Point} = require('@influxdata/influxdb-client')

const url = 'http://localhost:8086'
const token = 'qcgzfBkmbWZjelK1CJdOBvotfIwUS3YTGnIbkn_3SlLfANmQ9dgPN0s2pdOfo9qma64d4dumYGnE19iYt246Wg=='
const org = 'KMUTNB'
const bucket = 'Test'

const influxDB = new InfluxDB({url,token})
const queryApi = influxDB.getQueryApi(org)
const fluxQuery = `from(bucket:${bucket}) |> range(start: -1h, stop: -10m)`

exports.retrievedb = async (req,res) =>{
for await (const {values, tableMeta} of queryApi.iterateRows(fluxQuery)){
  const o = tableMeta.toObject(values)
  res.json(`${o._time}`)
}
}