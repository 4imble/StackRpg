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
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator])
    ], App);
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFhLEdBQUc7UUFJWixhQUFvQixRQUFrQixFQUFVLGVBQWdDO1lBQWhGLGlCQUtDO1lBTG1CLGFBQVEsR0FBUixRQUFRLENBQVU7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFIaEYsVUFBSyxHQUFXLENBQUMsQ0FBQztZQUNsQixjQUFTLEdBQVksS0FBSyxDQUFDO1lBSXZCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG9CQUFTLEVBQUU7Z0JBQ3RDLEtBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFFRCxzQkFBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFdBQVc7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0wsVUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksR0FBRztRQURmLDhCQUFVO3lDQUt1QixrQkFBUSxFQUEyQiwwQ0FBZTtPQUp2RSxHQUFHLENBY2Y7SUFkWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgR2FtZUxvb3AgZnJvbSBcIi4vaGVscGVycy9HYW1lTG9vcFwiO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgeyBIZWFydGJlYXQgfSBmcm9tICcuL21lc3NhZ2VzJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWVMb29wOiBHYW1lTG9vcCwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEhlYXJ0YmVhdCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyICsrO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuZ2FtZUxvb3Auc3RhcnQoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBQ0k7UUFBZ0IsQ0FBQztRQUNyQixnQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksOEJBQVM7SUFJdEI7UUFDSSxzQkFBbUIsT0FBZ0I7WUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFJLENBQUM7UUFDNUMsbUJBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLG9DQUFZO0lBSXpCO1FBQ0ksdUJBQW1CLE9BQWdCO1lBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFBSSxDQUFDO1FBQzVDLG9CQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxzQ0FBYTtJQUkxQjtRQUNJLG1CQUFtQixRQUFtQjtZQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQUksQ0FBQztRQUMvQyxnQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksOEJBQVM7SUFJdEI7UUFDSSxxQkFBbUIsTUFBNkI7WUFBN0IsV0FBTSxHQUFOLE1BQU0sQ0FBdUI7UUFBSSxDQUFDO1FBQ3pELGtCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSxrQ0FBVztJQUl4QjtRQUNJLG1CQUFtQixJQUFlO1lBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFJLENBQUM7UUFDM0MsZ0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLDhCQUFTO0lBSXRCO1FBQ0kseUJBQW1CLEVBQVU7WUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQUksQ0FBQztRQUN0QyxzQkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksMENBQWU7SUFJNUI7UUFDSSx5QkFBbUIsUUFBeUI7WUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBSSxDQUFDO1FBQ3JELHNCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSwwQ0FBZTtJQUk1QjtRQUNJLHVCQUFtQixHQUFXO1lBQVgsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUFJLENBQUM7UUFDdkMsb0JBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZZLHNDQUFhO0lBSTFCO1FBQ0ksaUNBQW1CLEtBQWtCO1lBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFBSSxDQUFDO1FBQzlDLDhCQUFDO0lBQUQsQ0FGQSxBQUVDLElBQUE7SUFGWSwwREFBdUIiLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9uc3RlciBmcm9tIFwiLi9kb21haW4vbW9uc3RlclwiO1xyXG5pbXBvcnQgTW9uc3RlclRlbXBsYXRlIGZyb20gXCIuL2RvbWFpbi9Nb25zdGVyVGVtcGxhdGVcIjtcclxuaW1wb3J0ICogYXMgSXRlbSBmcm9tIFwiLi9kb21haW4vQWxsSXRlbXNcIjtcclxuaW1wb3J0ICogYXMgUmVjaXBlcyBmcm9tIFwiLi9kb21haW4vQWxsUmVjaXBpZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFydGJlYXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXJBZGRlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbW9uc3RlcjogTW9uc3RlcikgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyS2lsbGVkIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtb25zdGVyOiBNb25zdGVyKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvbGRUYWtlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZ29sZEl0ZW06IEl0ZW0uR29sZCkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNpcGVUYWtlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVjaXBlOiBSZWNpcGVzLk1vbnN0ZXJSZWNpcGUpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbVRha2VuIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBJdGVtLkxvb3QpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvd01vZGFsV2luZG93IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlU3Bhd25lZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IE1vbnN0ZXJUZW1wbGF0ZSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZWRNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsb2c6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0Ryb3BwZWRGcm9tTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbXM6IEl0ZW0uTG9vdFtdKSB7IH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        return BattleStack;
    }());
    BattleStack = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, MonsterFactory_1.default, Combat_1.default])
    ], BattleStack);
    exports.BattleStack = BattleStack;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmF0dGxlLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVFBLElBQWEsV0FBVztRQUdwQixxQkFBb0IsZUFBZ0MsRUFBVSxjQUE4QixFQUFVLE1BQWM7WUFBcEgsaUJBaUJDO1lBakJtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBRnBILFVBQUssR0FBbUIsRUFBRSxDQUFDO1lBSXZCLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLDBCQUFlLEVBQUUsVUFBQyxHQUFvQjtnQkFDakUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtvQkFDL0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsd0JBQWEsRUFBRSxVQUFDLEdBQWtCO2dCQUM3RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxvQkFBUyxFQUFFO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGtDQUFZLEdBQVo7WUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELDZCQUFPLEdBQVAsY0FBWSxDQUFDO1FBQ2pCLGtCQUFDO0lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtJQTNCWSxXQUFXO1FBRHZCLDhCQUFVO3lDQUk4QiwwQ0FBZSxFQUEwQix3QkFBYyxFQUFrQixnQkFBTTtPQUgzRyxXQUFXLENBMkJ2QjtJQTNCWSxrQ0FBVyIsImZpbGUiOiJjb21wb25lbnRzL2JhdHRsZS1zdGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBNb25zdGVyIGZyb20gJy4uL2RvbWFpbi9Nb25zdGVyJztcclxuaW1wb3J0IE1vbnN0ZXJGYWN0b3J5IGZyb20gJy4uL2ZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeSc7XHJcbmltcG9ydCBDb21iYXQgZnJvbSAnLi4vaGVscGVycy9Db21iYXQnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNwYXduZWQsIEhlYXJ0YmVhdCwgTW9uc3RlcktpbGxlZCB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTdGFjayB7XHJcbiAgICBzdGFjazogQXJyYXk8TW9uc3Rlcj4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIG1vbnN0ZXJGYWN0b3J5OiBNb25zdGVyRmFjdG9yeSwgcHJpdmF0ZSBjb21iYXQ6IENvbWJhdCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShUZW1wbGF0ZVNwYXduZWQsIChtc2c6IFRlbXBsYXRlU3Bhd25lZCkgPT4ge1xyXG4gICAgICAgICAgICBtc2cudGVtcGxhdGUucmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2gobW9uc3RlckZhY3RvcnkuYnVpbGRNb25zdGVyKHJlY2lwZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKE1vbnN0ZXJLaWxsZWQsIChtc2c6IE1vbnN0ZXJLaWxsZWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFjay5yZW1vdmUobXNnLm1vbnN0ZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoSGVhcnRiZWF0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWdodE1vbnN0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZ2h0TW9uc3RlcigpIHtcclxuICAgICAgICB0aGlzLmNvbWJhdC5iYXR0bGUodGhpcy5zdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlZCgpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return LogOutput;
    }());
    LogOutput = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], LogOutput);
    exports.LogOutput = LogOutput;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9nLW91dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLFNBQVM7UUFHbEIsbUJBQW9CLGVBQWdDO1lBQXBELGlCQVFDO1lBUm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUZwRCxTQUFJLEdBQWtCLEVBQUUsQ0FBQztZQUlyQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyx3QkFBYSxFQUFFLFVBQUMsR0FBa0I7Z0JBQzdELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSxTQUFTO1FBRHJCLDBCQUFNLENBQUMsMENBQWUsQ0FBQzt5Q0FJaUIsMENBQWU7T0FIM0MsU0FBUyxDQVlyQjtJQVpZLDhCQUFTIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9nLW91dHB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgTG9nZ2VkTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgY2xhc3MgTG9nT3V0cHV0IHtcclxuICAgIGxvZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShMb2dnZWRNZXNzYWdlLCAobXNnOiBMb2dnZWRNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ncy51bnNoaWZ0KG1zZy5sb2cpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dzLmxlbmd0aCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ3MucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var MainMenu = (function () {
        function MainMenu(eventAggregator, playerStore, templateStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
            this.templateStore = templateStore;
        }
        MainMenu.prototype.open = function (id) {
            this.eventAggregator.publish(new messages_1.ShowModalWindow(id));
        };
        return MainMenu;
    }());
    MainMenu = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default, TemplateStore_1.default),
        __metadata("design:paramtypes", [Object, PlayerStore_1.default, TemplateStore_1.default])
    ], MainMenu);
    exports.MainMenu = MainMenu;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi1tZW51LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsUUFBUTtRQUNqQixrQkFBb0IsZUFBZSxFQUFTLFdBQXdCLEVBQVMsYUFBNEI7WUFBckYsb0JBQWUsR0FBZixlQUFlLENBQUE7WUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQUksQ0FBQztRQUU5Ryx1QkFBSSxHQUFKLFVBQUssRUFBVTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksMEJBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUE7SUFOWSxRQUFRO1FBRHBCLDBCQUFNLENBQUMsMENBQWUsRUFBRSxxQkFBVyxFQUFFLHVCQUFhLENBQUM7aURBRVMscUJBQVcsRUFBd0IsdUJBQWE7T0FEaEcsUUFBUSxDQU1wQjtJQU5ZLDRCQUFRIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFpbi1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTaG93TW9kYWxXaW5kb3cgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IFRlbXBsYXRlU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9UZW1wbGF0ZVN0b3JlJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBQbGF5ZXJTdG9yZSwgVGVtcGxhdGVTdG9yZSlcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yLCBwdWJsaWMgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlLCBwdWJsaWMgdGVtcGxhdGVTdG9yZTogVGVtcGxhdGVTdG9yZSkgeyB9XHJcblxyXG4gICAgb3BlbihpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgU2hvd01vZGFsV2luZG93KGlkKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        return ModalContent;
    }());
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
    exports.ModalContent = ModalContent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kYWwtY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQSxJQUFhLFlBQVk7UUFJckIsc0JBQW9CLGVBQWdDO1lBQXBELGlCQUlDO1lBSm1CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUNoRCxlQUFlLENBQUMsU0FBUyxDQUFDLDBCQUFlLEVBQUUsVUFBQyxHQUFvQjtnQkFDNUQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsNEJBQUssR0FBTDtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7UUFDTCxtQkFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBWmE7UUFBVCw0QkFBUTs7NENBQVk7SUFDWDtRQUFULDRCQUFROztvREFBcUI7SUFGckIsWUFBWTtRQUR4QiwwQkFBTSxDQUFDLDBDQUFlLENBQUM7eUNBS2lCLDBDQUFlO09BSjNDLFlBQVksQ0FheEI7SUFiWSxvQ0FBWSIsImZpbGUiOiJjb21wb25lbnRzL21vZGFsLWNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBTaG93TW9kYWxXaW5kb3cgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGVudCB7XHJcbiAgICBAYmluZGFibGUgaWQ6IHN0cmluZztcclxuICAgIEBiaW5kYWJsZSB2aXNpYmlsaXR5OiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICBldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFNob3dNb2RhbFdpbmRvdywgKG1zZzogU2hvd01vZGFsV2luZG93KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IHRoaXMuaWQgPT09IG1zZy5pZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        return PlayerInventory;
    }());
    PlayerInventory = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], PlayerInventory);
    exports.PlayerInventory = PlayerInventory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLWludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFhLGVBQWU7UUFHeEIseUJBQW9CLGVBQWdDLEVBQVUsV0FBd0I7WUFBdEYsaUJBTUM7WUFObUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBRTdDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG9CQUFTLEVBQUUsVUFBQyxHQUFjO2dCQUNyRCxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLGVBQWU7UUFEM0IsMEJBQU0sQ0FBQywwQ0FBZSxFQUFFLHFCQUFXLENBQUM7eUNBSUksMENBQWUsRUFBdUIscUJBQVc7T0FIN0UsZUFBZSxDQVUzQjtJQVZZLDBDQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvcGxheWVyLWludmVudG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgSXRlbVRha2VuIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgKiBhcyBJdGVtIGZyb20gXCIuLi9kb21haW4vQWxsSXRlbXNcIjtcclxuaW1wb3J0IFBsYXllclN0b3JlIGZyb20gXCIuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlXCI7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgUGxheWVyU3RvcmUpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbnZlbnRvcnkge1xyXG5wbGF5ZXJJbnZlbnRvcnk6IEFycmF5PEl0ZW0uTG9vdD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSBwbGF5ZXJTdG9yZTogUGxheWVyU3RvcmUpIHtcclxuICAgICAgICB0aGlzLnBsYXllckludmVudG9yeSA9IHBsYXllclN0b3JlLmludmVudG9yeTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEl0ZW1UYWtlbiwgKG1zZzogSXRlbVRha2VuKSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllckludmVudG9yeS5wdXNoKG1zZy5pdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        return PlayerOverview;
    }());
    PlayerOverview = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], PlayerOverview);
    exports.PlayerOverview = PlayerOverview;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLW92ZXJ2aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsY0FBYztRQUd2Qix3QkFBb0IsZUFBZ0MsRUFBVSxXQUF3QjtZQUF0RixpQkFNQztZQU5tQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUNsRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBRXBELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLG9CQUFTLEVBQUUsVUFBQyxHQUFjO2dCQUNyRCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCxxQkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksY0FBYztRQUQxQiwwQkFBTSxDQUFDLDBDQUFlLEVBQUUscUJBQVcsQ0FBQzt5Q0FJSSwwQ0FBZSxFQUF1QixxQkFBVztPQUg3RSxjQUFjLENBVTFCO0lBVlksd0NBQWMiLCJmaWxlIjoiY29tcG9uZW50cy9wbGF5ZXItb3ZlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vZG9tYWluL1BsYXllcic7XHJcbmltcG9ydCBQbGF5ZXJTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1BsYXllclN0b3JlJztcclxuaW1wb3J0IHsgR29sZFRha2VuLCBIZWFydGJlYXQgfSBmcm9tICcuLi9tZXNzYWdlcyc7XHJcblxyXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgUGxheWVyU3RvcmUpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJPdmVydmlldyB7XHJcbiAgICBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJTdG9yZS5jdXJyZW50UGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoR29sZFRha2VuLCAobXNnOiBHb2xkVGFrZW4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLmdvbGQgKz0gbXNnLmdvbGRJdGVtLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
    var PlayerTemplates = (function () {
        function PlayerTemplates(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        return PlayerTemplates;
    }());
    PlayerTemplates = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], PlayerTemplates);
    exports.PlayerTemplates = PlayerTemplates;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGxheWVyLXRlbXBsYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxJQUFhLGVBQWU7UUFFeEIseUJBQW9CLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUVwRCxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLGVBQWU7UUFEM0IsMEJBQU0sQ0FBQywwQ0FBZSxDQUFDO3lDQUdpQiwwQ0FBZTtPQUYzQyxlQUFlLENBSzNCO0lBTFksMENBQWUiLCJmaWxlIjoiY29tcG9uZW50cy9wbGF5ZXItdGVtcGxhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJUZW1wbGF0ZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
    var ProgressBar = (function () {
        function ProgressBar() {
        }
        Object.defineProperty(ProgressBar.prototype, "height", {
            get: function () {
                return 100 - this.percent;
            },
            enumerable: true,
            configurable: true
        });
        return ProgressBar;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], ProgressBar.prototype, "percent", void 0);
    exports.ProgressBar = ProgressBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUVBO1FBQUE7UUFNQSxDQUFDO1FBSEcsc0JBQUksK0JBQU07aUJBQVY7Z0JBQ0ksTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzlCLENBQUM7OztXQUFBO1FBQ0wsa0JBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQUxhO1FBQVQsNEJBQVE7O2dEQUFpQjtJQURqQixrQ0FBVyIsImZpbGUiOiJjb21wb25lbnRzL3Byb2dyZXNzLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcclxuICAgIEBiaW5kYWJsZSBwZXJjZW50OiBudW1iZXI7XHJcblxyXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxMDAgLSB0aGlzLnBlcmNlbnQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        return TemplateBag;
    }());
    TemplateBag = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default])
    ], TemplateBag);
    exports.TemplateBag = TemplateBag;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcGxhdGUtYmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsV0FBVztRQUNwQixxQkFBb0IsZUFBZ0MsRUFBVSxhQUE0QjtZQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUUxRixDQUFDO1FBRUQsbUNBQWEsR0FBYixVQUFjLFFBQXlCO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksMEJBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxrQ0FBWSxHQUFaLFVBQWEsUUFBeUI7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7WUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQkFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJZLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQywwQ0FBZSxFQUFFLHVCQUFhLENBQUM7eUNBRUUsMENBQWUsRUFBeUIsdUJBQWE7T0FEakYsV0FBVyxDQWF2QjtJQWJZLGtDQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvdGVtcGxhdGUtYmFnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgVGVtcGxhdGVTdG9yZSBmcm9tICcuLi9kb21haW4vU3RvcmVzL1RlbXBsYXRlU3RvcmUnO1xyXG5pbXBvcnQgTW9uc3RlclRlbXBsYXRlIGZyb20gJy4uL2RvbWFpbi9Nb25zdGVyVGVtcGxhdGUnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNwYXduZWQsIFNob3dNb2RhbFdpbmRvdyB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBUZW1wbGF0ZVN0b3JlKVxyXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVCYWcge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSB0ZW1wbGF0ZVN0b3JlOiBUZW1wbGF0ZVN0b3JlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNwYXduVGVtcGxhdGUodGVtcGxhdGU6IE1vbnN0ZXJUZW1wbGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IFRlbXBsYXRlU3Bhd25lZCh0ZW1wbGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdUZW1wbGF0ZSh0ZW1wbGF0ZTogTW9uc3RlclRlbXBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0b3JlLnNlbGVjdGVkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBTaG93TW9kYWxXaW5kb3coXCJwbGF5ZXItdGVtcGxhdGVzXCIpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        return TemplateManager;
    }());
    TemplateManager = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default, MonsterFactory_1.default])
    ], TemplateManager);
    exports.TemplateManager = TemplateManager;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcGxhdGUtbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFTQSxJQUFhLGVBQWU7UUFHeEIseUJBQW9CLGVBQWdDLEVBQVUsYUFBNEIsRUFBVSxjQUE4QjtZQUFsSSxpQkFPQztZQVBtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUM5SCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUkseUJBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLHNCQUFXLEVBQUUsVUFBQyxHQUFnQjtnQkFDekQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELG1DQUFTLEdBQVQsVUFBVSxNQUE0QjtZQUVsQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBRUQsd0NBQWMsR0FBZCxVQUFlLFFBQVE7WUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDbkQsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtJQXBCWSxlQUFlO1FBRDNCLDhCQUFVO3lDQUk4QiwwQ0FBZSxFQUF5Qix1QkFBYSxFQUEwQix3QkFBYztPQUh6SCxlQUFlLENBb0IzQjtJQXBCWSwwQ0FBZSIsImZpbGUiOiJjb21wb25lbnRzL3RlbXBsYXRlLW1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGUgZnJvbSAnLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IFRlbXBsYXRlU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9UZW1wbGF0ZVN0b3JlJztcclxuaW1wb3J0IE1vbnN0ZXJGYWN0b3J5IGZyb20gJy4uL2ZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeSc7XHJcbmltcG9ydCBNb25zdGVyVGVtcGxhdGUgZnJvbSAnLi4vZG9tYWluL01vbnN0ZXJUZW1wbGF0ZSc7XHJcbmltcG9ydCB7IFJlY2lwZVRha2VuIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlTWFuYWdlciB7XHJcbiAgICBiYWc6IEFycmF5PFJlY2lwZS5Nb25zdGVyUmVjaXBlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHRlbXBsYXRlU3RvcmU6IFRlbXBsYXRlU3RvcmUsIHByaXZhdGUgbW9uc3RlckZhY3Rvcnk6IE1vbnN0ZXJGYWN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5iYWcgPSBbbmV3IFJlY2lwZS5Lb2JvbGRSZWNpcGUoKSwgbmV3IFJlY2lwZS5XZXRQYXBlckJhZ1JlY2lwZSgpXTtcclxuICAgICAgICB0ZW1wbGF0ZVN0b3JlLnRlbXBsYXRlcy5wdXNoKG5ldyBNb25zdGVyVGVtcGxhdGUoXCJUZW1wbGF0ZSAxXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKFJlY2lwZVRha2VuLCAobXNnOiBSZWNpcGVUYWtlbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhZy5wdXNoKG1zZy5yZWNpcGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRSZWNpcGUocmVjaXBlOiBSZWNpcGUuTW9uc3RlclJlY2lwZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVN0b3JlLnNlbGVjdGVkVGVtcGxhdGUuYWRkUmVjaXBlKHJlY2lwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0VGVtcGxhdGUodGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlU3RvcmUuc2VsZWN0ZWRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/AllItems',["require", "exports", "./Items/Loot", "./Items/Gold", "./Items/Weapon", "./Items/Recipe"], function (require, exports, Loot_1, Gold_1, Weapon_1, Recipe_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(Loot_1);
    __export(Gold_1);
    __export(Weapon_1);
    __export(Recipe_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9BbGxJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQSxpQkFBNkI7SUFDN0IsaUJBQTZCO0lBQzdCLG1CQUErQjtJQUMvQixtQkFBK0IiLCJmaWxlIjoiZG9tYWluL0FsbEl0ZW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9JdGVtcy9Mb290JztcclxuZXhwb3J0ICogZnJvbSAnLi9JdGVtcy9Hb2xkJztcclxuZXhwb3J0ICogZnJvbSAnLi9JdGVtcy9XZWFwb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0l0ZW1zL1JlY2lwZSc7Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/AllRecipies',["require", "exports", "./Recipies/KoboldRecipe", "./Recipies/WetPaperBagRecipe", "./Recipies/DragonRecipe"], function (require, exports, KoboldRecipe_1, WetPaperBagRecipe_1, DragonRecipe_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(KoboldRecipe_1);
    __export(WetPaperBagRecipe_1);
    __export(DragonRecipe_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9BbGxSZWNpcGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDQSx5QkFBd0M7SUFDeEMsOEJBQTZDO0lBQzdDLHlCQUF3QyIsImZpbGUiOiJkb21haW4vQWxsUmVjaXBpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL1JlY2lwaWVzL01vbnN0ZXJSZWNpcGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlY2lwaWVzL0tvYm9sZFJlY2lwZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmVjaXBpZXMvV2V0UGFwZXJCYWdSZWNpcGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1JlY2lwaWVzL0RyYWdvblJlY2lwZSc7Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "baseAttack", {
            get: function () {
                return 1 * this.level;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "totalHealth", {
            get: function () {
                var toughnessModifier = Attribute_1.default.getModifier(this.toughness) * this.level;
                return this.baseHealth + toughnessModifier;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Body.prototype, "currentHealth", {
            get: function () {
                return this.totalHealth - this.damageTaken;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Body.prototype, "currentHealthPercent", {
            get: function () {
                return Math.floor((this.currentHealth * 100) / this.totalHealth);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "hasDied", {
            get: function () {
                return this.killed || this.currentHealth <= 0;
            },
            enumerable: true,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Cb2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUtBO1FBWUksY0FBc0IsZUFBZ0MsRUFBUyxJQUFZO1lBQXJELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFTLFNBQUksR0FBSixJQUFJLENBQVE7WUFYM0UsZ0JBQVcsR0FBVyxDQUFDLENBQUM7WUFDeEIsZUFBVSxHQUFXLENBQUMsQ0FBQztZQUV2QixlQUFVLEdBQVcsRUFBRSxDQUFDO1lBRXhCLGFBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztZQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFDO1lBRXZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFc0QsQ0FBQztRQUUvRSxzQkFBSSx1QkFBSztpQkFBVDtnQkFDSSxNQUFNLENBQUMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7OztXQUFBO1FBRUQsc0JBQUksNEJBQVU7aUJBQWQ7Z0JBQ0ksTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFCLENBQUM7OztXQUFBO1FBRUQsc0JBQUksNkJBQVc7aUJBQWY7Z0JBQ0ksSUFBSSxpQkFBaUIsR0FBRyxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDM0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7WUFDL0MsQ0FBQzs7O1dBQUE7UUFBQSxDQUFDO1FBRUYsc0JBQUksK0JBQWE7aUJBQWpCO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDL0MsQ0FBQzs7O1dBQUE7UUFBQSxDQUFDO1FBRUYsc0JBQUksc0NBQW9CO2lCQUF4QjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7OztXQUFBO1FBRUQsc0JBQUkseUJBQU87aUJBQVg7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQzs7O1dBQUE7UUFFRCxpQ0FBa0IsR0FBbEI7WUFDSSxNQUFNLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5RCxDQUFDO1FBRUQsa0NBQW1CLEdBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFFRCxrQ0FBbUIsR0FBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRCx5QkFBVSxHQUFWLFVBQVcsSUFBVztZQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDakMsQ0FBQztRQUdMLFdBQUM7SUFBRCxDQXpEQSxBQXlEQyxJQUFBO0lBRUQsa0JBQWUsSUFBSSxDQUFDIiwiZmlsZSI6ImRvbWFpbi9Cb2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF0dHJpYnV0ZSBmcm9tIFwiLi4vaGVscGVycy9BdHRyaWJ1dGVcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uL2hlbHBlcnMvRGljZVwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi4vaGVscGVycy9FeHBlcmllbmNlXCI7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBCb2R5IHtcclxuICAgIGRhbWFnZVRha2VuOiBudW1iZXIgPSAwO1xyXG4gICAgZXhwZXJpZW5jZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBiYXNlSGVhbHRoOiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBzdHJlbmd0aDogbnVtYmVyID0gMTA7XHJcbiAgICB0b3VnaG5lc3M6IG51bWJlciA9IDEwO1xyXG4gICAgZGV4dGVyaXR5OiBudW1iZXIgPSAxMDtcclxuXHJcbiAgICBraWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgZ2V0IGxldmVsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIEV4cGVyaWVuY2UuZ2V0TGV2ZWwodGhpcy5leHBlcmllbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFzZUF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAxICogdGhpcy5sZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG90YWxIZWFsdGgoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdG91Z2huZXNzTW9kaWZpZXIgPSBBdHRyaWJ1dGUuZ2V0TW9kaWZpZXIodGhpcy50b3VnaG5lc3MpICogdGhpcy5sZXZlbDtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlSGVhbHRoICsgdG91Z2huZXNzTW9kaWZpZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBjdXJyZW50SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxIZWFsdGggLSB0aGlzLmRhbWFnZVRha2VuO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgY3VycmVudEhlYWx0aFBlcmNlbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5jdXJyZW50SGVhbHRoICogMTAwKSAvIHRoaXMudG90YWxIZWFsdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtpbGxlZCB8fCB0aGlzLmN1cnJlbnRIZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEb2RnZVJvbGwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQXR0cmlidXRlLmdldE1vZGlmaWVyKHRoaXMuZGV4dGVyaXR5KSArIERpY2UuZDIwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlQXR0YWNrUm9sbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VBdHRhY2sgKyBEaWNlLmQyMCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYWxjdWxhdGVEYW1hZ2VSb2xsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KEF0dHJpYnV0ZS5nZXRNb2RpZmllcih0aGlzLnN0cmVuZ3RoKSArIERpY2UuZDYoKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhbERhbWFnZShoZWFsOm51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMuZGFtYWdlVGFrZW4gPiAwKVxyXG4gICAgICAgICAgICB0aGlzLmRhbWFnZVRha2VuIC09IGhlYWw7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgdGFrZURhbWFnZShkYW1hZ2U6bnVtYmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Monster',["require", "exports", "./Body", "../messages", "../helpers/Experience"], function (require, exports, Body_1, messages_1, Experience_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9Nb25zdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFLQTtRQUFxQywyQkFBSTtRQUF6Qzs7UUEyQkEsQ0FBQztRQXhCRyw0QkFBVSxHQUFWLFVBQVcsTUFBYTtZQUNwQixJQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztZQUUzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQztRQUVELHlCQUFPLEdBQVAsVUFBUSxNQUFjO1lBRWxCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLElBQUksaUJBQWlCLEdBQUcsb0JBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0QsSUFBSSxpQkFBaUIsR0FBRyxvQkFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFN0QsSUFBSSxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztZQUV6RCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDOUIsQ0FBQztnQkFDRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDdEQsQ0FBQztRQUNMLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0EzQkEsQUEyQkMsQ0EzQm9DLGNBQUksR0EyQnhDIiwiZmlsZSI6ImRvbWFpbi9Nb25zdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvZHkgZnJvbSBcIi4vQm9keVwiO1xyXG5pbXBvcnQgeyBNb25zdGVyS2lsbGVkIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGUgZnJvbSAnLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi4vaGVscGVycy9FeHBlcmllbmNlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBCb2R5IHtcclxuICAgIHJlY2lwZTogUmVjaXBlLk1vbnN0ZXJSZWNpcGU7XHJcblxyXG4gICAgdGFrZURhbWFnZShkYW1hZ2U6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2VUYWtlbiArPSBkYW1hZ2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc0RpZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgTW9uc3RlcktpbGxlZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldmVsVXAobGV2ZWxzOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGRlc2lyZWRMZXZlbCA9IHRoaXMubGV2ZWwgKyBsZXZlbHM7XHJcbiAgICAgICAgdmFyIHhwRm9yRGVzaXJlZExldmVsID0gRXhwZXJpZW5jZS5nZXRYcEZvckxldmVsKGRlc2lyZWRMZXZlbCk7XHJcbiAgICAgICAgdmFyIHhwRm9yQ3VycmVudExldmVsID0gRXhwZXJpZW5jZS5nZXRYcEZvckxldmVsKHRoaXMubGV2ZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGVyaWVuY2UgKz0geHBGb3JEZXNpcmVkTGV2ZWwgLSB4cEZvckN1cnJlbnRMZXZlbDtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxldmVsczsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5iYXNlSGVhbHRoICs9IHRoaXMucmVjaXBlLmhlYWx0aFBlckxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyZW5ndGggKz0gdGhpcy5yZWNpcGUuc3RyZW5ndGhQZXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdWdobmVzcyArPSB0aGlzLnJlY2lwZS50b3VnaG5lc3NQZXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmRleHRlcml0eSArPSB0aGlzLnJlY2lwZS5kZXh0ZXJpdHlQZXJMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVBO1FBQW9DLDBCQUFJO1FBQXhDO1lBQUEscUVBT0M7WUFMRyxVQUFJLEdBQVcsQ0FBQyxDQUFDOztRQUtyQixDQUFDO1FBSEcsMkJBQVUsR0FBVixVQUFXLE1BQWE7WUFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7UUFDL0IsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQVBBLEFBT0MsQ0FQbUMsY0FBSSxHQU92QyIsImZpbGUiOiJkb21haW4vUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvZHkgZnJvbSBcIi4vQm9keVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQm9keVxyXG57XHJcbiAgICBnb2xkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHRha2VEYW1hZ2UoZGFtYWdlOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGFtYWdlVGFrZW4gKz0gZGFtYWdlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return ItemFactory;
    }());
    ItemFactory = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], ItemFactory);
    exports.default = ItemFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9JdGVtRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFTQSxJQUFxQixXQUFXO1FBQzVCLHFCQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQWxFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQUksQ0FBQztRQUUzRiwrQkFBUyxHQUFUO1lBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsS0FBSyxHQUFHLGNBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUM7UUFFRCxpQ0FBVyxHQUFYLFVBQVksSUFBWTtZQUNwQixJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RELFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVELGlDQUFXLEdBQVgsVUFBWSxLQUF1RDtZQUF2RCxzQkFBQSxFQUFBLFFBQWUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDL0QsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN4RyxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZELElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxjQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRSxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN4QixVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUU5QixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFDTCxrQkFBQztJQUFELENBMUJBLEFBMEJDLElBQUE7SUExQm9CLFdBQVc7UUFEL0IsOEJBQVU7eUNBRThCLDBDQUFlLEVBQXVCLHFCQUFXO09BRHJFLFdBQVcsQ0EwQi9CO3NCQTFCb0IsV0FBVyIsImZpbGUiOiJmYWN0b3JpZXMvSXRlbUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgKiBhcyBJdGVtIGZyb20gJy4uL2RvbWFpbi9BbGxJdGVtcyc7XHJcbmltcG9ydCAqIGFzIFJlY2lwZXMgZnJvbSAnLi4vZG9tYWluL0FsbFJlY2lwaWVzJztcclxuaW1wb3J0IFBsYXllclN0b3JlIGZyb20gJy4uL2RvbWFpbi9TdG9yZXMvUGxheWVyU3RvcmUnO1xyXG5pbXBvcnQgTW9uc3RlciBmcm9tICcuLi9kb21haW4vTW9uc3Rlcic7XHJcbmltcG9ydCBEaWNlIGZyb20gXCIuLi9oZWxwZXJzL0RpY2VcIjtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1GYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgcGxheWVyU3RvcmU6IFBsYXllclN0b3JlKSB7IH1cclxuXHJcbiAgICBidWlsZEdvbGQoKTogSXRlbS5Hb2xkIHtcclxuICAgICAgICBsZXQgbmV3R29sZCA9IG5ldyBJdGVtLkdvbGQodGhpcy5ldmVudEFnZ3JlZ2F0b3IpO1xyXG4gICAgICAgIG5ld0dvbGQudmFsdWUgPSBEaWNlLmQyMCgpO1xyXG4gICAgICAgIHJldHVybiBuZXdHb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkV2VhcG9uKG5hbWU6IHN0cmluZyk6IEl0ZW0uV2VhcG9uIHtcclxuICAgICAgICBsZXQgbmV3V2VhcG9uID0gbmV3IEl0ZW0uV2VhcG9uKHRoaXMuZXZlbnRBZ2dyZWdhdG9yKTtcclxuICAgICAgICBuZXdXZWFwb24ubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgbmV3V2VhcG9uLmRhbWFnZSA9IERpY2UuZDIwKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1dlYXBvbjtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFJlY2lwZShsZXZlbDpudW1iZXIgPSB0aGlzLnBsYXllclN0b3JlLmN1cnJlbnRQbGF5ZXIubGV2ZWwgKyAxKTogSXRlbS5SZWNpcGUge1xyXG4gICAgICAgIHZhciBBbGxSZWNpcGllcyA9IFtuZXcgUmVjaXBlcy5EcmFnb25SZWNpcGUoKSwgbmV3IFJlY2lwZXMuS29ib2xkUmVjaXBlLCBuZXcgUmVjaXBlcy5XZXRQYXBlckJhZ1JlY2lwZV07XHJcbiAgICAgICAgbGV0IHJlY2lwZUxvb3QgPSBuZXcgSXRlbS5SZWNpcGUodGhpcy5ldmVudEFnZ3JlZ2F0b3IpO1xyXG4gICAgICAgIGxldCBuZXdSZWNpcGUgPSBBbGxSZWNpcGllc1tEaWNlLnJvbGxTaWRlcyhBbGxSZWNpcGllcy5sZW5ndGgpLTFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG5ld1JlY2lwZS5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHJlY2lwZUxvb3QucmVjaXBlID0gbmV3UmVjaXBlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZWNpcGVMb290O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('factories/MonsterFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Monster", "../domain/Stores/PlayerStore"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Monster_1, PlayerStore_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MonsterFactory = (function () {
        function MonsterFactory(eventAggregator, playerStore) {
            this.eventAggregator = eventAggregator;
            this.playerStore = playerStore;
        }
        MonsterFactory.prototype.buildMonster = function (recipe) {
            var monster = new Monster_1.default(this.eventAggregator, recipe.name);
            monster.recipe = recipe;
            monster.baseHealth = recipe.baseHealth;
            monster.strength = recipe.baseStrength;
            monster.toughness = recipe.baseToughness;
            monster.dexterity = recipe.baseDexterity;
            monster.levelUp(recipe.level - 1);
            return monster;
        };
        return MonsterFactory;
    }());
    MonsterFactory = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], MonsterFactory);
    exports.default = MonsterFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9Nb25zdGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQSxJQUFxQixjQUFjO1FBQy9CLHdCQUFvQixlQUFnQyxFQUFVLFdBQXdCO1lBQWxFLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQUksQ0FBQztRQUUzRixxQ0FBWSxHQUFaLFVBQWEsTUFBNEI7WUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdELE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDdkMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUV6QyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJvQixjQUFjO1FBRGxDLDhCQUFVO3lDQUU4QiwwQ0FBZSxFQUF1QixxQkFBVztPQURyRSxjQUFjLENBZ0JsQztzQkFoQm9CLGNBQWMiLCJmaWxlIjoiZmFjdG9yaWVzL01vbnN0ZXJGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi4vZG9tYWluL01vbnN0ZXInO1xyXG5pbXBvcnQgUGxheWVyU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9QbGF5ZXJTdG9yZSc7XHJcbmltcG9ydCAqIGFzIFJlY2lwZSBmcm9tICcuLi9kb21haW4vQWxsUmVjaXBpZXMnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlckZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSBwbGF5ZXJTdG9yZTogUGxheWVyU3RvcmUpIHsgfVxyXG5cclxuICAgIGJ1aWxkTW9uc3RlcihyZWNpcGU6IFJlY2lwZS5Nb25zdGVyUmVjaXBlKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXIgPSBuZXcgTW9uc3Rlcih0aGlzLmV2ZW50QWdncmVnYXRvciwgcmVjaXBlLm5hbWUpO1xyXG5cclxuICAgICAgICBtb25zdGVyLnJlY2lwZSA9IHJlY2lwZTtcclxuICAgICAgICBtb25zdGVyLmJhc2VIZWFsdGggPSByZWNpcGUuYmFzZUhlYWx0aDtcclxuICAgICAgICBtb25zdGVyLnN0cmVuZ3RoID0gcmVjaXBlLmJhc2VTdHJlbmd0aDtcclxuICAgICAgICBtb25zdGVyLnRvdWdobmVzcyA9IHJlY2lwZS5iYXNlVG91Z2huZXNzO1xyXG4gICAgICAgIG1vbnN0ZXIuZGV4dGVyaXR5ID0gcmVjaXBlLmJhc2VEZXh0ZXJpdHk7XHJcblxyXG4gICAgICAgIG1vbnN0ZXIubGV2ZWxVcChyZWNpcGUubGV2ZWwtMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG1vbnN0ZXI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return PlayerFactory;
    }());
    PlayerFactory = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], PlayerFactory);
    exports.default = PlayerFactory;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBLElBQXFCLGFBQWE7UUFDOUIsdUJBQW9CLGVBQWdDO1lBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFJLENBQUM7UUFFekQsbUNBQVcsR0FBWCxVQUFZLElBQVk7WUFDcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDckIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhvQixhQUFhO1FBRGpDLDhCQUFVO3lDQUU4QiwwQ0FBZTtPQURuQyxhQUFhLENBV2pDO3NCQVhvQixhQUFhIiwiZmlsZSI6ImZhY3Rvcmllcy9QbGF5ZXJGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9kb21haW4vUGxheWVyJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckZhY3Rvcnkge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikgeyB9XHJcblxyXG4gICAgYnVpbGRQbGF5ZXIobmFtZTogc3RyaW5nKTogUGxheWVyIHtcclxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcih0aGlzLmV2ZW50QWdncmVnYXRvciwgbmFtZSk7XHJcbiAgICAgICAgcGxheWVyLnN0cmVuZ3RoID0gMjI7XHJcbiAgICAgICAgcGxheWVyLnRvdWdobmVzcyA9IDE0O1xyXG4gICAgICAgIHBsYXllci5kZXh0ZXJpdHkgPSAxNjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

