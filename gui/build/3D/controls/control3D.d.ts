import { IDisposable, IBehaviorAware, Nullable, TransformNode, Vector3, Observable, Behavior, AbstractMesh, Scene } from "babylonjs";
import { GUI3DManager } from "../gui3DManager";
import { Vector3WithInfo } from "../vector3WithInfo";
import { Container3D } from "./container3D";
/**
 * Class used as base class for controls
 */
export declare class Control3D implements IDisposable, IBehaviorAware<Control3D> {
    /** Defines the control name */
    name?: string | undefined;
    /** @hidden */
    _host: GUI3DManager;
    private _node;
    private _downCount;
    private _enterCount;
    private _downPointerIds;
    private _isVisible;
    /** Gets or sets the control position  in world space */
    position: Vector3;
    /** Gets or sets the control scaling  in world space */
    scaling: Vector3;
    /** Callback used to start pointer enter animation */
    pointerEnterAnimation: () => void;
    /** Callback used to start pointer out animation */
    pointerOutAnimation: () => void;
    /** Callback used to start pointer down animation */
    pointerDownAnimation: () => void;
    /** Callback used to start pointer up animation */
    pointerUpAnimation: () => void;
    /**
    * An event triggered when the pointer move over the control
    */
    onPointerMoveObservable: Observable<Vector3>;
    /**
     * An event triggered when the pointer move out of the control
     */
    onPointerOutObservable: Observable<Control3D>;
    /**
     * An event triggered when the pointer taps the control
     */
    onPointerDownObservable: Observable<Vector3WithInfo>;
    /**
     * An event triggered when pointer is up
     */
    onPointerUpObservable: Observable<Vector3WithInfo>;
    /**
     * An event triggered when a control is clicked on (with a mouse)
     */
    onPointerClickObservable: Observable<Vector3WithInfo>;
    /**
     * An event triggered when pointer enters the control
     */
    onPointerEnterObservable: Observable<Control3D>;
    /**
     * Gets or sets the parent container
     */
    parent: Nullable<Container3D>;
    private _behaviors;
    /**
     * Gets the list of attached behaviors
     * @see http://doc.babylonjs.com/features/behaviour
     */
    readonly behaviors: Behavior<Control3D>[];
    /**
     * Attach a behavior to the control
     * @see http://doc.babylonjs.com/features/behaviour
     * @param behavior defines the behavior to attach
     * @returns the current control
     */
    addBehavior(behavior: Behavior<Control3D>): Control3D;
    /**
     * Remove an attached behavior
     * @see http://doc.babylonjs.com/features/behaviour
     * @param behavior defines the behavior to attach
     * @returns the current control
     */
    removeBehavior(behavior: Behavior<Control3D>): Control3D;
    /**
     * Gets an attached behavior by name
     * @param name defines the name of the behavior to look for
     * @see http://doc.babylonjs.com/features/behaviour
     * @returns null if behavior was not found else the requested behavior
     */
    getBehaviorByName(name: string): Nullable<Behavior<Control3D>>;
    /** Gets or sets a boolean indicating if the control is visible */
    isVisible: boolean;
    /**
     * Creates a new control
     * @param name defines the control name
     */
    constructor(
    /** Defines the control name */
    name?: string | undefined);
    /**
     * Gets a string representing the class name
     */
    readonly typeName: string;
    /**
     * Get the current class name of the control.
     * @returns current class name
     */
    getClassName(): string;
    protected _getTypeName(): string;
    /**
     * Gets the transform node used by this control
     */
    readonly node: Nullable<TransformNode>;
    /**
     * Gets the mesh used to render this control
     */
    readonly mesh: Nullable<AbstractMesh>;
    /**
     * Link the control as child of the given node
     * @param node defines the node to link to. Use null to unlink the control
     * @returns the current control
     */
    linkToTransformNode(node: Nullable<TransformNode>): Control3D;
    /** @hidden **/
    _prepareNode(scene: Scene): void;
    /**
     * Node creation.
     * Can be overriden by children
     * @param scene defines the scene where the node must be attached
     * @returns the attached node or null if none. Must return a Mesh or AbstractMesh if there is an atttached visible object
     */
    protected _createNode(scene: Scene): Nullable<TransformNode>;
    /**
     * Affect a material to the given mesh
     * @param mesh defines the mesh which will represent the control
     */
    protected _affectMaterial(mesh: AbstractMesh): void;
    /** @hidden */
    _onPointerMove(target: Control3D, coordinates: Vector3): void;
    /** @hidden */
    _onPointerEnter(target: Control3D): boolean;
    /** @hidden */
    _onPointerOut(target: Control3D): void;
    /** @hidden */
    _onPointerDown(target: Control3D, coordinates: Vector3, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _onPointerUp(target: Control3D, coordinates: Vector3, pointerId: number, buttonIndex: number, notifyClick: boolean): void;
    /** @hidden */
    forcePointerUp(pointerId?: Nullable<number>): void;
    /** @hidden */
    _processObservables(type: number, pickedPoint: Vector3, pointerId: number, buttonIndex: number): boolean;
    /** @hidden */
    _disposeNode(): void;
    /**
     * Releases all associated resources
     */
    dispose(): void;
}
