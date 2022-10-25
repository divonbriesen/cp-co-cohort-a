const toggleResultColor = (requirementId, testCaseNumber, isValid) => {
    const testResultsBlock = getResultDiv(requirementId);
    const testCase = testResultsBlock.getElementsByTagName('li')[testCaseNumber - 1];
    testResultsBlock.classList.remove('hidden');
    if(isValid) {
        testCase.classList.remove('failure');
        testCase.classList.add('success');
    } else {
        testCase.classList.remove('success');
        testCase.classList.add('failure');
    }
}

const getResultDiv = id => {
    return document.getElementById(id).getElementsByClassName('test-results')[0];
}

const validate = (e) => {
    validateRequirement1();
    validateRequirement2();
    validateRequirement3();
    validateRequirement4();
    validateRequirement5();
    validateRequirement6();
    validateRequirement7();
    validateRequirement8();
    validateRequirement9();
    validateRequirement10();
    validateRequirement11();
    validateRequirement12();
    validateRequirement13();
    validateRequirement14();
    validateRequirement15();
    validateRequirement16();
    validateRequirement17();
    validateRequirement18();
}

const validateRequirement1 = () => {
    toggleResultColor(1, 1, treeDeclared());
    toggleResultColor(1, 2, treeHasCorrectKeyword());
}

const validateRequirement2 = () => {
    toggleResultColor(2, 1, treeDeclared());
    toggleResultColor(2, 2, isOakTree());
}

const validateRequirement3 = () => {
    toggleResultColor(3, 1, isAlaskaStateFlowerDeclared());
    toggleResultColor(3, 2, isForgetMeNot());
}

const validateRequirement4 = () => {
    toggleResultColor(4, 1, isNumberOfChoiceDeclared());
    toggleResultColor(4, 2, isNumberOfChoiceNumeric());
}

const validateRequirement5 = () => {
    toggleResultColor(5, 1, isBinaryChoiceDeclared());
    toggleResultColor(5, 2, isBinaryChoiceABoolean());
}

const validateRequirement6 = () => {
    toggleResultColor(6, 1, isDefaultVariable());
}

const validateRequirement7 = () => {
    toggleResultColor(7, 1, isNull());
}

const validateRequirement8 = () => {
    toggleResultColor(8, 1, isCorrectReassignment());
}

const validateRequirement9 = () => {
    toggleResultColor(9, 1, isOperand2ANumber());
}

const validateRequirement10 = () => {
    toggleResultColor(10, 1, isProductAccurate());
}

const validateRequirement11 = () => {
    toggleResultColor(11, 1, isProductOutputFormattedProperly());
}

const validateRequirement12 = () => {
    toggleResultColor(12, 1, isNumber(dataType12));
}

const validateRequirement13 = () => {
    toggleResultColor(13, 1, isString(dataType13));
}

const validateRequirement14 = () => {
    toggleResultColor(14, 1, isString(dataType14));
}

const validateRequirement15 = () => {
    toggleResultColor(15, 1, isNumber(dataType15));
}

const validateRequirement16 = () => {
    toggleResultColor(16, 1, isNumber(dataType16));
}

const validateRequirement17 = () => {
    toggleResultColor(17, 1, isNumber(dataType17));
}

const validateRequirement18 = () => {
    toggleResultColor(18, 1, isNaNString(dataType18));
}

/**
 * @example variableDeclared(() => nonPresentVariable) --> false
 * @param {Function} cb Callback function with reference to the variable
 * @returns {boolean} whether or not a variable has been Declared
 */
const variableDeclared = cb => {
    try {
        cb();
    }
    catch (e) {
        if(e.name === 'ReferenceError') {
            return false;
        }
    }
    return true;
}

const treeDeclared = () => {
    return variableDeclared(() => tree);
}

const treeHasCorrectKeyword = () => {
    if('tree' in window) { //Means it was Declared using 'var', or without a keyword.
        return false; 
    }

    //Account for typos
    if(variableDeclared(() => tree)) {
        try {
            const tempTree = tree;
            tree = 'spruce'; //Checks for const declaration
            tree = tempTree;
        }
        catch (e) {
            if(e.message === 'Assignment to constant variable.') {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

//REQ 2
const isOakTree = () => {
    return treeDeclared() && tree === 'Oak';    
}

//REQ 3
const isAlaskaStateFlowerDeclared = () => {
    return variableDeclared(() => alaskaStateFlower)
}

const isForgetMeNot = () => {
    return isAlaskaStateFlowerDeclared() && alaskaStateFlower === 'Forget-me-not';
}

//REQ 4
const isNumberOfChoiceDeclared = () => {
    return variableDeclared(() => numberOfChoice);
}

const isNumberOfChoiceNumeric = () => {
    return typeof numberOfChoice === 'number';
}

//REQ 5
const isBinaryChoiceDeclared = () => {
    return variableDeclared(() => binaryChoice);
}

const isBinaryChoiceABoolean = () => {
    return typeof binaryChoice === 'boolean'
}

//REQ 6
const isDefaultVariable = () => {
    return variableDeclared(() => defaultVariableValue) && defaultVariableValue === 'undefined';
}

//REQ 7
const isNull = () => {
    return variableDeclared(() => lackOfValue) && lackOfValue === null;
}

//REQ 8
const isCorrectReassignment = () => {
    return variableDeclared(() => reassignmentResult) && reassignmentResult === 'An error occurs, since you can\'t reassign a variable that was declared with const';
}

//REQ 9
const isOperand2ANumber = () => {
    return variableDeclared(() => operandTwo) && typeof operandTwo === 'number';
}

//REQ 10
const isProductAccurate = () => {
    return variableDeclared(() => product + operandTwo + numberOfChoice) && product === (operandTwo * numberOfChoice);
}

//REQ 11

const isProductOutputFormattedProperly = () => {
    return variableDeclared(() => productOutput) && productOutput === `The product is: ${product}`;
}

//Type Conversions

const isString = (data) => data === 'string';
const isNumber = (data) => data === 'number';
const isNaNString = (data) => data === 'NaN';

document.getElementsByClassName('submit')[0].addEventListener('click', validate);