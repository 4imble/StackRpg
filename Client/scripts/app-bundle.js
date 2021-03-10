var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./helpers/GameLoop", "aurelia-event-aggregator", "./messages"], function (require, exports, aurelia_framework_1, GameLoop_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.App = void 0;
    var App = (function () {
        function App(gameLoop, eventAggregator) {
            var _this = this;
            this.gameLoop = gameLoop;
            this.eventAggregator = eventAggregator;
            this.timer = 0;
            this.showModal = false;
            this.eventAggregator.subscribe(messages_1.Heartbeat, function () {
                _this.timer++;
            });
        }
        App.prototype.activate = function (params, routeConfig) {
            this.gameLoop.start();
        };
        App = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBTUE7UUFJSSxhQUFvQixRQUFrQixFQUFVLGVBQWdDO1lBQWhGLGlCQUtDO1lBTG1CLGFBQVEsR0FBUixRQUFRLENBQVU7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFIaEYsVUFBSyxHQUFXLENBQUMsQ0FBQztZQUNsQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBSXZCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG9CQUFTLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxzQkFBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFdBQVc7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBYlEsR0FBRztZQURmLDhCQUFVOzZDQUt1QixrQkFBUSxFQUEyQiwwQ0FBZTtXQUp2RSxHQUFHLENBY2Y7UUFBRCxVQUFDO0tBZEQsQUFjQyxJQUFBO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IEdhbWVMb29wIGZyb20gXCIuL2hlbHBlcnMvR2FtZUxvb3BcIjtcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgSGVhcnRiZWF0IH0gZnJvbSAnLi9tZXNzYWdlcyc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgc2hvd01vZGFsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lTG9vcDogR2FtZUxvb3AsIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShIZWFydGJlYXQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciArKztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcpIHtcclxuICAgICAgICB0aGlzLmdhbWVMb29wLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IHRydWUsXHJcbiAgdGVzdGluZzogdHJ1ZVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUdBLFNBQWdCLFNBQVMsQ0FBQyxPQUFnQjtRQUN4QyxPQUFPLENBQUMsR0FBRzthQUNSLHFCQUFxQixFQUFFO2FBQ3ZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4QixJQUFJLHFCQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUNsQztRQUVELElBQUkscUJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFkRCw4QkFjQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XHJcbiAgYXVyZWxpYS51c2VcclxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xyXG5cclxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcclxuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcclxuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XHJcbiAgfVxyXG5cclxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemsDroppedFromMonster = exports.LoggedMessage = exports.TemplateSpawned = exports.ShowModalWindow = exports.ItemTaken = exports.RecipeTaken = exports.GoldTaken = exports.MonsterKilled = exports.MonsterAdded = exports.Heartbeat = void 0;
    var Heartbeat = (function () {
        function Heartbeat() {
        }
        return Heartbeat;
    }());
    exports.Heartbeat = Heartbeat;
    var MonsterAdded = (function () {
        function MonsterAdded(monster) {
            this.monster = monster;
        }
        return MonsterAdded;
    }());
    exports.MonsterAdded = MonsterAdded;
    var MonsterKilled = (function () {
        function MonsterKilled(monster) {
            this.monster = monster;
        }
        return MonsterKilled;
    }());
    exports.MonsterKilled = MonsterKilled;
    var GoldTaken = (function () {
        function GoldTaken(goldItem) {
            this.goldItem = goldItem;
        }
        return GoldTaken;
    }());
    exports.GoldTaken = GoldTaken;
    var RecipeTaken = (function () {
        function RecipeTaken(recipe) {
            this.recipe = recipe;
        }
        return RecipeTaken;
    }());
    exports.RecipeTaken = RecipeTaken;
    var ItemTaken = (function () {
        function ItemTaken(item) {
            this.item = item;
        }
        return ItemTaken;
    }());
    exports.ItemTaken = ItemTaken;
    var ShowModalWindow = (function () {
        function ShowModalWindow(id) {
            this.id = id;
        }
        return ShowModalWindow;
    }());
    exports.ShowModalWindow = ShowModalWindow;
    var TemplateSpawned = (function () {
        function TemplateSpawned(template) {
            this.template = template;
        }
        return TemplateSpawned;
    }());
    exports.TemplateSpawned = TemplateSpawned;
    var LoggedMessage = (function () {
        function LoggedMessage(log) {
            this.log = log;
        }
        return LoggedMessage;
    }());
    exports.LoggedMessage = LoggedMessage;
    var ItemsDroppedFromMonster = (function () {
        function ItemsDroppedFromMonster(items) {
            this.items = items;
        }
        return ItemsDroppedFromMonster;
    }());
    exports.ItemsDroppedFromMonster = ItemsDroppedFromMonster;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFLQTtRQUNJO1FBQWdCLENBQUM7UUFDckIsZ0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDhCQUFTO0lBSXRCO1FBQ0ksc0JBQW1CLE9BQWdCO1lBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBSSxDQUFDO1FBQzVDLG1CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxvQ0FBWTtJQUl6QjtRQUNJLHVCQUFtQixPQUFnQjtZQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQUksQ0FBQztRQUM1QyxvQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksc0NBQWE7SUFJMUI7UUFDSSxtQkFBbUIsUUFBbUI7WUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFJLENBQUM7UUFDL0MsZ0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDhCQUFTO0lBSXRCO1FBQ0kscUJBQW1CLE1BQTZCO1lBQTdCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQUksQ0FBQztRQUN6RCxrQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0NBQVc7SUFJeEI7UUFDSSxtQkFBbUIsSUFBZTtZQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFBSSxDQUFDO1FBQzNDLGdCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSw4QkFBUztJQUl0QjtRQUNJLHlCQUFtQixFQUFVO1lBQVYsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFJLENBQUM7UUFDdEMsc0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDBDQUFlO0lBSTVCO1FBQ0kseUJBQW1CLFFBQXlCO1lBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQUksQ0FBQztRQUNyRCxzQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksMENBQWU7SUFJNUI7UUFDSSx1QkFBbUIsR0FBVztZQUFYLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBSSxDQUFDO1FBQ3ZDLG9CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxzQ0FBYTtJQUkxQjtRQUNJLGlDQUFtQixLQUFrQjtZQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQUksQ0FBQztRQUM5Qyw4QkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksMERBQXVCIiwiZmlsZSI6Im1lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbnN0ZXIgZnJvbSBcIi4vZG9tYWluL21vbnN0ZXJcIjtcclxuaW1wb3J0IE1vbnN0ZXJUZW1wbGF0ZSBmcm9tIFwiLi9kb21haW4vTW9uc3RlclRlbXBsYXRlXCI7XHJcbmltcG9ydCAqIGFzIEl0ZW0gZnJvbSBcIi4vZG9tYWluL0FsbEl0ZW1zXCI7XHJcbmltcG9ydCAqIGFzIFJlY2lwZXMgZnJvbSBcIi4vZG9tYWluL0FsbFJlY2lwaWVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhcnRiZWF0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyQWRkZWQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1vbnN0ZXI6IE1vbnN0ZXIpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlcktpbGxlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9uc3RlcjogTW9uc3RlcikgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2xkVGFrZW4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGdvbGRJdGVtOiBJdGVtLkdvbGQpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjaXBlVGFrZW4ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlY2lwZTogUmVjaXBlcy5Nb25zdGVyUmVjaXBlKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1UYWtlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbTogSXRlbS5Mb290KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNob3dNb2RhbFdpbmRvdyB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVNwYXduZWQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBNb25zdGVyVGVtcGxhdGUpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VkTWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbG9nOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbXNEcm9wcGVkRnJvbU1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGl0ZW1zOiBJdGVtLkxvb3RbXSkgeyB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/battle-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../factories/MonsterFactory", "../helpers/Combat", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, MonsterFactory_1, Combat_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BattleStack = void 0;
    var BattleStack = (function () {
        function BattleStack(eventAggregator, monsterFactory, combat) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.monsterFactory = monsterFactory;
            this.combat = combat;
            this.stack = [];
            this.eventAggregator.subscribe(messages_1.TemplateSpawned, function (msg) {
                msg.template.recipes.forEach(function (recipe) {
                    _this.stack.push(monsterFactory.buildMonster(recipe));
                });
            });
            this.eventAggregator.subscribe(messages_1.MonsterKilled, function (msg) {
                _this.stack.remove(msg.monster);
            });
            this.eventAggregator.subscribe(messages_1.Heartbeat, function () {
                if (_this.stack.length) {
                    _this.fightMonster();
                }
            });
        }
        BattleStack.prototype.fightMonster = function () {
            this.combat.battle(this.stack);
        };
        BattleStack.prototype.created = function () { };
        BattleStack = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, MonsterFactory_1.default, Combat_1.default])
        ], BattleStack);
        return BattleStack;
    }());
    exports.BattleStack = BattleStack;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmF0dGxlLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUdJLHFCQUFvQixlQUFnQyxFQUFVLGNBQThCLEVBQVUsTUFBYztZQUFwSCxpQkFpQkM7WUFqQm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7WUFGcEgsVUFBSyxHQUFtQixFQUFFLENBQUM7WUFJdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsMEJBQWUsRUFBRSxVQUFDLEdBQW9CO2dCQUNqRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO29CQUMvQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyx3QkFBYSxFQUFFLFVBQUMsR0FBa0I7Z0JBQzdELEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG9CQUFTLEVBQUU7Z0JBQ3RDLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ25CLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxrQ0FBWSxHQUFaO1lBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCw2QkFBTyxHQUFQLGNBQVksQ0FBQztRQTFCSixXQUFXO1lBRHZCLDhCQUFVOzZDQUk4QiwwQ0FBZSxFQUEwQix3QkFBYyxFQUFrQixnQkFBTTtXQUgzRyxXQUFXLENBMkJ2QjtRQUFELGtCQUFDO0tBM0JELEFBMkJDLElBQUE7SUEzQlksa0NBQVciLCJmaWxlIjoiY29tcG9uZW50cy9iYXR0bGUtc3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgTW9uc3RlciBmcm9tICcuLi9kb21haW4vbW9uc3Rlcic7XHJcbmltcG9ydCBNb25zdGVyRmFjdG9yeSBmcm9tICcuLi9mYWN0b3JpZXMvTW9uc3RlckZhY3RvcnknO1xyXG5pbXBvcnQgQ29tYmF0IGZyb20gJy4uL2hlbHBlcnMvQ29tYmF0JztcclxuaW1wb3J0IHsgVGVtcGxhdGVTcGF3bmVkLCBIZWFydGJlYXQsIE1vbnN0ZXJLaWxsZWQgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQmF0dGxlU3RhY2sge1xyXG4gICAgc3RhY2s6IEFycmF5PE1vbnN0ZXI+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSBtb25zdGVyRmFjdG9yeTogTW9uc3RlckZhY3RvcnksIHByaXZhdGUgY29tYmF0OiBDb21iYXQpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoVGVtcGxhdGVTcGF3bmVkLCAobXNnOiBUZW1wbGF0ZVNwYXduZWQpID0+IHtcclxuICAgICAgICAgICAgbXNnLnRlbXBsYXRlLnJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKG1vbnN0ZXJGYWN0b3J5LmJ1aWxkTW9uc3RlcihyZWNpcGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShNb25zdGVyS2lsbGVkLCAobXNnOiBNb25zdGVyS2lsbGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlKG1zZy5tb25zdGVyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEhlYXJ0YmVhdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlnaHRNb25zdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWdodE1vbnN0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb21iYXQuYmF0dGxlKHRoaXMuc3RhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZWQoKSB7IH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/log-output',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogOutput = void 0;
    var LogOutput = (function () {
        function LogOutput(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.logs = [];
            this.eventAggregator.subscribe(messages_1.LoggedMessage, function (msg) {
                _this.logs.unshift(msg.log);
                if (_this.logs.length > 10) {
                    _this.logs.pop();
                }
            });
        }
        LogOutput = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], LogOutput);
        return LogOutput;
    }());
    exports.LogOutput = LogOutput;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9nLW91dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBS0E7UUFHSSxtQkFBb0IsZUFBZ0M7WUFBcEQsaUJBUUM7WUFSbUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBRnBELFNBQUksR0FBa0IsRUFBRSxDQUFDO1lBSXJCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLHdCQUFhLEVBQUUsVUFBQyxHQUFrQjtnQkFDN0QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtvQkFDdkIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDbkI7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFYUSxTQUFTO1lBRHJCLDBCQUFNLENBQUMsMENBQWUsQ0FBQzs2Q0FJaUIsMENBQWU7V0FIM0MsU0FBUyxDQVlyQjtRQUFELGdCQUFDO0tBWkQsQUFZQyxJQUFBO0lBWlksOEJBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9sb2ctb3V0cHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBMb2dnZWRNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBMb2dPdXRwdXQge1xyXG4gICAgbG9nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKExvZ2dlZE1lc3NhZ2UsIChtc2c6IExvZ2dlZE1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2dzLnVuc2hpZnQobXNnLmxvZyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ3MubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ncy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/main-menu',["require", "exports", "aurelia-framework", "../messages", "aurelia-event-aggregator", "../domain/Stores/PlayerStore", "../domain/Stores/TemplateStore"], function (require, exports, aurelia_framework_1, messages_1, aurelia_event_aggregator_1, PlayerStore_1, TemplateStore_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MainMenu = void 0;
    var MainMenu = (function () {
        function MainMenu(eventAggregator, playerStore, templateStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
            this.templateStore = templateStore;
        }
        MainMenu.prototype.open = function (id) {
            this.eventAggregator.publish(new messages_1.ShowModalWindow(id));
        };
        MainMenu = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default, TemplateStore_1.default),
            __metadata("design:paramtypes", [Object, PlayerStore_1.default, TemplateStore_1.default])
        ], MainMenu);
        return MainMenu;
    }());
    exports.MainMenu = MainMenu;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFPQTtRQUNJLGtCQUFvQixlQUFlLEVBQVMsV0FBd0IsRUFBUyxhQUE0QjtZQUFyRixvQkFBZSxHQUFmLGVBQWUsQ0FBQTtZQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBSSxDQUFDO1FBRTlHLHVCQUFJLEdBQUosVUFBSyxFQUFVO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUxRLFFBQVE7WUFEcEIsMEJBQU0sQ0FBQywwQ0FBZSxFQUFFLHFCQUFXLEVBQUUsdUJBQWEsQ0FBQztxREFFUyxxQkFBVyxFQUF3Qix1QkFBYTtXQURoRyxRQUFRLENBTXBCO1FBQUQsZUFBQztLQU5ELEFBTUMsSUFBQTtJQU5ZLDRCQUFRIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFpbi1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTaG93TW9kYWxXaW5kb3cgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IFRlbXBsYXRlU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9UZW1wbGF0ZVN0b3JlJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBQbGF5ZXJTdG9yZSwgVGVtcGxhdGVTdG9yZSlcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yLCBwdWJsaWMgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlLCBwdWJsaWMgdGVtcGxhdGVTdG9yZTogVGVtcGxhdGVTdG9yZSkgeyB9XHJcblxyXG4gICAgb3BlbihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgU2hvd01vZGFsV2luZG93KGlkKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/modal-content',["require", "exports", "aurelia-framework", "../messages", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, messages_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalContent = void 0;
    var ModalContent = (function () {
        function ModalContent(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            eventAggregator.subscribe(messages_1.ShowModalWindow, function (msg) {
                _this.visibility = _this.id === msg.id;
            });
        }
        ModalContent.prototype.close = function () {
            this.visibility = false;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], ModalContent.prototype, "id", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], ModalContent.prototype, "visibility", void 0);
        ModalContent = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], ModalContent);
        return ModalContent;
    }());
    exports.ModalContent = ModalContent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kYWwtY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBS0E7UUFJSSxzQkFBb0IsZUFBZ0M7WUFBcEQsaUJBSUM7WUFKbUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hELGVBQWUsQ0FBQyxTQUFTLENBQUMsMEJBQWUsRUFBRSxVQUFDLEdBQW9CO2dCQUM1RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCw0QkFBSyxHQUFMO1lBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQVhTO1lBQVQsNEJBQVE7O2dEQUFZO1FBQ1g7WUFBVCw0QkFBUTs7d0RBQXFCO1FBRnJCLFlBQVk7WUFEeEIsMEJBQU0sQ0FBQywwQ0FBZSxDQUFDOzZDQUtpQiwwQ0FBZTtXQUozQyxZQUFZLENBYXhCO1FBQUQsbUJBQUM7S0FiRCxBQWFDLElBQUE7SUFiWSxvQ0FBWSIsImZpbGUiOiJjb21wb25lbnRzL21vZGFsLWNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTaG93TW9kYWxXaW5kb3cgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGVudCB7XHJcbiAgICBAYmluZGFibGUgaWQ6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSB2aXNpYmlsaXR5OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICBldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFNob3dNb2RhbFdpbmRvdywgKG1zZzogU2hvd01vZGFsV2luZG93KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRoaXMuaWQgPT09IG1zZy5pZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/player-inventory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../messages", "../domain/Stores/PlayerStore"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1, PlayerStore_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlayerInventory = void 0;
    var PlayerInventory = (function () {
        function PlayerInventory(eventAggregator, playerStore) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
            this.playerInventory = playerStore.inventory;
            this.eventAggregator.subscribe(messages_1.ItemTaken, function (msg) {
                _this.playerInventory.push(msg.item);
            });
        }
        PlayerInventory = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
        ], PlayerInventory);
        return PlayerInventory;
    }());
    exports.PlayerInventory = PlayerInventory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLWludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBT0E7UUFHSSx5QkFBb0IsZUFBZ0MsRUFBVSxXQUF3QjtZQUF0RixpQkFNQztZQU5tQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUNsRixJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFFN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsb0JBQVMsRUFBRSxVQUFDLEdBQWM7Z0JBQ3JELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFUUSxlQUFlO1lBRDNCLDBCQUFNLENBQUMsMENBQWUsRUFBRSxxQkFBVyxDQUFDOzZDQUlJLDBDQUFlLEVBQXVCLHFCQUFXO1dBSDdFLGVBQWUsQ0FVM0I7UUFBRCxzQkFBQztLQVZELEFBVUMsSUFBQTtJQVZZLDBDQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvcGxheWVyLWludmVudG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgSXRlbVRha2VuIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgKiBhcyBJdGVtIGZyb20gXCIuLi9kb21haW4vQWxsSXRlbXNcIjtcclxuaW1wb3J0IFBsYXllclN0b3JlIGZyb20gXCIuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlXCI7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgUGxheWVyU3RvcmUpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbnZlbnRvcnkge1xyXG5wbGF5ZXJJbnZlbnRvcnk6IEFycmF5PEl0ZW0uTG9vdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSBwbGF5ZXJTdG9yZTogUGxheWVyU3RvcmUpIHtcclxuICAgICAgICB0aGlzLnBsYXllckludmVudG9yeSA9IHBsYXllclN0b3JlLmludmVudG9yeTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEl0ZW1UYWtlbiwgKG1zZzogSXRlbVRha2VuKSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckludmVudG9yeS5wdXNoKG1zZy5pdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/player-overview',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/PlayerStore", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, PlayerStore_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlayerOverview = void 0;
    var PlayerOverview = (function () {
        function PlayerOverview(eventAggregator, playerStore) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
            this.currentPlayer = this.playerStore.currentPlayer;
            this.eventAggregator.subscribe(messages_1.GoldTaken, function (msg) {
                _this.currentPlayer.gold += msg.goldItem.value;
            });
        }
        PlayerOverview = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
        ], PlayerOverview);
        return PlayerOverview;
    }());
    exports.PlayerOverview = PlayerOverview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLW92ZXJ2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFPQTtRQUdJLHdCQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQXRGLGlCQU1DO1lBTm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ2xGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFFcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsb0JBQVMsRUFBRSxVQUFDLEdBQWM7Z0JBQ3JELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQVRRLGNBQWM7WUFEMUIsMEJBQU0sQ0FBQywwQ0FBZSxFQUFFLHFCQUFXLENBQUM7NkNBSUksMENBQWUsRUFBdUIscUJBQVc7V0FIN0UsY0FBYyxDQVUxQjtRQUFELHFCQUFDO0tBVkQsQUFVQyxJQUFBO0lBVlksd0NBQWMiLCJmaWxlIjoiY29tcG9uZW50cy9wbGF5ZXItb3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZG9tYWluL1BsYXllcic7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IHsgR29sZFRha2VuLCBIZWFydGJlYXQgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgUGxheWVyU3RvcmUpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJPdmVydmlldyB7XHJcbiAgICBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJTdG9yZS5jdXJyZW50UGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoR29sZFRha2VuLCAobXNnOiBHb2xkVGFrZW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLmdvbGQgKz0gbXNnLmdvbGRJdGVtLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/player-templates',["require", "exports", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlayerTemplates = void 0;
    var PlayerTemplates = (function () {
        function PlayerTemplates(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        PlayerTemplates = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], PlayerTemplates);
        return PlayerTemplates;
    }());
    exports.PlayerTemplates = PlayerTemplates;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLXRlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSUE7UUFFSSx5QkFBb0IsZUFBZ0M7WUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRXBELENBQUM7UUFKUSxlQUFlO1lBRDNCLDBCQUFNLENBQUMsMENBQWUsQ0FBQzs2Q0FHaUIsMENBQWU7V0FGM0MsZUFBZSxDQUszQjtRQUFELHNCQUFDO0tBTEQsQUFLQyxJQUFBO0lBTFksMENBQWUiLCJmaWxlIjoiY29tcG9uZW50cy9wbGF5ZXItdGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJUZW1wbGF0ZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/progress-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressBar = void 0;
    var ProgressBar = (function () {
        function ProgressBar() {
        }
        Object.defineProperty(ProgressBar.prototype, "height", {
            get: function () {
                return 100 - this.percent;
            },
            enumerable: false,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], ProgressBar.prototype, "percent", void 0);
        return ProgressBar;
    }());
    exports.ProgressBar = ProgressBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1FBTUEsQ0FBQztRQUhHLHNCQUFJLCtCQUFNO2lCQUFWO2dCQUNJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDOUIsQ0FBQzs7O1dBQUE7UUFKUztZQUFULDRCQUFROztvREFBaUI7UUFLOUIsa0JBQUM7S0FORCxBQU1DLElBQUE7SUFOWSxrQ0FBVyIsImZpbGUiOiJjb21wb25lbnRzL3Byb2dyZXNzLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIEBiaW5kYWJsZSBwZXJjZW50OiBudW1iZXI7XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxMDAgLSB0aGlzLnBlcmNlbnQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/template-bag',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/TemplateStore", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, TemplateStore_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateBag = void 0;
    var TemplateBag = (function () {
        function TemplateBag(eventAggregator, templateStore) {
            this.eventAggregator = eventAggregator;
            this.templateStore = templateStore;
        }
        TemplateBag.prototype.spawnTemplate = function (template) {
            this.eventAggregator.publish(new messages_1.TemplateSpawned(template));
        };
        TemplateBag.prototype.viewTemplate = function (template) {
            this.templateStore.selectedTemplate = template;
            this.eventAggregator.publish(new messages_1.ShowModalWindow("player-templates"));
        };
        TemplateBag = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default])
        ], TemplateBag);
        return TemplateBag;
    }());
    exports.TemplateBag = TemplateBag;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcGxhdGUtYmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFPQTtRQUNJLHFCQUFvQixlQUFnQyxFQUFVLGFBQTRCO1lBQXRFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRTFGLENBQUM7UUFFRCxtQ0FBYSxHQUFiLFVBQWMsUUFBeUI7WUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQkFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVELGtDQUFZLEdBQVosVUFBYSxRQUF5QjtZQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUMvQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLDBCQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFaUSxXQUFXO1lBRHZCLDBCQUFNLENBQUMsMENBQWUsRUFBRSx1QkFBYSxDQUFDOzZDQUVFLDBDQUFlLEVBQXlCLHVCQUFhO1dBRGpGLFdBQVcsQ0FhdkI7UUFBRCxrQkFBQztLQWJELEFBYUMsSUFBQTtJQWJZLGtDQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvdGVtcGxhdGUtYmFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgVGVtcGxhdGVTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1RlbXBsYXRlU3RvcmUnO1xyXG5pbXBvcnQgTW9uc3RlclRlbXBsYXRlIGZyb20gJy4uL2RvbWFpbi9Nb25zdGVyVGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNwYXduZWQsIFNob3dNb2RhbFdpbmRvdyB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBUZW1wbGF0ZVN0b3JlKVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVCYWcge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSB0ZW1wbGF0ZVN0b3JlOiBUZW1wbGF0ZVN0b3JlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduVGVtcGxhdGUodGVtcGxhdGU6IE1vbnN0ZXJUZW1wbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IFRlbXBsYXRlU3Bhd25lZCh0ZW1wbGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdUZW1wbGF0ZSh0ZW1wbGF0ZTogTW9uc3RlclRlbXBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0b3JlLnNlbGVjdGVkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBTaG93TW9kYWxXaW5kb3coXCJwbGF5ZXItdGVtcGxhdGVzXCIpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/template-manager',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/AllRecipies", "../domain/Stores/TemplateStore", "../factories/MonsterFactory", "../domain/MonsterTemplate", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Recipe, TemplateStore_1, MonsterFactory_1, MonsterTemplate_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateManager = void 0;
    var TemplateManager = (function () {
        function TemplateManager(eventAggregator, templateStore, monsterFactory) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.templateStore = templateStore;
            this.monsterFactory = monsterFactory;
            this.bag = [new Recipe.KoboldRecipe(), new Recipe.WetPaperBagRecipe()];
            templateStore.templates.push(new MonsterTemplate_1.default("Template 1"));
            this.eventAggregator.subscribe(messages_1.RecipeTaken, function (msg) {
                _this.bag.push(msg.recipe);
            });
        }
        TemplateManager.prototype.addRecipe = function (recipe) {
            this.templateStore.selectedTemplate.addRecipe(recipe);
        };
        TemplateManager.prototype.selectTemplate = function (template) {
            this.templateStore.selectedTemplate = template;
        };
        TemplateManager = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default, MonsterFactory_1.default])
        ], TemplateManager);
        return TemplateManager;
    }());
    exports.TemplateManager = TemplateManager;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcGxhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU0E7UUFHSSx5QkFBb0IsZUFBZ0MsRUFBVSxhQUE0QixFQUFVLGNBQThCO1lBQWxJLGlCQU9DO1lBUG1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBQzlILElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDdkUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSx5QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsc0JBQVcsRUFBRSxVQUFDLEdBQWdCO2dCQUN6RCxLQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsbUNBQVMsR0FBVCxVQUFVLE1BQTRCO1lBRWxDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCx3Q0FBYyxHQUFkLFVBQWUsUUFBUTtZQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNuRCxDQUFDO1FBbkJRLGVBQWU7WUFEM0IsOEJBQVU7NkNBSThCLDBDQUFlLEVBQXlCLHVCQUFhLEVBQTBCLHdCQUFjO1dBSHpILGVBQWUsQ0FvQjNCO1FBQUQsc0JBQUM7S0FwQkQsQUFvQkMsSUFBQTtJQXBCWSwwQ0FBZSIsImZpbGUiOiJjb21wb25lbnRzL3RlbXBsYXRlLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGUgZnJvbSAnLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IFRlbXBsYXRlU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9UZW1wbGF0ZVN0b3JlJztcclxuaW1wb3J0IE1vbnN0ZXJGYWN0b3J5IGZyb20gJy4uL2ZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeSc7XHJcbmltcG9ydCBNb25zdGVyVGVtcGxhdGUgZnJvbSAnLi4vZG9tYWluL01vbnN0ZXJUZW1wbGF0ZSc7XHJcbmltcG9ydCB7IFJlY2lwZVRha2VuIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTWFuYWdlciB7XHJcbiAgICBiYWc6IEFycmF5PFJlY2lwZS5Nb25zdGVyUmVjaXBlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHRlbXBsYXRlU3RvcmU6IFRlbXBsYXRlU3RvcmUsIHByaXZhdGUgbW9uc3RlckZhY3Rvcnk6IE1vbnN0ZXJGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5iYWcgPSBbbmV3IFJlY2lwZS5Lb2JvbGRSZWNpcGUoKSwgbmV3IFJlY2lwZS5XZXRQYXBlckJhZ1JlY2lwZSgpXTtcclxuICAgICAgICB0ZW1wbGF0ZVN0b3JlLnRlbXBsYXRlcy5wdXNoKG5ldyBNb25zdGVyVGVtcGxhdGUoXCJUZW1wbGF0ZSAxXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFJlY2lwZVRha2VuLCAobXNnOiBSZWNpcGVUYWtlbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhZy5wdXNoKG1zZy5yZWNpcGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRSZWNpcGUocmVjaXBlOiBSZWNpcGUuTW9uc3RlclJlY2lwZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0b3JlLnNlbGVjdGVkVGVtcGxhdGUuYWRkUmVjaXBlKHJlY2lwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGVtcGxhdGUodGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlU3RvcmUuc2VsZWN0ZWRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define('domain/AllItems',["require", "exports", "./Items/Loot", "./Items/Gold", "./Items/Weapon", "./Items/Recipe"], function (require, exports, Loot_1, Gold_1, Weapon_1, Recipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Loot_1, exports);
    __exportStar(Gold_1, exports);
    __exportStar(Weapon_1, exports);
    __exportStar(Recipe_1, exports);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9BbGxJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEsOEJBQTZCO0lBQzdCLDhCQUE2QjtJQUM3QixnQ0FBK0I7SUFDL0IsZ0NBQStCIiwiZmlsZSI6ImRvbWFpbi9BbGxJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vSXRlbXMvTG9vdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXRlbXMvR29sZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXRlbXMvV2VhcG9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9JdGVtcy9SZWNpcGUnOyJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define('domain/AllRecipies',["require", "exports", "./Recipies/MonsterRecipe", "./Recipies/KoboldRecipe", "./Recipies/WetPaperBagRecipe", "./Recipies/DragonRecipe"], function (require, exports, MonsterRecipe_1, KoboldRecipe_1, WetPaperBagRecipe_1, DragonRecipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(MonsterRecipe_1, exports);
    __exportStar(KoboldRecipe_1, exports);
    __exportStar(WetPaperBagRecipe_1, exports);
    __exportStar(DragonRecipe_1, exports);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9BbGxSZWNpcGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEsdUNBQXlDO0lBQ3pDLHNDQUF3QztJQUN4QywyQ0FBNkM7SUFDN0Msc0NBQXdDIiwiZmlsZSI6ImRvbWFpbi9BbGxSZWNpcGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vUmVjaXBpZXMvTW9uc3RlclJlY2lwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVjaXBpZXMvS29ib2xkUmVjaXBlJztcclxuZXhwb3J0ICogZnJvbSAnLi9SZWNpcGllcy9XZXRQYXBlckJhZ1JlY2lwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVjaXBpZXMvRHJhZ29uUmVjaXBlJzsiXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Body',["require", "exports", "../helpers/Attribute", "../helpers/Dice", "../helpers/Experience"], function (require, exports, Attribute_1, Dice_1, Experience_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Body = (function () {
        function Body(eventAggregator, name) {
            this.eventAggregator = eventAggregator;
            this.name = name;
            this.damageTaken = 0;
            this.experience = 0;
            this.baseHealth = 10;
            this.strength = 10;
            this.toughness = 10;
            this.dexterity = 10;
            this.killed = false;
        }
        Object.defineProperty(Body.prototype, "level", {
            get: function () {
                return Experience_1.default.getLevel(this.experience);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "baseAttack", {
            get: function () {
                return 1 * this.level;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "totalHealth", {
            get: function () {
                var toughnessModifier = Attribute_1.default.getModifier(this.toughness) * this.level;
                return this.baseHealth + toughnessModifier;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Body.prototype, "currentHealth", {
            get: function () {
                return this.totalHealth - this.damageTaken;
            },
            enumerable: false,
            configurable: true
        });
        ;
        Object.defineProperty(Body.prototype, "currentHealthPercent", {
            get: function () {
                return Math.floor((this.currentHealth * 100) / this.totalHealth);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "hasDied", {
            get: function () {
                return this.killed || this.currentHealth <= 0;
            },
            enumerable: false,
            configurable: true
        });
        Body.prototype.calculateDodgeRoll = function () {
            return Attribute_1.default.getModifier(this.dexterity) + Dice_1.default.d20();
        };
        Body.prototype.calculateAttackRoll = function () {
            return this.baseAttack + Dice_1.default.d20();
        };
        Body.prototype.calculateDamageRoll = function () {
            return Math.max(Attribute_1.default.getModifier(this.strength) + Dice_1.default.d6(), 0);
        };
        Body.prototype.healDamage = function (heal) {
            if (this.damageTaken > 0)
                this.damageTaken -= heal;
        };
        return Body;
    }());
    exports.default = Body;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Cb2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBWUksY0FBc0IsZUFBZ0MsRUFBUyxJQUFZO1lBQXJELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFTLFNBQUksR0FBSixJQUFJLENBQVE7WUFYM0UsZ0JBQVcsR0FBVyxDQUFDLENBQUM7WUFDeEIsZUFBVSxHQUFXLENBQUMsQ0FBQztZQUV2QixlQUFVLEdBQVcsRUFBRSxDQUFDO1lBRXhCLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztZQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1lBRXZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFc0QsQ0FBQztRQUUvRSxzQkFBSSx1QkFBSztpQkFBVDtnQkFDSSxPQUFPLG9CQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDRCQUFVO2lCQUFkO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSw2QkFBVztpQkFBZjtnQkFDSSxJQUFJLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMzRSxPQUFPLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7WUFDL0MsQ0FBQzs7O1dBQUE7UUFBQSxDQUFDO1FBRUYsc0JBQUksK0JBQWE7aUJBQWpCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQy9DLENBQUM7OztXQUFBO1FBQUEsQ0FBQztRQUVGLHNCQUFJLHNDQUFvQjtpQkFBeEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSx5QkFBTztpQkFBWDtnQkFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQzs7O1dBQUE7UUFFRCxpQ0FBa0IsR0FBbEI7WUFDSSxPQUFPLG1CQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxjQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUQsQ0FBQztRQUVELGtDQUFtQixHQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUVELGtDQUFtQixHQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBVztZQUNsQixJQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDakMsQ0FBQztRQUdMLFdBQUM7SUFBRCxDQXpEQSxBQXlEQyxJQUFBO0lBRUQsa0JBQWUsSUFBSSxDQUFDIiwiZmlsZSI6ImRvbWFpbi9Cb2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0dHJpYnV0ZSBmcm9tIFwiLi4vaGVscGVycy9BdHRyaWJ1dGVcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uL2hlbHBlcnMvRGljZVwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vaGVscGVycy9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBCb2R5IHtcclxuICAgIGRhbWFnZVRha2VuOiBudW1iZXIgPSAwO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBiYXNlSGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBzdHJlbmd0aDogbnVtYmVyID0gMTA7XHJcbiAgICB0b3VnaG5lc3M6IG51bWJlciA9IDEwO1xyXG4gICAgZGV4dGVyaXR5OiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBraWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgZ2V0IGxldmVsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEV4cGVyaWVuY2UuZ2V0TGV2ZWwodGhpcy5leHBlcmllbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFzZUF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxICogdGhpcy5sZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG90YWxIZWFsdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdG91Z2huZXNzTW9kaWZpZXIgPSBBdHRyaWJ1dGUuZ2V0TW9kaWZpZXIodGhpcy50b3VnaG5lc3MpICogdGhpcy5sZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlSGVhbHRoICsgdG91Z2huZXNzTW9kaWZpZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBjdXJyZW50SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxIZWFsdGggLSB0aGlzLmRhbWFnZVRha2VuO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgY3VycmVudEhlYWx0aFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5jdXJyZW50SGVhbHRoICogMTAwKSAvIHRoaXMudG90YWxIZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbGxlZCB8fCB0aGlzLmN1cnJlbnRIZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEb2RnZVJvbGwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXR0cmlidXRlLmdldE1vZGlmaWVyKHRoaXMuZGV4dGVyaXR5KSArIERpY2UuZDIwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQXR0YWNrUm9sbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2sgKyBEaWNlLmQyMCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYWxjdWxhdGVEYW1hZ2VSb2xsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KEF0dHJpYnV0ZS5nZXRNb2RpZmllcih0aGlzLnN0cmVuZ3RoKSArIERpY2UuZDYoKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhbERhbWFnZShoZWFsOm51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuZGFtYWdlVGFrZW4gPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmRhbWFnZVRha2VuIC09IGhlYWw7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgdGFrZURhbWFnZShkYW1hZ2U6bnVtYmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/monster',["require", "exports", "./Body", "../messages", "../helpers/Experience"], function (require, exports, Body_1, messages_1, Experience_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Monster.prototype.takeDamage = function (damage) {
            this.damageTaken += damage;
            if (this.hasDied) {
                this.eventAggregator.publish(new messages_1.MonsterKilled(this));
            }
        };
        Monster.prototype.levelUp = function (levels) {
            var desiredLevel = this.level + levels;
            var xpForDesiredLevel = Experience_1.default.getXpForLevel(desiredLevel);
            var xpForCurrentLevel = Experience_1.default.getXpForLevel(this.level);
            this.experience += xpForDesiredLevel - xpForCurrentLevel;
            for (var i = 0; i < levels; i++) {
                this.baseHealth += this.recipe.healthPerLevel();
                this.strength += this.recipe.strengthPerLevel();
                this.toughness += this.recipe.toughnessPerLevel();
                this.dexterity += this.recipe.dexterityPerLevel();
            }
        };
        return Monster;
    }(Body_1.default));
    exports.default = Monster;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9tb25zdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBQXFDLDJCQUFJO1FBQXpDOztRQTJCQSxDQUFDO1FBeEJHLDRCQUFVLEdBQVYsVUFBVyxNQUFhO1lBQ3BCLElBQUksQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN6RDtRQUNMLENBQUM7UUFFRCx5QkFBTyxHQUFQLFVBQVEsTUFBYztZQUVsQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN2QyxJQUFJLGlCQUFpQixHQUFHLG9CQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9ELElBQUksaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxVQUFVLElBQUksaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7WUFFekQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDOUI7Z0JBQ0ksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3JEO1FBQ0wsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQTNCQSxBQTJCQyxDQTNCb0MsY0FBSSxHQTJCeEMiLCJmaWxlIjoiZG9tYWluL21vbnN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9keSBmcm9tIFwiLi9Cb2R5XCI7XHJcbmltcG9ydCB7IE1vbnN0ZXJLaWxsZWQgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIFJlY2lwZSBmcm9tICcuL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi4vaGVscGVycy9FeHBlcmllbmNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBCb2R5IHtcclxuICAgIHJlY2lwZTogUmVjaXBlLk1vbnN0ZXJSZWNpcGU7XHJcblxyXG4gICAgdGFrZURhbWFnZShkYW1hZ2U6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2VUYWtlbiArPSBkYW1hZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0RpZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgTW9uc3RlcktpbGxlZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldmVsVXAobGV2ZWxzOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGRlc2lyZWRMZXZlbCA9IHRoaXMubGV2ZWwgKyBsZXZlbHM7XHJcbiAgICAgICAgdmFyIHhwRm9yRGVzaXJlZExldmVsID0gRXhwZXJpZW5jZS5nZXRYcEZvckxldmVsKGRlc2lyZWRMZXZlbCk7XHJcbiAgICAgICAgdmFyIHhwRm9yQ3VycmVudExldmVsID0gRXhwZXJpZW5jZS5nZXRYcEZvckxldmVsKHRoaXMubGV2ZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGVyaWVuY2UgKz0geHBGb3JEZXNpcmVkTGV2ZWwgLSB4cEZvckN1cnJlbnRMZXZlbDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxldmVsczsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlSGVhbHRoICs9IHRoaXMucmVjaXBlLmhlYWx0aFBlckxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyZW5ndGggKz0gdGhpcy5yZWNpcGUuc3RyZW5ndGhQZXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWdobmVzcyArPSB0aGlzLnJlY2lwZS50b3VnaG5lc3NQZXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRleHRlcml0eSArPSB0aGlzLnJlY2lwZS5kZXh0ZXJpdHlQZXJMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('domain/MonsterTemplate',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MonsterTemplate = (function () {
        function MonsterTemplate(name) {
            this.name = name;
            this.recipes = [];
        }
        ;
        MonsterTemplate.prototype.addRecipe = function (newRecipe) {
            this.recipes.push(newRecipe);
        };
        MonsterTemplate.prototype.remove = function (existingRecipe) {
            this.recipes.remove(existingRecipe);
        };
        return MonsterTemplate;
    }());
    exports.default = MonsterTemplate;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Nb25zdGVyVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFJSSx5QkFBbUIsSUFBWTtZQUFaLFNBQUksR0FBSixJQUFJLENBQVE7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUFBLENBQUM7UUFFRixtQ0FBUyxHQUFULFVBQVUsU0FBK0I7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELGdDQUFNLEdBQU4sVUFBTyxjQUFvQztZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQWZBLEFBZUMsSUFBQSIsImZpbGUiOiJkb21haW4vTW9uc3RlclRlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVjaXBlIGZyb20gJy4uL2RvbWFpbi9BbGxSZWNpcGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdGVyVGVtcGxhdGVcclxue1xyXG4gICAgcmVjaXBlczogQXJyYXk8UmVjaXBlLk1vbnN0ZXJSZWNpcGU+O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnJlY2lwZXMgPSBbXTtcclxuICAgIH07XHJcblxyXG4gICAgYWRkUmVjaXBlKG5ld1JlY2lwZTogUmVjaXBlLk1vbnN0ZXJSZWNpcGUpe1xyXG4gICAgICAgIHRoaXMucmVjaXBlcy5wdXNoKG5ld1JlY2lwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGV4aXN0aW5nUmVjaXBlOiBSZWNpcGUuTW9uc3RlclJlY2lwZSl7XHJcbiAgICAgICAgdGhpcy5yZWNpcGVzLnJlbW92ZShleGlzdGluZ1JlY2lwZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Player',["require", "exports", "./Body"], function (require, exports, Body_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gold = 0;
            return _this;
        }
        Player.prototype.takeDamage = function (damage) {
            this.damageTaken += damage;
        };
        return Player;
    }(Body_1.default));
    exports.default = Player;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUE7UUFBb0MsMEJBQUk7UUFBeEM7WUFBQSxxRUFPQztZQUxHLFVBQUksR0FBVyxDQUFDLENBQUM7O1FBS3JCLENBQUM7UUFIRywyQkFBVSxHQUFWLFVBQVcsTUFBYTtZQUNwQixJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztRQUMvQixDQUFDO1FBQ0wsYUFBQztJQUFELENBUEEsQUFPQyxDQVBtQyxjQUFJLEdBT3ZDIiwiZmlsZSI6ImRvbWFpbi9QbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9keSBmcm9tIFwiLi9Cb2R5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5XHJcbntcclxuICAgIGdvbGQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdGFrZURhbWFnZShkYW1hZ2U6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2VUYWtlbiArPSBkYW1hZ2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('factories/ItemFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/AllItems", "../domain/AllRecipies", "../domain/Stores/PlayerStore", "../helpers/Dice"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Item, Recipes, PlayerStore_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemFactory = (function () {
        function ItemFactory(eventAggregator, playerStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
        }
        ItemFactory.prototype.buildGold = function () {
            var newGold = new Item.Gold(this.eventAggregator);
            newGold.value = Dice_1.default.d20();
            return newGold;
        };
        ItemFactory.prototype.buildWeapon = function (name) {
            var newWeapon = new Item.Weapon(this.eventAggregator);
            newWeapon.name = name;
            newWeapon.damage = Dice_1.default.d20();
            return newWeapon;
        };
        ItemFactory.prototype.buildRecipe = function (level) {
            if (level === void 0) { level = this.playerStore.currentPlayer.level + 1; }
            var AllRecipies = [new Recipes.DragonRecipe(), new Recipes.KoboldRecipe, new Recipes.WetPaperBagRecipe];
            var recipeLoot = new Item.Recipe(this.eventAggregator);
            var newRecipe = AllRecipies[Dice_1.default.rollSides(AllRecipies.length) - 1];
            newRecipe.level = level;
            recipeLoot.recipe = newRecipe;
            return recipeLoot;
        };
        ItemFactory = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
        ], ItemFactory);
        return ItemFactory;
    }());
    exports.default = ItemFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9JdGVtRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFTQTtRQUNJLHFCQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQWxFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQUksQ0FBQztRQUUzRiwrQkFBUyxHQUFUO1lBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLGNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQsaUNBQVcsR0FBWCxVQUFZLElBQVk7WUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RCxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN0QixTQUFTLENBQUMsTUFBTSxHQUFHLGNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixPQUFPLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBRUQsaUNBQVcsR0FBWCxVQUFZLEtBQXVEO1lBQXZELHNCQUFBLEVBQUEsUUFBZSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUMvRCxJQUFJLFdBQVcsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3hHLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdkQsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLGNBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLFVBQVUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBRTlCLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUF6QmdCLFdBQVc7WUFEL0IsOEJBQVU7NkNBRThCLDBDQUFlLEVBQXVCLHFCQUFXO1dBRHJFLFdBQVcsQ0EwQi9CO1FBQUQsa0JBQUM7S0ExQkQsQUEwQkMsSUFBQTtzQkExQm9CLFdBQVciLCJmaWxlIjoiZmFjdG9yaWVzL0l0ZW1GYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0ICogYXMgSXRlbSBmcm9tICcuLi9kb21haW4vQWxsSXRlbXMnO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGVzIGZyb20gJy4uL2RvbWFpbi9BbGxSZWNpcGllcyc7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi4vZG9tYWluL21vbnN0ZXInO1xyXG5pbXBvcnQgRGljZSBmcm9tIFwiLi4vaGVscGVycy9EaWNlXCI7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHBsYXllclN0b3JlOiBQbGF5ZXJTdG9yZSkgeyB9XHJcblxyXG4gICAgYnVpbGRHb2xkKCk6IEl0ZW0uR29sZCB7XHJcbiAgICAgICAgbGV0IG5ld0dvbGQgPSBuZXcgSXRlbS5Hb2xkKHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcclxuICAgICAgICBuZXdHb2xkLnZhbHVlID0gRGljZS5kMjAoKTtcclxuICAgICAgICByZXR1cm4gbmV3R29sZDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFdlYXBvbihuYW1lOiBzdHJpbmcpOiBJdGVtLldlYXBvbiB7XHJcbiAgICAgICAgbGV0IG5ld1dlYXBvbiA9IG5ldyBJdGVtLldlYXBvbih0aGlzLmV2ZW50QWdncmVnYXRvcik7XHJcbiAgICAgICAgbmV3V2VhcG9uLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIG5ld1dlYXBvbi5kYW1hZ2UgPSBEaWNlLmQyMCgpO1xyXG4gICAgICAgIHJldHVybiBuZXdXZWFwb247XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRSZWNpcGUobGV2ZWw6bnVtYmVyID0gdGhpcy5wbGF5ZXJTdG9yZS5jdXJyZW50UGxheWVyLmxldmVsICsgMSk6IEl0ZW0uUmVjaXBlIHtcclxuICAgICAgICB2YXIgQWxsUmVjaXBpZXMgPSBbbmV3IFJlY2lwZXMuRHJhZ29uUmVjaXBlKCksIG5ldyBSZWNpcGVzLktvYm9sZFJlY2lwZSwgbmV3IFJlY2lwZXMuV2V0UGFwZXJCYWdSZWNpcGVdO1xyXG4gICAgICAgIGxldCByZWNpcGVMb290ID0gbmV3IEl0ZW0uUmVjaXBlKHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcclxuICAgICAgICBsZXQgbmV3UmVjaXBlID0gQWxsUmVjaXBpZXNbRGljZS5yb2xsU2lkZXMoQWxsUmVjaXBpZXMubGVuZ3RoKS0xXTtcclxuICAgICAgICBcclxuICAgICAgICBuZXdSZWNpcGUubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICByZWNpcGVMb290LnJlY2lwZSA9IG5ld1JlY2lwZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVjaXBlTG9vdDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('factories/MonsterFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/monster", "../domain/Stores/PlayerStore"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, monster_1, PlayerStore_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MonsterFactory = (function () {
        function MonsterFactory(eventAggregator, playerStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
        }
        MonsterFactory.prototype.buildMonster = function (recipe) {
            var monster = new monster_1.default(this.eventAggregator, recipe.name);
            monster.recipe = recipe;
            monster.baseHealth = recipe.baseHealth;
            monster.strength = recipe.baseStrength;
            monster.toughness = recipe.baseToughness;
            monster.dexterity = recipe.baseDexterity;
            monster.levelUp(recipe.level - 1);
            return monster;
        };
        MonsterFactory = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
        ], MonsterFactory);
        return MonsterFactory;
    }());
    exports.default = MonsterFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQUNJLHdCQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQWxFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQUksQ0FBQztRQUUzRixxQ0FBWSxHQUFaLFVBQWEsTUFBNEI7WUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUV6QyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEMsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQWZnQixjQUFjO1lBRGxDLDhCQUFVOzZDQUU4QiwwQ0FBZSxFQUF1QixxQkFBVztXQURyRSxjQUFjLENBZ0JsQztRQUFELHFCQUFDO0tBaEJELEFBZ0JDLElBQUE7c0JBaEJvQixjQUFjIiwiZmlsZSI6ImZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBNb25zdGVyIGZyb20gJy4uL2RvbWFpbi9tb25zdGVyJztcclxuaW1wb3J0IFBsYXllclN0b3JlIGZyb20gJy4uL2RvbWFpbi9TdG9yZXMvUGxheWVyU3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGUgZnJvbSAnLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXJGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlKSB7IH1cclxuXHJcbiAgICBidWlsZE1vbnN0ZXIocmVjaXBlOiBSZWNpcGUuTW9uc3RlclJlY2lwZSk6IE1vbnN0ZXIge1xyXG4gICAgICAgIGxldCBtb25zdGVyID0gbmV3IE1vbnN0ZXIodGhpcy5ldmVudEFnZ3JlZ2F0b3IsIHJlY2lwZS5uYW1lKTtcclxuXHJcbiAgICAgICAgbW9uc3Rlci5yZWNpcGUgPSByZWNpcGU7XHJcbiAgICAgICAgbW9uc3Rlci5iYXNlSGVhbHRoID0gcmVjaXBlLmJhc2VIZWFsdGg7XHJcbiAgICAgICAgbW9uc3Rlci5zdHJlbmd0aCA9IHJlY2lwZS5iYXNlU3RyZW5ndGg7XHJcbiAgICAgICAgbW9uc3Rlci50b3VnaG5lc3MgPSByZWNpcGUuYmFzZVRvdWdobmVzcztcclxuICAgICAgICBtb25zdGVyLmRleHRlcml0eSA9IHJlY2lwZS5iYXNlRGV4dGVyaXR5O1xyXG5cclxuICAgICAgICBtb25zdGVyLmxldmVsVXAocmVjaXBlLmxldmVsLTEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtb25zdGVyO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('factories/PlayerFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Player"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerFactory = (function () {
        function PlayerFactory(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        PlayerFactory.prototype.buildPlayer = function (name) {
            var player = new Player_1.default(this.eventAggregator, name);
            player.strength = 22;
            player.toughness = 14;
            player.dexterity = 16;
            return player;
        };
        PlayerFactory = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], PlayerFactory);
        return PlayerFactory;
    }());
    exports.default = PlayerFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBO1FBQ0ksdUJBQW9CLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFJLENBQUM7UUFFekQsbUNBQVcsR0FBWCxVQUFZLElBQVk7WUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFdEIsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQVZnQixhQUFhO1lBRGpDLDhCQUFVOzZDQUU4QiwwQ0FBZTtXQURuQyxhQUFhLENBV2pDO1FBQUQsb0JBQUM7S0FYRCxBQVdDLElBQUE7c0JBWG9CLGFBQWEiLCJmaWxlIjoiZmFjdG9yaWVzL1BsYXllckZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2RvbWFpbi9QbGF5ZXInO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7IH1cclxuXHJcbiAgICBidWlsZFBsYXllcihuYW1lOiBzdHJpbmcpOiBQbGF5ZXIge1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZXZlbnRBZ2dyZWdhdG9yLCBuYW1lKTtcclxuICAgICAgICBwbGF5ZXIuc3RyZW5ndGggPSAyMjtcclxuICAgICAgICBwbGF5ZXIudG91Z2huZXNzID0gMTQ7XHJcbiAgICAgICAgcGxheWVyLmRleHRlcml0eSA9IDE2O1xyXG5cclxuICAgICAgICByZXR1cm4gcGxheWVyO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

