import { Container3D } from "./container3D";
import { int, Vector3 } from "babylonjs";
import { Control3D } from "./control3D";
/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 */
export declare abstract class VolumeBasedPanel extends Container3D {
    private _columns;
    private _rows;
    private _rowThenColum;
    private _orientation;
    protected _cellWidth: number;
    protected _cellHeight: number;
    /**
     * Gets or sets the distance between elements
     */
    margin: number;
    /**
     * Gets or sets the orientation to apply to all controls (BABYLON.Container3D.FaceOriginReversedOrientation by default)
    * | Value | Type                                | Description |
    * | ----- | ----------------------------------- | ----------- |
    * | 0     | UNSET_ORIENTATION                   |  Control rotation will remain unchanged |
    * | 1     | FACEORIGIN_ORIENTATION              |  Control will rotate to make it look at sphere central axis |
    * | 2     | FACEORIGINREVERSED_ORIENTATION      |  Control will rotate to make it look back at sphere central axis |
    * | 3     | FACEFORWARD_ORIENTATION             |  Control will rotate to look at z axis (0, 0, 1) |
    * | 4     | FACEFORWARDREVERSED_ORIENTATION     |  Control will rotate to look at negative z axis (0, 0, -1) |
     */
    orientation: number;
    /**
     * Gets or sets the number of columns requested (10 by default).
     * The panel will automatically compute the number of rows based on number of child controls.
     */
    columns: int;
    /**
     * Gets or sets a the number of rows requested.
     * The panel will automatically compute the number of columns based on number of child controls.
     */
    rows: int;
    /**
     * Creates new VolumeBasedPanel
     */
    constructor();
    protected _arrangeChildren(): void;
    /** Child classes must implement this function to provide correct control positioning */
    protected abstract _mapGridNode(control: Control3D, nodePosition: Vector3): void;
    /** Child classes can implement this function to provide additional processing */
    protected _finalProcessing(): void;
}
