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
            return _super.apply(this, arguments) || this;
        }
        return Monster;
    }(Body_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Monster;
});

define('domain/MonsterTemplate',["require", "exports"], function (require, exports) {
    "use strict";
    var MonsterTemplate = (function () {
        function MonsterTemplate(name) {
            this.name = name;
            this.monsters = [];
        }
        ;
        MonsterTemplate.prototype.addMonster = function (newMonster) {
            this.monsters.push(newMonster);
        };
        MonsterTemplate.prototype.remove = function (existingMonster) {
            this.monsters.remove(existingMonster);
        };
        return MonsterTemplate;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MonsterTemplate;
});

define('domain/Items/Loot',["require", "exports"], function (require, exports) {
    "use strict";
    var Loot = (function () {
        function Loot() {
        }
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
define('domain/Items/Gold',["require", "exports", "./Loot", "../../helpers/Dice", "../../messages"], function (require, exports, Loot_1, Dice_1, messages_1) {
    "use strict";
    var Gold = (function (_super) {
        __extends(Gold, _super);
        function Gold() {
            var _this = _super.call(this) || this;
            _this.value = Dice_1.default.d20();
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
define('domain/Items/Weapon',["require", "exports", "./Loot", "../../helpers/Dice", "../../messages"], function (require, exports, Loot_1, Dice_1, messages_1) {
    "use strict";
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon(name) {
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.damage = Dice_1.default.d20();
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
        Weapon.prototype.take = function () { return new messages_1.ItemTaken(this); };
        ;
        Weapon.prototype.use = function () { };
        ;
        return Weapon;
    }(Loot_1.Loot));
    exports.Weapon = Weapon;
});

define('domain/AllItems',["require", "exports", "./Items/Loot", "./Items/Gold", "./Items/Weapon"], function (require, exports, Loot_1, Gold_1, Weapon_1) {
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
    var TemplateSpawned = (function () {
        function TemplateSpawned(template) {
            this.template = template;
        }
        return TemplateSpawned;
    }());
    exports.TemplateSpawned = TemplateSpawned;
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
define('helpers/GameLoop',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1) {
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
        return GameLoop;
    }());
    GameLoop = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], GameLoop);
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
define('app',["require", "exports", "aurelia-framework", "./helpers/GameLoop", "aurelia-event-aggregator", "./messages"], function (require, exports, aurelia_framework_1, GameLoop_1, aurelia_event_aggregator_1, messages_1) {
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
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.inject(GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [GameLoop_1.default, aurelia_event_aggregator_1.EventAggregator])
    ], App);
    exports.App = App;
});

Array.prototype.remove = function (itemToRemove) {
    var index = this.indexOf(itemToRemove);
    if (index !== -1) {
        this.splice(index, 1);
    }
    return this;
};

define("helpers/Array", [],function(){});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
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
define('components/battle-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Monster", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Monster_1, messages_1) {
    "use strict";
    var BattleStack = (function () {
        function BattleStack(eventAggregator) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.stack = [new Monster_1.default("Grumble"), new Monster_1.default("Terrible Ade"), new Monster_1.default("Viqas's Bread"), new Monster_1.default("Viqas's Bread")];
            this.eventAggregator.subscribe(messages_1.TemplateSpawned, function (msg) {
                msg.template.monsters.forEach(function (monster) {
                    _this.stack.push(monster);
                });
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
        return BattleStack;
    }());
    BattleStack = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], BattleStack);
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
define('components/main-menu',["require", "exports", "aurelia-framework", "../messages", "aurelia-event-aggregator", "../domain/Stores/PlayerStore", "../domain/Stores/TemplateStore"], function (require, exports, aurelia_framework_1, messages_1, aurelia_event_aggregator_1, PlayerStore_1, TemplateStore_1) {
    "use strict";
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

define('domain/Stores/TemplateStore',["require", "exports", "../MonsterTemplate", "../Monster"], function (require, exports, MonsterTemplate_1, Monster_1) {
    "use strict";
    var TemplateStore = (function () {
        function TemplateStore() {
            var defaultTemplate = new MonsterTemplate_1.default("Test Template");
            defaultTemplate.addMonster(new Monster_1.default("Default Monster1"));
            defaultTemplate.addMonster(new Monster_1.default("Default Monster2"));
            this.templates = [defaultTemplate];
        }
        return TemplateStore;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TemplateStore;
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
define('components/monster-manager',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Monster", "../domain/Stores/TemplateStore", "../domain/MonsterTemplate"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Monster_1, TemplateStore_1, MonsterTemplate_1) {
    "use strict";
    var MonsterManager = (function () {
        function MonsterManager(eventAggregator, templateStore) {
            this.eventAggregator = eventAggregator;
            this.templateStore = templateStore;
            this.bag = [new Monster_1.default("Grumble"), new Monster_1.default("Viqas's Bread")];
            templateStore.templates.push(new MonsterTemplate_1.default("Template 1"));
        }
        MonsterManager.prototype.useMonster = function (monster) {
            this.templateStore.selectedTemplate.addMonster(monster);
        };
        MonsterManager.prototype.selectTemplate = function (template) {
            this.templateStore.selectedTemplate = template;
        };
        return MonsterManager;
    }());
    MonsterManager = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default])
    ], MonsterManager);
    exports.MonsterManager = MonsterManager;
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
define('components/player-inventory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../messages", "../domain/Stores/PlayerStore"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, messages_1, PlayerStore_1) {
    "use strict";
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
            var _this = _super.apply(this, arguments) || this;
            _this.gold = 0;
            return _this;
        }
        return Player;
    }(Body_1.default));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Player;
});

define('domain/Stores/PlayerStore',["require", "exports", "../Player"], function (require, exports, Player_1) {
    "use strict";
    var PlayerStore = (function () {
        function PlayerStore() {
            this.inventory = [];
            this.currentPlayer = new Player_1.default("Test Player");
        }
        return PlayerStore;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PlayerStore;
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
define('components/player-overview',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/PlayerStore", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, PlayerStore_1, messages_1) {
    "use strict";
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

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
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
define('components/loot/loot-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../domain/AllItems", "../../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Item, messages_1) {
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
        return LootStack;
    }());
    LootStack = __decorate([
        aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], LootStack);
    exports.LootStack = LootStack;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\t<require from=\"./components/battle-stack\"></require>\r\n\t<require from=\"./components/loot/loot-stack\"></require>\r\n\t<require from=\"./components/main-menu\"></require>\r\n\t<require from=\"./components/player-overview\"></require>\r\n\t<require from=\"./components/player-inventory\"></require>\r\n\t<require from=\"./components/player-templates\"></require>\r\n\t<require from=\"./components/template-bag\"></require>\r\n\t<require from=\"bootstrap4/css/bootstrap.css\"></require>\r\n\t<require from=\"./styles/styles.css\"></require>\r\n\r\n\t<div id=\"timer\">\r\n\t\tTimer: ${timer}\r\n\t</div>\r\n\t<main-menu></main-menu>\r\n\t<battle-stack></battle-stack>\r\n\t<player-overview></player-overview>\r\n\t<template-bag></template-bag>\r\n\t<loot-stack></loot-stack>\r\n\r\n\t<player-inventory></player-inventory>\r\n\t<player-templates></player-templates>\r\n</template>"; });
define('text!components/battle-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        <div repeat.for=\"monster of stack\" class=\"battleStackItem\">\r\n            ${monster.name}\r\n        </div>\r\n        <div repeat.for=\"i of (5 - stack.length)\" class=\"battleStackItem empty\">\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".component {\n  display: block;\n  overflow: hidden;\n}\nbody {\n  margin: 0;\n}\nbattle-stack,\nloot-stack,\nmonster-bag {\n  display: block;\n  overflow: hidden;\n}\n#player-overview {\n  background-color: lightblue;\n}\n#timer {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  background: white;\n  border-radius: 4px;\n  z-index: 10000;\n}\n.page-host {\n  padding-top: 60px;\n}\n.bagItem {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: antiquewhite;\n}\n.bagItem:hover {\n  background-color: beige;\n  cursor: pointer;\n}\n.templateItem {\n  padding: 6px;\n  margin-top: 1px;\n  color: ghostwhite;\n  background-color: saddlebrown;\n}\n.templateMonster {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: coral;\n}\n.battleStackItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.battleStackItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.inventoryItem {\n  background-color: darkslategray;\n  padding: 4px;\n  margin-top: 1px;\n  color: white;\n}\n.lootItem {\n  display: block;\n  overflow: hidden;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: gray;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 14px;\n}\n.lootItem:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.clearfix {\n  clear: both;\n  overflow: none;\n}\n.modal-window {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  border-radius: 5px;\n  padding: 22px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  max-height: 70%;\n}\n.modal-window .close-button {\n  float: right;\n}\n.modal-window-overlay {\n  background-color: black;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 10000;\n}\n.template-controls {\n  float: right;\n}\n"; });
define('text!components/main-menu.html', ['module'], function(module) { module.exports = "<template>\r\n    <nav class=\"navbar navbar-light bg-faded\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <button click.delegate=\"open('player-inventory')\" class=\"btn btn-block\">Inventory (${playerStore.inventory.length})</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button click.delegate=\"open('player-templates')\" class=\"btn btn-block\">Templates (${templateStore.templates.length})</button>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</template>"; });
define('text!components/modal-content.html', ['module'], function(module) { module.exports = "<template>\r\n  <div show.bind=\"visibility\" class=\"modal-window\">\r\n    <div>\r\n      <button class=\"btn btn-danger btn-sm close-button\" click.delegate=\"close()\">close</button>\r\n    </div>\r\n    <slot></slot>\r\n  </div>\r\n  <div show.bind=\"visibility\" class=\"modal-window-overlay\" click.delegate=\"close()\"></div>\r\n</template>"; });
define('text!components/monster-manager.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width: 407px;\">\r\n        <div if.bind=\"templateStore.selectedTemplate == null\">No template selected</div>\r\n        <div class=\"clearfix\" if.bind=\"templateStore.selectedTemplate\" with.bind=\"templateStore.selectedTemplate\">\r\n            <div repeat.for=\"monster of monsters\" class=\"battleStackItem\" click.delegate=\"$parent.remove(monster)\">\r\n                <div class=\"noselect\">${monster.name}</div>\r\n            </div>\r\n            <div repeat.for=\"i of (5 - monsters.length)\" class=\"battleStackItem empty\"></div>\r\n        </div>\r\n\r\n        <div class=\"bagItem\" if.bind=\"templateStore.selectedTemplate\" repeat.for=\"monster of bag\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.useMonster(monster)\">${monster.name}</div>\r\n        </div>\r\n\r\n        <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.selectTemplate(template)\">${template.name}</div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/player-inventory.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-inventory'\">\r\n        <h2>Inventory</h2>\r\n\r\n        <div repeat.for=\"item of playerInventory\" class=\"inventoryItem\">\r\n            ${item.name}\r\n        </div>\r\n        <div if.bind=\"!playerInventory.length\">\r\n            - empty -\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/player-overview.html', ['module'], function(module) { module.exports = "<template>\r\n    <div id=\"player-overview\">\r\n        <h2>\r\n            Player Overview\r\n        </h2>\r\n        <span>Name</span> : ${currentPlayer.name}\r\n        <br />\r\n        <span>Gold</span> : ${currentPlayer.gold}\r\n        <br />\r\n        <span>Health</span> : ${currentPlayer.currentHealth} / ${currentPlayer.totalHealth}\r\n        <br />\r\n        <span>Strength</span> : ${currentPlayer.strength}\r\n        <br />\r\n        <span>Dexterity</span> : ${currentPlayer.dexterity}\r\n        <br />\r\n        <span>Toughness</span> : ${currentPlayer.toughness}\r\n    </div>\r\n</template>"; });
define('text!components/player-templates.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./monster-manager\"></require>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-templates'\">\r\n        <h2>Templates</h2>\r\n        <monster-manager></monster-manager>\r\n    </modal-content>\r\n</template>"; });
define('text!components/template-bag.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\n        <div class=\"noselect\">\n            ${template.name}\n            <div class=\"template-controls\">\n                <button class=\"btn btn-success btn-sm\" click.delegate=\"$parent.spawnTemplate(template)\"><i class=\"fa fa-level-up\"></i> Spawn</button>\n                <button class=\"btn btn-info btn-sm\" click.delegate=\"$parent.viewTemplate(template)\"><i class=\"fa fa-eye\"></i> View</button>\n            </div>\n            <div>\n                <span repeat.for=\"monster of template.monsters\" class=\"noselect tag tag-warning\">\n                    ${monster.name}\n                </span>\n            </div>\n        </div>\n    </div>\n</template>"; });
define('text!components/loot/gold-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"gold-loot\">\r\n        <img src=\"src/images/gold_stack.png\" width=\"30px\" height=\"30px\" /> \r\n        ${lootItem.value} Gold\r\n    </div>\r\n</template>"; });
define('text!components/loot/loot-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <compose \r\n      class=\"lootItem noselect\" \r\n      repeat.for=\"lootItem of stack\" \r\n      view=\"./${lootItem.template}-loot.html\"\r\n      click.delegate=\"$parent.takeItem(lootItem)\">\r\n    </compose>\r\n</template>"; });
define('text!components/loot/weapon-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        ${lootItem.displayName}<br/> \r\n        Damage: ${lootItem.damage}\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map