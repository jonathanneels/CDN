import { MaterialDefines, PushMaterial, Color3, Color4, Vector3, Scene, Nullable, BaseTexture, AbstractMesh, SubMesh, Matrix, Mesh } from "babylonjs";
/** @hidden */
export declare class FluentMaterialDefines extends MaterialDefines {
    INNERGLOW: boolean;
    BORDER: boolean;
    HOVERLIGHT: boolean;
    TEXTURE: boolean;
    constructor();
}
/**
 * Class used to render controls with fluent desgin
 */
export declare class FluentMaterial extends PushMaterial {
    /**
     * Gets or sets inner glow intensity. A value of 0 means no glow (default is 0.5)
     */
    innerGlowColorIntensity: number;
    /**
     * Gets or sets the inner glow color (white by default)
     */
    innerGlowColor: Color3;
    /**
     * Gets or sets alpha value (default is 1.0)
     */
    alpha: number;
    /**
     * Gets or sets the albedo color (Default is Color3(0.3, 0.35, 0.4))
     */
    albedoColor: Color3;
    /**
     * Gets or sets a boolean indicating if borders must be rendered (default is false)
     */
    renderBorders: boolean;
    /**
     * Gets or sets border width (default is 0.5)
     */
    borderWidth: number;
    /**
     * Gets or sets a value indicating the smoothing value applied to border edges (0.02 by default)
     */
    edgeSmoothingValue: number;
    /**
     * Gets or sets the minimum value that can be applied to border width (default is 0.1)
     */
    borderMinValue: number;
    /**
     * Gets or sets a boolean indicating if hover light must be rendered (default is false)
     */
    renderHoverLight: boolean;
    /**
     * Gets or sets the radius used to render the hover light (default is 1.0)
     */
    hoverRadius: number;
    /**
     * Gets or sets the color used to render the hover light (default is Color4(0.3, 0.3, 0.3, 1.0))
     */
    hoverColor: Color4;
    /**
     * Gets or sets the hover light position in world space (default is Vector3.Zero())
     */
    hoverPosition: Vector3;
    private _albedoTexture;
    /** Gets or sets the texture to use for albedo color */
    albedoTexture: Nullable<BaseTexture>;
    /**
     * Creates a new Fluent material
     * @param name defines the name of the material
     * @param scene defines the hosting scene
     */
    constructor(name: string, scene: Scene);
    needAlphaBlending(): boolean;
    needAlphaTesting(): boolean;
    getAlphaTestTexture(): Nullable<BaseTexture>;
    isReadyForSubMesh(mesh: AbstractMesh, subMesh: SubMesh, useInstances?: boolean): boolean;
    bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void;
    getActiveTextures(): BaseTexture[];
    hasTexture(texture: BaseTexture): boolean;
    dispose(forceDisposeEffect?: boolean): void;
    clone(name: string): FluentMaterial;
    serialize(): any;
    getClassName(): string;
    static Parse(source: any, scene: Scene, rootUrl: string): FluentMaterial;
}
