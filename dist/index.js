"use strict";
exports.__esModule = true;
var vue_class_component_1 = require("vue-class-component");
exports["default"] = vue_class_component_1["default"];
var vuex_class_1 = require("vuex-class");
exports.State = vuex_class_1.State;
exports.Getter = vuex_class_1.Getter;
exports.Action = vuex_class_1.Action;
exports.Mutation = vuex_class_1.Mutation;
exports.namespace = vuex_class_1.namespace;
vue_class_component_1["default"].registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'asyncData',
    'fetch',
    'head',
    'middleware',
    'layout',
    'transition',
    'scrollToTop',
    'validate'
]);
