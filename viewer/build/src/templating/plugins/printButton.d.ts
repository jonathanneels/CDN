import { AbstractViewerNavbarButton } from "../viewerTemplatePlugin";
import { DefaultViewer } from "../../viewer/defaultViewer";
import { EventCallback } from "../templateManager";
export declare class PrintButtonPlugin extends AbstractViewerNavbarButton {
    private _viewer;
    private _currentModelUrl;
    constructor(_viewer: DefaultViewer);
    onEvent(event: EventCallback): void;
    protected static HtmlTemplate: string;
}
