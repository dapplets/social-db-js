import { INearSigner } from "./signer";
export type StorageUsage = string;
export type StorageView = {
    usedBytes: StorageUsage;
    availableBytes: StorageUsage;
};
export type Value = any;
export declare class SocialDb {
    private _signer;
    private _contractName;
    constructor(_signer: INearSigner, _contractName: string);
    get(keys: string[]): Promise<Value>;
    keys(keys: string[]): Promise<string[]>;
    set(originalData: Value): Promise<void>;
    delete(keys: string[]): Promise<void>;
    private _getAccountStorage;
    private _fetchCurrentData;
    static _nullifyData(data: any): any;
    static buildNestedData(keys: string[], data: any): any;
    static splitObjectByDepth(obj: any, depth?: number, path?: string[]): any;
    static getValueByKey(keys: string[], obj: any): any;
}
//# sourceMappingURL=index.d.ts.map