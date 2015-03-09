(function () {

    // Items Controller definition
    function ItemsCtrl($scope) {
        $scope.items = [
            {
                id: 1,
                type: 'book',
                label: 'Harry Potter - vol 1',
                date: '15/12/2014',
                to: 'Illan'
            }
            , {
                id: 2,
                type: 'BR',
                label: 'Transformers - vol 1,2 & 3',
                date: '15/07/2014',
                to: 'Fabrice'
            }
            , {
                id: 3,
                type: 'book',
                label: 'Le trône de Fer - intégrale 3',
                date: '31/12/2014',
                from: 'Marc'
            }
        ];

    };

    // MainApp Module definition
    angular
        .module('itemsModule', [])
        .config([function () {
            console.log("Items Module:: config");
        }])

        .run([function () {
            console.log("Items Module::running");
        }])

        .controller('ItemsCtrl', ItemsCtrl);

})();