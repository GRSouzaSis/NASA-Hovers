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
}
