import { Container } from "./container";
import { Measure } from "../measure";
/**
 * Class used to create a 2D stack panel container
 */
export declare class StackPanel extends Container {
    name?: string | undefined;
    private _isVertical;
    private _manualWidth;
    private _manualHeight;
    private _doNotTrackManualChanges;
    /** Gets or sets a boolean indicating if the stack panel is vertical or horizontal*/
    isVertical: boolean;
    /**
     * Gets or sets panel width.
     * This value should not be set when in horizontal mode as it will be computed automatically
     */
    width: string | number;
    /**
     * Gets or sets panel height.
     * This value should not be set when in vertical mode as it will be computed automatically
     */
    height: string | number;
    /**
     * Creates a new StackPanel
     * @param name defines control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    /** @hidden */
    protected _preMeasure(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _postMeasure(): void;
}
