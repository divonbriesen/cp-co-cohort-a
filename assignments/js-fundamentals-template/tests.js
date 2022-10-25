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
    toggleResultColor(1, 1, applicant1Declared());
    toggleResultColor(1, 2, applicant1IsObject());
}

const validateRequirement2 = () => {
    toggleResultColor(2, 1, applicant1HasNameProperty());
    toggleResultColor(2, 2, namePropertyIsString());
}

const validateRequirement3 = () => {
    toggleResultColor(3, 1, applicant1HasAgeProperty());
    toggleResultColor(3, 2, agePropertyIsInteger());
}

const validateRequirement4 = () => {
    toggleResultColor(4, 1, applicant1HasProgramStatusProperty());
    toggleResultColor(4, 2, programStatusPropertyIsValid());
}

const validateRequirement5 = () => {
    toggleResultColor(5, 1, applicant1HasAddressProperty());
    toggleResultColor(5, 2, addressPropertyIsValid());
}

const validateRequirement6 = () => {
    toggleResultColor(6, 1, isNameProperlyAccessed());
}

const validateRequirement7 = () => {
    toggleResultColor(7, 1, isAgeProperlyAccessed());
}

const validateRequirement8 = () => {
    toggleResultColor(8, 1, isCityProperlyAccessed());
}

const validateRequirement9 = () => {
    toggleResultColor(9, 1, isApplicant1EligibleCheck());
}

const validateRequirement10 = () => {
    toggleResultColor(10, 1, isEligibleApplicantReturnsBoolean());
    toggleResultColor(10, 2, isEligibleApplicantWithAge(18, true));
    toggleResultColor(10, 3, isEligibleApplicantWithAge(17, false));
    toggleResultColor(10, 4, isEligibleApplicantWithAge(100, true));
}

const validateRequirement11 = () => {
    toggleResultColor(11, 1, isApplicant1ActiveCheck());
}

const validateRequirement12 = () => {
    toggleResultColor(12, 1, isActiveApplicantReturnsBoolean());
    toggleResultColor(12, 2, isActiveApplicantWithStatus('Active', true));
    toggleResultColor(12, 3, isActiveApplicantWithStatus('Applied', false));
}

const validateRequirement13 = () => {
    toggleResultColor(13, 1, firstVegetableIsBokChoy());
}

const validateRequirement14 = () => {
    toggleResultColor(14, 1, cucumberIsAddedToEnd());
}

const validateRequirement15 = () => {
    const vegetables = ['bok choy', 'broccoli', 'brussels sprouts', 'cabbage', 'carrots', 'cauliflower', 'onion'];
    toggleResultColor(15, 1, isCopy(vegetables));
    toggleResultColor(15, 2, isCopy([]));
    toggleResultColor(15, 3, isCopy([532,-123,54,'hello']));
}

const validateRequirement16 = () => {
    toggleResultColor(16, 1, runsScoredReturnsNumber());
    toggleResultColor(16, 2, runsScoredIsValid([4,2,3], 9));
    toggleResultColor(16, 3, runsScoredIsValid([], 0));
}

const validateRequirement17 = () => {
    toggleResultColor(17, 1, filterApplicantsByEligibilityDeclared() && functionReturnsArray(filterApplicantsByEligibility));
    const validApplicants = [
        {
            id: 1,
            age: 19
        },
        {
            id: 5,
            age: 19
        },
        {
            id: 7,
            age: 19
        },
        {
            id: 1000,
            age: 19
        }
    ];
    const invalidApplicants = [
        
        {
            id: 2,
            age: 12
        },
        {
            id: 54,
            age: 9
        },
        {
            id: 7123,
            age: 2
        },
        {
            id: 832,
            age: 16
        }
    ]
    toggleResultColor(17, 2, filterApplicantsByEligibilityDeclared() && functionReturnsExpectedValue(filterApplicantsByEligibility, [...invalidApplicants, ...validApplicants], validApplicants));
    toggleResultColor(17, 3, filterApplicantsByEligibilityDeclared() && functionReturnsExpectedValue(filterApplicantsByEligibility, [], []));
    toggleResultColor(17, 4, filterApplicantsByEligibilityDeclared() && functionReturnsExpectedValue(filterApplicantsByEligibility, invalidApplicants, []));
}

