declare namespace _default {
    export let title: string;
    export { InlineEdit as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
}
export default _default;
export namespace InlineEditInput {
    namespace args {
        let initialValue: string;
        let inputComponent: string;
    }
}
export namespace InlineEditTextArea {
    export namespace args_1 {
        let initialValue_1: string;
        export { initialValue_1 as initialValue };
        let inputComponent_1: string;
        export { inputComponent_1 as inputComponent };
    }
    export { args_1 as args };
}
export namespace InlineEditDefaultValue {
    export namespace args_2 {
        let inputComponent_2: string;
        export { inputComponent_2 as inputComponent };
        export let defaultValue: string;
        let initialValue_2: string;
        export { initialValue_2 as initialValue };
    }
    export { args_2 as args };
}
export namespace InlineEditStartWithEditViewOpen {
    export namespace args_3 {
        let startWithEditViewOpen: boolean;
    }
    export { args_3 as args };
}
export namespace InlineEditDisplayRenderer {
    export namespace args_4 {
        function displayRenderer(label: any): JSX.Element;
    }
    export { args_4 as args };
}
export namespace InlineEditTextAreaProps {
    export namespace args_5 {
        export function displayRenderer_1(label: any): JSX.Element;
        export { displayRenderer_1 as displayRenderer };
        let inputComponent_3: string;
        export { inputComponent_3 as inputComponent };
        let startWithEditViewOpen_1: boolean;
        export { startWithEditViewOpen_1 as startWithEditViewOpen };
        export namespace textAreaProps {
            let className: string;
            namespace autoSize {
                let minRows: number;
                let maxRows: number;
            }
            let showCount: boolean;
        }
    }
    export { args_5 as args };
}
export namespace InlineEditTextAreaSaveOnPressEnter {
    export namespace args_6 {
        export function displayRenderer_2(label: any): JSX.Element;
        export { displayRenderer_2 as displayRenderer };
        let inputComponent_4: string;
        export { inputComponent_4 as inputComponent };
        let startWithEditViewOpen_2: boolean;
        export { startWithEditViewOpen_2 as startWithEditViewOpen };
        export namespace textAreaProps_1 {
            function onPressEnter(): void;
        }
        export { textAreaProps_1 as textAreaProps };
    }
    export { args_6 as args };
}
import InlineEdit from '.';
