//POSSIBLE ADDITIONS:
//*Keep the result if an operator is clicked after the equals function in order to keep using it inline.


angular.module('calculatorApp', []);

angular.module('calculatorApp').controller('MainController', function($scope) {

        $scope.buttonsClickedArray = [];
        $scope.savedResultsArray = [];
        $scope.output = '';
        $scope.result = '';


        //CONSTRUCTOR to make new number/operator object.
        function MathObject(number, operator) {
            this.number = number,
            this.operator = operator
        }


        //Takes an array of numbers and operators, turns it in to 1 string and converts it to a number with 4 decimal places and commas.
        function evalString(array) {
            return eval(array.join(' ')).toLocaleString();
        }

        //Send updates of what is being clicked to the DOM.
        $scope.prettyPrintClicks = function(input, qualifier) {

          console.log('Buttons Array:', $scope.buttonsClickedArray)
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            //If the last object is a number AND the input is a number/period, concatenate and update var output.  Number --> Number
            if (lastObject.number !== null && (qualifier === 'number' || qualifier === 'period')) {
                $scope.output += input;
            }
            //If the last object is a number AND the input is an operator, overwrite var output.
            //Number --> Operator
            if (lastObject.number !== null && qualifier === 'operator') {
                $scope.output = input;
                $scope.buttonsClickedArray.push(new MathObject(null, input));
            }
            //If the last object is an operator and the input is period, overwrite var output.
            //Operator --> Period
            if (lastObject.operator !== null && qualifier === 'period') {
                $scope.output = input;
                $scope.buttonsClickedArray.push(new MathObject('.', null));
            }
            //If the last object is a number and the input is a saved resutl, the overwrite vat output.
            //Number --> Result
            if (lastObject.number !== null && qualifier === 'result') {
                $scope.output = input;
            }
        }


        //    *** CLEAR / EQUALS / CLEAR RESULTS / USE RESULT CLICKS ***


        //Clears the array of numbers and the output.
        $scope.clickClear = function() {
            $scope.buttonsClickedArray = [];
            $scope.output = '';
            $scope.result = '';
        }

        //Clears the saved results list.
        $scope.clickClearResults = function() {
            $scope.savedResultsArray = [];
        }

        //If the the buttonsClickedArray has 2 or less items, nothing happens (not enough input).
        //Else it maps through the array of objects, pulls out the number or operator and returns them to a temp array.  Then the temp array is joined into a string and evaluated.  Finally giving result the final value.
        $scope.clickEquals = function() {
            if ($scope.buttonsClickedArray.length <= 2) {
                return
            } else {
                $scope.output = '';
                var tempArray = $scope.buttonsClickedArray.map(function(value) {
                    if (value.number !== null) {
                        return (value.number);
                    } else if (value.operator !== null) {
                        return value.operator;
                    }
                });
                $scope.result = evalString(tempArray);
                $scope.savedResultsArray.push($scope.result);
                $scope.buttonsClickedArray = [];
            }
        }



        //    *** NUMBER CLICKS ****
        //If the array is empty, create new object with clicked number in the number key.
        //If the last object is a number then concatenate clicked number to the number key.
        //Else create new object with clicked number in the number key.
        //Send to get pretty printed on DOM.
        $scope.clickZero = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }
            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('0', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '0';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('0', null));
            }
            $scope.prettyPrintClicks('0', 'number');
        }


        $scope.clickOne = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('1', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '1';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('1', null));
            }
            $scope.prettyPrintClicks('1', 'number');
        }


        $scope.clickTwo = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('2', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '2';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('2', null));
            }
            $scope.prettyPrintClicks('2', 'number');
        }


        $scope.clickThree = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('3', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '3';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('3', null));
            }
            $scope.prettyPrintClicks('3', 'number');
        }


        $scope.clickFour = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('4', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '4';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('4', null));
            }
            $scope.prettyPrintClicks('4', 'number');
        }


        $scope.clickFive = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('5', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '5';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('5', null));
            }
            $scope.prettyPrintClicks('5', 'number');
        }


        $scope.clickSix = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('6', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '6';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('6', null));
            }
            $scope.prettyPrintClicks('6', 'number');
        }


        $scope.clickSeven = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('7', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '7';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('7', null));
            }
            $scope.prettyPrintClicks('7', 'number');
        }



        $scope.clickEight = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('8', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '8';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('8', null));
            }
            $scope.prettyPrintClicks('8', 'number');
        }


        $scope.clickNine = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length > 1 && lastObject.operator !== null) {
                $scope.output = '';
            }

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('9', null));
            } else if (lastObject.number !== null) {
                lastObject.number += '9';
            } else {
                $scope.buttonsClickedArray.push(new MathObject('9', null));
            }
            $scope.prettyPrintClicks('9', 'number');
        }


        //Uses one of the saved results in a current or new equation.
        //If there is no object, OR the last object is an operator, then add new object with result.
        //Else If the last object is a number, then replace the last object with a new result object.
        $scope.useResult = function(result) {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]
            var tempString = result.replace(/\,/g, '');

            $scope.result = '';

            if ($scope.buttonsClickedArray.length === 0 || lastObject.operator !== null) {
                $scope.buttonsClickedArray.push(new MathObject(tempString, null));
            } else if (lastObject.number !== null) {
                $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1] = new MathObject(tempString, null);
            }

            $scope.prettyPrintClicks(tempString, 'result');
        }



        //    *** PERIOD CLICKS ***
        //If the array is empty, create new object with '.' in the number key and pretty print.
        //Else if there is at least 1 object in the array, create a var of the number string
        //if the last object is a number and there isn't already a '.' concatenate a '.' with the last object's number string.  Pretty print.  '.' is added to the array in prettyPrintClicks().
        $scope.clickPeriod = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            $scope.result = '';

            if ($scope.buttonsClickedArray.length === 0) {
                $scope.output = '';
                $scope.buttonsClickedArray.push(new MathObject('.', null));
                $scope.prettyPrintClicks('.', 'period');
            } else if ($scope.buttonsClickedArray.length > 0) {
                var currentNumberString = lastObject.number;

                if (lastObject.number !== null && currentNumberString.indexOf('.') === -1) {
                    lastObject.number += '.';
                    $scope.prettyPrintClicks('.', 'period');
                } else if (lastObject.operator !== null) {
                    $scope.prettyPrintClicks('.', 'period');
                }
            }
        }



        //    *** OPERATOR CLICKS ***

        //If there is an object in the array AND it is a number, then create lastStringChar var.
        //If the last character is not a '.', then pretty print. ('operator' added to array in prettyPrintClicks)
        $scope.clickAdd = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
                var lastStringChar = lastObject.number.length;

                if (lastObject.number.charAt(lastStringChar) !== '.') {
                    $scope.prettyPrintClicks('+', 'operator');
                }
            }
        }


        $scope.clickSubtract = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
                var lastStringChar = lastObject.number.length;

                if (lastObject.number.charAt(lastStringChar) !== '.') {
                    $scope.prettyPrintClicks('-', 'operator');
                }
            }
        }


        $scope.clickMultiply = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

            if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
                var lastStringChar = lastObject.number.length;

                if (lastObject.number.charAt(lastStringChar) !== '.') {
                    $scope.prettyPrintClicks('*', 'operator');
                }
            }
        }


        $scope.clickDivide = function() {
            var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]
            if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
                var lastStringChar = lastObject.number.length;

                if (lastObject.number.charAt(lastStringChar) !== '.') {
                    $scope.prettyPrintClicks('/', 'operator');
                }
            }
        }

    }) //End of MainController
