define('helpers/Attribute',["require", "exports"], function (require, exports) {
    "use strict";
    var Attribute = (function () {
        function Attribute() {
        }
        Attribute.getModifier = function (value) {
            return Math.floor((value - 10) / 2);
        };
        return Attribute;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Attribute;
});

define('domain/Body',["require", "exports", "../helpers/Attribute"], function (require, exports, Attribute_1) {
    "use strict";
    var Body = (function () {
        function Body(name) {
            this.name = name;
            this.baseHealth = 10;
            this.damageTaken = 0;
            this.level = 1;
            this.strength = 10;
            this.toughness = 10;
            this.dexterity = 10;
        }
        Object.defineProperty(Body.prototype, "totalHealth", {
            get: function () {
                var toughnessModifier = Attribute_1.default.getModifier(this.toughness);
                return (this.baseHealth + toughnessModifier) - this.damageTaken;
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
        return Body;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Body;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Monster',["require", "exports", "./Body"], function (require, exports, Body_1) {
    "use strict";
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            _super.apply(this, arguments);
        }
        return Monster;
    }(Body_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Monster;
});

define('domain/Items/Loot',["require", "exports"], function (require, exports) {
    "use strict";
    var Loot = (function () {
        function Loot() {
        }
        Object.defineProperty(Loot.prototype, "displayName", {
            get: function () { },
            enumerable: true,
            configurable: true
        });
        return Loot;
    }());
    exports.Loot = Loot;
});

define('helpers/Dice',["require", "exports"], function (require, exports) {
    "use strict";
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
        return Dice;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Dice;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Items/Gold',["require", "exports", "./Loot", "../../helpers/Dice", '../../messages'], function (require, exports, Loot_1, Dice_1, messages_1) {
    "use strict";
    var Gold = (function (_super) {
        __extends(Gold, _super);
        function Gold() {
            _super.call(this);
            this.value = Dice_1.default.d20();
            this.template = "gold";
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
        Gold.prototype.take = function () { return new messages_1.GoldTaken(this); };
        ;
        Gold.prototype.use = function () { };
        ;
        return Gold;
    }(Loot_1.Loot));
    exports.Gold = Gold;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Items/Weapon',["require", "exports", "./Loot", "../../helpers/Dice", '../../messages'], function (require, exports, Loot_1, Dice_1, messages_1) {
    "use strict";
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon(name) {
            _super.call(this);
            this.name = name;
            this.damage = Dice_1.default.d20();
            this.template = "weapon";
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
        Weapon.prototype.take = function () { return new messages_1.ItemTaken(this); };
        ;
        Weapon.prototype.use = function () { };
        ;
        return Weapon;
    }(Loot_1.Loot));
    exports.Weapon = Weapon;
});

define('domain/AllItems',["require", "exports", './Items/Loot', './Items/Gold', './Items/Weapon'], function (require, exports, Loot_1, Gold_1, Weapon_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(Loot_1);
    __export(Gold_1);
    __export(Weapon_1);
});

define('messages',["require", "exports"], function (require, exports) {
    "use strict";
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
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('helpers/GameLoop',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    var GameLoop = (function () {
        function GameLoop(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        GameLoop.prototype.start = function () {
            var _this = this;
            setInterval(function () {
                _this.eventAggregator.publish(new messages_1.Heartbeat());
            }, 1000);
        };
        GameLoop = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], GameLoop);
        return GameLoop;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GameLoop;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", 'aurelia-framework', "./helpers/GameLoop", 'aurelia-event-aggregator', './messages'], function (require, exports, aurelia_framework_1, GameLoop_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
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
            aurelia_framework_1.inject(GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator])
        ], App);
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/battle-stack',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../domain/Monster', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Monster_1, messages_1) {
    "use strict";
    var BattleStack = (function () {
        function BattleStack(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.stack = [new Monster_1.default("Grumble"), new Monster_1.default("Terrible Ade"), new Monster_1.default("Viqas's Bread")];
            this.eventAggregator.subscribe(messages_1.MonsterAdded, function (msg) {
                _this.stack.push(msg.monster);
            });
            this.eventAggregator.subscribe(messages_1.Heartbeat, function () {
                if (_this.stack.length) {
                    _this.fightMonster();
                }
            });
        }
        BattleStack.prototype.fightMonster = function () {
            var monster = this.stack.shift();
            this.eventAggregator.publish(new messages_1.MonsterKilled(monster));
        };
        BattleStack.prototype.created = function () {
        };
        BattleStack = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], BattleStack);
        return BattleStack;
    }());
    exports.BattleStack = BattleStack;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/main-menu',["require", "exports", 'aurelia-framework', '../messages', 'aurelia-event-aggregator'], function (require, exports, aurelia_framework_1, messages_1, aurelia_event_aggregator_1) {
    "use strict";
    var MainMenu = (function () {
        function MainMenu(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        MainMenu.prototype.open = function (id) {
            this.eventAggregator.publish(new messages_1.ShowModalWindow(id));
        };
        MainMenu = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [Object])
        ], MainMenu);
        return MainMenu;
    }());
    exports.MainMenu = MainMenu;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/modal-content',["require", "exports", 'aurelia-framework', '../messages', 'aurelia-event-aggregator'], function (require, exports, aurelia_framework_1, messages_1, aurelia_event_aggregator_1) {
    "use strict";
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
            __metadata('design:type', String)
        ], ModalContent.prototype, "id", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], ModalContent.prototype, "visibility", void 0);
        ModalContent = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], ModalContent);
        return ModalContent;
    }());
    exports.ModalContent = ModalContent;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/monster-bag',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../domain/Monster', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Monster_1, messages_1) {
    "use strict";
    var MonsterBag = (function () {
        function MonsterBag(eventAggregator) {
            this.eventAggregator = eventAggregator;
            this.bag = [new Monster_1.default("Grumble"), new Monster_1.default("Viqas's Bread")];
        }
        MonsterBag.prototype.useMonster = function (monster) {
            this.eventAggregator.publish(new messages_1.MonsterAdded(monster));
        };
        MonsterBag = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], MonsterBag);
        return MonsterBag;
    }());
    exports.MonsterBag = MonsterBag;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/player-inventory',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
    "use strict";
    var PlayerInventory = (function () {
        function PlayerInventory(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.stack = [];
            this.eventAggregator.subscribe(messages_1.ItemTaken, function (msg) {
                _this.stack.push(msg.item);
            });
        }
        PlayerInventory = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], PlayerInventory);
        return PlayerInventory;
    }());
    exports.PlayerInventory = PlayerInventory;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Player',["require", "exports", "./Body"], function (require, exports, Body_1) {
    "use strict";
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.apply(this, arguments);
            this.gold = 0;
        }
        return Player;
    }(Body_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Player;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/player-overview',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', '../domain/Player', '../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Player_1, messages_1) {
    "use strict";
    var PlayerOverview = (function () {
        function PlayerOverview(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.currentPlayer = new Player_1.default("Test Player");
            this.eventAggregator.subscribe(messages_1.GoldTaken, function (msg) {
                _this.currentPlayer.gold += msg.goldItem.value;
            });
        }
        PlayerOverview = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], PlayerOverview);
        return PlayerOverview;
    }());
    exports.PlayerOverview = PlayerOverview;
});

