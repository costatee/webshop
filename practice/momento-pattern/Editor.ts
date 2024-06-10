import { EditorState } from "./EditorState";

export class Editor {
    private content: string;

    //createState
    public createState(): EditorState {
        return new EditorState(this.content)
    }
    //restore
    public restore(state: EditorState){
        this.content = state.getContent()
    }

    public getContent(): string {
        return this.content
    }

    public setContent(content: string): void {
        this.content = content
    }
}