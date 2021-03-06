import { ViewerConfiguration } from '../configuration';
import { AbstractViewer } from './viewer';
export declare class RenderOnlyViewer extends AbstractViewer {
    containerElement: Element;
    constructor(containerElement: Element, initialConfiguration?: ViewerConfiguration);
    initialize(): Promise<AbstractViewer | this>;
    protected _prepareContainerElement(): void;
}
