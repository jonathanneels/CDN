import { Container } from "./container";
import { Measure } from "../measure";
/** Class used to create rectangle container */
export declare class Rectangle extends Container {
    name?: string | undefined;
    private _thickness;
    private _cornerRadius;
    /** Gets or sets border thickness */
    thickness: number;
    /** Gets or sets the corner radius angle */
    cornerRadius: number;
    /**
     * Creates a new Rectangle
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    protected _localDraw(context: CanvasRenderingContext2D): void;
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    private _drawRoundedRect;
    protected _clipForChildren(context: CanvasRenderingContext2D): void;
}
