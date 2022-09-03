import axios from '../axiosCustom'

const assets = 'BTC;XRP;DASH;LTC'

const asset_id_base = 'BTC'
const asset_id_quote = 'USD'

const ApiService = 
{
  getAssets: async () => {
    return axios().get(`/v1/assets?filter_asset_id=${assets}`)
  },
  getTimeSeries: async () => {
    return axios().get(`/v1/exchangerate/${asset_id_base}/${asset_id_quote}/history?period_id=6HRS&time_start=2022-02-01T00:00:00&time_end=2022-02-05T00:00:00`)
  }
}

ApiService.getTimeSeries()
export default ApiService
