export interface Photos{
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: Date | string;
  rover: Rover;
}

export interface Camera{
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover{
  id: number;
  name: string;
  landing_date: string;
  status: string;
}
