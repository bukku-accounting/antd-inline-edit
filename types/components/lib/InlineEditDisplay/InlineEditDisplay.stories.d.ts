declare namespace _default {
    export let title: string;
    export { InlineEditDisplay as component };
    export let tags: string[];
    export namespace parameters {
        let layout: string;
    }
}
export default _default;
export namespace InlineEditDisplayDisplayRenderer {
    namespace args {
        function onClick(): void;
        let placeholder: string;
        function displayRenderer(label: any, placeholder: any): JSX.Element;
    }
}
import { InlineEditDisplay } from './InlineEditDisplay';
