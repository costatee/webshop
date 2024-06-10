import { TravelMode } from "./TravelMode";

export class Walking implements TravelMode {
    getEta(): number {
        console.log("Calculating ETA (walking)");
        return 4;
    }

    getDestination(): number {
        console.log("Calculating Direction (walking)");
        return 4;
    }
}