Array.prototype.remove = function (itemToRemove) {
    var index = this.indexOf(itemToRemove);
    if (index !== -1) {
        this.splice(index, 1);
    }
    return this;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU0sS0FBSyxDQUFDLFNBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxZQUFZO0lBQ2xELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSIsImZpbGUiOiJoZWxwZXJzL0FycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIEFycmF5PFQ+IHtcclxuICAgcmVtb3ZlKGl0ZW1Ub1JlbW92ZTogVCk6IEFycmF5PFQ+O1xyXG59XHJcblxyXG4oPGFueT5BcnJheS5wcm90b3R5cGUpLnJlbW92ZSA9IGZ1bmN0aW9uIChpdGVtVG9SZW1vdmUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW1Ub1JlbW92ZSk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQ0k7UUFBaUIsQ0FBQztRQUVYLHFCQUFXLEdBQWxCLFVBQW1CLEtBQWE7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FOQSxBQU1DLElBQUEiLCJmaWxlIjoiaGVscGVycy9BdHRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7ICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXRNb2RpZmllcih2YWx1ZTogbnVtYmVyKSA6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHZhbHVlIC0gMTApIC8gMik7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        return Combat;
    }());
    Combat = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], Combat);
    exports.default = Combat;
    var BattleResult = (function () {
        function BattleResult() {
            this.playerDamage = 0;
            this.monsterDamage = 0;
        }
        return BattleResult;
    }());
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvQ29tYmF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdBLElBQXFCLE1BQU07UUFDdkIsZ0JBQW9CLGVBQWdDLEVBQVUsV0FBd0I7WUFBbEUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBSSxDQUFDO1FBRTNGLHVCQUFNLEdBQU4sVUFBTyxRQUF3QjtZQUUzQixFQUFFLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQztZQUVYLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFMUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVPLHNDQUFxQixHQUE3QixVQUE4QixNQUFjLEVBQUUsUUFBd0I7WUFBdEUsaUJBV0M7WUFURyxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBRXRDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNwQixZQUFZLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2RSxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFTyxnQ0FBZSxHQUF2QixVQUF3QixRQUFjLEVBQUUsUUFBYztZQUNsRCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUNsRCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUVqRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHdCQUFhLENBQUksYUFBYSxrQkFBYSxXQUFXLFlBQVMsQ0FBQyxDQUFDLENBQUM7WUFFbkcsRUFBRSxDQUFBLENBQUMsYUFBYSxJQUFJLFdBQVcsQ0FBQyxDQUM1QixDQUFDO2dCQUNHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksd0JBQWEsQ0FBSSxRQUFRLENBQUMsSUFBSSxZQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztZQUVMLElBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksd0JBQWEsQ0FBSSxRQUFRLENBQUMsSUFBSSxrQkFBYSxjQUFnQixDQUFDLENBQUMsQ0FBQztZQUMvRixNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtJQTVDb0IsTUFBTTtRQUQxQiw4QkFBVTt5Q0FFOEIsMENBQWUsRUFBdUIscUJBQVc7T0FEckUsTUFBTSxDQTRDMUI7c0JBNUNvQixNQUFNO0lBOEMzQjtRQUFBO1lBRUksaUJBQVksR0FBRyxDQUFDLENBQUM7WUFDakIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUFELG1CQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUEiLCJmaWxlIjoiaGVscGVycy9Db21iYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vRG9tYWluL1BsYXllcic7XG5pbXBvcnQgUGxheWVyU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9QbGF5ZXJTdG9yZSc7XG5pbXBvcnQgTW9uc3RlciBmcm9tICcuLi9Eb21haW4vTW9uc3Rlcic7XG5pbXBvcnQgQm9keSBmcm9tICcuLi9Eb21haW4vQm9keSc7XG5pbXBvcnQgRGljZSBmcm9tIFwiLi4vaGVscGVycy9EaWNlXCI7XG5pbXBvcnQgQXR0cmlidXRlIGZyb20gXCIuLi9oZWxwZXJzL0F0dHJpYnV0ZVwiO1xuaW1wb3J0IHsgSGVhcnRiZWF0LCBMb2dnZWRNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZXMnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmF0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHBsYXllclN0b3JlOiBQbGF5ZXJTdG9yZSkgeyB9XG5cbiAgICBiYXR0bGUobW9uc3RlcnM6IEFycmF5PE1vbnN0ZXI+KVxuICAgIHsgICAgICAgIFxuICAgICAgICBpZighbW9uc3RlcnMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllclN0b3JlLmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmNhbGN1bGF0ZUJhdHRsZVJlc3VsdChwbGF5ZXIsIG1vbnN0ZXJzKTtcblxuICAgICAgICBwbGF5ZXIudGFrZURhbWFnZShyZXN1bHQucGxheWVyRGFtYWdlKTtcbiAgICAgICAgbW9uc3RlcnNbMF0udGFrZURhbWFnZShyZXN1bHQubW9uc3RlckRhbWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVCYXR0bGVSZXN1bHQocGxheWVyOiBQbGF5ZXIsIG1vbnN0ZXJzOiBBcnJheTxNb25zdGVyPilcbiAgICB7XG4gICAgICAgIGxldCBiYXR0bGVSZXN1bHQgPSBuZXcgQmF0dGxlUmVzdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBtb25zdGVycy5mb3JFYWNoKG1vbnN0ZXIgPT4ge1xuICAgICAgICAgICAgYmF0dGxlUmVzdWx0LnBsYXllckRhbWFnZSArPSB0aGlzLmNhbGN1bGF0ZURhbWFnZShwbGF5ZXIsIG1vbnN0ZXIpOyAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYmF0dGxlUmVzdWx0Lm1vbnN0ZXJEYW1hZ2UgPSB0aGlzLmNhbGN1bGF0ZURhbWFnZShtb25zdGVyc1swXSwgcGxheWVyKTtcblxuICAgICAgICByZXR1cm4gYmF0dGxlUmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRGFtYWdlKGRlZmVuZGVyOiBCb2R5LCBhdHRhY2tlcjogQm9keSk6IG51bWJlciB7XG4gICAgICAgIGxldCBkZWZlbmRlckRvZGdlID0gZGVmZW5kZXIuY2FsY3VsYXRlRG9kZ2VSb2xsKCk7XG4gICAgICAgIGxldCBhdHRhY2tlckhpdCA9IGF0dGFja2VyLmNhbGN1bGF0ZUF0dGFja1JvbGwoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IExvZ2dlZE1lc3NhZ2UoYCR7ZGVmZW5kZXJEb2RnZX0gZG9kZ2UgdnMgJHthdHRhY2tlckhpdH0gYXR0YWNrYCkpO1xuICAgICAgICBcbiAgICAgICAgaWYoZGVmZW5kZXJEb2RnZSA+PSBhdHRhY2tlckhpdClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBMb2dnZWRNZXNzYWdlKGAke2F0dGFja2VyLm5hbWV9IE1pc3Nlc2ApKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBsZXQgYXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tlci5jYWxjdWxhdGVEYW1hZ2VSb2xsKCk7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IExvZ2dlZE1lc3NhZ2UoYCR7YXR0YWNrZXIubmFtZX0gSGl0cyBmb3IgJHthdHRhY2tlckRhbWFnZX1gKSk7ICAgICAgIFxuICAgICAgICByZXR1cm4gYXR0YWNrZXJEYW1hZ2U7XG4gICAgfVxufVxuXG5jbGFzcyBCYXR0bGVSZXN1bHRcbntcbiAgICBwbGF5ZXJEYW1hZ2UgPSAwO1xuICAgIG1vbnN0ZXJEYW1hZ2UgPSAwO1xufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvRGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUNJO1FBQWlCLENBQUM7UUFFWCxPQUFFLEdBQVQ7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBRU0sUUFBRyxHQUFWO1lBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUVNLGNBQVMsR0FBaEIsVUFBaUIsS0FBYTtZQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFTSxpQkFBWSxHQUFuQixVQUFvQixPQUFlO1lBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTCxXQUFDO0lBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiJoZWxwZXJzL0RpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZDYoKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvbGxTaWRlcyg2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGQyMCgpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9sbFNpZGVzKDIwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm9sbFNpZGVzKHNpZGVzOiBudW1iZXIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVzKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJpbmFyeUNoYW5jZShwZXJjZW50OiBudW1iZXIpIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIERpY2Uucm9sbFNpZGVzKDEwMCkgPD0gcGVyY2VudCA/IDEgOiAwO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return Experience;
    }());
    Experience.power = 2.1;
    Experience.xpmod = 500;
    exports.default = Experience;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvRXhwZXJpZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUlJO1FBQ0EsQ0FBQztRQUVNLG1CQUFRLEdBQWYsVUFBZ0IsVUFBa0I7WUFDOUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN4RSxDQUFDO1FBRU0sd0JBQWEsR0FBcEIsVUFBcUIsS0FBYTtZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM3RSxDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQWhCQSxBQWdCQztJQWZVLGdCQUFLLEdBQVcsR0FBRyxDQUFDO0lBQ3BCLGdCQUFLLEdBQVcsR0FBRyxDQUFDIiwiZmlsZSI6ImhlbHBlcnMvRXhwZXJpZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGVyaWVuY2Uge1xyXG4gICAgc3RhdGljIHBvd2VyOiBudW1iZXIgPSAyLjE7XHJcbiAgICBzdGF0aWMgeHBtb2Q6IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGV2ZWwoZXhwZXJpZW5jZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgcm9vdCA9IDEgLyBFeHBlcmllbmNlLnBvd2VyO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnBvdyhleHBlcmllbmNlIC8gRXhwZXJpZW5jZS54cG1vZCwgcm9vdCkpICsgMVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRYcEZvckxldmVsKGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5wb3cobGV2ZWwgLTEsIEV4cGVyaWVuY2UucG93ZXIpICogRXhwZXJpZW5jZS54cG1vZClcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
        return GameLoop;
    }());
    GameLoop = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], GameLoop);
    exports.default = GameLoop;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvR2FtZUxvb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0EsSUFBcUIsUUFBUTtRQUN6QixrQkFBb0IsZUFBZ0M7WUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQUksQ0FBQztRQUV6RCx3QkFBSyxHQUFMO1lBQUEsaUJBS0M7WUFIRyxXQUFXLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxvQkFBUyxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDO1FBQ0wsZUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVG9CLFFBQVE7UUFENUIsMEJBQU0sQ0FBQywwQ0FBZSxDQUFDO3lDQUVpQiwwQ0FBZTtPQURuQyxRQUFRLENBUzVCO3NCQVRvQixRQUFRIiwiZmlsZSI6ImhlbHBlcnMvR2FtZUxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCB7IEhlYXJ0YmVhdCB9IGZyb20gJy4uL21lc3NhZ2VzJztcclxuXHJcbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9vcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7IH1cclxuXHJcbiAgICBzdGFydCgpXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmV3IEhlYXJ0YmVhdCgpKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
        return LootDropper;
    }());
    LootDropper = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [ItemFactory_1.default, PlayerStore_1.default])
    ], LootDropper);
    exports.default = LootDropper;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvTG9vdERyb3BwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsSUFBcUIsV0FBVztRQUM1QixxQkFBc0IsV0FBd0IsRUFBWSxXQUF3QjtZQUE1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFZLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRWxGLENBQUM7UUFFRCxrQ0FBWSxHQUFaLFVBQWEsT0FBZ0I7WUFDekIsSUFBSSxXQUFXLEdBQWdCLEVBQUUsQ0FBQztZQUVsQyxFQUFFLENBQUEsQ0FBQyxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUVuRCxFQUFFLENBQUEsQ0FBQyxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztZQUVuRyxFQUFFLENBQUEsQ0FBQyxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVyRCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFDTCxrQkFBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQm9CLFdBQVc7UUFEL0IsOEJBQVU7eUNBRTRCLHFCQUFXLEVBQXlCLHFCQUFXO09BRGpFLFdBQVcsQ0FtQi9CO3NCQW5Cb0IsV0FBVyIsImZpbGUiOiJoZWxwZXJzL0xvb3REcm9wcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9Eb21haW4vUGxheWVyJztcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi4vRG9tYWluL01vbnN0ZXInO1xyXG5pbXBvcnQgUGxheWVyU3RvcmUgZnJvbSAnLi4vZG9tYWluL1N0b3Jlcy9QbGF5ZXJTdG9yZSc7XHJcbmltcG9ydCBJdGVtRmFjdG9yeSBmcm9tICcuLi9mYWN0b3JpZXMvSXRlbUZhY3RvcnknO1xyXG5pbXBvcnQgRGljZSBmcm9tIFwiLi4vaGVscGVycy9EaWNlXCI7XHJcbmltcG9ydCAqIGFzIEl0ZW0gZnJvbSBcIi4uL2RvbWFpbi9BbGxJdGVtc1wiO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9vdERyb3BwZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGl0ZW1GYWN0b3J5OiBJdGVtRmFjdG9yeSwgcHJvdGVjdGVkIHBsYXllclN0b3JlOiBQbGF5ZXJTdG9yZSkgeyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVMb290KG1vbnN0ZXI6IE1vbnN0ZXIpIDogSXRlbS5Mb290W10ge1xyXG4gICAgICAgIGxldCBpdGVtc1RvRHJvcDogSXRlbS5Mb290W10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBpZihEaWNlLmJpbmFyeUNoYW5jZSg0MCkpXHJcbiAgICAgICAgICAgIGl0ZW1zVG9Ecm9wLnB1c2godGhpcy5pdGVtRmFjdG9yeS5idWlsZEdvbGQoKSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKERpY2UuYmluYXJ5Q2hhbmNlKDEwKSlcclxuICAgICAgICAgICAgaXRlbXNUb0Ryb3AucHVzaCh0aGlzLml0ZW1GYWN0b3J5LmJ1aWxkV2VhcG9uKFwiVGh1bmRlcmZ1cnksIEJsZXNzZWQgQmxhZGUgb2YgdGhlIFdpbmRzZWVrZXJcIikpO1xyXG5cclxuICAgICAgICBpZihEaWNlLmJpbmFyeUNoYW5jZSgxMCkpXHJcbiAgICAgICAgICAgIGl0ZW1zVG9Ecm9wLnB1c2godGhpcy5pdGVtRmFjdG9yeS5idWlsZFJlY2lwZSgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zVG9Ecm9wO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return LootStack;
    }());
    LootStack = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, LootDropper_1.default])
    ], LootStack);
    exports.LootStack = LootStack;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9vdC9sb290LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVdBLElBQWEsU0FBUztRQUdsQixtQkFBb0IsZUFBZ0MsRUFBVSxXQUF3QjtZQUF0RixpQkFTQztZQVRtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUZ0RixVQUFLLEdBQXFCLEVBQUUsQ0FBQztZQUl6QixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyx3QkFBYSxFQUFFLFVBQUMsR0FBa0I7Z0JBQzdELElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtvQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCw0QkFBUSxHQUFSLFVBQVMsUUFBbUI7WUFDeEIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDTCxnQkFBQztJQUFELENBbEJBLEFBa0JDLElBQUE7SUFsQlksU0FBUztRQURyQiw4QkFBVTt5Q0FJOEIsMENBQWUsRUFBdUIscUJBQVc7T0FIN0UsU0FBUyxDQWtCckI7SUFsQlksOEJBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9sb290L2xvb3Qtc3RhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcbmltcG9ydCAqIGFzIEl0ZW0gZnJvbSBcIi4uLy4uL2RvbWFpbi9BbGxJdGVtc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGVzIGZyb20gXCIuLi8uLi9kb21haW4vQWxsUmVjaXBpZXNcIjtcclxuaW1wb3J0ICogYXMgTW9uc3RlclJlY2lwZSBmcm9tIFwiLi4vLi4vZG9tYWluL1JlY2lwaWVzL01vbnN0ZXJSZWNpcGVcIjtcclxuaW1wb3J0IEl0ZW1GYWN0b3J5IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvSXRlbUZhY3RvcnlcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5pbXBvcnQgTG9vdERyb3BwZXIgZnJvbSBcIi4uLy4uL2hlbHBlcnMvTG9vdERyb3BwZXJcIjtcclxuaW1wb3J0IHsgTW9uc3RlcktpbGxlZCwgR29sZFRha2VuIH0gZnJvbSAnLi4vLi4vbWVzc2FnZXMnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIExvb3RTdGFjayB7XHJcbiAgICBzdGFjazogQXJyYXk8SXRlbS5Mb290PiA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIGxvb3REcm9wcGVyOiBMb290RHJvcHBlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShNb25zdGVyS2lsbGVkLCAobXNnOiBNb25zdGVyS2lsbGVkKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBsb290cyA9IGxvb3REcm9wcGVyLmdlbmVyYXRlTG9vdChtc2cubW9uc3Rlcik7XHJcblxyXG4gICAgICAgICAgICBsb290cy5mb3JFYWNoKGxvb3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGxvb3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFrZUl0ZW0obG9vdEl0ZW06IEl0ZW0uTG9vdCl7XHJcbiAgICAgICAgbG9vdEl0ZW0udGFrZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhY2sucmVtb3ZlKGxvb3RJdGVtKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Gold',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            enumerable: true,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9Hb2xkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUEwQix3QkFBSTtRQUE5QjtZQUFBLHFFQVlDO1lBWEcsY0FBUSxHQUFVLE1BQU0sQ0FBQzs7UUFXN0IsQ0FBQztRQVBHLHNCQUFJLDZCQUFXO2lCQUFmO2dCQUNJLE1BQU0sQ0FBQyxlQUFhLElBQUksQ0FBQyxLQUFLLE1BQUcsQ0FBQztZQUN0QyxDQUFDOzs7V0FBQTtRQUVELDBCQUFXLEdBQVgsY0FBZ0IsQ0FBQztRQUFBLENBQUM7UUFDbEIsbUJBQUksR0FBSixjQUFTLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksb0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDN0Qsa0JBQUcsR0FBSCxjQUFPLENBQUM7UUFBQSxDQUFDO1FBQ2IsV0FBQztJQUFELENBWkEsQUFZQyxDQVp5QixXQUFJLEdBWTdCO0lBWlksb0JBQUkiLCJmaWxlIjoiZG9tYWluL0l0ZW1zL0dvbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb290IH0gZnJvbSBcIi4vTG9vdFwiO1xyXG5pbXBvcnQgeyBHb2xkVGFrZW4gfSBmcm9tICcuLi8uLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgR29sZCBleHRlbmRzIExvb3Qge1xyXG4gICAgdGVtcGxhdGU6c3RyaW5nID0gXCJnb2xkXCI7XHJcblxyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBnZXQgZGlzcGxheU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBHb2xkIEJhZyAoJHt0aGlzLnZhbHVlfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb29sVGlwKCkgeyB9O1xyXG4gICAgdGFrZSgpIHsgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgR29sZFRha2VuKHRoaXMpKSB9O1xyXG4gICAgdXNlKCkge307XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Items/Loot',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Loot = (function () {
        function Loot(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        return Loot;
    }());
    exports.Loot = Loot;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9Mb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQ0ksY0FBc0IsZUFBZ0M7WUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQUcsQ0FBQztRQU85RCxXQUFDO0lBQUQsQ0FSQSxBQVFDLElBQUE7SUFScUIsb0JBQUkiLCJmaWxlIjoiZG9tYWluL0l0ZW1zL0xvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvb3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7fVxyXG5cclxuICAgIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBnZXQgZGlzcGxheU5hbWUoKTtcclxuICAgIGFic3RyYWN0IHNob3dUb29sVGlwKCk7XHJcbiAgICBhYnN0cmFjdCB0YWtlKCk7XHJcbiAgICBhYnN0cmFjdCB1c2UoKTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Recipe',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            enumerable: true,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9SZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUtBO1FBQTRCLDBCQUFJO1FBQWhDO1lBQUEscUVBV0M7WUFWRyxjQUFRLEdBQVcsUUFBUSxDQUFDOztRQVVoQyxDQUFDO1FBUEcsc0JBQUksK0JBQVc7aUJBQWY7Z0JBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSx3QkFBbUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQUcsQ0FBQztZQUN0RSxDQUFDOzs7V0FBQTtRQUVELDRCQUFXLEdBQVgsY0FBZ0IsQ0FBQztRQUFBLENBQUM7UUFDbEIscUJBQUksR0FBSixjQUFTLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksc0JBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQ3RFLG9CQUFHLEdBQUgsY0FBTyxDQUFDO1FBQUEsQ0FBQztRQUNiLGFBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYMkIsV0FBSSxHQVcvQjtJQVhZLHdCQUFNIiwiZmlsZSI6ImRvbWFpbi9JdGVtcy9SZWNpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb290IH0gZnJvbSBcIi4vTG9vdFwiO1xyXG5pbXBvcnQgeyBSZWNpcGVUYWtlbiB9IGZyb20gJy4uLy4uL21lc3NhZ2VzJztcclxuaW1wb3J0ICogYXMgUmVjaXBlcyBmcm9tICcuLi8uLi9kb21haW4vQWxsUmVjaXBpZXMnO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2lwZSBleHRlbmRzIExvb3Qge1xyXG4gICAgdGVtcGxhdGU6IHN0cmluZyA9IFwicmVjaXBlXCI7XHJcbiAgICByZWNpcGU6IFJlY2lwZXMuTW9uc3RlclJlY2lwZTtcclxuXHJcbiAgICBnZXQgZGlzcGxheU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucmVjaXBlLm5hbWV9IHJlY2lwZSAoTGV2ZWw6ICR7dGhpcy5yZWNpcGUubGV2ZWx9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1Rvb2xUaXAoKSB7IH07XHJcbiAgICB0YWtlKCkgeyB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBSZWNpcGVUYWtlbih0aGlzLnJlY2lwZSkpIH07XHJcbiAgICB1c2UoKSB7fTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('domain/Items/Weapon',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            enumerable: true,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9JdGVtcy9XZWFwb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUlBO1FBQTRCLDBCQUFJO1FBQWhDO1lBQUEscUVBYUM7WUFaRyxjQUFRLEdBQVUsUUFBUSxDQUFDOztRQVkvQixDQUFDO1FBUEcsc0JBQUksK0JBQVc7aUJBQWY7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQzs7O1dBQUE7UUFFRCw0QkFBVyxHQUFYLGNBQWdCLENBQUM7UUFBQSxDQUFDO1FBQ2xCLHFCQUFJLEdBQUosY0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQzdELG9CQUFHLEdBQUgsY0FBTyxDQUFDO1FBQUEsQ0FBQztRQUNiLGFBQUM7SUFBRCxDQWJBLEFBYUMsQ0FiMkIsV0FBSSxHQWEvQjtJQWJZLHdCQUFNIiwiZmlsZSI6ImRvbWFpbi9JdGVtcy9XZWFwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb290IH0gZnJvbSBcIi4vTG9vdFwiO1xyXG5pbXBvcnQgeyBJdGVtVGFrZW4gfSBmcm9tICcuLi8uLi9tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIGV4dGVuZHMgTG9vdCB7XHJcbiAgICB0ZW1wbGF0ZTpzdHJpbmcgPSBcIndlYXBvblwiO1xyXG5cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRhbWFnZTogbnVtYmVyO1xyXG5cclxuICAgIGdldCBkaXNwbGF5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb29sVGlwKCkgeyB9O1xyXG4gICAgdGFrZSgpIHsgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChuZXcgSXRlbVRha2VuKHRoaXMpKSB9O1xyXG4gICAgdXNlKCkge307XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Recipies/DragonRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9EcmFnb25SZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUE7UUFBQTtZQUFBLGlCQWtCQztZQWpCRyxTQUFJLEdBQVcsUUFBUSxDQUFDO1lBRXhCLGVBQVUsR0FBVyxFQUFFLENBQUM7WUFDeEIsaUJBQVksR0FBVyxFQUFFLENBQUM7WUFDMUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7WUFDM0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7WUFFM0IsbUJBQWMsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztZQUUxQyxxQkFBZ0IsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7WUFFbkUsc0JBQWlCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBRXJFLHNCQUFpQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVyRSxXQUFNLEdBQVcsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7WUFDN0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUQsbUJBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLG9DQUFZIiwiZmlsZSI6ImRvbWFpbi9SZWNpcGllcy9EcmFnb25SZWNpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25zdGVyUmVjaXBlIH0gZnJvbSBcIi4vTW9uc3RlclJlY2lwZVwiO1xyXG5pbXBvcnQgUmFyaXR5IGZyb20gXCIuLi9FbnVtcy9SYXJpdHlcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdvblJlY2lwZSBpbXBsZW1lbnRzIE1vbnN0ZXJSZWNpcGUge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJEcmFnb25cIjtcclxuXHJcbiAgICBiYXNlSGVhbHRoOiBudW1iZXIgPSAyMDtcclxuICAgIGJhc2VTdHJlbmd0aDogbnVtYmVyID0gMTY7XHJcbiAgICBiYXNlVG91Z2huZXNzOiBudW1iZXIgPSAyMDtcclxuICAgIGJhc2VEZXh0ZXJpdHk6IG51bWJlciA9IDE2O1xyXG4gICAgXHJcbiAgICBoZWFsdGhQZXJMZXZlbCA9ICgpID0+IERpY2Uucm9sbFNpZGVzKDEwKTtcclxuXHJcbiAgICBzdHJlbmd0aFBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoOSArICh0aGlzLnJhcml0eSAqIDEyKSk7XHJcblxyXG4gICAgdG91Z2huZXNzUGVyTGV2ZWwgPSAoKSA9PiBEaWNlLmJpbmFyeUNoYW5jZSgxMCArICh0aGlzLnJhcml0eSAqIDEyKSk7XHJcblxyXG4gICAgZGV4dGVyaXR5UGVyTGV2ZWwgPSAoKSA9PiBEaWNlLmJpbmFyeUNoYW5jZSgxMyArICh0aGlzLnJhcml0eSAqIDEyKSk7XHJcblxyXG4gICAgcmFyaXR5OiBSYXJpdHkgPSBSYXJpdHkuUmFyZTtcclxuICAgIGxldmVsOiBudW1iZXIgPSAxO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('domain/Recipies/KoboldRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9Lb2JvbGRSZWNpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUE7UUFBQTtZQUFBLGlCQWtCQztZQWpCRyxTQUFJLEdBQVcsUUFBUSxDQUFDO1lBRXhCLGVBQVUsR0FBVyxDQUFDLENBQUM7WUFDdkIsaUJBQVksR0FBVyxDQUFDLENBQUM7WUFDekIsa0JBQWEsR0FBVyxFQUFFLENBQUM7WUFDM0Isa0JBQWEsR0FBVyxFQUFFLENBQUM7WUFFM0IsbUJBQWMsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztZQUV6QyxxQkFBZ0IsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7WUFFbkUsc0JBQWlCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBRXJFLHNCQUFpQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVyRSxXQUFNLEdBQVcsZ0JBQU0sQ0FBQyxNQUFNLENBQUM7WUFDL0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUQsbUJBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLG9DQUFZIiwiZmlsZSI6ImRvbWFpbi9SZWNpcGllcy9Lb2JvbGRSZWNpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25zdGVyUmVjaXBlIH0gZnJvbSBcIi4vTW9uc3RlclJlY2lwZVwiO1xyXG5pbXBvcnQgUmFyaXR5IGZyb20gXCIuLi9FbnVtcy9SYXJpdHlcIjtcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtvYm9sZFJlY2lwZSBpbXBsZW1lbnRzIE1vbnN0ZXJSZWNpcGUge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJLb2JvbGRcIjtcclxuXHJcbiAgICBiYXNlSGVhbHRoOiBudW1iZXIgPSA0O1xyXG4gICAgYmFzZVN0cmVuZ3RoOiBudW1iZXIgPSA5O1xyXG4gICAgYmFzZVRvdWdobmVzczogbnVtYmVyID0gMTA7XHJcbiAgICBiYXNlRGV4dGVyaXR5OiBudW1iZXIgPSAxMztcclxuICAgIFxyXG4gICAgaGVhbHRoUGVyTGV2ZWwgPSAoKSA9PiBEaWNlLnJvbGxTaWRlcyg0KTtcclxuXHJcbiAgICBzdHJlbmd0aFBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoOSArICh0aGlzLnJhcml0eSAqIDEwKSk7XHJcblxyXG4gICAgdG91Z2huZXNzUGVyTGV2ZWwgPSAoKSA9PiBEaWNlLmJpbmFyeUNoYW5jZSgxMCArICh0aGlzLnJhcml0eSAqIDEwKSk7XHJcblxyXG4gICAgZGV4dGVyaXR5UGVyTGV2ZWwgPSAoKSA9PiBEaWNlLmJpbmFyeUNoYW5jZSgxMyArICh0aGlzLnJhcml0eSAqIDEwKSk7XHJcblxyXG4gICAgcmFyaXR5OiBSYXJpdHkgPSBSYXJpdHkuQ29tbW9uO1xyXG4gICAgbGV2ZWw6IG51bWJlciA9IDE7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Recipies/MonsterRecipe',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb21haW4vUmVjaXBpZXMvTW9uc3RlclJlY2lwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6InNyYyJ9

define('domain/Recipies/WetPaperBagRecipe',["require", "exports", "../Enums/Rarity", "../../helpers/Dice"], function (require, exports, Rarity_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9SZWNpcGllcy9XZXRQYXBlckJhZ1JlY2lwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBQUEsaUJBa0JDO1lBakJHLFNBQUksR0FBVyxlQUFlLENBQUM7WUFFL0IsZUFBVSxHQUFXLENBQUMsQ0FBQztZQUN2QixpQkFBWSxHQUFXLENBQUMsQ0FBQztZQUN6QixrQkFBYSxHQUFXLENBQUMsQ0FBQztZQUMxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztZQUUxQixtQkFBYyxHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDO1lBRXpDLHFCQUFnQixHQUFHLGNBQU0sT0FBQSxjQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUVwRSxzQkFBaUIsR0FBRyxjQUFNLE9BQUEsY0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7WUFFckUsc0JBQWlCLEdBQUcsY0FBTSxPQUFBLGNBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBRXJFLFdBQU0sR0FBVyxnQkFBTSxDQUFDLE1BQU0sQ0FBQztZQUMvQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFBRCx3QkFBQztJQUFELENBbEJBLEFBa0JDLElBQUE7SUFsQlksOENBQWlCIiwiZmlsZSI6ImRvbWFpbi9SZWNpcGllcy9XZXRQYXBlckJhZ1JlY2lwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbnN0ZXJSZWNpcGUgfSBmcm9tIFwiLi9Nb25zdGVyUmVjaXBlXCI7XHJcbmltcG9ydCBSYXJpdHkgZnJvbSBcIi4uL0VudW1zL1Jhcml0eVwiO1xyXG5pbXBvcnQgRGljZSBmcm9tIFwiLi4vLi4vaGVscGVycy9EaWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2V0UGFwZXJCYWdSZWNpcGUgaW1wbGVtZW50cyBNb25zdGVyUmVjaXBlIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiV2V0IFBhcGVyIEJhZ1wiO1xyXG5cclxuICAgIGJhc2VIZWFsdGg6IG51bWJlciA9IDI7XHJcbiAgICBiYXNlU3RyZW5ndGg6IG51bWJlciA9IDg7XHJcbiAgICBiYXNlVG91Z2huZXNzOiBudW1iZXIgPSA4O1xyXG4gICAgYmFzZURleHRlcml0eTogbnVtYmVyID0gODtcclxuICAgIFxyXG4gICAgaGVhbHRoUGVyTGV2ZWwgPSAoKSA9PiBEaWNlLnJvbGxTaWRlcyg0KTtcclxuXHJcbiAgICBzdHJlbmd0aFBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTAgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIHRvdWdobmVzc1BlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTAgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIGRleHRlcml0eVBlckxldmVsID0gKCkgPT4gRGljZS5iaW5hcnlDaGFuY2UoMTAgKyAodGhpcy5yYXJpdHkgKiAxMCkpO1xyXG5cclxuICAgIHJhcml0eTogUmFyaXR5ID0gUmFyaXR5LkNvbW1vbjtcclxuICAgIGxldmVsOiBudW1iZXIgPSAxO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return PlayerStore;
    }());
    PlayerStore = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerFactory_1.default])
    ], PlayerStore);
    exports.default = PlayerStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9TdG9yZXMvUGxheWVyU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUEsSUFBcUIsV0FBVztRQUk1QixxQkFBb0IsZUFBZ0MsRUFBRSxhQUE0QjtZQUFsRixpQkFVQztZQVZtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFGcEQsY0FBUyxHQUFxQixFQUFFLENBQUM7WUFHN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFdEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsb0JBQVMsRUFBRSxVQUFDLEdBQWM7Z0JBQ3JELEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsd0JBQWEsRUFBRSxVQUFDLEdBQWtCO2dCQUM3RCxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxjQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FmQSxBQWVDLElBQUE7SUFmb0IsV0FBVztRQUQvQiw4QkFBVTt5Q0FLOEIsMENBQWUsRUFBaUIsdUJBQWE7T0FKakUsV0FBVyxDQWUvQjtzQkFmb0IsV0FBVyIsImZpbGUiOiJkb21haW4vU3RvcmVzL1BsYXllclN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyXCI7XHJcbmltcG9ydCAqIGFzIEl0ZW0gZnJvbSBcIi4uL0FsbEl0ZW1zXCI7XHJcbmltcG9ydCBQbGF5ZXJGYWN0b3J5IGZyb20gXCIuLi8uLi9mYWN0b3JpZXMvUGxheWVyRmFjdG9yeVwiXHJcbmltcG9ydCB7IEhlYXJ0YmVhdCwgTW9uc3RlcktpbGxlZCB9IGZyb20gJy4uLy4uL21lc3NhZ2VzJztcclxuaW1wb3J0IERpY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvRGljZVwiO1xyXG5cclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllclN0b3JlIHtcclxuICAgIGN1cnJlbnRQbGF5ZXI6IFBsYXllcjtcclxuICAgIGludmVudG9yeTogQXJyYXk8SXRlbS5Mb290PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHBsYXllckZhY3Rvcnk6IFBsYXllckZhY3RvcnkpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5LmJ1aWxkUGxheWVyKFwiVGVzdCBGYWN0b3J5IFBsYXllclwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEhlYXJ0YmVhdCwgKG1zZzogSGVhcnRiZWF0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5oZWFsRGFtYWdlKDEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoTW9uc3RlcktpbGxlZCwgKG1zZzogTW9uc3RlcktpbGxlZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuZXhwZXJpZW5jZSArPSBEaWNlLnJvbGxTaWRlcyg1MDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
        return TemplateStore;
    }());
    TemplateStore = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [MonsterFactory_1.default])
    ], TemplateStore);
    exports.default = TemplateStore;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9TdG9yZXMvVGVtcGxhdGVTdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQSxJQUFxQixhQUFhO1FBSzlCLHVCQUFvQixjQUE4QjtZQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFDOUMsSUFBSSxlQUFlLEdBQUcsSUFBSSx5QkFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzNELGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUNyRCxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDTCxvQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWm9CLGFBQWE7UUFEakMsOEJBQVU7eUNBTTZCLHdCQUFjO09BTGpDLGFBQWEsQ0FZakM7c0JBWm9CLGFBQWEiLCJmaWxlIjoiZG9tYWluL1N0b3Jlcy9UZW1wbGF0ZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IE1vbnN0ZXJUZW1wbGF0ZSBmcm9tICcuLi9Nb25zdGVyVGVtcGxhdGUnO1xyXG5pbXBvcnQgKiBhcyBSZWNpcGUgZnJvbSAnLi4vQWxsUmVjaXBpZXMnO1xyXG5pbXBvcnQgTW9uc3RlckZhY3RvcnkgZnJvbSAnLi4vLi4vZmFjdG9yaWVzL01vbnN0ZXJGYWN0b3J5JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlU3RvcmVcclxue1xyXG4gICAgdGVtcGxhdGVzOiBBcnJheTxNb25zdGVyVGVtcGxhdGU+O1xyXG4gICAgc2VsZWN0ZWRUZW1wbGF0ZTogTW9uc3RlclRlbXBsYXRlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vbnN0ZXJGYWN0b3J5OiBNb25zdGVyRmFjdG9yeSkge1xyXG4gICAgICAgIGxldCBkZWZhdWx0VGVtcGxhdGUgPSBuZXcgTW9uc3RlclRlbXBsYXRlKFwiVGVzdCBUZW1wbGF0ZVwiKTtcclxuICAgICAgICBkZWZhdWx0VGVtcGxhdGUuYWRkUmVjaXBlKG5ldyBSZWNpcGUuS29ib2xkUmVjaXBlKCkpO1xyXG4gICAgICAgIGRlZmF1bHRUZW1wbGF0ZS5hZGRSZWNpcGUobmV3IFJlY2lwZS5Lb2JvbGRSZWNpcGUoKSk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGVzID0gW2RlZmF1bHRUZW1wbGF0ZV07XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('text!components/template-bag.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\n        <div class=\"noselect\">\n            ${template.name}\n            <div class=\"template-controls\">\n                <button class=\"btn btn-success btn-sm\" click.delegate=\"$parent.spawnTemplate(template)\"><i class=\"fa fa-level-up\"></i> Spawn</button>\n                <button class=\"btn btn-info btn-sm\" click.delegate=\"$parent.viewTemplate(template)\"><i class=\"fa fa-eye\"></i> View</button>\n            </div>\n            <div>\n                <span repeat.for=\"monster of template.monsters\" class=\"noselect tag tag-warning\">\n                    ${monster.name}\n                </span>\n            </div>\n        </div>\n    </div>\n</template>"; });
define('text!components/template-manager.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width: 407px;\">\r\n        <div if.bind=\"templateStore.selectedTemplate == null\">No template selected</div>\r\n        <div class=\"clearfix\" if.bind=\"templateStore.selectedTemplate\" with.bind=\"templateStore.selectedTemplate\">\r\n            <div repeat.for=\"recipe of recipes\" class=\"monsterTemplateItem\" click.delegate=\"$parent.remove(recipe)\">\r\n                <div class=\"noselect\">${recipe.name} (Level: ${recipe.level})</div>\r\n            </div>\r\n            <div repeat.for=\"i of (5 - recipes.length)\" class=\"monsterTemplateItem empty\"></div>\r\n        </div>\r\n\r\n        <div class=\"bagItem\" if.bind=\"templateStore.selectedTemplate\" repeat.for=\"recipe of bag\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.addRecipe(recipe)\">${recipe.name} (Level: ${recipe.level})</div>\r\n        </div>\r\n\r\n        <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.selectTemplate(template)\">${template.name}</div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/loot/gold-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"gold-loot\">\r\n        <img src=\"src/images/gold_stack.png\" width=\"30px\" height=\"30px\" /> \r\n        ${lootItem.value} Gold\r\n    </div>\r\n</template>"; });
define('text!components/loot/loot-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <compose \r\n      class=\"lootItem noselect\" \r\n      repeat.for=\"lootItem of stack\" \r\n      view=\"./${lootItem.template}-loot.html\"\r\n      click.delegate=\"$parent.takeItem(lootItem)\">\r\n    </compose>\r\n</template>"; });
define('text!components/loot/recipe-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"recipe-loot\">\r\n        ${lootItem.displayName}\r\n    </div>\r\n</template>"; });
define('text!components/loot/weapon-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        ${lootItem.displayName}<br/> \r\n        Damage: ${lootItem.damage}\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map