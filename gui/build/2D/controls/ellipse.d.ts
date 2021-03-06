import { Container } from "./container";
import { Measure } from "../measure";
/** Class used to create 2D ellipse containers */
export declare class Ellipse extends Container {
    name?: string | undefined;
    private _thickness;
    /** Gets or sets border thickness */
    thickness: number;
    /**
     * Creates a new Ellipse
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    protected _localDraw(context: CanvasRenderingContext2D): void;
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    protected _clipForChildren(context: CanvasRenderingContext2D): void;
}
