// source: messages/forecast.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.CoordinateData', null, global);
goog.exportSymbol('proto.DataInfo', null, global);
goog.exportSymbol('proto.Forecast', null, global);
goog.exportSymbol('proto.Value', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Forecast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Forecast.repeatedFields_, null);
};
goog.inherits(proto.Forecast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Forecast.displayName = 'proto.Forecast';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DataInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DataInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DataInfo.displayName = 'proto.DataInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CoordinateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CoordinateData.repeatedFields_, null);
};
goog.inherits(proto.CoordinateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CoordinateData.displayName = 'proto.CoordinateData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Value.displayName = 'proto.Value';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Forecast.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Forecast.prototype.toObject = function(opt_includeInstance) {
  return proto.Forecast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Forecast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Forecast.toObject = function(includeInstance, msg) {
  var f, obj = {
    refTime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    forecastTime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dataInfo: (f = msg.getDataInfo()) && proto.DataInfo.toObject(includeInstance, f),
    levelsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.CoordinateData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Forecast}
 */
proto.Forecast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Forecast;
  return proto.Forecast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Forecast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Forecast}
 */
proto.Forecast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setForecastTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = new proto.DataInfo;
      reader.readMessage(value,proto.DataInfo.deserializeBinaryFromReader);
      msg.setDataInfo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addLevels(value);
      break;
    case 6:
      var value = new proto.CoordinateData;
      reader.readMessage(value,proto.CoordinateData.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Forecast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Forecast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Forecast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Forecast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getForecastTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDataInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.DataInfo.serializeBinaryToWriter
    );
  }
  f = message.getLevelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.CoordinateData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 ref_time = 1;
 * @return {number}
 */
proto.Forecast.prototype.getRefTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.setRefTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 forecast_time = 2;
 * @return {number}
 */
proto.Forecast.prototype.getForecastTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.setForecastTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.Forecast.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional DataInfo data_info = 4;
 * @return {?proto.DataInfo}
 */
proto.Forecast.prototype.getDataInfo = function() {
  return /** @type{?proto.DataInfo} */ (
    jspb.Message.getWrapperField(this, proto.DataInfo, 4));
};


/**
 * @param {?proto.DataInfo|undefined} value
 * @return {!proto.Forecast} returns this
*/
proto.Forecast.prototype.setDataInfo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.clearDataInfo = function() {
  return this.setDataInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Forecast.prototype.hasDataInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string levels = 5;
 * @return {!Array<string>}
 */
proto.Forecast.prototype.getLevelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.setLevelsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.addLevels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.clearLevelsList = function() {
  return this.setLevelsList([]);
};


/**
 * repeated CoordinateData data = 6;
 * @return {!Array<!proto.CoordinateData>}
 */
proto.Forecast.prototype.getDataList = function() {
  return /** @type{!Array<!proto.CoordinateData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CoordinateData, 6));
};


/**
 * @param {!Array<!proto.CoordinateData>} value
 * @return {!proto.Forecast} returns this
*/
proto.Forecast.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.CoordinateData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CoordinateData}
 */
proto.Forecast.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.CoordinateData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Forecast} returns this
 */
proto.Forecast.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DataInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.DataInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DataInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    latMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    latMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    longMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    longMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    resolution: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DataInfo}
 */
proto.DataInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DataInfo;
  return proto.DataInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DataInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DataInfo}
 */
proto.DataInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongMin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongMax(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setResolution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DataInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DataInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DataInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatMin();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLatMax();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLongMin();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLongMax();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional double lat_min = 1;
 * @return {number}
 */
proto.DataInfo.prototype.getLatMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DataInfo} returns this
 */
proto.DataInfo.prototype.setLatMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double lat_max = 2;
 * @return {number}
 */
proto.DataInfo.prototype.getLatMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DataInfo} returns this
 */
proto.DataInfo.prototype.setLatMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double long_min = 3;
 * @return {number}
 */
proto.DataInfo.prototype.getLongMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DataInfo} returns this
 */
proto.DataInfo.prototype.setLongMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double long_max = 4;
 * @return {number}
 */
proto.DataInfo.prototype.getLongMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DataInfo} returns this
 */
proto.DataInfo.prototype.setLongMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double resolution = 5;
 * @return {number}
 */
proto.DataInfo.prototype.getResolution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DataInfo} returns this
 */
proto.DataInfo.prototype.setResolution = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CoordinateData.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CoordinateData.prototype.toObject = function(opt_includeInstance) {
  return proto.CoordinateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CoordinateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoordinateData.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CoordinateData}
 */
proto.CoordinateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CoordinateData;
  return proto.CoordinateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CoordinateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CoordinateData}
 */
proto.CoordinateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = new proto.Value;
      reader.readMessage(value,proto.Value.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CoordinateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CoordinateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CoordinateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoordinateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.CoordinateData.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoordinateData} returns this
 */
proto.CoordinateData.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.CoordinateData.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoordinateData} returns this
 */
proto.CoordinateData.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated Value values = 3;
 * @return {!Array<!proto.Value>}
 */
proto.CoordinateData.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Value, 3));
};


/**
 * @param {!Array<!proto.Value>} value
 * @return {!proto.CoordinateData} returns this
*/
proto.CoordinateData.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Value}
 */
proto.CoordinateData.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CoordinateData} returns this
 */
proto.CoordinateData.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    tmp: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    vgrd: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    ugrd: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Value}
 */
proto.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Value;
  return proto.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Value}
 */
proto.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTmp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVgrd(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUgrd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float TMP = 1;
 * @return {number}
 */
proto.Value.prototype.getTmp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.setTmp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.clearTmp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Value.prototype.hasTmp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float VGRD = 2;
 * @return {number}
 */
proto.Value.prototype.getVgrd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.setVgrd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.clearVgrd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Value.prototype.hasVgrd = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float UGRD = 3;
 * @return {number}
 */
proto.Value.prototype.getUgrd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.setUgrd = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Value} returns this
 */
proto.Value.prototype.clearUgrd = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Value.prototype.hasUgrd = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto);