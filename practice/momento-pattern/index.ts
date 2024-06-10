import { Editor } from "./Editor";
import { History } from "./History";


class Main {
    public main(): void {
        const editor = new Editor();
        const history = new History();

        editor.setContent('a');
        history.push(editor.createState());

        editor.setContent('b')
        history.push(editor.createState());

        editor.setContent('c');
        editor.restore(history.pop())
        editor.restore(history.pop())
        
        console.log(editor.getContent())
    }
}

const newMain = new Main();

console.log('RUNNING');

console.log(newMain.main())