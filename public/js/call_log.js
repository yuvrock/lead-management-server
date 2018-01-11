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

$( document ).ready(function() {
    console.log( "ready!" );
	window.WebSocket = window.WebSocket || window.MozWebSocket;
	if (!window.WebSocket) {
    document.getElementById('chatlog').innerHTML += '<br>Sorry, but your browser doesn\'t support WebSocket.';
	return;
    }
	else {
		document.getElementById('chatlog').innerHTML += '<br>Browser supports WebSocket.';
	}
	var connection = new WebSocket('ws://127.0.0.1:40510');
	
	connection.onmessage = function (message) {
	console.log(message.data);
    try {
      var json = JSON.parse(message.data);
	  console.log('JSON: ', json);
    } catch (e) {
      console.log('Invalid JSON: ', message.data);
      return;
    }
	document.getElementById('chatlog').innerHTML += '<br>' + json.message;
	}
});
