
Blockly.Python.INDENT = '   ';

//CATEGORY: CONTROL
{
//If
    Blockly.Python['if'] = function(block) {
        var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC) || "True";
        var statements_name = Blockly.Python.statementToCode(block, 'NAME') || Blockly.Python.PASS;
        var code =  "if " + value_condition + " :\n" + statements_name ;  
        return code;  
};
//If_else
    Blockly.Python['if_else'] = function(block) {
        var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC) || "True";
        var statements_if_body = Blockly.Python.statementToCode(block, 'if_body') || Blockly.Python.PASS;
        var statements_else_body = Blockly.Python.statementToCode(block, 'else_body') || Blockly.Python.PASS;  
        var code =  "if " + value_condition + " :\n"+ statements_if_body  + "else :\n" +  statements_else_body;
        return code;
};
//If-elif-else
    Blockly.Python['if_elif_else'] = function(block) {
        var value_condition_if = Blockly.Python.valueToCode(block, 'condition_if', Blockly.Python.ORDER_ATOMIC) || "True";
        var statements_if_body = Blockly.Python.statementToCode(block, 'if_body') || Blockly.Python.PASS;
        var value_condition_elif = Blockly.Python.valueToCode(block, 'condition_elif', Blockly.Python.ORDER_ATOMIC) || "True";
        var statements_elif_body = Blockly.Python.statementToCode(block, 'elif_body')|| Blockly.Python.PASS;
        var statements_else_body = Blockly.Python.statementToCode(block, 'else_body')|| Blockly.Python.PASS;
        var code = 'if ' + value_condition_if + ' :\n '+       
                    statements_if_body + 
                    'elif ' + value_condition_elif + ' :\n' + 
                    statements_elif_body + 
                    'else : \n' + 
                    statements_else_body;
        return code;
};
}

//CATEGORY: LOOPS
{
//for
    Blockly.Python['for'] = function(block) {    
        var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC)|| "i";
        var value_range = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC) || "[]";
        var statements_for_body = Blockly.Python.statementToCode(block, 'for_body') ||Blockly.Python.PASS;  
        var code = 'for ' + value_variable + ' in ' + value_range + ' : \n' + statements_for_body;
        return code;
};
//while
    Blockly.Python['while'] = function(block) {
        var value_while_cond = Blockly.Python.valueToCode(block, 'while_cond', Blockly.Python.ORDER_ATOMIC) || "True";
        var statements_while_body = Blockly.Python.statementToCode(block, 'while_body') || Blockly.Python.PASS;
        var code = 'while ' + value_while_cond + ' :\n' + statements_while_body;
        return code;
};  
}

