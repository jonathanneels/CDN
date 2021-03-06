import { AbstractViewerNavbarButton } from "../viewerTemplatePlugin";
import { DefaultViewer } from "../../viewer/defaultViewer";
import { EventCallback } from "../templateManager";
export declare class HDButtonPlugin extends AbstractViewerNavbarButton {
    private _viewer;
    constructor(_viewer: DefaultViewer);
    onEvent(event: EventCallback): void;
    protected static HtmlTemplate: string;
}
