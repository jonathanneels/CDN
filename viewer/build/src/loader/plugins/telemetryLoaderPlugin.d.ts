import { ILoaderPlugin } from "./loaderPlugin";
import { ViewerModel } from "../../model/viewerModel";
import { ISceneLoaderPlugin, ISceneLoaderPluginAsync } from "babylonjs/Loading/sceneLoader";
export declare class TelemetryLoaderPlugin implements ILoaderPlugin {
    private _model;
    private _loadStart;
    private _loadEnd;
    onInit(loader: ISceneLoaderPlugin | ISceneLoaderPluginAsync, model: ViewerModel): void;
    onLoaded(model: ViewerModel): void;
    onError(message: string, exception: any): void;
    onComplete(): void;
}
