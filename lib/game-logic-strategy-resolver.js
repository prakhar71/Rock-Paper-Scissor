var DefaultGameLogicStrategy = require('./game-logic-strategies/game-logic-strategy');
var ExtendedGameLogicStrategy = require('./game-logic-strategies/extended-game-logic-strategy');

/**
 * This is Enum to Represent available strategies that the user can take
 * @type {{default: string, extended: string}}
 */
var StrategyTypes = {
    default: 'default',
    extended: 'extended'
};

function GameLogicStrategyResolver() {
    this.strategies = {};

    this.strategies[StrategyTypes.default] = new DefaultGameLogicStrategy();
    this.strategies[StrategyTypes.extended] = new ExtendedGameLogicStrategy();
}

/**
 * Here we find the game logic strategy for given type.
 * @param type
 * @returns {*}
 */
GameLogicStrategyResolver.prototype.resolve = function (type) {

    if (!this.strategies[type]) {
        throw new Error('Invalid game logic strategy type.');
    }

    return this.strategies[type];
};



module.exports = GameLogicStrategyResolver;
module.exports.StrategyTypes = StrategyTypes;