const validateRequirement18 = () => {
    toggleResultColor(18, 1, filterApplicantsByProgramStatusDeclared() && functionReturnsArray(filterApplicantsByProgramStatus));
    const validApplicants = [
        {
            id: 1,
            programStatus: 'Active'
        },
        {
            id: 5,
            programStatus: 'Active'
        },
        {
            id: 7,
            programStatus: 'Active'
        },
        {
            id: 1000,
            programStatus: 'Active'
        }
    ];
    const invalidApplicants = [
        
        {
            id: 2,
            programStatus: 'Applied'
        },
        {
            id: 54,
            programStatus: 'Applied'
        },
        {
            id: 7123,
            programStatus: 'Applied'
        },
        {
            id: 832,
            programStatus: 'Applied'
        }
    ]
    toggleResultColor(18, 2, filterApplicantsByProgramStatusDeclared() && functionReturnsExpectedValue(filterApplicantsByProgramStatus, [...invalidApplicants, ...validApplicants], validApplicants));
    toggleResultColor(18, 3, filterApplicantsByProgramStatusDeclared() && functionReturnsExpectedValue(filterApplicantsByProgramStatus, [], []));
    toggleResultColor(18, 4, filterApplicantsByProgramStatusDeclared() && functionReturnsExpectedValue(filterApplicantsByProgramStatus, invalidApplicants, []));
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

const applicant1Declared = () => {
    return variableDeclared(() => applicant1);
}

const applicant1IsObject = () => {
    return applicant1Declared && typeof applicant1 === 'object';
}

//REQ 2
const applicant1HasNameProperty = () => {
    return applicant1Declared() && applicant1.hasOwnProperty('name');    
}

const namePropertyIsString = () => {
    return applicant1HasNameProperty() && typeof applicant1.name === 'string';
}

//REQ 3
const applicant1HasAgeProperty = () => {
    return applicant1Declared() && applicant1.hasOwnProperty('age');    
}

const agePropertyIsInteger = () => {
    if(applicant1HasAgeProperty()) {
        const {age} = applicant1;
        return typeof age === 'number' && 0 <= age && age <= 122;
    }
    return false;
}

//REQ 4
const applicant1HasProgramStatusProperty = () => {
    return applicant1Declared() && applicant1.hasOwnProperty('programStatus');    
}

const programStatusPropertyIsValid = () => {
    return applicant1HasProgramStatusProperty() && ['Applied', 'Accepted', 'Active', 'Completed', 'Dismissed', 'Rejected'].includes(applicant1.programStatus);
}

//REQ 5
const applicant1HasAddressProperty = () => {
    return applicant1Declared() && applicant1.hasOwnProperty('address');
}

const isCatalyteAddress = ({state, city, zipCode}) => {
    return state === 'MD' && city === 'Baltimore' && zipCode === 21201;
}

const addressPropertyIsValid = () => {
    return applicant1HasAddressProperty() && isCatalyteAddress(applicant1.address);
}

//REQ 6
const isNameProperlyAccessed = () => {
    return variableDeclared(() => applicant1NameA) && !variableDeclared(() => applicant1NameB) && !variableDeclared(() => applicant1NameC);
}

//REQ 7
const isAgeProperlyAccessed = () => {
    return !variableDeclared(() => applicant1AgeA) && variableDeclared(() => applicant1AgeB) && !variableDeclared(() => applicant1AgeC);
}

//REQ 8
const isCityProperlyAccessed = () => {
    return !variableDeclared(() => applicant1CityA) && !variableDeclared(() => applicant1CityB) && variableDeclared(() => applicant1CityC);
}

//REQ 9
const isApplicant1EligibleCheck = () => {
    return variableDeclared(() => isApplicant1Eligible) && typeof isApplicant1Eligible === 'boolean' && agePropertyIsInteger() && isApplicant1Eligible === (applicant1.age >= 18)
}

//REQ 10
const isEligibleApplicantReturnsBoolean = () => {
    const testApplicant = {
        age: 20
    }
    return variableDeclared(() => isEligibleApplicant) && typeof isEligibleApplicant(testApplicant) === 'boolean';
}

const isEligibleApplicantWithAge = (age, expected) => {
    const testApplicant = {age};
    return isEligibleApplicantReturnsBoolean && isEligibleApplicant(testApplicant) === expected;
}

//REQ 11
const isApplicant1ActiveCheck = () => {
    return variableDeclared(() => isApplicant1Active) && typeof isApplicant1Active === 'boolean' && programStatusPropertyIsValid() && isApplicant1Active === (applicant1.programStatus === 'Active');
}

//REQ 12
const isActiveApplicantReturnsBoolean = () => {
    const testApplicant = {
        programStatus: 'Active'
    }
    return variableDeclared(() => isApplicant1Active) && typeof isActiveApplicant(testApplicant) === 'boolean';
}

const isActiveApplicantWithStatus = (programStatus, expected) => {
    const testApplicant = {programStatus};
    return isActiveApplicantReturnsBoolean && isActiveApplicant(testApplicant) === expected;
}

//REQ 13
const firstVegetableIsBokChoy = () => {
    return variableDeclared(() => firstVegetable) && firstVegetable === 'bok choy';
}

//REQ 14
const cucumberIsAddedToEnd = () => {
    return variableDeclared(() => vegetables) && Array.isArray(vegetables) && vegetables[vegetables.length - 1] === 'cucumber';
}

//REQ 15
const isCopy = original => {
    if(variableDeclared(() => copyArray)) {
        const copiedArray = copyArray(original);
        for(let i = 0; i < copiedArray.length; i++) {
            if(copiedArray[i] !== original[i]) {
                return false;
            }
        }
        return original.length === copiedArray.length;
    }
    return false;
}

//REQ 16
const runsScoredReturnsNumber = () => {
    if(variableDeclared(() => runsScored)) {
        let res = runsScored([1,2]);
        return typeof res === 'number';
    }
    return false;
}

const runsScoredIsValid = (testCase, expected) => {
    return runsScoredReturnsNumber() && runsScored(testCase) === expected;
}

//REQ 17 & 18
const filterApplicantsByEligibilityDeclared = () => {
    return variableDeclared(() => filterApplicantsByEligibility);
}

const filterApplicantsByProgramStatusDeclared = () => {
    return variableDeclared(() => filterApplicantsByEligibility);
}

const functionReturnsArray = (fn) => {
    return Array.isArray(fn([]));
}

const functionReturnsExpectedValue = (fn, input, expected) => {
    const actual = fn(input).sort((a,b) => a.id - b.id);
    expected = expected.sort((a,b) => a.id - b.id);
    if(expected.length !== actual.length) {
        return false;
    }
    for(let i = 0; i < expected.length; i++) {
        if(expected[i].id !== actual[i].id) {
            return false;
        }
    }
    return true;
}

//Type Conversions

const isString = (data) => data === 'string';
const isNumber = (data) => data === 'number';
const isNaNString = (data) => data === 'NaN';

document.getElementsByClassName('submit')[0].addEventListener('click', validate);