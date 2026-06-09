// constructor Fighter

function Fighter({name, damage, hp, strength, agility}) {
    let _name = name;
    let _hp = hp;
    let _maxHp = hp;
    let _damage = damage;
    let _strength = strength;
    let _agility = agility;

    let _wins = 0;
    let _losses = 0;
    

    this.getName = function() {
        return _name;
    };

    this.getHealth = function() {
        return _hp;
    };

    this.getDamage = function() {
        return _damage;
    };

    this.getStrength = function() {
        return _strength;
    };

    this.getAgility = function() {
        return _agility;
    };

    // Attack

    this.attack = function(defender) {
        const defense = defender.getStrength() + defender.getAgility();
        const chance = Math.max(100 - defense, 5);

        if(Math.random() * 100 < chance) {
            defender.dealDamage(_damage);

            console.log(`${_name} makes ${_damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${_name} attack missed!`);
        }

    };

    // Damage + heal

    this.dealDamage = function(dmg) {
        _hp = _hp - dmg;
        if(_hp < 0) _hp = 0;
    };

    this.heal = function(amount) {
        _hp = _hp + amount;
        if(_hp > _maxHp) _hp = _maxHp;
    };
    
    //History

    this.addWin = function() {
        _wins++;
    };

    this.addLoss = function() {
        _losses++;
    };

    this.logCombatHistory = function() {
        console.log(`Name: ${_name} Wins: ${_wins}, Losses: ${_losses}`);
    };
}

    //Battle
    function battle(fighter1, fighter2) {
        if(fighter1.getHealth() <= 0 || fighter2.getHealth() <= 0) {
            console.log("Battle cannot be started. One fighter is dead.");
        return;
        }

        while(fighter1.getHealth() > 0 && fighter2.getHealth() > 0 ) {

            fighter1.attack(fighter2);

            if(fighter2.getHealth() <= 0) {
                fighter1.addWin();
                fighter2.addLoss();
                console.log(`${fighter1.getName()} wins!`);
                break;

            }

            fighter2.attack(fighter1);

            if(fighter1.getHealth() <= 0) {
                fighter2.addWin();
                fighter1.addLoss();
                console.log(`${fighter2.getName()} wins!`);
                break;
            }
        }
    }

