import { TravelMode } from "./TravelMode"

export class Transit implements TravelMode {
    getEta(): number {
        console.log("Calculating ETA (transit)");
        return 3;
    }

    getDestination(): number {
        console.log("Calculating Direction (transit)");
        return 3;
    }
}