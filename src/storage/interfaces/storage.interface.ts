export interface StorageInterface {

  getValue(key: string): Promise<string>;
  setValue(key: string, value: string): Promise<string>;
  delValue(key: string): Promise<void>;
  setObject(key: string, value: object): Promise<void>;
  getObject(key: string): Promise<object>;

  countTx(type: string, address: string): Promise<number>;
  indexTx(type: string, address: string, transactionId: string, timestamp: number): Promise<void>;
  getTx(type: string, address: string, limit: number, offset: number): Promise<string[]>;
}