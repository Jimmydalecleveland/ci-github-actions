const attack = (creatureName, damage, isCritical) => `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;

module.exports = attack;
