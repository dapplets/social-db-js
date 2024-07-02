export interface INearSigner {
  getAccountId(): Promise<string | null>;
  view(contractName: string, methodName: string, args: any): Promise<any>;
  call(
    contractName: string,
    methodName: string,
    args: any,
    gas?: string,
    deposit?: string
  ): Promise<void>;
}
