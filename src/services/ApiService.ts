import BuildConfig from "react-native-config";

const { API_BASE_URL, PRIVATE_KEY } = BuildConfig;

export class ApiService {
  private mountUrl(url: string, params?: string) {

    return `${API_BASE_URL}${url}${params || ''}&api_key=${PRIVATE_KEY}`
  }

  async getMarsPhoto(hover: string, sol: number, camera: string) {
    let params = "";
    if(!!hover){
      params += hover;
    }
    params += `/photos?sol=${sol}&camera=${camera}`;

    try {
      const url = this.mountUrl(`mars-photos/api/v1/rovers/${params}`);
      const response = await fetch(url);
      const responseJson = await response.json()

      // if (responseJson.photos.length > 0) {
      //   const { photos } = responseJson.data;
      //   console.log("photos >>", photos)
      //    return { isSuccess: true };
      // }
      return responseJson;
    } catch (error) {
      return { isSuccess: false };
    }
  }

  async getWeather(){
    let url = `${API_BASE_URL}insight_weather/?api_key=${PRIVATE_KEY}&feedtype=json&ver=1.0`
    const resp = await fetch(url)
    const respJson = await resp.json();

    console.log(respJson);

    // fetch(url)
    // .then(res => res.json())
    // .then(data =>{
    //   const{
    //     sol_keys,
    //     validity_checks,
    //     ...solData
    //   } = data
    //  return Object.entries(solData).map(([sol, data])=>{
    //     return{
    //       sol: sol,
    //       maxTemp: data.AT.mx,
    //       minTemp: data.AT.mn,
    //       windSpeed: data.HWS.av,
    //       windDirectionDegrees: data.WD.most_common.compass_degress,
    //       windDirectionCardinal: data.WD.most_common.compass_point,
    //       date: new Date(data.First_UTC)
    //     }
    //   })
    // })
  }
}
