// package: 
// file: messages/forecast.proto

import * as jspb from "google-protobuf";

export class Forecast extends jspb.Message {
  getRefTime(): number;
  setRefTime(value: number): void;

  getForecastTime(): number;
  setForecastTime(value: number): void;

  getUrl(): string;
  setUrl(value: string): void;

  hasDataInfo(): boolean;
  clearDataInfo(): void;
  getDataInfo(): DataInfo | undefined;
  setDataInfo(value?: DataInfo): void;

  clearLevelsList(): void;
  getLevelsList(): Array<string>;
  setLevelsList(value: Array<string>): void;
  addLevels(value: string, index?: number): string;

  clearDataList(): void;
  getDataList(): Array<CoordinateData>;
  setDataList(value: Array<CoordinateData>): void;
  addData(value?: CoordinateData, index?: number): CoordinateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Forecast.AsObject;
  static toObject(includeInstance: boolean, msg: Forecast): Forecast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Forecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Forecast;
  static deserializeBinaryFromReader(message: Forecast, reader: jspb.BinaryReader): Forecast;
}

export namespace Forecast {
  export type AsObject = {
    refTime: number,
    forecastTime: number,
    url: string,
    dataInfo?: DataInfo.AsObject,
    levelsList: Array<string>,
    dataList: Array<CoordinateData.AsObject>,
  }
}

export class DataInfo extends jspb.Message {
  getLatMin(): number;
  setLatMin(value: number): void;

  getLatMax(): number;
  setLatMax(value: number): void;

  getLongMin(): number;
  setLongMin(value: number): void;

  getLongMax(): number;
  setLongMax(value: number): void;

  getResolution(): number;
  setResolution(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DataInfo): DataInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataInfo;
  static deserializeBinaryFromReader(message: DataInfo, reader: jspb.BinaryReader): DataInfo;
}

export namespace DataInfo {
  export type AsObject = {
    latMin: number,
    latMax: number,
    longMin: number,
    longMax: number,
    resolution: number,
  }
}

export class CoordinateData extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoordinateData.AsObject;
  static toObject(includeInstance: boolean, msg: CoordinateData): CoordinateData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoordinateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoordinateData;
  static deserializeBinaryFromReader(message: CoordinateData, reader: jspb.BinaryReader): CoordinateData;
}

export namespace CoordinateData {
  export type AsObject = {
    latitude: number,
    longitude: number,
    valuesList: Array<Value.AsObject>,
  }
}

export class Value extends jspb.Message {
  hasTmp(): boolean;
  clearTmp(): void;
  getTmp(): number;
  setTmp(value: number): void;

  hasVgrd(): boolean;
  clearVgrd(): void;
  getVgrd(): number;
  setVgrd(value: number): void;

  hasUgrd(): boolean;
  clearUgrd(): void;
  getUgrd(): number;
  setUgrd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    tmp: number,
    vgrd: number,
    ugrd: number,
  }
}

