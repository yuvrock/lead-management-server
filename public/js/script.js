angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
    function ($scope) {
        $scope.navigationItems = [
            {
                title: "Contacts",
                iconClass: "fa fa-user",
                href: "#/contacts"
            },
            {
                title: "Groups",
                iconClass: "fa fa-users",
                href: "#/groups"
            }
        ];
    }
]);