Array.prototype.remove = function (itemToRemove) {
    var index = this.indexOf(itemToRemove);
    if (index !== -1) {
        this.splice(index, 1);
    }
    return this;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU0sS0FBSyxDQUFDLFNBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxZQUFZO0lBQ2xELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN6QjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSIsImZpbGUiOiJoZWxwZXJzL0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEFycmF5PFQ+IHtcclxuICAgcmVtb3ZlKGl0ZW1Ub1JlbW92ZTogVCk6IEFycmF5PFQ+O1xyXG59XHJcblxyXG4oPGFueT5BcnJheS5wcm90b3R5cGUpLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtVG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW1Ub1JlbW92ZSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define("helpers/Array", [],function(){});

define('helpers/Attribute',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Attribute = (function () {
        function Attribute() {
        }
        Attribute.getModifier = function (value) {
            return Math.floor((value - 10) / 2);
        };
        return Attribute;
    }());
    exports.default = Attribute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQ0k7UUFBaUIsQ0FBQztRQUVYLHFCQUFXLEdBQWxCLFVBQW1CLEtBQWE7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDTCxnQkFBQztJQUFELENBTkEsQUFNQyxJQUFBIiwiZmlsZSI6ImhlbHBlcnMvQXR0cmlidXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0TW9kaWZpZXIodmFsdWU6IG51bWJlcikgOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh2YWx1ZSAtIDEwKSAvIDIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('helpers/Combat',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/PlayerStore", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, PlayerStore_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Combat = (function () {
        function Combat(eventAggregator, playerStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
        }
        Combat.prototype.battle = function (monsters) {
            if (!monsters.length)
                return;
            var player = this.playerStore.currentPlayer;
            var result = this.calculateBattleResult(player, monsters);
            player.takeDamage(result.playerDamage);
            monsters[0].takeDamage(result.monsterDamage);
        };
        Combat.prototype.calculateBattleResult = function (player, monsters) {
            var _this = this;
            var battleResult = new BattleResult();
            monsters.forEach(function (monster) {
                battleResult.playerDamage += _this.calculateDamage(player, monster);
            });
            battleResult.monsterDamage = this.calculateDamage(monsters[0], player);
            return battleResult;
        };
        Combat.prototype.calculateDamage = function (defender, attacker) {
            var defenderDodge = defender.calculateDodgeRoll();
            var attackerHit = attacker.calculateAttackRoll();
            this.eventAggregator.publish(new messages_1.LoggedMessage(defenderDodge + " dodge vs " + attackerHit + " attack"));
            if (defenderDodge >= attackerHit) {
                this.eventAggregator.publish(new messages_1.LoggedMessage(attacker.name + " Misses"));
                return 0;
            }
            var attackerDamage = attacker.calculateDamageRoll();
            this.eventAggregator.publish(new messages_1.LoggedMessage(attacker.name + " Hits for " + attackerDamage));
            return attackerDamage;
        };
        Combat = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
        ], Combat);
        return Combat;
    }());
    exports.default = Combat;
    var BattleResult = (function () {
        function BattleResult() {
            this.playerDamage = 0;
            this.monsterDamage = 0;
        }
        return BattleResult;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQ29tYmF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdBO1FBQ0ksZ0JBQW9CLGVBQWdDLEVBQVUsV0FBd0I7WUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBSSxDQUFDO1FBRTNGLHVCQUFNLEdBQU4sVUFBTyxRQUF3QjtZQUUzQixJQUFHLENBQUMsUUFBUSxDQUFDLE1BQU07Z0JBQ2YsT0FBTztZQUVYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFMUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVPLHNDQUFxQixHQUE3QixVQUE4QixNQUFjLEVBQUUsUUFBd0I7WUFBdEUsaUJBV0M7WUFURyxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBRXRDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNwQixZQUFZLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2RSxPQUFPLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBRU8sZ0NBQWUsR0FBdkIsVUFBd0IsUUFBYyxFQUFFLFFBQWM7WUFDbEQsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbEQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFFakQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSx3QkFBYSxDQUFJLGFBQWEsa0JBQWEsV0FBVyxZQUFTLENBQUMsQ0FBQyxDQUFDO1lBRW5HLElBQUcsYUFBYSxJQUFJLFdBQVcsRUFDM0I7Z0JBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSx3QkFBYSxDQUFJLFFBQVEsQ0FBQyxJQUFJLFlBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFFTCxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUksUUFBUSxDQUFDLElBQUksa0JBQWEsY0FBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDL0YsT0FBTyxjQUFjLENBQUM7UUFDMUIsQ0FBQztRQTNDZ0IsTUFBTTtZQUQxQiw4QkFBVTs2Q0FFOEIsMENBQWUsRUFBdUIscUJBQVc7V0FEckUsTUFBTSxDQTRDMUI7UUFBRCxhQUFDO0tBNUNELEFBNENDLElBQUE7c0JBNUNvQixNQUFNO0lBOEMzQjtRQUFBO1lBRUksaUJBQVksR0FBRyxDQUFDLENBQUM7WUFDakIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFELG1CQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUEiLCJmaWxlIjoiaGVscGVycy9Db21iYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL0RvbWFpbi9QbGF5ZXInO1xyXG5pbXBvcnQgUGxheWVyU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9QbGF5ZXJTdG9yZSc7XHJcbmltcG9ydCBNb25zdGVyIGZyb20gJy4uL2RvbWFpbi9tb25zdGVyJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi4vRG9tYWluL0JvZHknO1xyXG5pbXBvcnQgRGljZSBmcm9tIFwiLi4vaGVscGVycy9EaWNlXCI7XHJcbmltcG9ydCBBdHRyaWJ1dGUgZnJvbSBcIi4uL2hlbHBlcnMvQXR0cmlidXRlXCI7XHJcbmltcG9ydCB7IEhlYXJ0YmVhdCwgTG9nZ2VkTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJhdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHBsYXllclN0b3JlOiBQbGF5ZXJTdG9yZSkgeyB9XHJcblxyXG4gICAgYmF0dGxlKG1vbnN0ZXJzOiBBcnJheTxNb25zdGVyPilcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIGlmKCFtb25zdGVycy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyU3RvcmUuY3VycmVudFBsYXllcjtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5jYWxjdWxhdGVCYXR0bGVSZXN1bHQocGxheWVyLCBtb25zdGVycyk7XHJcblxyXG4gICAgICAgIHBsYXllci50YWtlRGFtYWdlKHJlc3VsdC5wbGF5ZXJEYW1hZ2UpO1xyXG4gICAgICAgIG1vbnN0ZXJzWzBdLnRha2VEYW1hZ2UocmVzdWx0Lm1vbnN0ZXJEYW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlQmF0dGxlUmVzdWx0KHBsYXllcjogUGxheWVyLCBtb25zdGVyczogQXJyYXk8TW9uc3Rlcj4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGJhdHRsZVJlc3VsdCA9IG5ldyBCYXR0bGVSZXN1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBtb25zdGVycy5mb3JFYWNoKG1vbnN0ZXIgPT4ge1xyXG4gICAgICAgICAgICBiYXR0bGVSZXN1bHQucGxheWVyRGFtYWdlICs9IHRoaXMuY2FsY3VsYXRlRGFtYWdlKHBsYXllciwgbW9uc3Rlcik7ICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBiYXR0bGVSZXN1bHQubW9uc3RlckRhbWFnZSA9IHRoaXMuY2FsY3VsYXRlRGFtYWdlKG1vbnN0ZXJzWzBdLCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYmF0dGxlUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlRGFtYWdlKGRlZmVuZGVyOiBCb2R5LCBhdHRhY2tlcjogQm9keSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGRlZmVuZGVyRG9kZ2UgPSBkZWZlbmRlci5jYWxjdWxhdGVEb2RnZVJvbGwoKTtcclxuICAgICAgICBsZXQgYXR0YWNrZXJIaXQgPSBhdHRhY2tlci5jYWxjdWxhdGVBdHRhY2tSb2xsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgTG9nZ2VkTWVzc2FnZShgJHtkZWZlbmRlckRvZGdlfSBkb2RnZSB2cyAke2F0dGFja2VySGl0fSBhdHRhY2tgKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGVmZW5kZXJEb2RnZSA+PSBhdHRhY2tlckhpdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgTG9nZ2VkTWVzc2FnZShgJHthdHRhY2tlci5uYW1lfSBNaXNzZXNgKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tlci5jYWxjdWxhdGVEYW1hZ2VSb2xsKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgTG9nZ2VkTWVzc2FnZShgJHthdHRhY2tlci5uYW1lfSBIaXRzIGZvciAke2F0dGFja2VyRGFtYWdlfWApKTsgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja2VyRGFtYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCYXR0bGVSZXN1bHRcclxue1xyXG4gICAgcGxheWVyRGFtYWdlID0gMDtcclxuICAgIG1vbnN0ZXJEYW1hZ2UgPSAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('helpers/Dice',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dice = (function () {
        function Dice() {
        }
        Dice.d6 = function () {
            return this.rollSides(6);
        };
        Dice.d20 = function () {
            return this.rollSides(20);
        };
        Dice.rollSides = function (sides) {
            return Math.floor(Math.random() * sides) + 1;
        };
        Dice.binaryChance = function (percent) {
            return Dice.rollSides(100) <= percent ? 1 : 0;
        };
        return Dice;
    }());
    exports.default = Dice;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvRGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUNJO1FBQWlCLENBQUM7UUFFWCxPQUFFLEdBQVQ7WUFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVNLFFBQUcsR0FBVjtZQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBRU0sY0FBUyxHQUFoQixVQUFpQixLQUFhO1lBRTFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFTSxpQkFBWSxHQUFuQixVQUFvQixPQUFlO1lBRS9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTCxXQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiJoZWxwZXJzL0RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZDYoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvbGxTaWRlcyg2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGQyMCgpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sbFNpZGVzKDIwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9sbFNpZGVzKHNpZGVzOiBudW1iZXIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVzKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJpbmFyeUNoYW5jZShwZXJjZW50OiBudW1iZXIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIERpY2Uucm9sbFNpZGVzKDEwMCkgPD0gcGVyY2VudCA/IDEgOiAwO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('helpers/Experience',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Experience = (function () {
        function Experience() {
        }
        Experience.getLevel = function (experience) {
            var root = 1 / Experience.power;
            return Math.floor(Math.pow(experience / Experience.xpmod, root)) + 1;
        };
        Experience.getXpForLevel = function (level) {
            return Math.ceil(Math.pow(level - 1, Experience.power) * Experience.xpmod);
        };
        Experience.power = 2.1;
        Experience.xpmod = 500;
        return Experience;
    }());
    exports.default = Experience;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvRXhwZXJpZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUlJO1FBQ0EsQ0FBQztRQUVNLG1CQUFRLEdBQWYsVUFBZ0IsVUFBa0I7WUFDOUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFaEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDeEUsQ0FBQztRQUVNLHdCQUFhLEdBQXBCLFVBQXFCLEtBQWE7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdFLENBQUM7UUFkTSxnQkFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixnQkFBSyxHQUFXLEdBQUcsQ0FBQztRQWMvQixpQkFBQztLQWhCRCxBQWdCQyxJQUFBO3NCQWhCb0IsVUFBVSIsImZpbGUiOiJoZWxwZXJzL0V4cGVyaWVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcmllbmNlIHtcclxuICAgIHN0YXRpYyBwb3dlcjogbnVtYmVyID0gMi4xO1xyXG4gICAgc3RhdGljIHhwbW9kOiBudW1iZXIgPSA1MDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldExldmVsKGV4cGVyaWVuY2U6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHJvb3QgPSAxIC8gRXhwZXJpZW5jZS5wb3dlcjtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5wb3coZXhwZXJpZW5jZSAvIEV4cGVyaWVuY2UueHBtb2QsIHJvb3QpKSArIDFcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0WHBGb3JMZXZlbChsZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGgucG93KGxldmVsIC0xLCBFeHBlcmllbmNlLnBvd2VyKSAqIEV4cGVyaWVuY2UueHBtb2QpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('helpers/GameLoop',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameLoop = (function () {
        function GameLoop(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        GameLoop.prototype.start = function () {
            var _this = this;
            setInterval(function () {
                _this.eventAggregator.publish(new messages_1.Heartbeat());
            }, 2000);
        };
        GameLoop = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], GameLoop);
        return GameLoop;
    }());
    exports.default = GameLoop;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvR2FtZUxvb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUFDSSxrQkFBb0IsZUFBZ0M7WUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQUksQ0FBQztRQUV6RCx3QkFBSyxHQUFMO1lBQUEsaUJBS0M7WUFIRyxXQUFXLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBUyxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO1FBUmdCLFFBQVE7WUFENUIsMEJBQU0sQ0FBQywwQ0FBZSxDQUFDOzZDQUVpQiwwQ0FBZTtXQURuQyxRQUFRLENBUzVCO1FBQUQsZUFBQztLQVRELEFBU0MsSUFBQTtzQkFUb0IsUUFBUSIsImZpbGUiOiJoZWxwZXJzL0dhbWVMb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBIZWFydGJlYXQgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvb3Age1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikgeyB9XHJcblxyXG4gICAgc3RhcnQoKVxyXG4gICAgeyAgICAgICAgXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBIZWFydGJlYXQoKSk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('helpers/LootDropper',["require", "exports", "aurelia-framework", "../domain/Stores/PlayerStore", "../factories/ItemFactory", "../helpers/Dice"], function (require, exports, aurelia_framework_1, PlayerStore_1, ItemFactory_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LootDropper = (function () {
        function LootDropper(itemFactory, playerStore) {
            this.itemFactory = itemFactory;
            this.playerStore = playerStore;
        }
        LootDropper.prototype.generateLoot = function (monster) {
            var itemsToDrop = [];
            if (Dice_1.default.binaryChance(40))
                itemsToDrop.push(this.itemFactory.buildGold());
            if (Dice_1.default.binaryChance(10))
                itemsToDrop.push(this.itemFactory.buildWeapon("Thunderfury, Blessed Blade of the Windseeker"));
            if (Dice_1.default.binaryChance(10))
                itemsToDrop.push(this.itemFactory.buildRecipe());
            return itemsToDrop;
        };
        LootDropper = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [ItemFactory_1.default, PlayerStore_1.default])
        ], LootDropper);
        return LootDropper;
    }());
    exports.default = LootDropper;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvTG9vdERyb3BwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0E7UUFDSSxxQkFBc0IsV0FBd0IsRUFBWSxXQUF3QjtZQUE1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFZLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWxGLENBQUM7UUFFRCxrQ0FBWSxHQUFaLFVBQWEsT0FBZ0I7WUFDekIsSUFBSSxXQUFXLEdBQWdCLEVBQUUsQ0FBQztZQUVsQyxJQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUVuRCxJQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztZQUVuRyxJQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVyRCxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO1FBbEJnQixXQUFXO1lBRC9CLDhCQUFVOzZDQUU0QixxQkFBVyxFQUF5QixxQkFBVztXQURqRSxXQUFXLENBbUIvQjtRQUFELGtCQUFDO0tBbkJELEFBbUJDLElBQUE7c0JBbkJvQixXQUFXIiwiZmlsZSI6ImhlbHBlcnMvTG9vdERyb3BwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL0RvbWFpbi9QbGF5ZXInO1xyXG5pbXBvcnQgTW9uc3RlciBmcm9tICcuLi9kb21haW4vbW9uc3Rlcic7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IEl0ZW1GYWN0b3J5IGZyb20gJy4uL2ZhY3Rvcmllcy9JdGVtRmFjdG9yeSc7XHJcbmltcG9ydCBEaWNlIGZyb20gXCIuLi9oZWxwZXJzL0RpY2VcIjtcclxuaW1wb3J0ICogYXMgSXRlbSBmcm9tIFwiLi4vZG9tYWluL0FsbEl0ZW1zXCI7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb290RHJvcHBlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaXRlbUZhY3Rvcnk6IEl0ZW1GYWN0b3J5LCBwcm90ZWN0ZWQgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlKSB7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUxvb3QobW9uc3RlcjogTW9uc3RlcikgOiBJdGVtLkxvb3RbXSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zVG9Ecm9wOiBJdGVtLkxvb3RbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKERpY2UuYmluYXJ5Q2hhbmNlKDQwKSlcclxuICAgICAgICAgICAgaXRlbXNUb0Ryb3AucHVzaCh0aGlzLml0ZW1GYWN0b3J5LmJ1aWxkR29sZCgpKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoRGljZS5iaW5hcnlDaGFuY2UoMTApKVxyXG4gICAgICAgICAgICBpdGVtc1RvRHJvcC5wdXNoKHRoaXMuaXRlbUZhY3RvcnkuYnVpbGRXZWFwb24oXCJUaHVuZGVyZnVyeSwgQmxlc3NlZCBCbGFkZSBvZiB0aGUgV2luZHNlZWtlclwiKSk7XHJcblxyXG4gICAgICAgIGlmKERpY2UuYmluYXJ5Q2hhbmNlKDEwKSlcclxuICAgICAgICAgICAgaXRlbXNUb0Ryb3AucHVzaCh0aGlzLml0ZW1GYWN0b3J5LmJ1aWxkUmVjaXBlKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gaXRlbXNUb0Ryb3A7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.configure = void 0;
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBRUEsU0FBZ0IsU0FBUyxDQUFDLE1BQThCO0lBRXhELENBQUM7SUFGRCw4QkFFQyIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZyYW1ld29ya0NvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XHJcbiAgLy9jb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/loot/loot-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../helpers/LootDropper", "../../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, LootDropper_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LootStack = void 0;
    var LootStack = (function () {
        function LootStack(eventAggregator, lootDropper) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.lootDropper = lootDropper;
            this.stack = [];
            this.eventAggregator.subscribe(messages_1.MonsterKilled, function (msg) {
                var loots = lootDropper.generateLoot(msg.monster);
                loots.forEach(function (loot) {
                    _this.stack.push(loot);
                });
            });
        }
        LootStack.prototype.takeItem = function (lootItem) {
            lootItem.take();
            this.stack.remove(lootItem);
        };
        LootStack = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, LootDropper_1.default])
        ], LootStack);
        return LootStack;
    }());
    exports.LootStack = LootStack;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9vdC9sb290LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFXQTtRQUdJLG1CQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQXRGLGlCQVNDO1lBVG1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBRnRGLFVBQUssR0FBcUIsRUFBRSxDQUFDO1lBSXpCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLHdCQUFhLEVBQUUsVUFBQyxHQUFrQjtnQkFDN0QsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRWxELEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDRCQUFRLEdBQVIsVUFBUyxRQUFtQjtZQUN4QixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQWpCUSxTQUFTO1lBRHJCLDhCQUFVOzZDQUk4QiwwQ0FBZSxFQUF1QixxQkFBVztXQUg3RSxTQUFTLENBa0JyQjtRQUFELGdCQUFDO0tBbEJELEFBa0JDLElBQUE7SUFsQlksOEJBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9sb290L2xvb3Qtc3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCAqIGFzIEl0ZW0gZnJvbSBcIi4uLy4uL2RvbWFpbi9BbGxJdGVtc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGVzIGZyb20gXCIuLi8uLi9kb21haW4vQWxsUmVjaXBpZXNcIjtcclxuaW1wb3J0ICogYXMgTW9uc3RlclJlY2lwZSBmcm9tIFwiLi4vLi4vZG9tYWluL1JlY2lwaWVzL01vbnN0ZXJSZWNpcGVcIjtcclxuaW1wb3J0IEl0ZW1GYWN0b3J5IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvSXRlbUZhY3RvcnlcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5pbXBvcnQgTG9vdERyb3BwZXIgZnJvbSBcIi4uLy4uL2hlbHBlcnMvTG9vdERyb3BwZXJcIjtcclxuaW1wb3J0IHsgTW9uc3RlcktpbGxlZCwgR29sZFRha2VuIH0gZnJvbSAnLi4vLi4vbWVzc2FnZXMnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIExvb3RTdGFjayB7XHJcbiAgICBzdGFjazogQXJyYXk8SXRlbS5Mb290PiA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIGxvb3REcm9wcGVyOiBMb290RHJvcHBlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShNb25zdGVyS2lsbGVkLCAobXNnOiBNb25zdGVyS2lsbGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsb290cyA9IGxvb3REcm9wcGVyLmdlbmVyYXRlTG9vdChtc2cubW9uc3Rlcik7XHJcblxyXG4gICAgICAgICAgICBsb290cy5mb3JFYWNoKGxvb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxvb3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFrZUl0ZW0obG9vdEl0ZW06IEl0ZW0uTG9vdCl7XHJcbiAgICAgICAgbG9vdEl0ZW0udGFrZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlKGxvb3RJdGVtKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('domain/Enums/Rarity',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Rarity;
    (function (Rarity) {
        Rarity[Rarity["Common"] = 0] = "Common";
        Rarity[Rarity["Uncommon"] = 1] = "Uncommon";
        Rarity[Rarity["Rare"] = 2] = "Rare";
        Rarity[Rarity["Epic"] = 3] = "Epic";
        Rarity[Rarity["Legendary"] = 4] = "Legendary";
    })(Rarity || (Rarity = {}));
    exports.default = Rarity;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9FbnVtcy9SYXJpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsSUFBSyxNQU1KO0lBTkQsV0FBSyxNQUFNO1FBQ1AsdUNBQU0sQ0FBQTtRQUNOLDJDQUFRLENBQUE7UUFDUixtQ0FBSSxDQUFBO1FBQ0osbUNBQUksQ0FBQTtRQUNKLDZDQUFTLENBQUE7SUFDYixDQUFDLEVBTkksTUFBTSxLQUFOLE1BQU0sUUFNVjtJQUVELGtCQUFlLE1BQU0sQ0FBQSIsImZpbGUiOiJkb21haW4vRW51bXMvUmFyaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBSYXJpdHkge1xyXG4gICAgQ29tbW9uLFxyXG4gICAgVW5jb21tb24sXHJcbiAgICBSYXJlLFxyXG4gICAgRXBpYyxcclxuICAgIExlZ2VuZGFyeSAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Gold',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gold = void 0;
    var Gold = (function (_super) {
        __extends(Gold, _super);
        function Gold() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.template = "gold";
            return _this;
        }
        Object.defineProperty(Gold.prototype, "displayName", {
            get: function () {
                return "Gold Bag (" + this.value + ")";
            },
            enumerable: false,
            configurable: true
        });
        Gold.prototype.showToolTip = function () { };
        ;
        Gold.prototype.take = function () { this.eventAggregator.publish(new messages_1.GoldTaken(this)); };
        ;
        Gold.prototype.use = function () { };
        ;
        return Gold;
    }(Loot_1.Loot));
    exports.Gold = Gold;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9Hb2xkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUEwQix3QkFBSTtRQUE5QjtZQUFBLHFFQVlDO1lBWEcsY0FBUSxHQUFVLE1BQU0sQ0FBQzs7UUFXN0IsQ0FBQztRQVBHLHNCQUFJLDZCQUFXO2lCQUFmO2dCQUNJLE9BQU8sZUFBYSxJQUFJLENBQUMsS0FBSyxNQUFHLENBQUM7WUFDdEMsQ0FBQzs7O1dBQUE7UUFFRCwwQkFBVyxHQUFYLGNBQWdCLENBQUM7UUFBQSxDQUFDO1FBQ2xCLG1CQUFJLEdBQUosY0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQzdELGtCQUFHLEdBQUgsY0FBTyxDQUFDO1FBQUEsQ0FBQztRQUNiLFdBQUM7SUFBRCxDQVpBLEFBWUMsQ0FaeUIsV0FBSSxHQVk3QjtJQVpZLG9CQUFJIiwiZmlsZSI6ImRvbWFpbi9JdGVtcy9Hb2xkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9vdCB9IGZyb20gXCIuL0xvb3RcIjtcclxuaW1wb3J0IHsgR29sZFRha2VuIH0gZnJvbSAnLi4vLi4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvbGQgZXh0ZW5kcyBMb290IHtcclxuICAgIHRlbXBsYXRlOnN0cmluZyA9IFwiZ29sZFwiO1xyXG5cclxuICAgIHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgZ2V0IGRpc3BsYXlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgR29sZCBCYWcgKCR7dGhpcy52YWx1ZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VG9vbFRpcCgpIHsgfTtcclxuICAgIHRha2UoKSB7IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IEdvbGRUYWtlbih0aGlzKSkgfTtcclxuICAgIHVzZSgpIHt9O1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/Items/Loot',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Loot = void 0;
    var Loot = (function () {
        function Loot(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        return Loot;
    }());
    exports.Loot = Loot;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9Mb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQTtRQUNJLGNBQXNCLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFHLENBQUM7UUFPOUQsV0FBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUnFCLG9CQUFJIiwiZmlsZSI6ImRvbWFpbi9JdGVtcy9Mb290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb290IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge31cclxuXHJcbiAgICB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgZ2V0IGRpc3BsYXlOYW1lKCk7XHJcbiAgICBhYnN0cmFjdCBzaG93VG9vbFRpcCgpO1xyXG4gICAgYWJzdHJhY3QgdGFrZSgpO1xyXG4gICAgYWJzdHJhY3QgdXNlKCk7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Recipe',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Recipe = void 0;
    var Recipe = (function (_super) {
        __extends(Recipe, _super);
        function Recipe() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.template = "recipe";
            return _this;
        }
        Object.defineProperty(Recipe.prototype, "displayName", {
            get: function () {
                return this.recipe.name + " recipe (Level: " + this.recipe.level + ")";
            },
            enumerable: false,
            configurable: true
        });
        Recipe.prototype.showToolTip = function () { };
        ;
        Recipe.prototype.take = function () { this.eventAggregator.publish(new messages_1.RecipeTaken(this.recipe)); };
        ;
        Recipe.prototype.use = function () { };
        ;
        return Recipe;
    }(Loot_1.Loot));
    exports.Recipe = Recipe;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9SZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBQTRCLDBCQUFJO1FBQWhDO1lBQUEscUVBV0M7WUFWRyxjQUFRLEdBQVcsUUFBUSxDQUFDOztRQVVoQyxDQUFDO1FBUEcsc0JBQUksK0JBQVc7aUJBQWY7Z0JBQ0ksT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksd0JBQW1CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFHLENBQUM7WUFDdEUsQ0FBQzs7O1dBQUE7UUFFRCw0QkFBVyxHQUFYLGNBQWdCLENBQUM7UUFBQSxDQUFDO1FBQ2xCLHFCQUFJLEdBQUosY0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHNCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUN0RSxvQkFBRyxHQUFILGNBQU8sQ0FBQztRQUFBLENBQUM7UUFDYixhQUFDO0lBQUQsQ0FYQSxBQVdDLENBWDJCLFdBQUksR0FXL0I7SUFYWSx3QkFBTSIsImZpbGUiOiJkb21haW4vSXRlbXMvUmVjaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9vdCB9IGZyb20gXCIuL0xvb3RcIjtcclxuaW1wb3J0IHsgUmVjaXBlVGFrZW4gfSBmcm9tICcuLi8uLi9tZXNzYWdlcyc7XHJcbmltcG9ydCAqIGFzIFJlY2lwZXMgZnJvbSAnLi4vLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGUgZXh0ZW5kcyBMb290IHtcclxuICAgIHRlbXBsYXRlOiBzdHJpbmcgPSBcInJlY2lwZVwiO1xyXG4gICAgcmVjaXBlOiBSZWNpcGVzLk1vbnN0ZXJSZWNpcGU7XHJcblxyXG4gICAgZ2V0IGRpc3BsYXlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnJlY2lwZS5uYW1lfSByZWNpcGUgKExldmVsOiAke3RoaXMucmVjaXBlLmxldmVsfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb29sVGlwKCkgeyB9O1xyXG4gICAgdGFrZSgpIHsgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgUmVjaXBlVGFrZW4odGhpcy5yZWNpcGUpKSB9O1xyXG4gICAgdXNlKCkge307XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Weapon',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Weapon = void 0;
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.template = "weapon";
            return _this;
        }
        Object.defineProperty(Weapon.prototype, "displayName", {
            get: function () {
                return this.name;
            },
            enumerable: false,
            configurable: true
        });
        Weapon.prototype.showToolTip = function () { };
        ;
        Weapon.prototype.take = function () { this.eventAggregator.publish(new messages_1.ItemTaken(this)); };
        ;
        Weapon.prototype.use = function () { };
        ;
        return Weapon;
    }(Loot_1.Loot));
    exports.Weapon = Weapon;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9XZWFwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlBO1FBQTRCLDBCQUFJO1FBQWhDO1lBQUEscUVBYUM7WUFaRyxjQUFRLEdBQVUsUUFBUSxDQUFDOztRQVkvQixDQUFDO1FBUEcsc0JBQUksK0JBQVc7aUJBQWY7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7OztXQUFBO1FBRUQsNEJBQVcsR0FBWCxjQUFnQixDQUFDO1FBQUEsQ0FBQztRQUNsQixxQkFBSSxHQUFKLGNBQVMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUM3RCxvQkFBRyxHQUFILGNBQU8sQ0FBQztRQUFBLENBQUM7UUFDYixhQUFDO0lBQUQsQ0FiQSxBQWFDLENBYjJCLFdBQUksR0FhL0I7SUFiWSx3QkFBTSIsImZpbGUiOiJkb21haW4vSXRlbXMvV2VhcG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9vdCB9IGZyb20gXCIuL0xvb3RcIjtcclxuaW1wb3J0IHsgSXRlbVRha2VuIH0gZnJvbSAnLi4vLi4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiBleHRlbmRzIExvb3Qge1xyXG4gICAgdGVtcGxhdGU6c3RyaW5nID0gXCJ3ZWFwb25cIjtcclxuXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkYW1hZ2U6IG51bWJlcjtcclxuXHJcbiAgICBnZXQgZGlzcGxheU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VG9vbFRpcCgpIHsgfTtcclxuICAgIHRha2UoKSB7IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IEl0ZW1UYWtlbih0aGlzKSkgfTtcclxuICAgIHVzZSgpIHt9O1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/Recipies/DragonRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DragonRecipe = void 0;
    var DragonRecipe = (function () {
        function DragonRecipe() {
            var _this = this;
            this.name = "Dragon";
            this.baseHealth = 20;
            this.baseStrength = 16;
            this.baseToughness = 20;
            this.baseDexterity = 16;
            this.healthPerLevel = function () { return Dice_1.default.rollSides(10); };
            this.strengthPerLevel = function () { return Dice_1.default.binaryChance(9 + (_this.rarity * 12)); };
            this.toughnessPerLevel = function () { return Dice_1.default.binaryChance(10 + (_this.rarity * 12)); };
            this.dexterityPerLevel = function () { return Dice_1.default.binaryChance(13 + (_this.rarity * 12)); };
            this.rarity = Rarity_1.default.Rare;
            this.level = 1;
        }
        return DragonRecipe;
    }());
    exports.DragonRecipe = DragonRecipe;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9EcmFnb25SZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUlBO1FBQUE7WUFBQSxpQkFrQkM7WUFqQkcsU0FBSSxHQUFXLFFBQVEsQ0FBQztZQUV4QixlQUFVLEdBQVcsRUFBRSxDQUFDO1lBQ3hCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1lBQzFCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1lBQzNCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1lBRTNCLG1CQUFjLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQWxCLENBQWtCLENBQUM7WUFFMUMscUJBQWdCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO1lBRW5FLHNCQUFpQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVyRSxzQkFBaUIsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7WUFFckUsV0FBTSxHQUFXLGdCQUFNLENBQUMsSUFBSSxDQUFDO1lBQzdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFELG1CQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSxvQ0FBWSIsImZpbGUiOiJkb21haW4vUmVjaXBpZXMvRHJhZ29uUmVjaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uc3RlclJlY2lwZSB9IGZyb20gXCIuL01vbnN0ZXJSZWNpcGVcIjtcclxuaW1wb3J0IFJhcml0eSBmcm9tIFwiLi4vRW51bXMvUmFyaXR5XCI7XHJcbmltcG9ydCBEaWNlIGZyb20gXCIuLi8uLi9oZWxwZXJzL0RpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnb25SZWNpcGUgaW1wbGVtZW50cyBNb25zdGVyUmVjaXBlIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiRHJhZ29uXCI7XHJcblxyXG4gICAgYmFzZUhlYWx0aDogbnVtYmVyID0gMjA7XHJcbiAgICBiYXNlU3RyZW5ndGg6IG51bWJlciA9IDE2O1xyXG4gICAgYmFzZVRvdWdobmVzczogbnVtYmVyID0gMjA7XHJcbiAgICBiYXNlRGV4dGVyaXR5OiBudW1iZXIgPSAxNjtcclxuICAgIFxyXG4gICAgaGVhbHRoUGVyTGV2ZWwgPSAoKSA9PiBEaWNlLnJvbGxTaWRlcygxMCk7XHJcblxyXG4gICAgc3RyZW5ndGhQZXJMZXZlbCA9ICgpID0+IERpY2UuYmluYXJ5Q2hhbmNlKDkgKyAodGhpcy5yYXJpdHkgKiAxMikpO1xyXG5cclxuICAgIHRvdWdobmVzc1BlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTAgKyAodGhpcy5yYXJpdHkgKiAxMikpO1xyXG5cclxuICAgIGRleHRlcml0eVBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTMgKyAodGhpcy5yYXJpdHkgKiAxMikpO1xyXG5cclxuICAgIHJhcml0eTogUmFyaXR5ID0gUmFyaXR5LlJhcmU7XHJcbiAgICBsZXZlbDogbnVtYmVyID0gMTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('domain/Recipies/KoboldRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KoboldRecipe = void 0;
    var KoboldRecipe = (function () {
        function KoboldRecipe() {
            var _this = this;
            this.name = "Kobold";
            this.baseHealth = 4;
            this.baseStrength = 9;
            this.baseToughness = 10;
            this.baseDexterity = 13;
            this.healthPerLevel = function () { return Dice_1.default.rollSides(4); };
            this.strengthPerLevel = function () { return Dice_1.default.binaryChance(9 + (_this.rarity * 10)); };
            this.toughnessPerLevel = function () { return Dice_1.default.binaryChance(10 + (_this.rarity * 10)); };
            this.dexterityPerLevel = function () { return Dice_1.default.binaryChance(13 + (_this.rarity * 10)); };
            this.rarity = Rarity_1.default.Common;
            this.level = 1;
        }
        return KoboldRecipe;
    }());
    exports.KoboldRecipe = KoboldRecipe;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9Lb2JvbGRSZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUlBO1FBQUE7WUFBQSxpQkFrQkM7WUFqQkcsU0FBSSxHQUFXLFFBQVEsQ0FBQztZQUV4QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1lBQ3ZCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1lBQ3pCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1lBQzNCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1lBRTNCLG1CQUFjLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWpCLENBQWlCLENBQUM7WUFFekMscUJBQWdCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO1lBRW5FLHNCQUFpQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVyRSxzQkFBaUIsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7WUFFckUsV0FBTSxHQUFXLGdCQUFNLENBQUMsTUFBTSxDQUFDO1lBQy9CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFELG1CQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSxvQ0FBWSIsImZpbGUiOiJkb21haW4vUmVjaXBpZXMvS29ib2xkUmVjaXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uc3RlclJlY2lwZSB9IGZyb20gXCIuL01vbnN0ZXJSZWNpcGVcIjtcclxuaW1wb3J0IFJhcml0eSBmcm9tIFwiLi4vRW51bXMvUmFyaXR5XCI7XHJcbmltcG9ydCBEaWNlIGZyb20gXCIuLi8uLi9oZWxwZXJzL0RpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLb2JvbGRSZWNpcGUgaW1wbGVtZW50cyBNb25zdGVyUmVjaXBlIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiS29ib2xkXCI7XHJcblxyXG4gICAgYmFzZUhlYWx0aDogbnVtYmVyID0gNDtcclxuICAgIGJhc2VTdHJlbmd0aDogbnVtYmVyID0gOTtcclxuICAgIGJhc2VUb3VnaG5lc3M6IG51bWJlciA9IDEwO1xyXG4gICAgYmFzZURleHRlcml0eTogbnVtYmVyID0gMTM7XHJcbiAgICBcclxuICAgIGhlYWx0aFBlckxldmVsID0gKCkgPT4gRGljZS5yb2xsU2lkZXMoNCk7XHJcblxyXG4gICAgc3RyZW5ndGhQZXJMZXZlbCA9ICgpID0+IERpY2UuYmluYXJ5Q2hhbmNlKDkgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIHRvdWdobmVzc1BlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTAgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIGRleHRlcml0eVBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTMgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIHJhcml0eTogUmFyaXR5ID0gUmFyaXR5LkNvbW1vbjtcclxuICAgIGxldmVsOiBudW1iZXIgPSAxO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/Recipies/MonsterRecipe',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb21haW4vUmVjaXBpZXMvTW9uc3RlclJlY2lwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Recipies/WetPaperBagRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WetPaperBagRecipe = void 0;
    var WetPaperBagRecipe = (function () {
        function WetPaperBagRecipe() {
            var _this = this;
            this.name = "Wet Paper Bag";
            this.baseHealth = 2;
            this.baseStrength = 8;
            this.baseToughness = 8;
            this.baseDexterity = 8;
            this.healthPerLevel = function () { return Dice_1.default.rollSides(4); };
            this.strengthPerLevel = function () { return Dice_1.default.binaryChance(10 + (_this.rarity * 10)); };
            this.toughnessPerLevel = function () { return Dice_1.default.binaryChance(10 + (_this.rarity * 10)); };
            this.dexterityPerLevel = function () { return Dice_1.default.binaryChance(10 + (_this.rarity * 10)); };
            this.rarity = Rarity_1.default.Common;
            this.level = 1;
        }
        return WetPaperBagRecipe;
    }());
    exports.WetPaperBagRecipe = WetPaperBagRecipe;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9XZXRQYXBlckJhZ1JlY2lwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUE7UUFBQTtZQUFBLGlCQWtCQztZQWpCRyxTQUFJLEdBQVcsZUFBZSxDQUFDO1lBRS9CLGVBQVUsR0FBVyxDQUFDLENBQUM7WUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7WUFDekIsa0JBQWEsR0FBVyxDQUFDLENBQUM7WUFDMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7WUFFMUIsbUJBQWMsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztZQUV6QyxxQkFBZ0IsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7WUFFcEUsc0JBQWlCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBRXJFLHNCQUFpQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVyRSxXQUFNLEdBQVcsZ0JBQU0sQ0FBQyxNQUFNLENBQUM7WUFDL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUQsd0JBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLDhDQUFpQiIsImZpbGUiOiJkb21haW4vUmVjaXBpZXMvV2V0UGFwZXJCYWdSZWNpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25zdGVyUmVjaXBlIH0gZnJvbSBcIi4vTW9uc3RlclJlY2lwZVwiO1xyXG5pbXBvcnQgUmFyaXR5IGZyb20gXCIuLi9FbnVtcy9SYXJpdHlcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdldFBhcGVyQmFnUmVjaXBlIGltcGxlbWVudHMgTW9uc3RlclJlY2lwZSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIldldCBQYXBlciBCYWdcIjtcclxuXHJcbiAgICBiYXNlSGVhbHRoOiBudW1iZXIgPSAyO1xyXG4gICAgYmFzZVN0cmVuZ3RoOiBudW1iZXIgPSA4O1xyXG4gICAgYmFzZVRvdWdobmVzczogbnVtYmVyID0gODtcclxuICAgIGJhc2VEZXh0ZXJpdHk6IG51bWJlciA9IDg7XHJcbiAgICBcclxuICAgIGhlYWx0aFBlckxldmVsID0gKCkgPT4gRGljZS5yb2xsU2lkZXMoNCk7XHJcblxyXG4gICAgc3RyZW5ndGhQZXJMZXZlbCA9ICgpID0+IERpY2UuYmluYXJ5Q2hhbmNlKDEwICsgKHRoaXMucmFyaXR5ICogMTApKTtcclxuXHJcbiAgICB0b3VnaG5lc3NQZXJMZXZlbCA9ICgpID0+IERpY2UuYmluYXJ5Q2hhbmNlKDEwICsgKHRoaXMucmFyaXR5ICogMTApKTtcclxuXHJcbiAgICBkZXh0ZXJpdHlQZXJMZXZlbCA9ICgpID0+IERpY2UuYmluYXJ5Q2hhbmNlKDEwICsgKHRoaXMucmFyaXR5ICogMTApKTtcclxuXHJcbiAgICByYXJpdHk6IFJhcml0eSA9IFJhcml0eS5Db21tb247XHJcbiAgICBsZXZlbDogbnVtYmVyID0gMTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('domain/Stores/PlayerStore',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../factories/PlayerFactory", "../../messages", "../../helpers/Dice"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, PlayerFactory_1, messages_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PlayerStore = (function () {
        function PlayerStore(eventAggregator, playerFactory) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.inventory = [];
            this.currentPlayer = playerFactory.buildPlayer("Test Factory Player");
            this.eventAggregator.subscribe(messages_1.Heartbeat, function (msg) {
                _this.currentPlayer.healDamage(1);
            });
            this.eventAggregator.subscribe(messages_1.MonsterKilled, function (msg) {
                _this.currentPlayer.experience += Dice_1.default.rollSides(500);
            });
        }
        PlayerStore = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerFactory_1.default])
        ], PlayerStore);
        return PlayerStore;
    }());
    exports.default = PlayerStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9TdG9yZXMvUGxheWVyU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUE7UUFJSSxxQkFBb0IsZUFBZ0MsRUFBRSxhQUE0QjtZQUFsRixpQkFVQztZQVZtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFGcEQsY0FBUyxHQUFxQixFQUFFLENBQUM7WUFHN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFdEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsb0JBQVMsRUFBRSxVQUFDLEdBQWM7Z0JBQ3JELEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsd0JBQWEsRUFBRSxVQUFDLEdBQWtCO2dCQUM3RCxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxjQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQWRnQixXQUFXO1lBRC9CLDhCQUFVOzZDQUs4QiwwQ0FBZSxFQUFpQix1QkFBYTtXQUpqRSxXQUFXLENBZS9CO1FBQUQsa0JBQUM7S0FmRCxBQWVDLElBQUE7c0JBZm9CLFdBQVciLCJmaWxlIjoiZG9tYWluL1N0b3Jlcy9QbGF5ZXJTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL1BsYXllclwiO1xyXG5pbXBvcnQgKiBhcyBJdGVtIGZyb20gXCIuLi9BbGxJdGVtc1wiO1xyXG5pbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tIFwiLi4vLi4vZmFjdG9yaWVzL1BsYXllckZhY3RvcnlcIlxyXG5pbXBvcnQgeyBIZWFydGJlYXQsIE1vbnN0ZXJLaWxsZWQgfSBmcm9tICcuLi8uLi9tZXNzYWdlcyc7XHJcbmltcG9ydCBEaWNlIGZyb20gXCIuLi8uLi9oZWxwZXJzL0RpY2VcIjtcclxuXHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJTdG9yZSB7XHJcbiAgICBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBpbnZlbnRvcnk6IEFycmF5PEl0ZW0uTG9vdD4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwbGF5ZXJGYWN0b3J5OiBQbGF5ZXJGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gcGxheWVyRmFjdG9yeS5idWlsZFBsYXllcihcIlRlc3QgRmFjdG9yeSBQbGF5ZXJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShIZWFydGJlYXQsIChtc2c6IEhlYXJ0YmVhdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuaGVhbERhbWFnZSgxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKE1vbnN0ZXJLaWxsZWQsIChtc2c6IE1vbnN0ZXJLaWxsZWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLmV4cGVyaWVuY2UgKz0gRGljZS5yb2xsU2lkZXMoNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('domain/Stores/TemplateStore',["require", "exports", "aurelia-framework", "../MonsterTemplate", "../AllRecipies", "../../factories/MonsterFactory"], function (require, exports, aurelia_framework_1, MonsterTemplate_1, Recipe, MonsterFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TemplateStore = (function () {
        function TemplateStore(monsterFactory) {
            this.monsterFactory = monsterFactory;
            var defaultTemplate = new MonsterTemplate_1.default("Test Template");
            defaultTemplate.addRecipe(new Recipe.KoboldRecipe());
            defaultTemplate.addRecipe(new Recipe.KoboldRecipe());
            this.templates = [defaultTemplate];
        }
        TemplateStore = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [MonsterFactory_1.default])
        ], TemplateStore);
        return TemplateStore;
    }());
    exports.default = TemplateStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9TdG9yZXMvVGVtcGxhdGVTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUtJLHVCQUFvQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFDOUMsSUFBSSxlQUFlLEdBQUcsSUFBSSx5QkFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNELGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUNyRCxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFYZ0IsYUFBYTtZQURqQyw4QkFBVTs2Q0FNNkIsd0JBQWM7V0FMakMsYUFBYSxDQVlqQztRQUFELG9CQUFDO0tBWkQsQUFZQyxJQUFBO3NCQVpvQixhQUFhIiwiZmlsZSI6ImRvbWFpbi9TdG9yZXMvVGVtcGxhdGVTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCBNb25zdGVyVGVtcGxhdGUgZnJvbSAnLi4vTW9uc3RlclRlbXBsYXRlJztcclxuaW1wb3J0ICogYXMgUmVjaXBlIGZyb20gJy4uL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IE1vbnN0ZXJGYWN0b3J5IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeSc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZVN0b3JlXHJcbntcclxuICAgIHRlbXBsYXRlczogQXJyYXk8TW9uc3RlclRlbXBsYXRlPjtcclxuICAgIHNlbGVjdGVkVGVtcGxhdGU6IE1vbnN0ZXJUZW1wbGF0ZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb25zdGVyRmFjdG9yeTogTW9uc3RlckZhY3RvcnkpIHtcclxuICAgICAgICBsZXQgZGVmYXVsdFRlbXBsYXRlID0gbmV3IE1vbnN0ZXJUZW1wbGF0ZShcIlRlc3QgVGVtcGxhdGVcIik7XHJcbiAgICAgICAgZGVmYXVsdFRlbXBsYXRlLmFkZFJlY2lwZShuZXcgUmVjaXBlLktvYm9sZFJlY2lwZSgpKTtcclxuICAgICAgICBkZWZhdWx0VGVtcGxhdGUuYWRkUmVjaXBlKG5ldyBSZWNpcGUuS29ib2xkUmVjaXBlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlcyA9IFtkZWZhdWx0VGVtcGxhdGVdO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\t<require from=\"./components/battle-stack\"></require>\r\n\t<require from=\"./components/loot/loot-stack\"></require>\r\n\t<require from=\"./components/main-menu\"></require>\r\n\t<require from=\"./components/player-overview\"></require>\r\n\t<require from=\"./components/player-inventory\"></require>\r\n\t<require from=\"./components/player-templates\"></require>\r\n\t<require from=\"./components/template-bag\"></require>\r\n\t<require from=\"./components/log-output\"></require>\r\n\t<require from=\"bootstrap4/css/bootstrap.css\"></require>\r\n\t<require from=\"./styles/styles.css\"></require>\r\n\r\n\t<div id=\"timer\">\r\n\t\tTimer: ${timer}\r\n\t</div>\r\n\t<main-menu></main-menu>\r\n\t<battle-stack></battle-stack>\r\n\t<player-overview></player-overview>\r\n\t<template-bag></template-bag>\r\n\t<loot-stack></loot-stack>\r\n\r\n\t<player-inventory></player-inventory>\r\n\t<player-templates></player-templates>\r\n\t<log-output></log-output>\r\n</template>"; });
