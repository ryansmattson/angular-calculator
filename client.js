angular.module('calculatorApp', []);

angular.module('calculatorApp').controller('MainController', function($scope) {

    $scope.buttonsClickedArray = [];
    $scope.output = '';


    //Constructor to make new number/operator object.
    function MathObject(number, operator) {
        this.number = number,
            this.operator = operator
    }

    //Send updates of what is being clicked to the DOM.
    $scope.prettyPrintClicks = function(input, qualifier) {

        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

        //If the last object is a number AND the input is a number/period, concatenate and update var output.  Number --> Number
        if (lastObject.number !== null && (qualifier === 'number' || qualifier === 'period')) {
            $scope.output += input;
            console.log('Number --> Number');
        }
        //If the last object is a number AND the input is an operator, overwrite var output.
        //Number --> Operator
        if (lastObject.number !== null && qualifier === 'operator') {
            $scope.output = input;
            $scope.buttonsClickedArray.push(new MathObject(null, '+'));
            console.log('Number --> Operator');
        }
        //If the last object is an operator and the input is period, overwrite var output.
        //Operator --> Period
        if (lastObject.operator !== null && qualifier === 'period') {
            $scope.output = input;
            $scope.buttonsClickedArray.push(new MathObject('.', null));
            console.log('Operator --> Period');
        }
        console.log('output:', $scope.output);

    }


    //    *** CLEAR/EQUALS CLICKS ***


    //Clears the array of numbers and the output
    $scope.clickClear = function() {
      $scope.buttonsClickedArray = [];
      $scope.output = '';
        console.log($scope.buttonsClickedArray);
    }

    //Maps through the array of objects, pulls out the number or operator and returns them to a temp array.  Then the temp array is joined into a string and evaluated.  Finally giving output the final value.
    $scope.clickEquals = function() {
      if ($scope.buttonsClickedArray.length === 0) {
        return
      } else {
        var tempArray = $scope.buttonsClickedArray.map(function(value){
          if (value.number !== null){
            return (value.number);
          } else if (value.operator !== null) {
            return value.operator;
          }
        });
        console.log(tempArray);
        $scope.output = 'Result: ' + eval(tempArray.join(' '));
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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickOne = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickTwo = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickThree = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickFour = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickFive = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickSix = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickSeven = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }



    $scope.clickEight = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickNine = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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
        console.log($scope.buttonsClickedArray);
    }

    //    *** PERIOD CLICKS ***
    //If the array is empty, create new object with '.' in the number key and pretty print.
    //Else if there is at least 1 object in the array, create a var of the number string
    //if the last object is a number and there isn't already a '.' concatenate a '.' with the last object's number string.  Pretty print.  '.' is added to the array in prettyPrintClicks().
    $scope.clickPeriod = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

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

        console.log($scope.buttonsClickedArray);
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
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickSubtract = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

        if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
            var lastStringChar = lastObject.number.length;

            if (lastObject.number.charAt(lastStringChar) !== '.') {
                $scope.prettyPrintClicks('-', 'operator');
            }
        }
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickMultiply = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]

        if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
            var lastStringChar = lastObject.number.length;

            if (lastObject.number.charAt(lastStringChar) !== '.') {
                $scope.prettyPrintClicks('*', 'operator');
            }
        }
        console.log($scope.buttonsClickedArray);
    }


    $scope.clickDivide = function() {
        var lastObject = $scope.buttonsClickedArray[$scope.buttonsClickedArray.length - 1]
        if ($scope.buttonsClickedArray.length > 0 && lastObject.number !== null) {
            var lastStringChar = lastObject.number.length;

            if (lastObject.number.charAt(lastStringChar) !== '.') {
                $scope.prettyPrintClicks('/', 'operator');
            }
        }
        console.log($scope.buttonsClickedArray);
    }





})
