(function () {
    //text box alatt
        //ha 1-3 db ételt írt be -> "Enjoy!"
        //ha 0 -> "Please enter data first"
        //ha 4 v több -> "Too much!"

        //elvileg nem kell foglalkozni ha vele ha véletlen két vesszőt ír
    'use strict'

    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    //LunchCheckController.inject = ['$scope'];

    function LunchCheckController() {
        var vm = this;

        vm.list="";
        vm.lunchAnsw = "";
        vm.lunchCheck = function () {
            var lunchAnsw = getAnsw(vm.list);
            vm.lunchAnsw = lunchAnsw;

        };
        var color;
        vm.color = color;
        function getAnsw(input) {
            if (input === "") {
                color = 'color: red';
                return "Please enter data first!";
            }

            var stringArr = input.split(",");

            if (stringArr.length < 4) {
                color = 'color: green';
                return "Enjoy!";
            } else {
                color = 'color: green';
                return "Too much!";
            }
        }
    };
})();
