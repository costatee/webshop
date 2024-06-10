import { Tool } from "./Tool";

export class Canvas {
    private currenTool: Tool;

    mouseUp(): void {
        this.currenTool.mouseDown()
    }

    mouseDown(): void {
        this.currenTool.mouseUp()
    }

    getCurrentTool(): Tool {
        return this.currenTool
    }

    setCurrentTool(tool: Tool): void {
        this.currenTool = tool;
    }
}