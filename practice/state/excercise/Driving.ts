import { TravelMode } from "./TravelMode";

export class Driving implements TravelMode {
    getEta(): number {
        console.log("Calculating ETA (driving)");
        return 1;
    }

    getDestination(): number {
        console.log("Calculating Direction (driving)");
        return 1;
    }
}