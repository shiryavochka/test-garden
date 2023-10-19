class Garden {
    constructor(countT, countA) {
        this.trees = this.addTree(countT, countA);
        this.age = 0;
        this.maxAge = 60;
        this.harvest = []; //собранный яблоки
    }

    addTree(countT, countA){
        const trees = {};
        for(let i = 0; i< countT; i++)
        {
            trees[`Tree${i}`] = new Tree(countA);
        }
        console.log(`${countT} деревьев в саду. ${countA} яблок на каждом дереве.`);
        return trees;
    }
    pastDay() {
        this.age++;
        console.log(`Прошел ${this.age} день`)
        for (const tree in this.trees) {
            if (this.trees.hasOwnProperty(tree)) {
              this.trees[tree].growApple();
              this.trees[tree].addNewApple();        
            }
        }
    } 
    pickApples() { // cобрать яблоки
        for (const tree in this.trees) {
            if (this.trees.hasOwnProperty(tree)) {
                const currentTree  = this.trees[tree];
                for (const apple in currentTree.apples) {
                    if (currentTree.apples.hasOwnProperty(apple) && currentTree.apples[apple].fallen === 1 &&  currentTree.apples[apple].rotting === 0 ) {
                        console.log(`Собрано яблоко с дерева ${tree} (${apple})`);
                        this.harvest.push(currentTree.apples[apple]);
                        delete currentTree.apples[apple];
                    }
                }
            }
        }
    } 
 
    getInfo(){
        let countOfTrees = Object.keys(this.trees).length;
        let countOfApples = 0;
        for (const tree in this.trees) {
            if (this.trees.hasOwnProperty(tree)) {
                countOfApples += this.trees[tree].getCount();
            }
        }
        console.log(`Информация о саде:
        Возраст сада: ${this.age} суток
        Количество деревьев: ${countOfTrees}
        Количество яблок (на деревьях, новые, упавшие): ${countOfApples}
        Количество собранных яблок: ${this.harvest.length}`);
    }
    
}
class Tree {
    constructor(countA) {
        this.apples = this.addApple(countA);
        this.days = 0;  
    
    }
   
    addApple(countA) {
        let apples = {};
        for(let i = 0; i< countA;i++){ 
            apples[`Apple${i}`] = new Apple();
            apples[`Apple${i}`].age = Math.floor(Math.random() * 31);     
        }     
      return apples;
    }
    getCount(){
        return Object.keys(this.apples).length;
    }
    addNewApple(){
        this.days++; 
        if (this.days % 30 === 0) {
            const timestamp = Date.now(); // id яблока
            this.apples[`Apple${timestamp}`] = new Apple();
            console.log('Прошло 30 дней, выросли новые яблоки')
        } 
    }
     
    growApple() {
      
        for (const apple in this.apples) {
            if (this.apples.hasOwnProperty(apple)) {
                this.apples[apple].growingApple();
            }
            if (this.apples[apple].rotting === 1) {
                delete this.apples[apple];
            }
        }
    }
}
class Apple {
    constructor() {
        this.age = 0;
        this.color = 'красное';
        this.size = 'среднее';
        this.rotting = 0; // флаг испорченности  
        this.fallen = 0; // флаг упавшего с дерева
    }
    fallFromTree () {
        if(this.rotting === 0){
            this.fallen = 1;
        }
    }
    appleRotten (){
        console.log('Вы не успели собрать яблоко, оно испортилось');
        this.rotting = 1;
    }
   
    growingApple() {
        this.age++;
        if (this.age === 30) {
            this.fallFromTree();
            console.log('Яблоко упало, можно собирать');
        } 
        if (this.fallen === 1 && this.age > 30) {
            this.appleRotten();
        } 
    }
}
const garden1 = new Garden(5, 10);
garden1.getInfo();
garden1.pastDay(); 
garden1.pickApples();
garden1.getInfo();