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

define('domain/Body',["require", "exports", "../helpers/Attribute", "../helpers/Dice"], function (require, exports, Attribute_1, Dice_1) {
    "use strict";
    var Body = (function () {
        function Body(eventAggregator, name) {
            this.eventAggregator = eventAggregator;
            this.name = name;
            this.damageTaken = 0;
            this.experience = 0;
            this.strength = 10;
            this.toughness = 10;
            this.dexterity = 10;
            this.killed = false;
        }
        Object.defineProperty(Body.prototype, "level", {
            get: function () {
                var power = 2.1;
                var root = 1 / power;
                var xpmod = 500;
                return Math.floor(Math.pow(this.experience / xpmod, root)) + 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Body.prototype, "baseHealth", {
            get: function () {
                return 10 * this.level;
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
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Body;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Monster',["require", "exports", "./Body", "../messages"], function (require, exports, Body_1, messages_1) {
    "use strict";
    var Monster = (function (_super) {
        __extends(Monster, _super);
        function Monster() {
            return _super.apply(this, arguments) || this;
        }
        Monster.prototype.takeDamage = function (damage) {
            this.damageTaken += damage;
            if (this.hasDied) {
                this.eventAggregator.publish(new messages_1.MonsterKilled(this));
            }
        };
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
        function Loot(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        return Loot;
    }());
    exports.Loot = Loot;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Items/Gold',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    var Gold = (function (_super) {
        __extends(Gold, _super);
        function Gold() {
            return _super.apply(this, arguments) || this;
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

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define('domain/Items/Weapon',["require", "exports", "./Loot", "../../messages"], function (require, exports, Loot_1, messages_1) {
    "use strict";
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon() {
            return _super.apply(this, arguments) || this;
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
            }, 2000);
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
        aurelia_framework_1.autoinject,
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
        Player.prototype.takeDamage = function (damage) {
            this.damageTaken += damage;
        };
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
define('factories/BodyFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Player", "../domain/Monster"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Player_1, Monster_1) {
    "use strict";
    var BodyFactory = (function () {
        function BodyFactory(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        BodyFactory.prototype.buildPlayer = function (name) {
            var player = new Player_1.default(this.eventAggregator, name);
            player.strength = 16;
            player.toughness = 14;
            player.dexterity = 16;
            return player;
        };
        BodyFactory.prototype.buildMonster = function (name) {
            var monster = new Monster_1.default(this.eventAggregator, name);
            monster.strength = 9;
            monster.toughness = 10;
            monster.dexterity = 13;
            return monster;
        };
        BodyFactory.prototype.cloneMonster = function (monster) {
            return Object.assign(this.buildMonster(monster.name), monster);
        };
        return BodyFactory;
    }());
    BodyFactory = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], BodyFactory);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BodyFactory;
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
define('domain/Stores/PlayerStore',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../factories/BodyFactory", "../../messages", "../../helpers/Dice"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, BodyFactory_1, messages_1, Dice_1) {
    "use strict";
    var PlayerStore = (function () {
        function PlayerStore(eventAggregator, bodyFactory) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.inventory = [];
            this.currentPlayer = bodyFactory.buildPlayer("Test Factory Player");
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
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, BodyFactory_1.default])
    ], PlayerStore);
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
define('helpers/Combat',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/PlayerStore"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, PlayerStore_1) {
    "use strict";
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
            console.log(defenderDodge + " dodge vs " + attackerHit + " attack");
            if (defenderDodge >= attackerHit) {
                console.log(attacker.name + " Misses");
                return 0;
            }
            var attackerDamage = attacker.calculateDamageRoll();
            console.log(attacker.name + " Hits for " + attackerDamage);
            return attackerDamage;
        };
        return Combat;
    }());
    Combat = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, PlayerStore_1.default])
    ], Combat);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Combat;
    var BattleResult = (function () {
        function BattleResult() {
            this.playerDamage = 0;
            this.monsterDamage = 0;
        }
        return BattleResult;
    }());
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
define('components/battle-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../factories/BodyFactory", "../helpers/Combat", "../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, BodyFactory_1, Combat_1, messages_1) {
    "use strict";
    var BattleStack = (function () {
        function BattleStack(eventAggregator, bodyFactory, combat) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.bodyFactory = bodyFactory;
            this.combat = combat;
            this.stack = [];
            this.stack.push(bodyFactory.buildMonster("Grumble"), bodyFactory.buildMonster("Viqas' Expensive Bread"));
            this.eventAggregator.subscribe(messages_1.TemplateSpawned, function (msg) {
                msg.template.monsters.forEach(function (monster) {
                    _this.stack.push(bodyFactory.cloneMonster(monster));
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
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, BodyFactory_1.default, Combat_1.default])
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
define('domain/Stores/TemplateStore',["require", "exports", "aurelia-framework", "../MonsterTemplate", "../../factories/BodyFactory"], function (require, exports, aurelia_framework_1, MonsterTemplate_1, BodyFactory_1) {
    "use strict";
    var TemplateStore = (function () {
        function TemplateStore(bodyFactory) {
            this.bodyFactory = bodyFactory;
            var defaultTemplate = new MonsterTemplate_1.default("Test Template");
            defaultTemplate.addMonster(bodyFactory.buildMonster("Default Monster1"));
            defaultTemplate.addMonster(bodyFactory.buildMonster("Default Monster2"));
            this.templates = [defaultTemplate];
        }
        return TemplateStore;
    }());
    TemplateStore = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [BodyFactory_1.default])
    ], TemplateStore);
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/monster-manager',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/Stores/TemplateStore", "../factories/BodyFactory", "../domain/MonsterTemplate"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, TemplateStore_1, BodyFactory_1, MonsterTemplate_1) {
    "use strict";
    var MonsterManager = (function () {
        function MonsterManager(eventAggregator, templateStore, bodyFactory) {
            this.eventAggregator = eventAggregator;
            this.templateStore = templateStore;
            this.bodyFactory = bodyFactory;
            this.bag = [bodyFactory.buildMonster("Grumble"), bodyFactory.buildMonster("Viqas's Bread")];
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
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, TemplateStore_1.default, BodyFactory_1.default])
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
define('components/progress-bar',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('factories/ItemFactory',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../domain/AllItems", "../helpers/Dice"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, Item, Dice_1) {
    "use strict";
    var ItemFactory = (function () {
        function ItemFactory(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        ItemFactory.prototype.buildGold = function () {
            var newGold = new Item.Gold(this.eventAggregator);
            newGold.value = Dice_1.default.d20();
            newGold.template = "gold";
            return newGold;
        };
        ItemFactory.prototype.buildWeapon = function (name) {
            var newWeapon = new Item.Weapon(this.eventAggregator);
            newWeapon.name = name;
            newWeapon.damage = Dice_1.default.d20();
            newWeapon.template = "weapon";
            return newWeapon;
        };
        return ItemFactory;
    }());
    ItemFactory = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], ItemFactory);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ItemFactory;
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
define('components/loot/loot-stack',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../../factories/ItemFactory", "../../messages"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, ItemFactory_1, messages_1) {
    "use strict";
    var LootStack = (function () {
        function LootStack(eventAggregator, itemFactory) {
            var _this = this;
            this.eventAggregator = eventAggregator;
            this.itemFactory = itemFactory;
            this.stack = [];
            this.eventAggregator.subscribe(messages_1.MonsterKilled, function () {
                _this.stack.push(itemFactory.buildGold());
                _this.stack.push(itemFactory.buildWeapon("Thunderfury, Blessed Blade of the Windseeker"));
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
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, ItemFactory_1.default])
    ], LootStack);
    exports.LootStack = LootStack;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n\t<require from=\"./components/battle-stack\"></require>\r\n\t<require from=\"./components/loot/loot-stack\"></require>\r\n\t<require from=\"./components/main-menu\"></require>\r\n\t<require from=\"./components/player-overview\"></require>\r\n\t<require from=\"./components/player-inventory\"></require>\r\n\t<require from=\"./components/player-templates\"></require>\r\n\t<require from=\"./components/template-bag\"></require>\r\n\t<require from=\"bootstrap4/css/bootstrap.css\"></require>\r\n\t<require from=\"./styles/styles.css\"></require>\r\n\r\n\t<div id=\"timer\">\r\n\t\tTimer: ${timer}\r\n\t</div>\r\n\t<main-menu></main-menu>\r\n\t<battle-stack></battle-stack>\r\n\t<player-overview></player-overview>\r\n\t<template-bag></template-bag>\r\n\t<loot-stack></loot-stack>\r\n\r\n\t<player-inventory></player-inventory>\r\n\t<player-templates></player-templates>\r\n</template>"; });
define('text!components/battle-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./progress-bar\"></require>\r\n    \r\n    <div>\r\n        <div repeat.for=\"monster of stack\" class=\"battleStackItem\">\r\n            <progress-bar percent.bind=\"monster.currentHealthPercent\"></progress-bar>\r\n                ${monster.name}\r\n        </div>\r\n        <div repeat.for=\"i of (5 - stack.length)\" class=\"battleStackItem empty\">\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".component {\n  display: block;\n  overflow: hidden;\n}\nbody {\n  margin: 0;\n}\nbattle-stack,\nloot-stack,\nmonster-bag {\n  display: block;\n  overflow: hidden;\n}\n#player-overview {\n  background-color: lightblue;\n}\n#timer {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 700;\n  background: white;\n  border-radius: 4px;\n  z-index: 10000;\n}\n.page-host {\n  padding-top: 60px;\n}\n.bagItem {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: antiquewhite;\n}\n.bagItem:hover {\n  background-color: beige;\n  cursor: pointer;\n}\n.templateItem {\n  padding: 6px;\n  margin-top: 1px;\n  color: ghostwhite;\n  background-color: saddlebrown;\n}\n.templateMonster {\n  padding: 6px;\n  margin-top: 1px;\n  background-color: coral;\n}\n.progressBarContainer {\n  width: 10px;\n  float: right;\n  height: 100%;\n  background: #c9d250;\n}\n.progressBarContainer .progressBar {\n  width: 10px;\n  height: 100%;\n  transition: height 1s;\n  background: red;\n}\n.battleStackItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.battleStackItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.monsterTemplateItem {\n  height: 100px;\n  width: 80px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n}\n.monsterTemplateItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.battleStackEmptyItem {\n  height: 200px;\n  width: 160px;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: coral;\n  color: whitesmoke;\n  font-weight: 600;\n  float: left;\n  background-color: darkslategray;\n}\n.battleStackEmptyItem.empty {\n  background-color: #b1b1b1;\n  color: white;\n}\n.inventoryItem {\n  background-color: darkslategray;\n  padding: 4px;\n  margin-top: 1px;\n  color: white;\n}\n.lootItem {\n  display: block;\n  overflow: hidden;\n  padding: 6px;\n  margin-top: 1px;\n  margin-left: 1px;\n  background-color: gray;\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 14px;\n}\n.lootItem:hover {\n  background-color: cadetblue;\n  cursor: pointer;\n}\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.clearfix {\n  clear: both;\n  overflow: none;\n}\n.modal-window {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  border-radius: 5px;\n  padding: 22px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  max-height: 70%;\n}\n.modal-window .close-button {\n  float: right;\n}\n.modal-window-overlay {\n  background-color: black;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 10000;\n}\n.template-controls {\n  float: right;\n}\n"; });
define('text!components/main-menu.html', ['module'], function(module) { module.exports = "<template>\r\n    <nav class=\"navbar navbar-light bg-faded\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <button click.delegate=\"open('player-inventory')\" class=\"btn btn-block\">Inventory (${playerStore.inventory.length})</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button click.delegate=\"open('player-templates')\" class=\"btn btn-block\">Templates (${templateStore.templates.length})</button>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</template>"; });
define('text!components/modal-content.html', ['module'], function(module) { module.exports = "<template>\r\n  <div show.bind=\"visibility\" class=\"modal-window\">\r\n    <div>\r\n      <button class=\"btn btn-danger btn-sm close-button\" click.delegate=\"close()\">close</button>\r\n    </div>\r\n    <slot></slot>\r\n  </div>\r\n  <div show.bind=\"visibility\" class=\"modal-window-overlay\" click.delegate=\"close()\"></div>\r\n</template>"; });
define('text!components/monster-manager.html', ['module'], function(module) { module.exports = "<template>\r\n    <div style=\"width: 407px;\">\r\n        <div if.bind=\"templateStore.selectedTemplate == null\">No template selected</div>\r\n        <div class=\"clearfix\" if.bind=\"templateStore.selectedTemplate\" with.bind=\"templateStore.selectedTemplate\">\r\n            <div repeat.for=\"monster of monsters\" class=\"monsterTemplateItem\" click.delegate=\"$parent.remove(monster)\">\r\n                <div class=\"noselect\">${monster.name}</div>\r\n            </div>\r\n            <div repeat.for=\"i of (5 - monsters.length)\" class=\"monsterTemplateItem empty\"></div>\r\n        </div>\r\n\r\n        <div class=\"bagItem\" if.bind=\"templateStore.selectedTemplate\" repeat.for=\"monster of bag\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.useMonster(monster)\">${monster.name}</div>\r\n        </div>\r\n\r\n        <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\r\n            <div class=\"noselect\" click.delegate=\"$parent.selectTemplate(template)\">${template.name}</div>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!components/player-inventory.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-inventory'\">\r\n        <h2>Inventory</h2>\r\n\r\n        <div repeat.for=\"item of playerInventory\" class=\"inventoryItem\">\r\n            ${item.name}\r\n        </div>\r\n        <div if.bind=\"!playerInventory.length\">\r\n            - empty -\r\n        </div>\r\n    </modal-content>\r\n</template>"; });
define('text!components/player-overview.html', ['module'], function(module) { module.exports = "<template>\r\n    <div id=\"player-overview\">\r\n        <h2>\r\n            Player Overview\r\n        </h2>\r\n        <span>Name</span> : ${currentPlayer.name}\r\n        <br />\r\n        <span>Level</span> : ${currentPlayer.level} <span>Experience </span> : ${currentPlayer.experience}\r\n        <br />\r\n        <span>Gold</span> : ${currentPlayer.gold}\r\n        <br />\r\n        <span>Health</span> : ${currentPlayer.currentHealth} / ${currentPlayer.totalHealth}\r\n        <br />\r\n        <span>Strength</span> : ${currentPlayer.strength}\r\n        <br />\r\n        <span>Dexterity</span> : ${currentPlayer.dexterity}\r\n        <br />\r\n        <span>Toughness</span> : ${currentPlayer.toughness}\r\n    </div>\r\n</template>"; });
define('text!components/player-templates.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./monster-manager\"></require>\r\n    <require from=\"./modal-content\"></require>\r\n\r\n    <modal-content id.bind=\"'player-templates'\">\r\n        <h2>Templates</h2>\r\n        <monster-manager></monster-manager>\r\n    </modal-content>\r\n</template>"; });
define('text!components/progress-bar.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"progressBarContainer\">\r\n        <div class=\"progressBar\" css=\"height: ${height}%;\"></div>\r\n    </div>\r\n</template>"; });
define('text!components/template-bag.html', ['module'], function(module) { module.exports = "<template>\n    <div class=\"templateItem\" repeat.for=\"template of templateStore.templates\">\n        <div class=\"noselect\">\n            ${template.name}\n            <div class=\"template-controls\">\n                <button class=\"btn btn-success btn-sm\" click.delegate=\"$parent.spawnTemplate(template)\"><i class=\"fa fa-level-up\"></i> Spawn</button>\n                <button class=\"btn btn-info btn-sm\" click.delegate=\"$parent.viewTemplate(template)\"><i class=\"fa fa-eye\"></i> View</button>\n            </div>\n            <div>\n                <span repeat.for=\"monster of template.monsters\" class=\"noselect tag tag-warning\">\n                    ${monster.name}\n                </span>\n            </div>\n        </div>\n    </div>\n</template>"; });
define('text!components/loot/gold-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"gold-loot\">\r\n        <img src=\"src/images/gold_stack.png\" width=\"30px\" height=\"30px\" /> \r\n        ${lootItem.value} Gold\r\n    </div>\r\n</template>"; });
define('text!components/loot/loot-stack.html', ['module'], function(module) { module.exports = "<template>\r\n    <compose \r\n      class=\"lootItem noselect\" \r\n      repeat.for=\"lootItem of stack\" \r\n      view=\"./${lootItem.template}-loot.html\"\r\n      click.delegate=\"$parent.takeItem(lootItem)\">\r\n    </compose>\r\n</template>"; });
define('text!components/loot/weapon-loot.html', ['module'], function(module) { module.exports = "<template>\r\n    <div>\r\n        ${lootItem.displayName}<br/> \r\n        Damage: ${lootItem.damage}\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map