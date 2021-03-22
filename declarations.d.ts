declare module '*.png';
declare module '*.jpg';
declare module 'react-native-config' {
  interface Env {
    API_BASE_URL: string;
    PRIVATE_KEY: string;
  }
  const BuildConfig: Env;
  export default BuildConfig;
}
