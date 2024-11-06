Blockly.Arduino['block1101'] = function(block) {
  var value_e1 = Blockly.Arduino.valueToCode(block, 'e1', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'pinMode(14)=digitalRead();\n';
  return code;
};