Array.prototype.remove = function (itemToRemove) {
    var index = this.indexOf(itemToRemove);
    if (index !== -1) {
        this.splice(index, 1);
    }
    return this;
};

define("helpers/Array", [],function(){});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/loot/loot-stack',["require", "exports", 'aurelia-framework', 'aurelia-event-aggregator', "../../domain/AllItems", '../../messages'], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Item, messages_1) {
    "use strict";
    var LootStack = (function () {
        function LootStack(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.stack = [];
            this.eventAggregator.subscribe(messages_1.MonsterKilled, function () {
                _this.stack.push(new Item.Gold());
                _this.stack.push(new Item.Weapon("Thunderfury, Blessed Blade of the Windseeker"));
            });
        }
        LootStack.prototype.takeItem = function (lootItem) {
            this.eventAggregator.publish(lootItem.take());
            this.stack.remove(lootItem);
        };
        LootStack = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], LootStack);
        return LootStack;
    }());
    exports.LootStack = LootStack;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./components/monster-bag\"></require>\r\n  <require from=\"./components/battle-stack\"></require>\r\n  <require from=\"./components/loot/loot-stack\"></require>\r\n  <require from=\"./components/main-menu\"></require>\r\n  <require from=\"./components/player-overview\"></require>\r\n  <require from=\"./components/player-inventory\"></require>\r\n  <require from=\"bootstrap4/css/bootstrap.css\"></require>\r\n  <require from=\"./styles/styles.css\"></require>\r\n\r\n  <div id=\"timer\">\r\n    Timer: ${timer}\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2\">\r\n      <main-menu></main-menu>\r\n    </div>\r\n    <div class=\"col-sm-10\">\r\n      <battle-stack></battle-stack>\r\n      <monster-bag></monster-bag>\r\n      <loot-stack></loot-stack>\r\n    </div>\r\n  </div>\r\n\r\n  <player-overview></player-overview>\r\n  <player-inventory></player-inventory>\r\n</template>"; });
