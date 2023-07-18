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
        right: 16px;
        z-index: 1;

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
            top: 0;
            right: 0;
        }
    }

    /* #inline-edit__undo-button {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 14px;
    } */
`;
