import { mapperManager } from './configuration/mappers';
import { viewerGlobals } from './configuration/globals';
import { viewerManager } from './viewer/viewerManager';
import { DefaultViewer } from './viewer/defaultViewer';
import { AbstractViewer } from './viewer/viewer';
import { telemetryManager } from './managers/telemetryManager';
import { ModelLoader } from './loader/modelLoader';
import { ViewerModel, ModelState } from './model/viewerModel';
import { AnimationPlayMode, AnimationState } from './model/modelAnimation';
import { ILoaderPlugin } from './loader/plugins/loaderPlugin';
import { AbstractViewerNavbarButton } from './templating/viewerTemplatePlugin';
import { registerCustomOptimizer } from './optimizer/custom';
/**
 * BabylonJS Viewer
 *
 * An HTML-Based viewer for 3D models, based on BabylonJS and its extensions.
 */
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import 'pepjs';
import { InitTags } from './initializer';
declare let disableInit: boolean;
/**
 * Dispose all viewers currently registered
 */
declare function disposeAll(): void;
declare const Version: string;
export { BABYLON, Version, InitTags, DefaultViewer, AbstractViewer, viewerGlobals, telemetryManager, disableInit, viewerManager, mapperManager, disposeAll, ModelLoader, ViewerModel, AnimationPlayMode, AnimationState, ModelState, ILoaderPlugin, AbstractViewerNavbarButton, registerCustomOptimizer };
export { GLTF2 } from 'babylonjs-loaders';
export * from './configuration';