//CATEGORY: LOGIC
{
//compare
    Blockly.Python['compare'] = function(block) {
        var value_op_1 = Blockly.Python.valueToCode(block, 'op_1', Blockly.Python.ORDER_NONE);
        var dropdown_name = block.getFieldValue('operator');
        var value_op_2 = Blockly.Python.valueToCode(block, 'op_2', Blockly.Python.ORDER_NONE);
        var operator = '==';    
        if (dropdown_name === 'E'){
            operator = '==';
        }else if (dropdown_name === 'NE'){
            operator = '!=';
        }else if (dropdown_name === 'LT'){
            operator = '<';
        }else if (dropdown_name === 'GT'){
            operator = '>';
        }else if (dropdown_name === 'LET'){
            operator = '<=';
        }else if (dropdown_name === 'GET'){
            operator = '>=';
        }  
        var code = value_op_1 + ' '+ operator + ' '+ value_op_2;  
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//boolean-logic
    Blockly.Python['boolean_logic'] = function(block) {
        var value_op_1 = Blockly.Python.valueToCode(block, 'op_1', Blockly.Python.ORDER_ATOMIC);
        var dropdown_bool_operator = block.getFieldValue('bool_operator');
        var value_op_2 = Blockly.Python.valueToCode(block, 'op_2', Blockly.Python.ORDER_ATOMIC);
        if (dropdown_bool_operator === 'AND'){
            bool_operator = 'and';
        }else{
            bool_operator = 'or';
        }
        var code = value_op_1 +' ' + bool_operator + ' ' + value_op_2;
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//not
    Blockly.Python['not'] = function(block) {
        var value_bool_condition = Blockly.Python.valueToCode(block, 'bool_condition', Blockly.Python.ORDER_ATOMIC); 
        var code = (value_bool_condition === 'False') ? 'not False' : 'not True';  
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//true_false
    Blockly.Python['true_false'] = function(block) {
        var code = ((block.getFieldValue('bool_operator')) === 'TRUE'? 'True' : 'False');
        return [code, Blockly.Python.ORDER_ATOMIC];    
}
}

//CATEGORY: TEXT
{
//Add a text
    Blockly.Python['inser_text'] = function(block) {
        var text = block.getFieldValue('text_input');  
        var code = '\'' + text + '\'';
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//Print
    Blockly.Python['print'] = function(block) {
        var value_to_print = Blockly.Python.valueToCode(block, 'to_print', Blockly.Python.ORDER_ATOMIC);
        var code =  'print (' + value_to_print + ')\n';
        return code;
};
//Length Of
    Blockly.Python['lengthof'] = function(block) {
        var value_object = Blockly.Python.valueToCode(block, 'object', Blockly.Python.ORDER_ATOMIC);  
        var code = 'len ('  + value_object +  ')';  
        return [code, Blockly.Python.ORDER_ATOMIC];
};
}

//CATEGORY: MATH
{
//Number
    Blockly.Python['number'] = function(block) {  
        var code = parseInt(block.getFieldValue('input_number'));  
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//Operation
    Blockly.Python['operation'] = function(block) {
        var value_op_1 = Blockly.Python.valueToCode(block, 'op_1', Blockly.Python.ORDER_ATOMIC);
        var dropdown_operator = block.getFieldValue('operator');
        var value_op_2 = Blockly.Python.valueToCode(block, 'op_2', Blockly.Python.ORDER_ATOMIC);
  
        if (dropdown_operator === 'piu'){
            operator = '+';
        }else if (dropdown_operator === 'meno'){
            operator = '-';
        }else if (dropdown_operator === 'per'){
            operator = '*';
        }else if (dropdown_operator === 'diviso'){
            operator = '/';
        }else if (dropdown_operator === 'divintera'){
            operator = '//';
        }else if (dropdown_operator === 'modulo'){
            operator = '%';
        }   
        var code = value_op_1 + ' ' + operator + ' ' + value_op_2;  
        return [code, Blockly.Python.ORDER_ATOMIC];
};

}

//CATEGORY:VARIABLES
{
//Assegnamento
    Blockly.Python['assegnamento'] = function(block) {
        var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
        var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
        var code = value_variable + ' = ' + value_value + "\n";
        return code;
};
//Inizializzazione variable
    Blockly.Python['variable_init'] = function(block) {
        var text_var = block.getFieldValue('VAR');
        var code = text_var;
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//Lista
    Blockly.Python['lista'] = function(block) {
        var text_list = block.getFieldValue('list');
        var code = '[ ' + text_list + ' ]';
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//Free_input    
    Blockly.Python['free_input'] = function(block) {
        var text_input_free = block.getFieldValue('input_free');
        var code = text_input_free;
        return [code, Blockly.Python.ORDER_ATOMIC];
};    
}

//CATEGORY: FUNCTIONS
{
//definition
    Blockly.Python['def_function'] = function(block) {
        var text_name_function = block.getFieldValue('name_function');
        var text_par = block.getFieldValue('par');
        var statements_function_body = Blockly.Python.statementToCode(block, 'function_body');
        var code = 'def ' + text_name_function + ' (' + text_par + '): \n' + statements_function_body;
        return code;
};
//chiamata senza return
    Blockly.Python['chiamata'] = function(block) {
        var text_name_fun = block.getFieldValue('name_fun');
        var text_par_fun = block.getFieldValue('par_fun');
        var code = text_name_fun + ' (' + text_par_fun + ')' + '\n' ;
        return code;
};
//chiamata con return
    Blockly.Python['chiamata_return'] = function(block) {
        var text_name_fun = block.getFieldValue('name_fun');
        var text_par_fun = block.getFieldValue('par_fun');
        var code = text_name_fun + ' (' + text_par_fun + ')';
        return [code, Blockly.Python.ORDER_ATOMIC];
};
//return
    Blockly.Python['return'] = function(block) {
        var value_return_value = Blockly.Python.valueToCode(block, 'return_value', Blockly.Python.ORDER_ATOMIC);
        var code = 'return ' + value_return_value + '\n';
        return code;
};
    
}

//CATEGORY: CONSTANTS
{
//NaN
    Blockly.Python['nan'] = function(block) {
        var code = 'NaN';
        return [code, Blockly.Python.ORDER_ATOMIC];
};
}

//CATEGORY: COMMENT
{
    Blockly.Python['comment'] = function(block) {
        var text_commento = block.getFieldValue('commento');
        var code = '# ' + text_commento + '\n';
        return code;
};
}
