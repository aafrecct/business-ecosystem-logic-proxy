/* Copyright (c) 2015 - 2017 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 * This file belongs to the bae-logic-proxy-test of the
 * Business API Ecosystem
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * @author Francisco de la Vega <fdelavega@conwet.com>
 *         Jaime Pajuelo <jpajuelo@conwet.com>
 *         Aitor Magán <amagan@conwet.com>
 */
(function () {

    'use strict';

    angular
        .module('app')
        .controller('PricePlanUpdateCtrl', ['$element', '$scope', '$rootScope', '$controller', 'Offering', PricePlanUpdateController]);

    function PricePlanUpdateController($element, $scope, $rootScope, $controller, Offering) {
        /* jshint validthis: true */
        var vm = this;
        var _index, _pricePlan;

        angular.extend(vm, $controller('FormMixinCtrl', {$scope: $scope}));

        vm.CHARGE_PERIODS = Offering.TYPES.CHARGE_PERIOD;
        vm.CURRENCY_CODES = Offering.TYPES.CURRENCY_CODE;
        vm.PRICES = Offering.TYPES.PRICE;

        vm.update = update;

        $scope.$on(Offering.EVENTS.PRICEPLAN_UPDATE, function (event, index, pricePlan) {
            _index = index;
            _pricePlan = pricePlan;
            vm.data = angular.copy(pricePlan);
            $element.modal('show');
        });

        function update() {
            $rootScope.$broadcast(Offering.EVENTS.PRICEPLAN_UPDATED, _index, vm.data);
        }
    }

})();