define('text!components/battle-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        <div repeat.for=\"monster of stack\" class=\"battleStackItem\">\r\n            ${monster.name}\r\n        </div>\r\n        <div repeat.for=\"i of (5 - stack.length)\" class=\"battleStackItem empty\">\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".component {\n  display: block;\n  overflow: hidden;\n}\nbody {\n  margin: 0;\n}\nbattle-stack,\nloot-stack,\nmonster-bag,\nplayer-overview,\nplayer-inventory {\n  display: block;\n  overflow: hidden;\n}\n#player-overview {\n  width: 500px;\n  height: 500px;\n}\n#timer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 700;\n}\n.page-host {\n  padding-top: 60px;\n}\n.bagItem {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: antiquewhite;\n}\n.bagItem:hover {\n  background-color: beige;\n  cursor: pointer;\n}\n.battleStackItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.battleStackItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.inventoryItem {\n  background-color: darkslategray;\n  padding: 4px;\n  margin-top: 1px;\n  color: white;\n}\n.lootItem {\n  width: 140px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: gray;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.lootItem:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.clearfix {\n  clear: both;\n}\n.modal-window {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  border-radius: 5px;\n  padding: 22px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  max-height: 70%;\n}\n.modal-window .close-button {\n  float: right;\n}\n.modal-window-overlay {\n  background-color: black;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 10000;\n}\n"; });
define('text!components/main-menu.html', ['module'], function(module) { module.exports = "<template>\r\n    <button click.delegate=\"open('player-overview')\" class=\"btn btn-block\">Player Overview</button>\r\n    <button click.delegate=\"open('player-inventory')\" class=\"btn btn-block\">Inventory</button>\r\n    <button class=\"btn btn-block\">Templates</button>\r\n</template>"; });
define('text!components/modal-content.html', ['module'], function(module) { module.exports = "<template>\r\n  <div show.bind=\"visibility\" class=\"modal-window\">\r\n    <div>\r\n      <button class=\"btn btn-danger btn-sm close-button\" click.delegate=\"close()\">close</button>\r\n    </div>\r\n    <slot></slot>\r\n  </div>\r\n  <div show.bind=\"visibility\" class=\"modal-window-overlay\" click.delegate=\"close()\"></div>\r\n</template>"; });
define('text!components/monster-bag.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"clearfix\">\r\n        <div class=\"bagItem\" repeat.for=\"monster of bag\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.useMonster(monster)\">${monster.name}</div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/player-inventory.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-inventory'\">\r\n        <h2>Inventory</h2>\r\n\r\n        <div repeat.for=\"item of stack\" class=\"inventoryItem\">\r\n            ${item.name}\r\n        </div>\r\n        <div if.bind=\"!stack.length\">\r\n            - empty -\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/player-overview.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-overview'\">\r\n        <h2>\r\n            Player Overview\r\n        </h2>\r\n        <div id=\"player-overview\">\r\n            <span>Name</span> : ${currentPlayer.name}\r\n            <br />\r\n            <span>Gold</span> : ${currentPlayer.gold}\r\n            <br />\r\n            <span>Health</span> : ${currentPlayer.currentHealth} / ${currentPlayer.totalHealth}\r\n            <br />\r\n            <span>Strength</span> : ${currentPlayer.strength}\r\n            <br />\r\n            <span>Dexterity</span> : ${currentPlayer.dexterity}\r\n            <br />\r\n            <span>Toughness</span> : ${currentPlayer.toughness}\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/loot/gold-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"gold-loot\">\r\n        <img src=\"src/images/gold_stack.png\" width=\"50px\" height=\"50px\" /> \r\n        ${lootItem.value} Gold\r\n    </div>\r\n</template>"; });
define('text!components/loot/loot-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <compose \r\n      class=\"lootItem\" \r\n      repeat.for=\"lootItem of stack\" \r\n      view=\"./${lootItem.template}-loot.html\"\r\n      click.delegate=\"$parent.takeItem(lootItem)\">\r\n    </compose>\r\n</template>"; });
define('text!components/loot/weapon-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        ${lootItem.displayName}<br/> \r\n        Damage: ${lootItem.damage}\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map