/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentViewer {
    }
    interface NwoInputAddress {
        "city": string;
        "country": string;
        "label": string;
        "placeholder": string;
        "required": boolean;
        "state": string;
        "street": string;
        "zip": string;
    }
}
declare global {
    interface HTMLComponentViewerElement extends Components.ComponentViewer, HTMLStencilElement {
    }
    var HTMLComponentViewerElement: {
        prototype: HTMLComponentViewerElement;
        new (): HTMLComponentViewerElement;
    };
    interface HTMLNwoInputAddressElement extends Components.NwoInputAddress, HTMLStencilElement {
    }
    var HTMLNwoInputAddressElement: {
        prototype: HTMLNwoInputAddressElement;
        new (): HTMLNwoInputAddressElement;
    };
    interface HTMLElementTagNameMap {
        "component-viewer": HTMLComponentViewerElement;
        "nwo-input-address": HTMLNwoInputAddressElement;
    }
}
declare namespace LocalJSX {
    interface ComponentViewer {
    }
    interface NwoInputAddress {
        "city"?: string;
        "country"?: string;
        "label"?: string;
        "onChanged"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "state"?: string;
        "street"?: string;
        "zip"?: string;
    }
    interface IntrinsicElements {
        "component-viewer": ComponentViewer;
        "nwo-input-address": NwoInputAddress;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-viewer": LocalJSX.ComponentViewer & JSXBase.HTMLAttributes<HTMLComponentViewerElement>;
            "nwo-input-address": LocalJSX.NwoInputAddress & JSXBase.HTMLAttributes<HTMLNwoInputAddressElement>;
        }
    }
}
