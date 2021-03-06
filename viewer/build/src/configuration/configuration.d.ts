import { ICameraConfiguration, IDefaultRenderingPipelineConfiguration, IGroundConfiguration, ILightConfiguration, IModelConfiguration, IObserversConfiguration, ISceneConfiguration, ISceneOptimizerConfiguration, ISkyboxConfiguration, ITemplateConfiguration, IVRConfiguration } from './interfaces';
import { IEnvironmentMapConfiguration } from './interfaces/environmentMapConfiguration';
import { EngineOptions } from 'babylonjs/Engines/thinEngine';
export declare function getConfigurationKey(key: string, configObject: any): any;
export interface ViewerConfiguration {
    version?: string;
    extends?: string;
    pageUrl?: string;
    configuration?: string | {
        url?: string;
        payload?: any;
        mapper?: string;
    };
    observers?: IObserversConfiguration;
    canvasElement?: string;
    model?: IModelConfiguration | string;
    scene?: ISceneConfiguration;
    optimizer?: ISceneOptimizerConfiguration | boolean;
    camera?: ICameraConfiguration;
    skybox?: boolean | ISkyboxConfiguration;
    ground?: boolean | IGroundConfiguration;
    lights?: {
        [name: string]: number | boolean | ILightConfiguration;
    };
    engine?: {
        renderInBackground?: boolean;
        antialiasing?: boolean;
        disableResize?: boolean;
        engineOptions?: EngineOptions;
        adaptiveQuality?: boolean;
        hdEnabled?: boolean;
    };
    templates?: {
        main: ITemplateConfiguration;
        [key: string]: ITemplateConfiguration;
    };
    customShaders?: {
        shaders?: {
            [key: string]: string;
        };
        includes?: {
            [key: string]: string;
        };
    };
    loaderPlugins?: {
        extendedMaterial?: boolean;
        msftLod?: boolean;
        telemetry?: boolean;
        minecraft?: boolean;
        [propName: string]: boolean | undefined;
    };
    environmentMap?: IEnvironmentMapConfiguration;
    vr?: IVRConfiguration;
    lab?: {
        flashlight?: boolean | {
            exponent?: number;
            angle?: number;
            intensity?: number;
            diffuse?: {
                r: number;
                g: number;
                b: number;
            };
            specular?: {
                r: number;
                g: number;
                b: number;
            };
        };
        hideLoadingDelay?: number;
        /** @deprecated */
        assetsRootURL?: string;
        environmentMainColor?: {
            r: number;
            g: number;
            b: number;
        };
        /** @deprecated */
        environmentMap?: {
            /**
             * Environment map texture path in relative to the asset folder.
             */
            texture: string;
            /**
             * Default rotation to apply to the environment map.
             */
            rotationY: number;
            /**
             * Tint level of the main color on the environment map.
             */
            tintLevel: number;
        };
        defaultRenderingPipelines?: boolean | IDefaultRenderingPipelineConfiguration;
        globalLightRotation?: number;
    };
}
