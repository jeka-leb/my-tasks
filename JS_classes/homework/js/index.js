class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank
        this._isFaceCard = this.rank > 10 || this.rank === 1
    }
    get isFaceCard() {
        return this._isFaceCard
    }

    toString() {
        return `${ranks[this.rank]} of ${this.suit}`
    }

    static compare(cardOne, cardTwo) {
        if (cardOne[0].rank > cardTwo[0].rank) {
            return 1
        } else {
            if (cardOne[0].rank < cardTwo[0].rank) {
                return -1
            } else {
                return 'both'
            }
        }
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    get count() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
        return this.cards
    }

    draw(n) {
        let result = [];
        while (result.length < n) {
            result.push(this.cards.pop())
        }
        return result
    }

    createDeck(suits, ranks) {
        for (let suit of suits) {
            for (let rank in ranks) {
                this.cards.push(new Card(suit, +rank))
            }
        }
        return this.cards
    }
}

class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this._wins = 0;
    }

    get wins() {
        return this._wins
    }

    set wins(value) {
        this._wins += value
    }

    static play(playerOne, playerTwo) {
        const card1 = playerOne.deck.draw(1);
        const card2 = playerTwo.deck.draw(1);
        if (playerOne.deck.count && playerTwo.deck.count) {
            if (Card.compare(card1, card2) > 0) {
                playerOne.wins = 1
            } else {
                if (Card.compare(card1, card2) < 0) {
                    playerTwo.wins = 1
                } else {
                    playerOne.wins = 1;
                    playerTwo.wins = 1
                }
            }
        } else {
            playerOne.wins > playerTwo.wins ?
                console.log(`${playerOne.name} won ${playerOne.wins} to ${playerTwo.wins}`) :
                console.log(`${playerTwo.name} won ${playerTwo.wins} to ${playerOne.wins}`)
        }
    }
}

const suits = ["spades", "diamonds", "clubs", "hearts"];
const ranks = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K"
};

const playerOne = new Player('Ievgen', new Deck());
const playerTwo = new Player('Maxim', new Deck());


playerOne.deck.createDeck(suits, ranks);
playerOne.deck.shuffle();

playerTwo.deck.createDeck(suits, ranks);
playerTwo.deck.shuffle();
Player.play(playerOne, playerTwo);

class Employee {
    constructor(id, firstName, lastName, birsday, salary,
        position, department) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birsday = birsday;
        this.salary = salary;
        this.position = position;
        this.department = department
    }

    get age() {
        return new Date().getFullYear() - this.birsday.split('.')[2]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    quit() {
        delete Employee.register[this.id]
    }

    retire() {
        console.log("It was such a pleasure to work with you!");
        this.quit()
    }

    getFired() {
        console.log("Not a big deal!");
        this.quit()
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment
    }

    changePosition(newPosition) {
        this.position = newPosition
    }

    changeSalary(newSalary) {
        this.salary = newSalary
    }

    getPromoted(benefits) {
        for (let i in benefits) {
            if (benefits.hasOwnProperty) {
                switch (i) {
                    case 'salary':
                        this.changeSalary(benefits[i]);
                        break;
                    case 'position':
                        this.changePosition(benefits[i]);
                        break;
                    case 'department':
                        this.changeDepartment(benefits[i]);
                        break;
                }

            }
        }
        console.log('Yahooo')
    }

    getDemoted(punishment) {
        for (let i in punishment) {
            if (punishment.hasOwnProperty) {
                switch (i) {
                    case 'retire':
                        this.retire();
                        break;
                    case 'fire':
                        this.getFired();
                        break;
                }
                console.log('Damn!')
            }
        }
    }
}

Employee.register = new Array();

Employee.employees = function (name) {
    return this.register.push(name)
}

class Manager extends Employee {
    constructor(id, firstName, lastName, birsday, salary, department) {
        super(id, firstName, lastName, birsday, salary, department)
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birsday = birsday;
        this.salary = salary;
        this.position = 'manager';
        this.department = department
    }


    get managedEmployees() {
        const arr = [...Employee.register];

        return arr.filter(el => {
            if (el instanceof Manager) {
                return 0
            }
            return el.department === this.department
        })
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor(id, firstName, lastName, birsday, salary) {
        super(id, firstName, lastName, birsday, salary)
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birsday = birsday;
        this.salary = salary;
        this.position = 'manager';
        this.department = 'hr'
    }
}

class SalesManager extends Manager {
    constructor(id, firstName, lastName, birsday, salary) {
        super(id, firstName, lastName, birsday, salary)
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birsday = birsday;
        this.salary = salary;
        this.position = 'manager';
        this.department = 'sales'
    }
}

const managerPro = (managerInst) => {
    const promote = {
        salaryUp(n) {
            for (let el of this.managedEmployees) {
                el.salary += n
            }
        }
    }
    Object.assign(managerInst, promote)
}

const itsMe = new Manager(12, 'Ievgen', 'Lebediev', '25.05.1986', 1000, 'frontend development');
const iteHim = new BlueCollarWorker(13, 'Ievgen', 'Petrov', '25.05.1986', 100, 'developer', 'frontend development');
const iteHim2 = new BlueCollarWorker(14, 'Alex', 'Danilov', '25.05.1986', 100, 'developer', 'frontend development');

Employee.employees(itsMe);
Employee.employees(iteHim);
Employee.employees(iteHim2);
itsMe.managedEmployees