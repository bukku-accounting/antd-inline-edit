declare namespace _default {
    export let title: string;
    export { InputSuffix as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
    export let decorators: ((Story: any) => JSX.Element)[];
}
export default _default;
export namespace InputSuffixInputIsChanged {
    namespace args {
        let isChanged: boolean;
        let onUndoClick: any;
        let component: string;
    }
}
export namespace InputSuffixInputIsNotChanged {
    export namespace args_1 {
        let isChanged_1: boolean;
        export { isChanged_1 as isChanged };
        let onUndoClick_1: any;
        export { onUndoClick_1 as onUndoClick };
        let component_1: string;
        export { component_1 as component };
    }
    export { args_1 as args };
}
export namespace InputSuffixInputCustomIcon {
    export namespace args_2 {
        let isChanged_2: boolean;
        export { isChanged_2 as isChanged };
        let onUndoClick_2: any;
        export { onUndoClick_2 as onUndoClick };
        let component_2: string;
        export { component_2 as component };
        export let icon: JSX.Element;
    }
    export { args_2 as args };
}
export namespace InputSuffixTextareaIsChanged {
    export namespace args_3 {
        let isChanged_3: boolean;
        export { isChanged_3 as isChanged };
        let onUndoClick_3: any;
        export { onUndoClick_3 as onUndoClick };
        let component_3: string;
        export { component_3 as component };
    }
    export { args_3 as args };
}
import { InputSuffix } from './InputSuffix';
