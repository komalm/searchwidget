(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('filtering-angular-package', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['filtering-angular-package'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, platformBrowser, common) { 'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p))
                  d[p] = b[p]; };
      return extendStatics(d, b);
  };
  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
      var t = {};
      for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }
  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
      else
          for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); };
  }
  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) { if (f !== void 0 && typeof f !== "function")
          throw new TypeError("Function expected"); return f; }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p in contextIn)
              context[p] = p === "access" ? {} : contextIn[p];
          for (var p in contextIn.access)
              context.access[p] = contextIn.access[p];
          context.addInitializer = function (f) { if (done)
              throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
          var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
          if (kind === "accessor") {
              if (result === void 0)
                  continue;
              if (result === null || typeof result !== "object")
                  throw new TypeError("Object expected");
              if (_ = accept(result.get))
                  descriptor.get = _;
              if (_ = accept(result.set))
                  descriptor.set = _;
              if (_ = accept(result.init))
                  initializers.unshift(_);
          }
          else if (_ = accept(result)) {
              if (kind === "field")
                  initializers.unshift(_);
              else
                  descriptor[key] = _;
          }
      }
      if (target)
          Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
  }
  ;
  function __runInitializers(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
          value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
  }
  ;
  function __propKey(x) {
      return typeof x === "symbol" ? x : "".concat(x);
  }
  ;
  function __setFunctionName(f, name, prefix) {
      if (typeof name === "symbol")
          name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  ;
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try {
              step(generator.next(value));
          }
          catch (e) {
              reject(e);
          } }
          function rejected(value) { try {
              step(generator["throw"](value));
          }
          catch (e) {
              reject(e);
          } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function () { if (t[0] & 1)
              throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f)
              throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
              try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                  if (y = 0, t)
                      op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0:
                      case 1:
                          t = op;
                          break;
                      case 4:
                          _.label++;
                          return { value: op[1], done: false };
                      case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                      case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                              _ = 0;
                              continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                              _.label = op[1];
                              break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                              _.label = t[1];
                              t = op;
                              break;
                          }
                          if (t && _.label < t[2]) {
                              _.label = t[2];
                              _.ops.push(op);
                              break;
                          }
                          if (t[2])
                              _.ops.pop();
                          _.trys.pop();
                          continue;
                  }
                  op = body.call(thisArg, _);
              }
              catch (e) {
                  op = [6, e];
                  y = 0;
              }
              finally {
                  f = t = 0;
              }
          if (op[0] & 5)
              throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
      }
  }
  var __createBinding = Object.create ? (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function () { return m[k]; } };
      }
      Object.defineProperty(o, k2, desc);
  }) : (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      o[k2] = m[k];
  });
  function __exportStar(m, o) {
      for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
  }
  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
          return m.call(o);
      if (o && typeof o.length === "number")
          return {
              next: function () {
                  if (o && i >= o.length)
                      o = void 0;
                  return { value: o && o[i++], done: !o };
              }
          };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
          return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
      }
      catch (error) {
          e = { error: error };
      }
      finally {
          try {
              if (r && !r.done && (m = i["return"]))
                  m.call(i);
          }
          finally {
              if (e)
                  throw e.error;
          }
      }
      return ar;
  }
  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                  if (!ar)
                      ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
              }
          }
      return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n])
          i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try {
          step(g[n](v));
      }
      catch (e) {
          settle(q[0][3], e);
      } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]); }
  }
  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
  }
  function __asyncValues(o) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
  }
  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
      }
      else {
          cooked.raw = raw;
      }
      return cooked;
  }
  ;
  var __setModuleDefault = Object.create ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function (o, v) {
      o["default"] = v;
  };
  function __importStar(mod) {
      if (mod && mod.__esModule)
          return mod;
      var result = {};
      if (mod != null)
          for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }
  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m")
          throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }
  function __classPrivateFieldIn(state, receiver) {
      if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
          throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  function __addDisposableResource(env, value, async) {
      if (value !== null && value !== void 0) {
          if (typeof value !== "object" && typeof value !== "function")
              throw new TypeError("Object expected.");
          var dispose;
          if (async) {
              if (!Symbol.asyncDispose)
                  throw new TypeError("Symbol.asyncDispose is not defined.");
              dispose = value[Symbol.asyncDispose];
          }
          if (dispose === void 0) {
              if (!Symbol.dispose)
                  throw new TypeError("Symbol.dispose is not defined.");
              dispose = value[Symbol.dispose];
          }
          if (typeof dispose !== "function")
              throw new TypeError("Object not disposable.");
          env.stack.push({ value: value, dispose: dispose, async: async });
      }
      else if (async) {
          env.stack.push({ async: true });
      }
      return value;
  }
  var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  function __disposeResources(env) {
      function fail(e) {
          env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
      }
      function next() {
          while (env.stack.length) {
              var rec = env.stack.pop();
              try {
                  var result = rec.dispose && rec.dispose.call(rec.value);
                  if (rec.async)
                      return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
              }
              catch (e) {
                  fail(e);
              }
          }
          if (env.hasError)
              throw env.error;
      }
      return next();
  }
  var tslib_es6 = {
      __extends: __extends,
      __assign: __assign,
      __rest: __rest,
      __decorate: __decorate,
      __param: __param,
      __metadata: __metadata,
      __awaiter: __awaiter,
      __generator: __generator,
      __createBinding: __createBinding,
      __exportStar: __exportStar,
      __values: __values,
      __read: __read,
      __spread: __spread,
      __spreadArrays: __spreadArrays,
      __spreadArray: __spreadArray,
      __await: __await,
      __asyncGenerator: __asyncGenerator,
      __asyncDelegator: __asyncDelegator,
      __asyncValues: __asyncValues,
      __makeTemplateObject: __makeTemplateObject,
      __importStar: __importStar,
      __importDefault: __importDefault,
      __classPrivateFieldGet: __classPrivateFieldGet,
      __classPrivateFieldSet: __classPrivateFieldSet,
      __classPrivateFieldIn: __classPrivateFieldIn,
      __addDisposableResource: __addDisposableResource,
      __disposeResources: __disposeResources,
  };

  var fetchData = function (_a) {
      var headers = _a.headers, body = _a.body, url = _a.url, method = _a.method, cache = _a.cache;
      return __awaiter(void 0, void 0, void 0, function () {
          var response;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4 /*yield*/, fetch(url, {
                          headers: headers,
                          body: body,
                          method: method === undefined || method === null ? 'GET' : method,
                          cache: cache,
                      })];
                  case 1:
                      response = _a.sent();
                      if (!response.ok) {
                          throw new Error('Something went wrong!');
                      }
                      return [2 /*return*/, response.json()];
              }
          });
      });
  };

  var FilteringComponent = /** @class */ (function () {
      function FilteringComponent() {
          this.hostname = 'https://www.diksha.gov.in';
          this.AddtionalFilterConfig = [];
          this.FilterConfig = [];
          this.CardsFieldsObject = {};
          this.FormAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.SearchAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.TermsAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.GetDefaultChannel = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.GetChannelAPI = {
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.DefaultChannelID = '';
      }
      FilteringComponent.prototype.ngOnInit = function () {
          var _this = this;
          fetchData({
              url: this.GetDefaultChannel.url,
              method: this.GetDefaultChannel.method,
              headers: this.GetDefaultChannel.headers,
              cache: this.GetDefaultChannel.cache
                  ? this.GetDefaultChannel.cache
                  : 'default',
          })
              .then(function (res) {
              _this.DefaultChannelID = res.result.response.value;
              _this.GetChannelFrameworks();
          })
              .catch(function (err) {
              console.log(err.message);
          });
      };
      FilteringComponent.prototype.GetChannelFrameworks = function () {
          var _this = this;
          fetchData({
              url: this.hostname + "/api/channel/v1/read/" + this.DefaultChannelID,
              method: this.GetChannelAPI.method,
              headers: this.GetChannelAPI.headers,
              cache: this.GetDefaultChannel.cache
                  ? this.GetDefaultChannel.cache
                  : 'default',
          })
              .then(function (res) {
              _this.Frameworks = res.result.channel.frameworks;
          })
              .catch(function (err) {
              console.log(err);
          });
      };
      return FilteringComponent;
  }());
  FilteringComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'lib-filtering',
                  template: "<app-wrapper\r\n  [AddtionalFilterConfig]=\"AddtionalFilterConfig\"\r\n  [FilterConfig]=\"FilterConfig\"\r\n  [hostname]=\"hostname\"\r\n  [FormAPI]=\"FormAPI\"\r\n  [FrameworksArray]=\"Frameworks\"\r\n  [CardsFieldConfig]=\"CardsFieldsObject\"\r\n  [TermsAPI]=\"TermsAPI\"\r\n  [SearchAPI]=\"SearchAPI\"\r\n></app-wrapper>\r\n"
              },] }
  ];
  FilteringComponent.ctorParameters = function () { return []; };
  FilteringComponent.propDecorators = {
      hostname: [{ type: core.Input }],
      AddtionalFilterConfig: [{ type: core.Input }],
      FilterConfig: [{ type: core.Input }],
      CardsFieldsObject: [{ type: core.Input }],
      FormAPI: [{ type: core.Input }],
      SearchAPI: [{ type: core.Input }],
      TermsAPI: [{ type: core.Input }],
      GetDefaultChannel: [{ type: core.Input }],
      GetChannelAPI: [{ type: core.Input }]
  };

  var FiltersComponentComponent = /** @class */ (function () {
      function FiltersComponentComponent() {
          this.Show = '';
          this.Data = '';
          this.FiltersArrayEvent = new core.EventEmitter();
          this.AddFilterNumberEvent = new core.EventEmitter();
          this.FiltersArray = [];
          this.Selected = [];
          this.AddFilterNumber = [0];
          this.Name = '';
          this.OptionValue = [];
          this.FilterConfig = [];
          this.AddtionalFilterConfig = [];
          this.AllFiltersArray = [];
          this.OptionOb = [];
          this.Check = [];
      }
      FiltersComponentComponent.prototype.getOptionStatus = function (a) {
          var _a;
          var idx = this.OptionOb.findIndex(function (obj) { return obj.name.toLowerCase() === a.toLowerCase(); });
          return (_a = this.OptionOb[idx]) === null || _a === void 0 ? void 0 : _a.Options;
      };
      FiltersComponentComponent.prototype.OptionsShow = function (a) {
          var index = this.OptionOb.findIndex(function (obj) { return obj.name.toLowerCase() === a.toLowerCase(); });
          if (index !== -1) {
              this.OptionOb[index].Options = !this.OptionOb[index].Options;
          }
          return this.OptionOb[index].Options ? this.OptionOb[index].Options : false;
      };
      FiltersComponentComponent.prototype.isSelected = function (optionName) {
          var flag = true;
          this.FiltersArray.map(function (item) {
              if (item.name.toLowerCase() === optionName.toLowerCase() &&
                  item.value.length !== 0) {
                  flag = false;
              }
          });
          return flag;
      };
      FiltersComponentComponent.prototype.CheckIfOptionPresent = function (optionName, option) {
          var flag = false;
          this.FiltersArray.map(function (item) {
              if (item.name.toLowerCase() === optionName.toLowerCase() &&
                  item.value.includes(option)) {
                  flag = true;
              }
          });
          return flag;
      };
      FiltersComponentComponent.prototype.CheckIfOptionPresentNew = function (optionName) {
          var _a;
          var flag = false;
          (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map(function (item) {
              if (item.name.toLowerCase() === optionName.toLowerCase()) {
                  flag = true;
              }
          });
          return flag;
      };
      FiltersComponentComponent.prototype.OptionNamePresent = function (optionName, itemarg) {
          var _a;
          var flag = false;
          (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map(function (item) {
              if (item.name.toLowerCase() === optionName.toLowerCase() &&
                  item.name.toLowerCase() === itemarg.name.toLowerCase()) {
                  flag = true;
              }
          });
          return flag;
      };
      FiltersComponentComponent.prototype.Reset = function () {
          this.FiltersArray = [];
      };
      FiltersComponentComponent.prototype.IsSingleSelect = function (OptionName) {
          var flag = false;
          this.FilterConfig.map(function (item) {
              console.log(item);
              if (item.name.toLowerCase() === OptionName.toLowerCase()) {
                  if (item.SelectType === 'single') {
                      flag = true;
                  }
              }
          });
          return flag;
      };
      FiltersComponentComponent.prototype.addFilter = function (OptionName, OptionValue) {
          var _this = this;
          var _a;
          if (this.CheckIfOptionPresentNew(OptionName)) {
              (_a = this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                  if (_this.OptionNamePresent(OptionName, item)) {
                      if (item.value.includes(OptionValue)) {
                          var newarr = item.value;
                          var indexofOption = item.value.indexOf(OptionValue);
                          newarr.splice(indexofOption, 1);
                          item.value = newarr;
                          return;
                      }
                      if (!item.value.includes(OptionValue)) {
                          var oldArr = item.value;
                          oldArr.push(OptionValue);
                          item.value = oldArr;
                      }
                  }
              });
          }
          else {
              this.FiltersArray = __spread(this.FiltersArray, [
                  { name: OptionName, value: [OptionValue] },
              ]);
          }
          var lastIdx = this.AddFilterNumber.length;
          this.AddFilterNumber.push(this.AddFilterNumber[lastIdx - 1] + 1);
          this.AddFilterNumberEvent.emit(this.AddFilterNumber);
          this.Check = __spread(this.Check, this.FiltersArray);
          this.FiltersArrayEvent.emit(this.FiltersArray);
      };
      FiltersComponentComponent.prototype.OptionShowHide = function () {
          var arr = [];
          if (this.FilterConfig.length !== 0) {
              this.FilterConfig.map(function (item) {
                  arr.push({
                      name: item.name,
                      Options: false,
                  });
              });
          }
          if (this.AddtionalFilterConfig.length !== 0) {
              this.AddtionalFilterConfig.map(function (item) {
                  if (item.isEnabled)
                      arr.push({
                          name: item.name,
                          Options: false,
                      });
              });
          }
          this.OptionOb = arr;
      };
      FiltersComponentComponent.prototype.ngOnInit = function () {
          this.OptionShowHide();
      };
      return FiltersComponentComponent;
  }());
  FiltersComponentComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'lib-filters-component',
                  template: "<ng-container>\r\n  <div>\r\n    <div>\r\n      <h4\r\n        style=\"\r\n          color: rgb(0, 0, 0);\r\n          margin-bottom: 5px;\r\n          font-weight: 600;\r\n          font-size: 19px;\r\n        \"\r\n      >\r\n        {{ this.Name.toUpperCase() }}\r\n      </h4>\r\n      <div\r\n        *ngIf=\"isSelected(this.Name)\"\r\n        class=\"dsHhXj\"\r\n        (click)=\"OptionsShow(this.Name)\"\r\n      >\r\n        Select\r\n      </div>\r\n      <div\r\n        *ngIf=\"!isSelected(this.Name)\"\r\n        (click)=\"OptionsShow(this.Name)\"\r\n        class=\"dsHhXj\"\r\n      >\r\n        <div *ngFor=\"let term of this.FiltersArray\">\r\n          <div\r\n            style=\"display: flex; column-gap: 4px; flex-wrap: nowrap\"\r\n            *ngIf=\"term.name === this.Name\"\r\n          >\r\n            <div *ngFor=\"let option of term.value\">\r\n              {{ option }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"getOptionStatus(this.Name)\">\r\n        <div class=\"fugxRD\">\r\n          <ng-container *ngFor=\"let term of OptionValue\">\r\n            <div (click)=\"addFilter(this.Name, term)\" class=\"hHjkUf\">\r\n              <div class=\"ghPFCr\" style=\"cursor: pointer\">\r\n                {{ term }}\r\n              </div>\r\n              <span *ngIf=\"CheckIfOptionPresent(this.Name, term)\">\u2705</span>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n",
                  styles: [".faKsuq{background:#e9e8d9;padding:10px 20px;width:-moz-max-content;width:max-content;border-radius:10px;width:15rem;display:flex;flex-direction:column;row-gap:8px}.dsHhXj{display:flex;align-items:center;padding:8px;border-radius:15px;width:14rem;height:1.3rem;overflow-x:scroll;overflow-y:hidden;background-color:#fff;cursor:pointer;color:#00008b}.dsHhXj::-webkit-scrollbar{display:none}.fugxRD{flex-direction:column;position:absolute;margin-top:4px;width:14rem;color:#00008b;overflow-y:scroll;max-height:10rem;min-height:-moz-fit-content;min-height:fit-content;border-radius:10px;background:#fff;padding:10px;z-index:999}.fugxRD::-webkit-scrollbar{display:none}.fEvyMP{border:none;color:#000;font-size:15px;font-weight:700;position:relative;left:104px;cursor:pointer;top:10px;background:transparent}.hHjkUf{background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:3px;margin-top:5px;cursor:pointer;border-radius:10px}.hHjkUf:hover{background-color:#cecece}.heading{color:#000;margin-bottom:5px;font-weight:600;font-size:19px}.kbiFbQ{display:flex;align-items:center;padding:8px;border-radius:15px;min-width:15rem;overflow-x:scroll;background-color:#fff;cursor:pointer;color:#00008b}.kbiFbQ::-webkit-scrollbar{display:none}.gIIEFD{flex-direction:column;position:absolute;margin-top:4px;min-width:15rem;max-width:-moz-max-content;max-width:max-content;color:#00008b;overflow-y:scroll;max-height:10rem;min-height:-moz-fit-content;min-height:fit-content;border-radius:10px;background:#fff;padding:10px;z-index:999}.gIIEFD::-webkit-scrollbar{display:none}.ghPFCr{font-size:18px;font-weight:500;color:#00008b;margin:5px}.gSmLwX{background-color:#ddd;display:flex;justify-content:space-between;align-items:center;padding:3px;margin-top:5px;cursor:pointer;border-radius:10px}@media (max-width:\"320px\"){.kbiFbQ{width:10rem}}"]
              },] }
  ];
  FiltersComponentComponent.propDecorators = {
      Data: [{ type: core.Input }],
      FiltersArrayEvent: [{ type: core.Output }],
      AddFilterNumberEvent: [{ type: core.Output }],
      Name: [{ type: core.Input }],
      OptionValue: [{ type: core.Input }],
      FilterConfig: [{ type: core.Input }],
      AddtionalFilterConfig: [{ type: core.Input }],
      AllFiltersArray: [{ type: core.Input }]
  };

  var CardsComponentComponent = /** @class */ (function () {
      function CardsComponentComponent() {
          this.name = '';
          this.type = '';
          this.tags = [''];
          this.image = '';
          this.subject = '';
          this.publisher = '';
      }
      CardsComponentComponent.prototype.ngOnInit = function () { };
      CardsComponentComponent.prototype.ngAfterViewInit = function () { };
      return CardsComponentComponent;
  }());
  CardsComponentComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'lib-cards-component',
                  template: "<div>\n  <div class=\"Container\">\n    <div class=\"TopContent\">\n      <div>\n        <p class=\"Link\" style=\"font-size: 18px;\">{{ this.name }}</p>\n        <p class=\"Type\">{{ this.type }}</p>\n      </div>\n      <div class=\"ImageDiv\">\n        <img\n          class=\"Image\"\n          [src]=\"\n            this.image ||\n            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'\n          \"\n        />\n      </div>\n    </div>\n    <div>\n      <div class=\"TagsDiv\" *ngIf=\"tags.length\">\n        <ng-container *ngFor=\"let tag of this.tags\">\n          <div *ngIf=\"tag\" class=\"Tags\">{{ tag }}</div>\n        </ng-container>\n      </div>\n      <div class=\"LowerDiv\">\n        <div class=\"LowerItem\" *ngIf=\"subject\">\n          <dt class=\"DescType\">Subject</dt>\n          <dd class=\"DetailDesc\">{{ subject }}</dd>\n        </div>\n        <div class=\"LowerItem\" *ngIf=\"publisher\">\n          <dt class=\"DescType\">Publisher</dt>\n          <dd class=\"DetailDesc\">{{ this.publisher }}</dd>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                  styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap\");*{font-family:Noto Sans,sans-serif}.Container{display:block;overflow:hidden;padding:1rem;border-radius:.5rem;border-width:1px 1px .5rem;border-color:grey grey #a7f3d0;box-shadow:2px 2px 2px 2px rgba(0,0,0,.1);width:98%;width:23rem}.Container:hover{box-shadow:8px 8px 8px 8px rgba(0,0,0,.2);scale:1.001;animation:.3s ease-in-out both;cursor:pointer}.TopContent{display:flex;justify-content:space-between}.Link{font-weight:bolder;color:#111827;font-size:15px}.Image{-o-object-fit:cover;object-fit:cover;border-radius:9999px;width:4rem;height:4rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.TagsDiv{display:flex;-moz-column-gap:.75rem;column-gap:.75rem;font-size:.4rem;line-height:1.25rem;color:#6b7280;min-width:40ch;max-width:-moz-fit-content;max-width:fit-content}.Tags{display:inline-flex;padding:5px 6px;border-radius:9999px;font-size:.6rem;line-height:1rem;font-weight:700;color:#047857;text-transform:uppercase;background-color:#a7f3d0}.LowerItem,.Tags{align-items:center}.LowerItem{display:flex;flex-direction:column}.DescType{font-size:.875rem;line-height:1.25rem;font-weight:600;width:-moz-fit-content;width:fit-content;color:#4b5563}.DetailDesc{font-size:.75rem;line-height:1rem;width:-moz-fit-content;width:fit-content;text-align:center;margin-left:0;color:#6b7280}.LowerDiv{display:flex;margin-top:1rem;gap:1rem;width:100%;justify-content:space-between}@media (min-width:1024px){.Container{margin-top:0;margin-bottom:0;width:21rem;max-height:-moz-fit-content;max-height:fit-content;min-height:11.5rem}.Link{font-size:1.5rem}.ImageDiv{margin-top:0;margin-bottom:0}}.ImageDiv{display:block;margin-top:.5rem;margin-bottom:.5rem}.Type{font-size:15px;font-weight:800;margin-top:-10px;color:#4b5563}@media screen and (max-width:500px){.Container{width:23rem}}@media (min-width:640px){.TopContent{justify-content:space-between;gap:1rem}.LowerDiv{gap:1.5rem}}"]
              },] }
  ];
  CardsComponentComponent.ctorParameters = function () { return []; };
  CardsComponentComponent.propDecorators = {
      name: [{ type: core.Input }],
      type: [{ type: core.Input }],
      tags: [{ type: core.Input }],
      image: [{ type: core.Input }],
      subject: [{ type: core.Input }],
      publisher: [{ type: core.Input }]
  };

  function UpdateConfig(_c) {
      var apiData = _c.apiData, addtionalFilterConfig = _c.addtionalFilterConfig, filterConfig = _c.filterConfig;
      var TempData = apiData;
      if ((filterConfig === null || filterConfig === void 0 ? void 0 : filterConfig.length) !== 0) {
          filterConfig === null || filterConfig === void 0 ? void 0 : filterConfig.map(function (item) {
              var ItemName = item.name;
              var ItemField = item.field;
              var ItemIsEnabled = item.isEnabled !== undefined ? item.isEnabled : true;
              TempData[0].data.PrimaryFields[ItemName] = {
                  field: ItemField,
                  isEnabled: ItemIsEnabled,
              };
          });
      }
      if ((addtionalFilterConfig === null || addtionalFilterConfig === void 0 ? void 0 : addtionalFilterConfig.length) !== 0) {
          addtionalFilterConfig === null || addtionalFilterConfig === void 0 ? void 0 : addtionalFilterConfig.map(function (item) {
              var ItemName = item.name;
              var ItemField = item.field;
              var ItemIsEnabled = item.isEnabled !== undefined ? item.isEnabled : true;
              TempData[0].data.additionalFields[ItemName] = {
                  displayName: ItemName,
                  field: ItemField,
                  isEnabled: ItemIsEnabled,
              };
          });
      }
      // setFilterConfig(TempData);
      return TempData;
  }
  function isEnabled(filterConfig, itemName) {
      var isEnable = true;
      var Keys = Object.keys(filterConfig);
      Keys.map(function (item) {
          if (item.toLowerCase() === itemName.toLowerCase()) {
              isEnable = filterConfig[item].isEnabled;
          }
      });
      return isEnable;
  }
  function FilterDataExtract(_c) {
      var content = _c.content, filterConfig = _c.filterConfig, TermsObject = _c.TermsObject;
      var _a, _b;
      var AddtionalFieldsObject = (_a = filterConfig[0]) === null || _a === void 0 ? void 0 : _a.data.additionalFields;
      var FilterConfigObject = Object.assign({}, AddtionalFieldsObject);
      var OptionNameArray = [];
      var OptionValueArray = [];
      if (filterConfig.length !== 0) {
          var AddtionalKeys = Object.keys((_b = filterConfig[0]) === null || _b === void 0 ? void 0 : _b.data.additionalFields);
          OptionNameArray = __spread(AddtionalKeys);
          OptionNameArray === null || OptionNameArray === void 0 ? void 0 : OptionNameArray.map(function (item) {
              var _a;
              if (isEnabled(FilterConfigObject, item)) {
                  var temp_1;
                  if (TermsObject.hasOwnProperty(item)) {
                      temp_1 = TermsObject[item];
                  }
                  else {
                      var fieldName_1 = (_a = AddtionalFieldsObject[item]) === null || _a === void 0 ? void 0 : _a.field;
                      temp_1 = new Set('');
                      if (fieldName_1 !== null || fieldName_1 !== undefined) {
                          content.map(function (item) {
                              if (item[fieldName_1] !== null || item[fieldName_1] !== undefined) {
                                  if (Array.isArray(item[fieldName_1])) {
                                      item[fieldName_1].map(function (ele) {
                                          temp_1.add(ele);
                                      });
                                  }
                                  else {
                                      temp_1.add(item[fieldName_1]);
                                  }
                              }
                          });
                      }
                  }
                  if (Array.isArray(temp_1)) {
                      if (temp_1.length !== 0)
                          OptionValueArray.push({
                              name: item,
                              terms: temp_1.sort(),
                          });
                  }
                  else {
                      var val = Array.from(temp_1);
                      val.splice(val.length - 1, 1);
                      if (val.length !== 0)
                          OptionValueArray.push({
                              name: item,
                              terms: val.sort(),
                          });
                  }
              }
          });
      }
      return {
          OptionNameArray: OptionNameArray,
          OptionValueArray: OptionValueArray,
      };
  }
  function RenderContentFunction(_c) {
      var content = _c.content, filtersSelected = _c.filtersSelected, filterConfig = _c.filterConfig;
      var _a;
      var AddtionalFieldsObject = (_a = filterConfig[0]) === null || _a === void 0 ? void 0 : _a.data.additionalFields;
      var FilterConfigObject = Object.assign({}, AddtionalFieldsObject);
      var keys = Object.keys(FilterConfigObject);
      var contentArray = [];
      var tempContent = content;
      filtersSelected === null || filtersSelected === void 0 ? void 0 : filtersSelected.map(function (item) {
          var itemName = item.name;
          var filterSelectedArray = item.value;
          var fieldKey = keys.filter(function (item) {
              return item.toLowerCase() === (itemName === null || itemName === void 0 ? void 0 : itemName.toLowerCase());
          });
          var fieldObj = FilterConfigObject[fieldKey[0]];
          var field = fieldObj === null || fieldObj === void 0 ? void 0 : fieldObj.field;
          tempContent === null || tempContent === void 0 ? void 0 : tempContent.map(function (item) {
              if (item[field] !== undefined) {
                  filterSelectedArray.map(function (ele) {
                      if (item[field].includes(ele)) {
                          contentArray.push(item);
                      }
                  });
              }
          });
      });
      return contentArray;
  }
  function isArray(item) {
      if (Array.isArray(item)) {
          return item[0];
      }
      else {
          return item;
      }
  }
  function CardFieldsRender(item, CardFieldsObject) {
      var FieldKeys = Object.keys(CardFieldsObject);
      var ObjectReturn = {};
      var tagsArray = [];
      FieldKeys.map(function (Field) {
          if (item.hasOwnProperty(CardFieldsObject[Field].field)) {
              ObjectReturn[Field] = isArray(item[CardFieldsObject[Field].field]);
          }
          if (Field === 'tags') {
              var TagsFieldsArray = CardFieldsObject[Field].TagsFieldArray;
              TagsFieldsArray.map(function (tagField) {
                  if (item.hasOwnProperty(tagField))
                      tagsArray.push(isArray(item[tagField]));
              });
          }
      });
      ObjectReturn['tags'] = tagsArray;
      return ObjectReturn;
  }
  function TermsFetch(data, 
  // setMasterFieldsTerms: Function,
  FilterConfig) {
      var Categories = data.result.framework.categories;
      var TermsObject = {};
      Categories.map(function (item) {
          var _a;
          var name = item.name;
          if ((_a = FilterConfig[0].data.PrimaryFields[name]) === null || _a === void 0 ? void 0 : _a.isEnabled) {
              var associations = item.terms[0].associations
                  ? item.terms[0].associations
                  : item.terms;
              associations.map(function (item) {
                  if (TermsObject.hasOwnProperty(item.category)) {
                      var tempArr = TermsObject[item.category].terms;
                      tempArr.push(item.name);
                      var newSet = new Set(tempArr);
                      TermsObject[item.category].terms = Array.from(newSet);
                  }
                  else {
                      TermsObject[item.category] = {
                          name: item.category,
                          terms: [item.name],
                      };
                  }
              });
          }
      });
      return [TermsObject];
  }
  function MasterFieldContentChange(filtersArray, filterConfig, body) {
      var bodyJSON = JSON.parse(body);
      var TempObj = {};
      filtersArray.map(function (item) {
          var _a;
          var itemName = item.name.toLowerCase();
          var configfiled = filterConfig.filter(function (fil) {
              return fil.name.toLowerCase() === itemName;
          });
          TempObj[(_a = configfiled[0]) === null || _a === void 0 ? void 0 : _a.field] = item.value;
      });
      var keys = Object.keys(bodyJSON.request.filters);
      keys.map(function (item) {
          if (TempObj[item] !== undefined) {
              bodyJSON.request.filters[item] = TempObj[item];
          }
      });
      return JSON.stringify(bodyJSON);
  }
  function DependentTermsFetch(thing, filters, filterOptions) {
      var _a;
      var obj = {};
      (_a = thing.result.framework.categories) === null || _a === void 0 ? void 0 : _a.map(function (item) {
          filters === null || filters === void 0 ? void 0 : filters.map(function (filter) {
              if (item.code.toLowerCase() === filter.name.toLowerCase()) {
                  var arr_1 = filter.value;
                  item.terms.map(function (item) {
                      if (arr_1.includes(item.name)) {
                          item.associations.map(function (item) {
                              if (obj[item.category] === undefined) {
                                  obj[item.category] = [item.name];
                              }
                              else {
                                  // Concatenate the existing values with the new item's name
                                  var concatenatedValues = obj[item.category].concat(item.name);
                                  // Convert the concatenated values into a Set to remove duplicates
                                  var uniqueValuesSet = new Set(concatenatedValues);
                                  // Convert the Set back into an array using Array.from()
                                  var uniqueValuesArray = Array.from(uniqueValuesSet);
                                  obj[item.category] = uniqueValuesArray.sort();
                              }
                          });
                      }
                  });
              }
          });
      });
      var Keys = Object.keys(filterOptions[0]);
      Keys.map(function (item) {
          if (obj.hasOwnProperty(item)) {
              filterOptions[0][item].terms = obj[item];
          }
      });
      return filterOptions;
  }
  function FrameworksOptionsRender(Frameworks) {
      var options = [];
      Frameworks === null || Frameworks === void 0 ? void 0 : Frameworks.map(function (item) {
          options.push(item.name);
      });
      return options;
  }
  function GetFrameWorkID(Frameworks, Framework) {
      var id = '';
      Frameworks === null || Frameworks === void 0 ? void 0 : Frameworks.map(function (item) {
          if (item.name === Framework) {
              id = item.identifier;
          }
      });
      return id;
  }

  var WrapperComponent = /** @class */ (function () {
      function WrapperComponent() {
          this.content = [];
          this.FilterConfig = [];
          this.AddtionalFilterConfig = [];
          this.ApiSettedFilterConfig = [];
          this.FilterOptionsData = [];
          this.tags = [];
          this.OriginalMasterKeys = [];
          this.DependentTermsData = [];
          this.MasterFields = [];
          this.MasterKeys = [];
          this.CardDataObj = {};
          this.CardsData = [];
          this.PrevFilterAddNumber = [];
          this.FrameworksOptionArray = [];
          this.FilterOptionNameArray = [];
          this.Change = 0;
          this.FilterAddNumber = [];
          this.FiltersArray = [];
          this.Framework = '';
          this.FrameworksArray = [];
          this.hostname = '';
          this.FormAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.CardsFieldConfig = {};
          this.SearchAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.FilterBodySet = this.SearchAPI.body;
          this.TermsAPI = {
              url: '',
              headers: {},
              method: '',
              body: '',
              cache: 'default',
          };
          this.AllOptions = [];
          this.AllFiltersArray = [];
      }
      WrapperComponent.prototype.FetchAndUpdateFilterConfig = function () {
          var _this = this;
          fetchData({
              url: this.FormAPI.url,
              cache: this.FormAPI.cache ? this.FormAPI.cache : 'default',
              method: this.FormAPI.method,
          })
              .then(function (res) {
              _this.ApiSettedFilterConfig = UpdateConfig({
                  apiData: res,
                  filterConfig: _this.FilterConfig,
                  addtionalFilterConfig: _this.AddtionalFilterConfig,
              });
          })
              .catch(function (err) {
              console.log(err);
          });
          var FrameworkID = this.Framework === ''
              ? 'ekstep_ncert_k-12'
              : GetFrameWorkID(this.FrameworksArray, this.Framework);
          fetchData({
              url: this.hostname + "/api/content/v1/search?orgdetails=orgName,email&framework=" + FrameworkID,
              cache: this.SearchAPI.cache ? this.SearchAPI.cache : 'default',
              method: this.SearchAPI.method,
              body: this.SearchAPI.body,
              headers: this.SearchAPI.headers,
          })
              .then(function (res) {
              _this.content = res.result.content;
          })
              .catch(function (err) {
              console.log(err);
          });
          fetchData({
              url: this.hostname + "/api/framework/v1/read/" + FrameworkID + "?categories=board,gradeLevel,medium,class,subject",
              cache: this.TermsAPI.cache ? this.TermsAPI.cache : 'default',
              method: this.TermsAPI.method,
              headers: this.TermsAPI.headers,
          })
              .then(function (res) {
              _this.MasterFields = TermsFetch(res, _this.ApiSettedFilterConfig);
              _this.MasterKeys = Object.keys(_this.MasterFields[0]);
          })
              .catch(function (err) {
              console.log(err);
          });
      };
      WrapperComponent.prototype.DependentFieldsRender = function () {
          var _this = this;
          var FrameworkID = this.Framework === ''
              ? 'ekstep_ncert_k-12'
              : GetFrameWorkID(this.FrameworksArray, this.Framework);
          fetchData({
              url: this.hostname + "/api/framework/v1/read/" + FrameworkID + "?categories=board,gradeLevel,medium,class,subject",
              cache: this.TermsAPI.cache ? this.TermsAPI.cache : 'default',
              method: this.TermsAPI.method,
              headers: this.TermsAPI.headers,
          })
              .then(function (res) {
              var _a;
              var data = DependentTermsFetch(res, _this.FiltersArray, _this.MasterFields);
              _this.DependentTermsData = data;
              var flag = true;
              (_a = _this.FiltersArray) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                  if ((item === null || item === void 0 ? void 0 : item.value.length) !== 0) {
                      flag = false;
                  }
              });
              if (flag) {
                  fetchData({
                      url: _this.hostname + "/api/framework/v1/read/" + FrameworkID + "?categories=board,gradeLevel,medium,class,subject",
                      cache: _this.TermsAPI.cache ? _this.TermsAPI.cache : 'default',
                      method: _this.TermsAPI.method,
                      headers: _this.TermsAPI.headers,
                  })
                      .then(function (res) {
                      _this.MasterFields = TermsFetch(res, _this.ApiSettedFilterConfig);
                      if (typeof _this.MasterFields[0] !== 'undefined' &&
                          typeof _this.MasterFields[0] !== null) {
                          _this.MasterKeys = Object.keys(_this.MasterFields[0]);
                      }
                  })
                      .catch(function (err) {
                      console.log(err);
                  });
              }
              else {
                  _this.MasterFields = _this.DependentTermsData;
                  console.log('Terms', _this.MasterFields);
              }
          })
              .catch(function (err) {
              console.log(err);
          });
      };
      WrapperComponent.prototype.FrameWorksFetch = function () {
          var FrameWorksOption = FrameworksOptionsRender(this.FrameworksArray);
          this.FrameworksOptionArray = FrameWorksOption;
      };
      WrapperComponent.prototype.MasterBodyContentChange = function () {
          this.FilterBodySet = MasterFieldContentChange(this.AllFiltersArray !== undefined && this.AllFiltersArray.length !== 0
              ? this.AllFiltersArray
              : this.FiltersArray, this.FilterConfig, this.SearchAPI.body ? this.SearchAPI.body : '');
      };
      WrapperComponent.prototype.FiltersContentRender = function () {
          var _this = this;
          this.MasterBodyContentChange();
          var FrameworkID = this.Framework === ''
              ? 'ekstep_ncert_k-12'
              : GetFrameWorkID(this.FrameworksArray, this.Framework);
          fetchData({
              url: this.hostname + "/api/content/v1/search?orgdetails=orgName,email&framework=" + (this.Framework === '' ? 'ekstep_ncert_k-12' : FrameworkID),
              cache: 'default',
              method: this.SearchAPI.method,
              body: this.FilterBodySet,
              headers: this.SearchAPI.headers,
          })
              .then(function (res) {
              if (res.result.content !== undefined) {
                  _this.content = res.result.content;
                  _this.FilterDataRender();
              }
              else if (res.result.QuestionSet !== undefined) {
                  _this.content = res.result.QuestionSet;
                  _this.FilterDataRender();
              }
              else {
                  _this.content = _this.content;
              }
          })
              .catch(function (err) {
              console.log(err);
          });
      };
      WrapperComponent.prototype.FilterDataRender = function () {
          var _this = this;
          var ReturnData = FilterDataExtract({
              content: this.content,
              filterConfig: this.ApiSettedFilterConfig,
              TermsObject: this.AddtionalFilterConfig,
          });
          this.FilterOptionsData = ReturnData.OptionValueArray;
          this.FilterOptionNameArray = ReturnData.OptionNameArray;
          this.AllOptions.map(function (item) {
              if (_this.FilterOptionNameArray.includes(item.name)) {
                  var idx = _this.FilterOptionNameArray.indexOf(item.name);
                  item.terms = _this.FilterOptionsData[idx].terms;
              }
          });
          return ReturnData;
      };
      WrapperComponent.prototype.RenderContentAddtionalFilter = function () {
          this.AddtionalContent = RenderContentFunction({
              content: this.content,
              filtersSelected: this.FiltersArray,
              filterConfig: this.ApiSettedFilterConfig,
          });
      };
      WrapperComponent.prototype.AdditionalOptionValueReturn = function (Key) {
          var valueArray = [];
          this.FilterOptionsData.map(function (item) {
              if (Key.toLowerCase() === item.name.toLowerCase()) {
                  valueArray = item.value;
              }
          });
          return valueArray;
      };
      WrapperComponent.prototype.CardsFieldCheck = function (field, item) {
          if (field === 'tags' && this.CardsFieldConfig.hasOwnProperty(field)) {
              var arr_1 = [];
              var tagsArray = this.CardsFieldConfig[field].TagsFieldArray;
              tagsArray.map(function (key) {
                  arr_1.push(item[key]);
              });
              return arr_1;
          }
          if (field === 'tags') {
              return [];
          }
          if (this.CardsFieldConfig.hasOwnProperty(field)) {
              var itemKey = this.CardsFieldConfig[field].field;
              return item[itemKey];
          }
          return '';
      };
      WrapperComponent.prototype.ngOnInit = function () {
          this.FetchAndUpdateFilterConfig();
          this.RenderContentAddtionalFilter();
          this.FrameWorksFetch();
      };
      WrapperComponent.prototype.ngOnChanges = function (changes) {
          var _this = this;
          this.FetchAndUpdateFilterConfig();
          this.DependentFieldsRender();
          this.FrameWorksFetch();
          this.FiltersContentRender();
          var MasterFieldsArray = [];
          this.MasterKeys.map(function (item) {
              MasterFieldsArray.push(_this.MasterFields[0][item]);
          });
          this.AllOptions = __spread([
              { name: 'Board', terms: this.FrameworksOptionArray }
          ], MasterFieldsArray, this.FilterOptionsData);
          this.RenderContentAddtionalFilter();
      };
      WrapperComponent.prototype.IsAddtionalFilter = function (Name) {
          var flag = false;
          this.AddtionalFilterConfig.map(function (item) {
              if (item.name.toLowerCase() === Name.toLowerCase()) {
                  flag = true;
              }
          });
          return flag;
      };
      WrapperComponent.prototype.LOG = function (a) {
          var _this = this;
          var ele = a[0];
          if (ele.name === 'Board') {
              this.Framework = ele.value.length === 0 ? 'CBSE' : ele.value[0];
          }
          var flag = true;
          this.AllFiltersArray.map(function (item) {
              if (item.name === ele.name) {
                  flag = false;
              }
          });
          if (flag) {
              this.AllFiltersArray.push(ele);
          }
          else {
              this.AllFiltersArray.map(function (item) {
                  if (ele.name === 'Board') {
                      if (item.name === 'Board') {
                          if (item.value[0] === ele.value[0]) {
                              item.value = [];
                          }
                          else {
                              item.value = ele.value;
                          }
                      }
                  }
                  else if (_this.IsAddtionalFilter(ele.name)) {
                      var oldArr = item.value;
                      if (oldArr.includes(ele.value[0])) {
                          oldArr.splice(oldArr.indexOf(ele.value[0]), 1);
                          item.value = oldArr;
                      }
                      else {
                          oldArr.push(ele.value[0]);
                          var uniqueElements = Array.from(new Set(oldArr));
                          item.value = uniqueElements;
                      }
                  }
              });
          }
          // if (this.FrameworksOptionArray.includes(ele.value[0]) && this.AllFiltersArray.length!==0) {
          //   // console.log("Yes");
          //   let oldArr = this.AllFiltersArray.filter((item: any) => {
          //     return item.name.toLowerCase() !== ele.name.toLowerCase();
          //   });
          //   // console.log("old",oldArr);
          //   oldArr.push({ name: ele.name, value: [ele.value] });
          //   this.AllFiltersArray = oldArr;
          // }
          // if(this.AllFiltersArray.length!==0){
          //   this.AllFiltersArray.map((item:any)=>{
          //     if(item.name==='Board'){
          //     }
          //   })
          // }
          this.FiltersArray = this.AllFiltersArray;
          this.MasterBodyContentChange();
          this.DependentFieldsRender();
          this.FrameWorksFetch();
          this.FiltersContentRender();
          this.RenderContentAddtionalFilter();
          var MasterFieldsArray = [];
          this.MasterKeys.map(function (item) {
              MasterFieldsArray.push(_this.MasterFields[0][item]);
          });
          this.AllOptions = __spread([
              { name: 'Board', terms: this.FrameworksOptionArray }
          ], MasterFieldsArray, this.FilterOptionsData);
      };
      return WrapperComponent;
  }());
  WrapperComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'app-wrapper',
                  template: "<div class=\"mainDiv\">\n  <div class=\"faKsuq\">\n    <div class=\"sidebar\" *ngIf=\"AllOptions.length !== 0\">\n      <div *ngFor=\"let Field of AllOptions\">\n        <lib-filters-component\n          [Name]=\"Field.name\"\n          [OptionValue]=\"Field.terms\"\n          (FiltersArrayEvent)=\"LOG($event)\"\n          [AddtionalFilterConfig]=\"AddtionalFilterConfig\"\n          [FilterConfig]=\"FilterConfig\"\n        >\n        </lib-filters-component>\n      </div>\n    </div>\n  </div>\n  <div class=\"listDiv\">\n    <ng-container *ngIf=\"AddtionalContent.length === 0\">\n      <div *ngFor=\"let item of content\">\n        <lib-cards-component\n          [name]=\"this.CardsFieldCheck('name', item)\"\n          [image]=\"this.CardsFieldCheck('image', item)\"\n          [type]=\"this.CardsFieldCheck('type', item)\"\n          [subject]=\"this.CardsFieldCheck('subject', item)\"\n          [tags]=\"this.CardsFieldCheck('tags', item)\"\n          [publisher]=\"this.CardsFieldCheck('publisher', item)\"\n        >\n        </lib-cards-component>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"AddtionalContent.length !== 0\">\n      <div *ngFor=\"let item of AddtionalContent\">\n        <lib-cards-component\n          [name]=\"this.CardsFieldCheck('name', item)\"\n          [image]=\"this.CardsFieldCheck('image', item)\"\n          [type]=\"this.CardsFieldCheck('type', item)\"\n          [subject]=\"this.CardsFieldCheck('subject', item)\"\n          [tags]=\"this.CardsFieldCheck('tags', item)\"\n          [publisher]=\"this.CardsFieldCheck('publisher', item)\"\n        >\n        </lib-cards-component>\n      </div>\n    </ng-container>\n  </div>\n</div>\n",
                  styles: [".faKsuq{background:#e9e8d9;padding:10px 20px;width:-moz-max-content;width:max-content;border-radius:10px;width:15rem;height:-moz-max-content;height:max-content;display:flex;flex-direction:column;row-gap:8px}.mainDiv{display:flex;-moz-column-gap:20px;column-gap:20px}.sidebar{display:flex;flex-direction:column}.listDiv{display:flex;flex-wrap:wrap;gap:20px}@media (max-width:500px){.mainDiv{display:flex;row-gap:20px}.listDiv,.mainDiv{flex-direction:column;justify-content:center;align-items:center}.listDiv{margin-top:50px}}"]
              },] }
  ];
  WrapperComponent.ctorParameters = function () { return []; };
  WrapperComponent.propDecorators = {
      FilterConfig: [{ type: core.Input }],
      AddtionalFilterConfig: [{ type: core.Input }],
      Change: [{ type: core.Input }],
      FilterAddNumber: [{ type: core.Input }],
      FiltersArray: [{ type: core.Input }],
      Framework: [{ type: core.Input }],
      FrameworksArray: [{ type: core.Input }],
      hostname: [{ type: core.Input }],
      FormAPI: [{ type: core.Input }],
      CardsFieldConfig: [{ type: core.Input }],
      SearchAPI: [{ type: core.Input }],
      TermsAPI: [{ type: core.Input }]
  };

  var FilteringModule = /** @class */ (function () {
      function FilteringModule() {
      }
      return FilteringModule;
  }());
  FilteringModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [
                      FilteringComponent,
                      FiltersComponentComponent,
                      CardsComponentComponent,
                      WrapperComponent,
                  ],
                  imports: [platformBrowser.BrowserModule, common.CommonModule],
                  exports: [
                      FilteringComponent,
                      FiltersComponentComponent,
                      CardsComponentComponent,
                      WrapperComponent,
                  ],
              },] }
  ];

  /*
   * Public API Surface of filtering
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.FilteringModule = FilteringModule;
  exports.ɵa = FilteringComponent;
  exports.ɵb = FiltersComponentComponent;
  exports.ɵc = CardsComponentComponent;
  exports.ɵd = WrapperComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=filtering-angular-package.umd.js.map
