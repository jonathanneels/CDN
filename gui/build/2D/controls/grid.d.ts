import { Container } from "./container";
import { ValueAndUnit } from "../valueAndUnit";
import { Control } from "./control";
import { Measure } from "../measure";
import { Nullable } from "babylonjs";
/**
 * Class used to create a 2D grid container
 */
export declare class Grid extends Container {
    name?: string | undefined;
    private _rowDefinitions;
    private _columnDefinitions;
    private _cells;
    private _childControls;
    /**
     * Gets the number of columns
     */
    readonly columnCount: number;
    /**
     * Gets the number of rows
     */
    readonly rowCount: number;
    /** Gets the list of children */
    readonly children: Control[];
    /**
     * Gets the definition of a specific row
     * @param index defines the index of the row
     * @returns the row definition
     */
    getRowDefinition(index: number): Nullable<ValueAndUnit>;
    /**
     * Gets the definition of a specific column
     * @param index defines the index of the column
     * @returns the column definition
     */
    getColumnDefinition(index: number): Nullable<ValueAndUnit>;
    /**
     * Adds a new row to the grid
     * @param height defines the height of the row (either in pixel or a value between 0 and 1)
     * @param isPixel defines if the height is expressed in pixel (or in percentage)
     * @returns the current grid
     */
    addRowDefinition(height: number, isPixel?: boolean): Grid;
    /**
     * Adds a new column to the grid
     * @param width defines the width of the column (either in pixel or a value between 0 and 1)
     * @param isPixel defines if the width is expressed in pixel (or in percentage)
     * @returns the current grid
     */
    addColumnDefinition(width: number, isPixel?: boolean): Grid;
    /**
     * Update a row definition
     * @param index defines the index of the row to update
     * @param height defines the height of the row (either in pixel or a value between 0 and 1)
     * @param isPixel defines if the weight is expressed in pixel (or in percentage)
     * @returns the current grid
     */
    setRowDefinition(index: number, height: number, isPixel?: boolean): Grid;
    /**
     * Update a column definition
     * @param index defines the index of the column to update
     * @param width defines the width of the column (either in pixel or a value between 0 and 1)
     * @param isPixel defines if the width is expressed in pixel (or in percentage)
     * @returns the current grid
     */
    setColumnDefinition(index: number, width: number, isPixel?: boolean): Grid;
    /**
     * Gets the list of children stored in a specific cell
     * @param row defines the row to check
     * @param column defines the column to check
     * @returns the list of controls
     */
    getChildrenAt(row: number, column: number): Nullable<Array<Control>>;
    /**
     * Gets a string representing the child cell info (row x column)
     * @param child defines the control to get info from
     * @returns a string containing the child cell info (row x column)
     */
    getChildCellInfo(child: Control): string;
    private _removeCell;
    private _offsetCell;
    /**
     * Remove a column definition at specified index
     * @param index defines the index of the column to remove
     * @returns the current grid
     */
    removeColumnDefinition(index: number): Grid;
    /**
     * Remove a row definition at specified index
     * @param index defines the index of the row to remove
     * @returns the current grid
     */
    removeRowDefinition(index: number): Grid;
    /**
     * Adds a new control to the current grid
     * @param control defines the control to add
     * @param row defines the row where to add the control (0 by default)
     * @param column defines the column where to add the control (0 by default)
     * @returns the current grid
     */
    addControl(control: Control, row?: number, column?: number): Grid;
    /**
     * Removes a control from the current container
     * @param control defines the control to remove
     * @returns the current container
     */
    removeControl(control: Control): Container;
    /**
     * Creates a new Grid
     * @param name defines control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    protected _getGridDefinitions(definitionCallback: (lefts: number[], tops: number[], widths: number[], heights: number[]) => void): void;
    protected _additionalProcessing(parentMeasure: Measure, context: CanvasRenderingContext2D): void;
    _flagDescendantsAsMatrixDirty(): void;
    _renderHighlightSpecific(context: CanvasRenderingContext2D): void;
    /** Releases associated resources */
    dispose(): void;
}
