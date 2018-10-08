import { parseString } from 'react-native-xml2js'

export const xmlParser = (xml) => new Promise((resolve, reject) => {
  parseString(xml, (err, json) => {
    if (err) return reject(err)
    resolve(json.rss.channel[0].item)
  })
})