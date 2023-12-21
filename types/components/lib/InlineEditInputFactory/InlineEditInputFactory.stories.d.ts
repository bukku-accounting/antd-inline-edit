declare namespace _default {
    export let title: string;
    export { InlineEditInputFactory as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
}
export default _default;
export namespace InlineEditInputFactoryDefault {
    namespace args {
        let component: string;
        let label: string;
        let defaultLabel: any;
        function onSave(): void;
        function setLabel(): void;
        function onUndoClick(): void;
        let inputRef: any;
        let maxLength: number;
    }
}
import { InlineEditInputFactory } from './InlineEditInputFactory';
