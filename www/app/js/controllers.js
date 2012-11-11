'use strict';

/* Controllers */

function AppCtrl($scope) {
    this.remoteConnectionRepository = new RemoteConnectionRepository();

    $scope.remoteConnection = this.remoteConnectionRepository.GetRemoteConnection();

    if ($scope.remoteConnection === undefined)
    {
        $scope.remoteConnection = new RemoteConnection("192.168.1.24", "8000");
    }

    $scope.debug = function(){
        window.location = "http://" + $scope.remoteConnection.IpAddress + ":" + $scope.remoteConnection.Port + "/index.html";
    };
}