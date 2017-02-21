var app = angular.module("app", []);

app.controller('contrPrueba', function ($scope) {
	$scope.estados = [	
		{id_estado: "1", estado: "Amazonas"},
		{id_estado: "2", estado: "Anzoátegui"},
	];

	$scope.municipios = [	
		{id_municipio: "1", id_rela1: "1", municipio: "Alto Orinoco"},
		{id_municipio: "2", id_rela1: "1", municipio: "Autana"},
		{id_municipio: "1", id_rela1: "2", municipio: "Anaco"},
		{id_municipio: "2", id_rela1: "2", municipio: "Bolívar"},
	];

	$scope.ciudadParroquias = [	
		{id_ciudadParroquia: "1", id_rela2: "1", ciudadParroquia: "ciudad de amazonas(altorinoco)"},
		{id_ciudadParroquia: "2", id_rela2: "2", ciudadParroquia: "ciudad de anzoategui(anaco)"},
	];

	$scope.selectedItem1 = '';
	$scope.selectedItem2 = '';
	$scope.selectedItem3 = '';
});
