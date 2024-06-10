import { TravelMode } from "./TravelMode";

export class Bicycling implements TravelMode {
    getEta(): number {
        console.log("Calculating ETA (bicycling)");
        return 2;
    }

    getDestination(): number {
        console.log("Calculating Direction (bicycling)");
        return 2;
    }
}