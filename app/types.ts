export type Hike = {
    name: string;
    location: string;
    description: string;
    distance: number; // in km
    elevationGain: number; // in meters
    stages: number; // in days
    url: string; // link to hike page
    image: string;
}