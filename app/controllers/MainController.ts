module Controllers{
		
	export class MainController{
		message = 'Angular & TypeScript';
		
		constructor(
			$scope,
			pizzaService: PizzaService
		){
			$scope.vm = this;
			$scope.pizzas = pizzaService.pizzas;
			// $scope.pizzas2 = pizzaService.pizzas2();
			
		}
	}
}