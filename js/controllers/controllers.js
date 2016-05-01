/**
 * Created by sokos6 on 4/30/16.
 */
app.controller('Homepage',['$scope',function($scope) {
    $scope.homepage = "Homepage";
}]);

app.controller('About',['$scope', function($scope) {
    $scope.about = "Loerm impsum...";
}]);

app.controller('Date',['$scope', function($scope) {
    $scope.now = new Date();
}])