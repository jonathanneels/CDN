import { Control } from "./control";
import { Observable, Vector2 } from "babylonjs";
import { StackPanel } from ".";
/**
 * Class used to create radio button controls
 */
export declare class RadioButton extends Control {
    name?: string | undefined;
    private _isChecked;
    private _background;
    private _checkSizeRatio;
    private _thickness;
    /** Gets or sets border thickness */
    thickness: number;
    /** Gets or sets group name */
    group: string;
    /** Observable raised when isChecked is changed */
    onIsCheckedChangedObservable: Observable<boolean>;
    /** Gets or sets a value indicating the ratio between overall size and check size */
    checkSizeRatio: number;
    /** Gets or sets background color */
    background: string;
    /** Gets or sets a boolean indicating if the checkbox is checked or not */
    isChecked: boolean;
    /**
     * Creates a new RadioButton
     * @param name defines the control name
     */
    constructor(name?: string | undefined);
    protected _getTypeName(): string;
    _draw(context: CanvasRenderingContext2D): void;
    _onPointerDown(target: Control, coordinates: Vector2, pointerId: number, buttonIndex: number): boolean;
    /**
     * Utility function to easily create a radio button with a header
     * @param title defines the label to use for the header
     * @param group defines the group to use for the radio button
     * @param isChecked defines the initial state of the radio button
     * @param onValueChanged defines the callback to call when value changes
     * @returns a StackPanel containing the radio button and a textBlock
     */
    static AddRadioButtonWithHeader(title: string, group: string, isChecked: boolean, onValueChanged: (button: RadioButton, value: boolean) => void): StackPanel;
}
