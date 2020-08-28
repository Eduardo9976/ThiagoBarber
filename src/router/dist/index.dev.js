"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Contato = _interopRequireDefault(require("../views/Contato.vue"));

var _Servicos = _interopRequireDefault(require("../views/Servicos.vue"));

var _Agendamento = _interopRequireDefault(require("../views/Agendamento.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/contato',
  name: 'Contato',
  component: _Contato["default"]
}, {
  path: '/agendamento',
  name: 'Agendamento',
  component: _Agendamento["default"]
}, {
  path: '/servicos',
  name: 'Servicos',
  component: _Servicos["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;