// constructor Fighter

function Fighter({name, damage, hp, strength, agility}) {
    let _name = name;
    let _hp = hp;
    let _maxHp = hp;
    let _damage = damage;
    let _strength = strength;
    let _agility = agility;

    let _addWins = 0;
    let addLosses = 0;
    

    this.getName = function() {
        return _name;
    }

    this.getHealth = function() {
        return _hp;
    }

    this.getDamage = function() {
        return _damage;
    }

    this.getStrength = function() {
        return _strength;
    }

    this.getAgility = function() {
        return _agility;
    }

    // Attack

    this.attack = function(defender) {
        const chance = Math.max(100 - (defender.getStrength() + defender.getAgility()), 1);

        if(Math.random() * 100 < chance) {
            defender.dealDamage = _damage;

            console.log(`${_name} makes ${_damage} damage to ${defender.getName}`);
        } else {
            console.log(`${_name} attack missed!`);
        }

    }

    // Damage + heal

    




}
