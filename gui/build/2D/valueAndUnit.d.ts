import { AdvancedDynamicTexture } from "./advancedDynamicTexture";
/**
 * Class used to specific a value and its associated unit
 */
export declare class ValueAndUnit {
    /** defines the unit to store */
    unit: number;
    /** defines a boolean indicating if the value can be negative */
    negativeValueAllowed: boolean;
    private _value;
    private _originalUnit;
    /**
     * Gets or sets a value indicating that this value will not scale accordingly with adaptive scaling property
     * @see http://doc.babylonjs.com/how_to/gui#adaptive-scaling
     */
    ignoreAdaptiveScaling: boolean;
    /**
     * Creates a new ValueAndUnit
     * @param value defines the value to store
     * @param unit defines the unit to store
     * @param negativeValueAllowed defines a boolean indicating if the value can be negative
     */
    constructor(value: number, 
    /** defines the unit to store */
    unit?: number, 
    /** defines a boolean indicating if the value can be negative */
    negativeValueAllowed?: boolean);
    /** Gets a boolean indicating if the value is a percentage */
    readonly isPercentage: boolean;
    /** Gets a boolean indicating if the value is store as pixel */
    readonly isPixel: boolean;
    /** Gets direct internal value */
    readonly internalValue: number;
    /**
     * Gets value as pixel
     * @param host defines the root host
     * @param refValue defines the reference value for percentages
     * @returns the value as pixel
     */
    getValueInPixel(host: AdvancedDynamicTexture, refValue: number): number;
    /**
     * Update the current value and unit. This should be done cautiously as the GUi won't be marked as dirty with this function.
     * @param value defines the value to store
     * @param unit defines the unit to store
     * @returns the current ValueAndUnit
     */
    updateInPlace(value: number, unit?: number): ValueAndUnit;
    /**
     * Gets the value accordingly to its unit
     * @param host  defines the root host
     * @returns the value
     */
    getValue(host: AdvancedDynamicTexture): number;
    /**
     * Gets a string representation of the value
     * @param host defines the root host
     * @returns a string
     */
    toString(host: AdvancedDynamicTexture): string;
    /**
     * Store a value parsed from a string
     * @param source defines the source string
     * @returns true if the value was successfully parsed
     */
    fromString(source: string | number): boolean;
    private static _Regex;
    private static _UNITMODE_PERCENTAGE;
    private static _UNITMODE_PIXEL;
    /** UNITMODE_PERCENTAGE */
    static readonly UNITMODE_PERCENTAGE: number;
    /** UNITMODE_PIXEL */
    static readonly UNITMODE_PIXEL: number;
}
