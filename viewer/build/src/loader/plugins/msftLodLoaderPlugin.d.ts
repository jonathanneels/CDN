import { ISceneLoaderPlugin, ISceneLoaderPluginAsync } from 'babylonjs/Loading/sceneLoader';
import { IGLTFLoaderExtension } from 'babylonjs-loaders/glTF/2.0/glTFLoaderExtension';
import { ViewerModel } from '../../model/viewerModel';
import { ILoaderPlugin } from './loaderPlugin';
/**
 * A loder plugin to use MSFT_lod extension correctly (glTF)
 */
export declare class MSFTLodLoaderPlugin implements ILoaderPlugin {
    private _model;
    onInit(loader: ISceneLoaderPlugin | ISceneLoaderPluginAsync, model: ViewerModel): void;
    onExtensionLoaded(extension: IGLTFLoaderExtension): void;
}