define('text!components/battle-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./progress-bar\"></require>\r\n    \r\n    <div>\r\n        <div repeat.for=\"monster of stack\" class=\"battleStackItem\">\r\n            <progress-bar percent.bind=\"monster.currentHealthPercent\"></progress-bar>\r\n                <h4>${monster.name} (${monster.level})</h4>\r\n                <i class=\"fa fa-heart\"></i> ${monster.currentHealth} (health) <br />\r\n                ${monster.strength} (str)<br />\r\n                ${monster.dexterity} (dex) <br />\r\n                ${monster.toughness} (tou)<br />\r\n        </div>\r\n        <div repeat.for=\"i of (5 - stack.length)\" class=\"battleStackItem empty\">\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".component {\n  display: block;\n  overflow: hidden;\n}\nbody {\n  margin: 0;\n}\nbattle-stack,\nloot-stack,\nmonster-bag {\n  display: block;\n  overflow: hidden;\n}\n#player-overview {\n  background-color: lightblue;\n}\n#timer {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  background: white;\n  border-radius: 4px;\n  z-index: 10000;\n}\n.page-host {\n  padding-top: 60px;\n}\n.bagItem {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: antiquewhite;\n}\n.bagItem:hover {\n  background-color: beige;\n  cursor: pointer;\n}\n.templateItem {\n  padding: 6px;\n  margin-top: 1px;\n  color: ghostwhite;\n  background-color: saddlebrown;\n}\n.templateMonster {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: coral;\n}\n.progressBarContainer {\n  width: 10px;\n  float: right;\n  height: 100%;\n  background: #c9d250;\n}\n.progressBarContainer .progressBar {\n  width: 10px;\n  height: 100%;\n  transition: height 1s;\n  background: red;\n}\n.battleStackItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.battleStackItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.monsterTemplateItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  font-size: 14px;\n}\n.monsterTemplateItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.inventoryItem {\n  background-color: darkslategray;\n  padding: 4px;\n  margin-top: 1px;\n  color: white;\n}\n.lootItem {\n  display: block;\n  overflow: hidden;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: gray;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 14px;\n}\n.lootItem:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.clearfix {\n  clear: both;\n  overflow: none;\n}\n.modal-window {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  border-radius: 5px;\n  padding: 22px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  max-height: 70%;\n  overflow-x: auto;\n}\n.modal-window .close-button {\n  float: right;\n}\n.modal-window-overlay {\n  background-color: black;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 10000;\n}\n.template-controls {\n  float: right;\n}\n.logMessage {\n  font-size: 14px;\n  margin-bottom: 1px;\n  background-color: lightgray;\n  padding: 3px 20px;\n}\n"; });
define('text!components/log-output.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'log-output'\">\r\n        <h2>Logs</h2>\r\n\r\n        <div repeat.for=\"log of logs\" class=\"logMessage\">\r\n            ${log}\r\n        </div>\r\n        <div if.bind=\"!logs.length\">\r\n            - empty -\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/main-menu.html', ['module'], function(module) { module.exports = "<template>\r\n    <nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\r\n        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\r\n            aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\">StackRPG</a>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n                <div class=\"navbar-nav\">\r\n                    <a class=\"nav-item nav-link\" href=\"\" click.delegate=\"open('player-inventory')\" class=\"btn btn-block\">Inventory (${playerStore.inventory.length})</a>\r\n                    <a class=\"nav-item nav-link\" href=\"\" click.delegate=\"open('player-templates')\" class=\"btn btn-block\">Templates (${templateStore.templates.length})</a>\r\n                    <a class=\"nav-item nav-link\" href=\"\" click.delegate=\"open('log-output')\" class=\"btn btn-block\">Logs</a>\r\n                </div>\r\n            </div>\r\n    </nav>\r\n</template>"; });
define('text!components/modal-content.html', ['module'], function(module) { module.exports = "<template>\r\n  <div show.bind=\"visibility\" class=\"modal-window\">\r\n    <div>\r\n      <button class=\"btn btn-danger btn-sm close-button\" click.delegate=\"close()\">close</button>\r\n    </div>\r\n    <slot></slot>\r\n  </div>\r\n  <div show.bind=\"visibility\" class=\"modal-window-overlay\" click.delegate=\"close()\"></div>\r\n</template>"; });
define('text!components/player-inventory.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-inventory'\">\r\n        <h2>Inventory</h2>\r\n\r\n        <div repeat.for=\"item of playerInventory\" class=\"inventoryItem\">\r\n            ${item.name}\r\n        </div>\r\n        <div if.bind=\"!playerInventory.length\">\r\n            - empty -\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/player-overview.html', ['module'], function(module) { module.exports = "<template>\r\n    <div id=\"player-overview\">\r\n        <h2>\r\n            Player Overview\r\n        </h2>\r\n        <span>Name</span> : ${currentPlayer.name}\r\n        <br />\r\n        <span>Level</span> : ${currentPlayer.level} <span>Experience </span> : ${currentPlayer.experience}\r\n        <br />\r\n        <span>Gold</span> : ${currentPlayer.gold}\r\n        <br />\r\n        <span>Health</span> : ${currentPlayer.currentHealth} / ${currentPlayer.totalHealth}\r\n        <br />\r\n        <span>Strength</span> : ${currentPlayer.strength}\r\n        <br />\r\n        <span>Dexterity</span> : ${currentPlayer.dexterity}\r\n        <br />\r\n        <span>Toughness</span> : ${currentPlayer.toughness}\r\n    </div>\r\n</template>"; });
define('text!components/player-templates.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./template-manager\"></require>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-templates'\">\r\n        <h2>Templates</h2>\r\n        <template-manager></template-manager>\r\n    </modal-content>\r\n</template>"; });
define('text!components/progress-bar.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"progressBarContainer\">\r\n        <div class=\"progressBar\" css=\"height: ${height}%;\"></div>\r\n    </div>\r\n</template>"; });
define('text!components/template-bag.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\r\n        <div class=\"noselect\">\r\n            ${template.name}\r\n            <div class=\"template-controls\">\r\n                <button class=\"btn btn-success btn-sm\" click.delegate=\"$parent.spawnTemplate(template)\"><i class=\"fa fa-level-up\"></i> Spawn</button>\r\n                <button class=\"btn btn-info btn-sm\" click.delegate=\"$parent.viewTemplate(template)\"><i class=\"fa fa-eye\"></i> View</button>\r\n            </div>\r\n            <div>\r\n                <span repeat.for=\"monster of template.monsters\" class=\"noselect tag tag-warning\">\r\n                    ${monster.name}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/template-manager.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width: 407px;\">\r\n        <div if.bind=\"templateStore.selectedTemplate == null\">No template selected</div>\r\n        <div class=\"clearfix\" if.bind=\"templateStore.selectedTemplate\" with.bind=\"templateStore.selectedTemplate\">\r\n            <div repeat.for=\"recipe of recipes\" class=\"monsterTemplateItem\" click.delegate=\"$parent.remove(recipe)\">\r\n                <div class=\"noselect\">${recipe.name} (Level: ${recipe.level})</div>\r\n            </div>\r\n            <div repeat.for=\"i of (5 - recipes.length)\" class=\"monsterTemplateItem empty\"></div>\r\n        </div>\r\n\r\n        <div class=\"bagItem\" if.bind=\"templateStore.selectedTemplate\" repeat.for=\"recipe of bag\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.addRecipe(recipe)\">${recipe.name} (Level: ${recipe.level})</div>\r\n        </div>\r\n\r\n        <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.selectTemplate(template)\">${template.name}</div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/loot/gold-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"gold-loot\">\r\n        <img src=\"src/images/gold_stack.png\" width=\"30px\" height=\"30px\" /> \r\n        ${lootItem.value} Gold\r\n    </div>\r\n</template>"; });
define('text!components/loot/loot-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <compose \r\n      class=\"lootItem noselect\" \r\n      repeat.for=\"lootItem of stack\" \r\n      view=\"./${lootItem.template}-loot.html\"\r\n      click.delegate=\"$parent.takeItem(lootItem)\">\r\n    </compose>\r\n</template>"; });
define('text!components/loot/recipe-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"recipe-loot\">\r\n        ${lootItem.displayName}\r\n    </div>\r\n</template>"; });
define('text!components/loot/weapon-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        ${lootItem.displayName}<br/> \r\n        Damage: ${lootItem.damage}\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map