import { Tool } from "./Tool";

export class EraserTool implements Tool {
    mouseDown(): void {
        console.log('ERASER TOOL')
    }

    mouseUp(): void {
        console.log('Erasing Something')
    }
}