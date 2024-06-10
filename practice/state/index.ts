import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";
import { EraserTool } from "./EraserTool";
import { SelectionTool } from "./SelectionTool";



class Main {
    public main(): void {
        const canvas = new Canvas()
        //Use the different tools via the interface
        canvas.setCurrentTool(new EraserTool())
        canvas.mouseUp();
        canvas.mouseDown();
    }
}

const newMain = new Main();



console.log(newMain.main())