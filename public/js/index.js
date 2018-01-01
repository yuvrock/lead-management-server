angular.module('patternfly.navigation').controller('vertNavController', ['$scope',
    function($scope) {
        $scope.navigationItems = [{
                title: "Contacts",
                iconClass: "fa fa-user",
                href: "#/contacts"
            },
            {
                title: "Groups",
                iconClass: "fa fa-users",
                href: "#/groups"
            },
        ];
    }
]);

let signedIn = false;

window.addEventListener("load", function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            signedIn = true;
            user.getIdToken().then(function(accessToken) {
                document.getElementById("sign-in").textContent = "Sign out";
                document.getElementById("account-details").textContent
                    = user.displayName + " (" + user.email + ")";
            });
        } else {
            signedIn = false;
            document.getElementById("sign-in").textContent = "Sign in";
            document.getElementById("account-details").textContent = "Not signed in";
        }
    }, function(error) {
        console.log(error);
    });

    document.getElementById("sign-in").addEventListener(
        "click", function() {
            if (signedIn) {
                firebase.auth().signOut();
            } else {
                window.location.assign("/signin.html");
            }
        }
    );
});