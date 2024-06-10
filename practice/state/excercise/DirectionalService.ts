import { Bicycling } from "./Bicycling";
import { Transit } from "./Transit";
import { TravelMode } from "./TravelMode";
import { Walking } from "./Walking";

 class DirectionService {
    private travelMode: TravelMode;

    constructor(travel: TravelMode){
        this.travelMode = travel;
    }

    setTravelMode(travelMode: TravelMode){
        this.travelMode = travelMode;
    }
    

    getTravelMode(): TravelMode{
        return this.travelMode;
    }

    getEta() {
        return this.travelMode.getEta()
    }

    getDirection() {
        return this.travelMode.getDestination()
    }

 }



const test = new DirectionService(new Transit());




console.log(test.getEta())
console.log(test.getDirection())