// Blockly.JavaScript['blynkV2_begin'] = function(block) {
//   var text_auth = block.getFieldValue('auth');
//   var code = `
// #EXTINC
// #define BLYNK_PRINT Serial
// #END
// #EXTINC
// #include <WiFi.h>
// #END
// #EXTINC
// #include <WiFiClient.h>
// #END
// #EXTINC
// #include <BlynkSimpleEsp32.h>
// #END
// Blynk.begin("${text_auth}");
// `;
//   return code;
// };

Blockly.JavaScript['blynkV2_begin_wifi'] = function(block) {
  var text_auth = block.getFieldValue('auth');
  var text_ssid = block.getFieldValue('ssid');
  var text_password = block.getFieldValue('password');
  var text_template = block.getFieldValue('TEMPLATE_ID');
  var text_device = block.getFieldValue('DEVICE_NAME');
  var code = `

#EXTINC #define BLYNK_PRINT Serial#END
#EXTINC #define BLYNK_TEMPLATE_ID "${text_template}"#END
#EXTINC #define BLYNK_DEVICE_NAME "${text_device}"#END
#EXTINC #define BLYNK_AUTH_TOKEN "${text_auth}"#END
#EXTINC #include <WiFi.h>#END
#EXTINC #include <WiFiClient.h>#END
#EXTINC #include <BlynkSimpleEsp32.h>#END

Serial.begin(115200);
Blynk.begin("${text_auth}","${text_ssid}","${text_password}");
`;
  return code;
};

// Blockly.JavaScript['blynkV2_begin_wifi_local_server'] = function(block) {
//   var text_auth = block.getFieldValue('auth');
//   var text_ssid = block.getFieldValue('ssid');
//   var text_password = block.getFieldValue('password');
//   var text_host = block.getFieldValue('host');
//   var number_port = block.getFieldValue('port');
//   var code = `
// #EXTINC
// #define BLYNK_PRINT Serial
// #END
// #EXTINC
// #include <WiFi.h>
// #END
// #EXTINC
// #include <WiFiClient.h>
// #END
// #EXTINC
// #include <BlynkSimpleEsp32.h>
// #END
// Blynk.begin("${text_auth}","${text_ssid}","${text_password}","${text_host}",${number_port});
// `;
//   return code;
// };

Blockly.JavaScript['blynkV2_run'] = function(block) {
  var code = `Blynk.run();\n`;
  return code;
};
Blockly.JavaScript['blynkV2_sync'] = function(block) {
  var code = `Blynk.syncAll();\n`;
  return code;
};

Blockly.JavaScript['blynkV2_write'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = `
#FUNCTION
BLYNK_WRITE(${dropdown_vpin})
{
  ${statements_statement}
}
#END
`;
  return code;
};

Blockly.JavaScript['blynkV2_param_int'] = function(block) {
  var code = `param.asInt()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blynkV2_param_double'] = function(block) {
  var code = `param.asDouble()`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['blynkV2_param_str'] = function(block) {
  var code = `param.asStr()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['blynkV2_connect'] = function(block) {
  var code = `Blynk.connected()`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['blynkV2_push_data'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var value_name = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `Blynk.virtualWrite(${dropdown_vpin},${value_name});\n`;
  return code;
};

Blockly.JavaScript['blynkV2_read'] = function(block) {
  var dropdown_vpin = block.getFieldValue('vpin');
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  var code = `
#FUNCTION
BLYNK_READ(${dropdown_vpin})
{
  ${statements_statement}
}
#END
`;
  return code;
};