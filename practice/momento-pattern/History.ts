import { EditorState } from "./EditorState";

export class History {
  private states:EditorState[] = [];

  public push(state: EditorState): void {
    this.states.push(state)
  }

  public pop(): EditorState {
    let lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex];

    this.states.pop()

    return lastState;
  }
}