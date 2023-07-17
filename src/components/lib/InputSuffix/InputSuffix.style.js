import { css } from 'styled-components';

export const InputSuffixStyles = css`
    .display-none {
        display: none;
    }
    .textarea-component {
        white-space: pre-wrap;
    }
    .inline-edit__textarea-wrapper {
        position: relative;
    }

    .inline-edit__suffix-container {
        position: absolute;
        top: 6px;
        right: 8px;

        .anticon {
            font-size: 14px;
        }

        .anticon:not(:first-child) {
            margin-left: 8px;
        }
    }
    .inline-edit__input {
        .inline-edit__suffix-container {
            position: relative;
            top: 0px;
            right: 0px;
        }
    }
    #inline-edit__undo-button {
        /* position: absolute;
        right: 8px;
        top: 8px;
        font-size: 14px; */
    }
`;
