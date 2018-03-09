//CATEGORY: CONTROL
{
//If
Blockly.Blocks['if'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if");
    this.appendValueInput("condition")
        .setCheck(["Boolean", "String", "Number"]);
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
// If-else
Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if");
    this.appendValueInput("condition")
        .setCheck(["Boolean", "String", "Number"]);
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("if_body")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else :");
    this.appendStatementInput("else_body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//If-elif-else
Blockly.Blocks['if_elif_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("if");
    this.appendValueInput("condition_if")
        .setCheck(["Boolean", "String", "Number"]);
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("if_body")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("elif ");
    this.appendValueInput("condition_elif")
        .setCheck(["Boolean", "String", "Number"]);
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("elif_body")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else :");
    this.appendStatementInput("else_body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
}
//CATEGORY: LOGIC
{
//Compare
Blockly.Blocks['compare'] = {
  init: function() {
    this.appendValueInput("op_1")
        .setCheck(["Number", "String"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["==","E"], ["!=","NE"], [">","GT"], [">=","GET"], ["<","LT"], ["<=","LET"]]), "operator");
    this.appendValueInput("op_2")
        .setCheck(["Number", "String"]);
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(290);
 this.setTooltip("This block compare two elements. It returns a boolean value.");
 this.setHelpUrl("");
  }
};
//Boolean_Logic
Blockly.Blocks['boolean_logic'] = {
  init: function() {
    this.appendValueInput("op_1")
        .setCheck(["Boolean", "Number", "String"]);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldDropdown([["and","AND"], ["or","OR"]]), "bool_operator");
    this.appendValueInput("op_2")
        .setCheck(["Boolean", "Number", "String"]);
    this.setInputsInline(true);
    this.setOutput(true, ["Boolean", "Number"]);
    this.setColour(290);
 this.setTooltip("All is true except the 0 that is false. This block compares two numbers or two boolean (true/false)and returns a boolean value.");
 this.setHelpUrl("");
  }
};
//Not
Blockly.Blocks['not'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("not");
    this.appendValueInput("bool_condition")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(290);
 this.setTooltip("This block negates a condition ");
 this.setHelpUrl("");
  }
};
//True/False
Blockly.Blocks['true_false'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","TRUE"], ["False","FALSE"]]), "bool_operator");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(290);
 this.setTooltip("This block sets a boolean value (true/false)");
 this.setHelpUrl("");
  }
};
}
//CATEGORY: TEXT
{//Add a Text
Blockly.Blocks['inser_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("add a text"), "text_input");
    this.appendDummyInput()
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("A letter, a word, a line of text.");
 this.setHelpUrl("");
  }
};
//Print
Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print");
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("to_print")
        .setCheck(["String", "Number", "Boolean"]); 
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("Print the value between the brackets.");
 this.setHelpUrl("");
  }
};
//Length Of
Blockly.Blocks['lengthof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("len (");
    this.appendValueInput("object")
        .setCheck(["String"]);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(160);
 this.setTooltip("Returns the length of a string as a number value.");
 this.setHelpUrl("");
  }
};
}
//CATEGORY: MATH
{
//Number
Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), "input_number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(360);
 this.setTooltip("This block allows to insert an integer number.");
 this.setHelpUrl("");
  }
};
//Operation
Blockly.Blocks['operation'] = {
  init: function() {
    this.appendValueInput("op_1")
        .setCheck(["Number", "String"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","piu"], ["-","meno"], ["*","per"], ["/","diviso"], ["//","divintera"], ["%","modulo"]]), "operator");
    this.appendValueInput("op_2")
        .setCheck(["Number", "String"]);
    this.setOutput(true, "Number");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
}; 
}
//CATEGORY: LOOPS
{
//For
Blockly.Blocks['for'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for");
    this.appendValueInput("variable")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("in");
    this.appendValueInput("range")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("for_body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("To iterate into a range of object.");
 this.setHelpUrl("");
  }
};
//While
Blockly.Blocks['while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("while");
    this.appendValueInput("while_cond")
        .setCheck(["Boolean", "String"]);
    this.appendDummyInput()
        .appendField(":");
    this.appendStatementInput("while_body")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
}
//CATEGORY: VARIABLES
{
//Assegnamento variabile    
Blockly.Blocks['assegnamento'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("value")
        .setCheck(["Boolean", "Number", "String"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(72);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//Variable_init
Blockly.Blocks['variable_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Name of the variable"), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(72);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//Lista
Blockly.Blocks['lista'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1, 2, 3, ..."), "list");
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(72);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//Free_input
Blockly.Blocks['free_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("free block"), "input_free");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(72);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
}
//CATEGORY: FUNCTION
{
//definition
Blockly.Blocks['def_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("def ")
        .appendField(new Blockly.FieldTextInput("name"), "name_function")
        .appendField("( ")
        .appendField(new Blockly.FieldTextInput("parameters"), "par")
        .appendField(" ) :");
    this.appendStatementInput("function_body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//chiamata
Blockly.Blocks['chiamata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "name_fun")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("parametres"), "par_fun")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//chiamata con return
Blockly.Blocks['chiamata_return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "name_fun")
        .appendField("(")
        .appendField(new Blockly.FieldTextInput("parametres"), "par_fun")
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//return
Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return");
    this.appendValueInput("return_value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};   
}
//CATEGORY: CONSTANTS
{
//NaN
Blockly.Blocks['nan'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("NaN");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};    
}
//CATEGORY: COMMENT
{   
    Blockly.Blocks['comment'] = {
        init: function() {
        this.appendDummyInput()
        .appendField("#")
        .appendField(new Blockly.FieldTextInput("Inserire un commento"), "commento");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};    
}
