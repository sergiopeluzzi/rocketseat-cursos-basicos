/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* CLASSES\r\nclass List {\r\n    constructor() {\r\n        this.data = []\r\n    }\r\n\r\n    add(data) {\r\n        this.data.push(data)\r\n        console.log(this.data)\r\n    }\r\n}\r\n\r\nclass TodoList extends List {\r\n    constructor() {\r\n        super()\r\n\r\n        this.usuario = 'Sergio'\r\n    }\r\n\r\n    mostraUsuario() {\r\n        console.log(this.usuario)\r\n    }\r\n}\r\n\r\nconst minhaLista = new TodoList()\r\n\r\ndocument.getElementById('novotodo').onclick = function() {\r\n    minhaLista.add('Novo Todo')\r\n}\r\n\r\nminhaLista.mostraUsuario()\r\n*/\n\n/*\r\nclass Matematica {\r\n    static soma(a, b) {\r\n        return a + b\r\n    }\r\n}\r\n\r\nconst soma = Matematica.soma(10, 6)\r\nconsole.log(soma)\r\n*/\n\n/* CONST E LET\r\nconst user = { nome: 'Sergio' }\r\n\r\nuser.nome = 'Sergio Peluzzi'\r\nuser.idade = 32\r\n\r\nfunction teste() {\r\n    let user = { nome: 'Ronaldo' }\r\n    console.log(user)\r\n}\r\n\r\nteste()\r\nconsole.log(user)\r\n*/\n\n/* OPERAÇÕES COM ARRAYS \r\n// MAP - percorre todos os itens do array refenciando pelo item podendo add tb o index\r\nconst arr = [1,2,3,4,5,6,7,8,9]\r\n\r\nconst newArr = arr.map(function(item) {\r\n    return item * 2\r\n})\r\n\r\nconst newArr2 = newArr.map(function(item, index) {\r\n    return item + index\r\n})\r\n\r\nconsole.log(arr)\r\nconsole.log(newArr)\r\nconsole.log(newArr2)\r\n\r\n// REDUCE - percorre todo o array guardando o valor do next ao total, e retornando uma unica info\r\nconst sum = arr.reduce(function(total, next) {\r\n    return total + next\r\n})\r\n\r\nconsole.log(sum)\r\n\r\n// FILTER - percorre o array e retorna o item onde o retorno for true\r\n\r\nconst par = arr.filter(function(item) {\r\n    return item % 2 === 0\r\n})\r\n\r\nconsole.log(par)\r\n\r\n// FIND - percorre o array e procura por um valor, se encontrar retorna o valor, senão retorna undefined\r\n\r\nconst achou = arr.find(function(item) {\r\n    return item == 7\r\n})\r\n\r\nconsole.log(achou)\r\n\r\n*/\n\n/** ARROW FUNCTIONS */\n// Substituem com perfeição as funções anonimas, aquelas sem nome ;D\n// QUando tem 1 paramentro suprime os parenteses, qndo tem 1 linha suprime o return e as chaves\n\n/*\r\nconst arr = [1,2,3,4,5,6,7,8,9,10]\r\nconst newArr = arr.map(item => item * 2)\r\n\r\nconsole.log(newArr)\r\n*/\n\n/** VALORES PADRÃO */\n// São valores padrão para os parametros das funções, caso o parametro n seja passado, o valor padrao é atribuído\n\n/*\r\nfunction soma(a = 0, b = 0) {\r\n    return a + b\r\n}\r\n\r\nconst soma2 = (a = 1, b = 1) => a + b\r\n\r\nconsole.log(soma(1))\r\nconsole.log(soma2())\r\n*/\n\n/** DESESTRUTURAÇÃO */\n// É uma forma rápida e fácil de atribuir o valor de objetos a variaveis. limpa o codigo\n\n/*\r\nconst user = {\r\n    nome: 'Sergio',\r\n    idade: 32,\r\n    endereco: {\r\n        cidade: 'Cacoal',\r\n        UF: 'RO'\r\n    }\r\n}\r\n\r\n//forma antiga\r\nconst anome = user.nome\r\nconst aidade = user.idade\r\nconst acidade = user.endereco.cidade\r\n\r\nconsole.log(anome)\r\nconsole.log(aidade)\r\nconsole.log(acidade)\r\n\r\n//forma desestruturação\r\nconst { nome, idade, endereco: { cidade } } = user\r\n\r\nconsole.log(nome)\r\nconsole.log(idade)\r\nconsole.log(cidade)\r\n\r\n//forma antiga\r\nfunction amostraNome(user) {\r\n    console.log(user.nome)\r\n}\r\n\r\n//forma desestruturação\r\nfunction mostraNome({ nome, idade }) {\r\n    console.log(nome, idade)\r\n}\r\n\r\namostraNome(user)\r\nmostraNome(user)\r\n*/\n\n/** REST E SPREAD */\n// REST utilizado com o destruct como no caso abaixo, atribui todo o resto de um objeto à variável setada com o operador rest\n// no caso abaixo, o objeto user é desestruturado em duas variaveis: nome recebe o atributo nome e resto recebe o restante dos atributos\n\n/*\r\nconst user = {\r\n    nome: 'Sergio',\r\n    idade: 32,\r\n    empresa: 'Scalare'\r\n}\r\n\r\nconst { nome, ...resto } = user\r\n\r\nconsole.log(nome)\r\nconsole.log(resto)\r\n\r\n// pode ser usado em arrays tb\r\nconst arr = [1,2,3,4,5,6,7,8,9]\r\nconst [ a, b, c, ...d ] = arr\r\n\r\nconsole.log(a)\r\nconsole.log(b)\r\nconsole.log(c)\r\nconsole.log(d)\r\n\r\n// e em funções tb com paassagem de parâmetros\r\nfunction soma(a, b, c, d) {\r\n    return a + b + c + d\r\n}\r\n\r\nconsole.log(soma(1,3))\r\n\r\nfunction soma2(...soma) {\r\n    return soma.reduce( (total, next) => total + next)\r\n}\r\n\r\nconsole.log(soma2(1,2,3,4,5,6,7))\r\n*/\n\n/** SPREAD */\n// Faz uma opração distinta do REST, como por exemplo\n// Juntar arrays\n\n/*\r\nconst arr1 = [1,2,3,4,5,6,7,8,9]\r\nconst arr2 = [10,11,12,13,14,15,16,17,18,19]\r\n\r\nconst arr3 = [...arr1, ...arr2]\r\n\r\nconsole.log(arr3)\r\n\r\n// copiar dados do objeto\r\nconst user2 = {\r\n    nome: 'Sergio',\r\n    idade: 32,\r\n    empresa: 'Scalare'\r\n}\r\n\r\nconst user3 = {\r\n    ...user2,\r\n    nome: 'Lauriana'\r\n}\r\n\r\nconsole.log(user3)\r\n*/\n\n/** TEMPLATE LITERALS */\n\n/*\r\nconst nome = 'Sergio'\r\nconst idade = 32\r\n//fomar antiga\r\nconsole.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')\r\n//forma template\r\nconsole.log(`Meu nome é ${nome} e tenho ${idade} anos`)\r\n*/\n\n/** OBJECT SHORT SYNTAX */\n// É uma forma de abreviação na atribuição de atributos de objetos onde ja existem variaveis com o mesmo nome\n\n/*\r\nconst nome = 'Sergio'\r\nconst idade = 32\r\n//forma antiga\r\nconst user = {\r\n    nome: nome,\r\n    idade: idade,\r\n    empresa: 'Scalare'\r\n}\r\n\r\nconsole.log(user)\r\n\r\n//forma nova\r\nconst user2 = {\r\n    nome, \r\n    idade,\r\n    empresa: 'Scalare'\r\n}\r\n\r\nconsole.log(user2)\r\n*/\n\n/** EXERCÍCIO 01 */\n\n/*\r\nclass Usuario {\r\n    constructor(email, senha) {\r\n        this.email = email\r\n        this.senha = senha\r\n    }\r\n\r\n    isAdmin() {\r\n        return this.admin\r\n    }\r\n}\r\n\r\nclass Admin extends Usuario {\r\n    constructor() {\r\n        super()\r\n        this.admin = true\r\n    }\r\n}\r\n\r\nconst user1 = new Usuario('teste@teste.com', '123456')\r\nconst admin1 = new Admin('teste@teste.com', '123456')\r\n\r\nconsole.log(user1.isAdmin())\r\nconsole.log(admin1.isAdmin())\r\n*/\n\n/** EXERCÍCIO 02 */\n\n/*\r\nconst usuarios = [\r\n    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },\r\n    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },\r\n    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },\r\n];\r\n\r\n//map\r\nconst idades = usuarios.map(item => item.idade)\r\nconsole.log(idades)\r\n\r\n//filter\r\nconst rs18 = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18)\r\nconsole.log(rs18)\r\n\r\n//find\r\nconst google = usuarios.find(item => item.empresa === 'Google')\r\nconsole.log(google)\r\n\r\n//reduce com filter\r\nconst redfilt = usuarios.map(item => {\r\n    item.idade *= 2\r\n    return item\r\n}).filter(item => item.idade <= 50)\r\nconsole.log(redfilt)\r\n*/\n\n/** EXERCÍCIO 03 */\n// Converter as funções em arrow functions\n// 3.1\n\n/*\r\nconst arr = [1, 2, 3, 4, 5];\r\narr.map( item => item + 10);\r\n\r\n// 3.2\r\n// Dica: Utilize uma constante pra function\r\nconst usuario = { nome: 'Diego', idade: 23 };\r\nconst mostraIdade = (usuario) => usuario.idade\r\nconsole.log(mostraIdade(usuario));\r\n// 3.3\r\n// Dica: Utilize uma constante pra function\r\nconst nome = \"Diego\";\r\nconst idade = 23;\r\nconst mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })\r\nconsole.log(mostraUsuario(nome, idade));\r\nconsole.log(mostraUsuario(nome));\r\n// 3.4\r\nconst promise = () => new Promise((resolve, reject) => resolve())\r\nconsole.log(JSON.parse(promise))\r\n*/\n\n/** EXERCÍCIO 04 */\n\n/*\r\n//4.1\r\nconst empresa = {\r\n    nome: 'Scalare',\r\n    endereco: {\r\n        cidade: 'Cacoal',\r\n        estado: 'RO'\r\n    }\r\n}\r\n\r\nconst { nome, endereco: { cidade, estado }} = empresa\r\nconsole.log(nome)\r\nconsole.log(cidade)\r\nconsole.log(estado)\r\n*/\n\n/*\r\n//4.2\r\nfunction mostraInfo({nome, idade}) {\r\n    return `${nome} tem ${idade} anos`\r\n}\r\n\r\nconsole.log(mostraInfo({ nome: 'Sergio', idade: 32 }))\r\n*/\n\n/** EXERCÍCIO 05 */\n\n/*\r\n//5.1\r\nconst arr = [1,2,3,4,5,6,7,8,9]\r\nconst [ arr2, ...arr3 ] = arr\r\nconsole.log(arr2)\r\nconsole.log(arr3)\r\n\r\nconst soma = (...numeros) => numeros.reduce((total, next) => total + next) \r\nconsole.log(soma(1,8,7,9,4,5,1,3,2,5,8,7,8,9))\r\n\r\n//5.2\r\nconst usuario = {\r\n    nome: 'Diego',\r\n    idade: 23,\r\n    endereco: {\r\n        cidade: 'Rio do Sul',\r\n        uf: 'SC',\r\n        pais: 'Brasil',\r\n    }\r\n};\r\n   \r\nconst usuario2 = {\r\n    ...usuario,\r\n    nome: 'Gabriel'\r\n}\r\n\r\nconst usuario3 = {\r\n    ...usuario,\r\n    endereco: {\r\n        ...usuario.endereco,\r\n        cidade: 'Lontras'\r\n    }\r\n\r\n}\r\n\r\nconsole.log(usuario2, usuario3)\r\n*/\n\n/** EXERCICIO 06 */\n\n/*\r\nconst usuario = 'Diego';\r\nconst idade = 23;\r\nconsole.log(`O usuário ${usuario} possui ${idade} anos`);\r\n*/\n\n/** EXERCICIO 07 */\n\n/*\r\nconst nome2 = 'Diego';\r\nconst idade2 = 23;\r\nconst usuario2 = {\r\n nome2,\r\n idade2,\r\n cidade: 'Rio do Sul',\r\n};\r\n\r\nconsole.log(usuario2)\r\n*/\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });