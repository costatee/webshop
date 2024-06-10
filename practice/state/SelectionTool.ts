import { Tool } from "./Tool";

export class SelectionTool implements Tool {
    mouseDown(): void {
        console.log('Selection Icon')
    }

    mouseUp(): void {
        console.log('Draw a dashed line');
    }

}