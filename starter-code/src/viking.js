// Soldier
class Soldier {
    health;
    strength;
    constructor(healthArg, strengthArg){
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    name;
    constructor(name, helath, strength){
        super(helath, strength);
        this.name = name;
    }

    receiveDamage(damage){
        let d;
        this.health - damage;
        ((this.health - damage) > 0) ? d = `${this.name} has received ${this.damage} points of damage` : d = `${this.name} has died in act of combat`;
        return d;
    }

    battleCry(){
        return `Odin Owns You All!`;
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        let d;
        (this.health - damage) > 0 ? d = `A Saxon has received ${damage} points of damage` : d = `A Saxon has died in combat`;
        return d;
    }

}

// War
class War {
    constructor(){
        let
    }
}
