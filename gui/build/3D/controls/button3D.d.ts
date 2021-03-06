import { AbstractButton3D } from "./abstractButton3D";
import { Material, int, Scene, TransformNode, AbstractMesh } from "babylonjs";
import { AdvancedDynamicTexture } from "../../2D/advancedDynamicTexture";
import { Control } from "../../2D/controls/control";
/**
 * Class used to create a button in 3D
 */
export declare class Button3D extends AbstractButton3D {
    /** @hidden */
    protected _currentMaterial: Material;
    private _facadeTexture;
    private _content;
    private _contentResolution;
    private _contentScaleRatio;
    /**
     * Gets or sets the texture resolution used to render content (512 by default)
     */
    contentResolution: int;
    /**
     * Gets or sets the texture scale ratio used to render content (2 by default)
     */
    contentScaleRatio: number;
    protected _disposeFacadeTexture(): void;
    protected _resetContent(): void;
    /**
     * Creates a new button
     * @param name defines the control name
     */
    constructor(name?: string);
    /**
     * Gets or sets the GUI 2D content used to display the button's facade
     */
    content: Control;
    /**
     * Apply the facade texture (created from the content property).
     * This function can be overloaded by child classes
     * @param facadeTexture defines the AdvancedDynamicTexture to use
     */
    protected _applyFacade(facadeTexture: AdvancedDynamicTexture): void;
    protected _getTypeName(): string;
    protected _createNode(scene: Scene): TransformNode;
    protected _affectMaterial(mesh: AbstractMesh): void;
    /**
     * Releases all associated resources
     */
    dispose(): void;
}
