
class Garden {
    constructor(countT, countA) {
        this.trees = this.addTree(countT, countA);
        this.age = 0;
        this.maxAge = 60;
    }

    addTree(countT, countA){
        const trees = [];
        for(let i = 0; i< countT; i++)
        {
            trees.push(new Tree(countA));

        }

        console.log(`${countT} создано столько деревьев в саду` )
        return trees;
      
    }
    pastDay() {
        this.age++;
        console.log(`${this.age} прошел ещё один день`)
        // if(this.age=== 30){
        //     this.trees.
        // }

        for (const tree of this.trees) {
            tree.growApple();
        }

    } 
    getInfo(){
        let countOfApples = 0;
        for (let i=0; i<this.trees.length;i++)
        {
            countOfApples+=this.trees[i].apples.length;
        }
        console.log(`Информация о саде:
        Возраст сада: ${this.age} суток
        Количество деревьев: ${this.trees.length}
        Количество яблок: ${countOfApples}`);
    }
    
}
class Tree {
    constructor(countA) {
        this.apples = this.addApple(countA);

        // this.days = 0; 
        // this.maxDays = 30;
    
    }
   
    // growApple() {
    //     if(this.days % 30 === 0){
    //         const newApple = new Apple();
    //         newApple.age = Math.floor(Math.random() * 31);
    //         this.apples.push(newApple);
    //     }
    // }
    addApple(countA) {
        let apples = []
        for(let i = 0; i< countA;i++){
            apples.push(new Apple(i));
        }
        console.log(`${countA} создано столько яблок в саду` )
      return apples;
    }
    growApple() {
        for (const apple of this.apples) {
            apple.growingApple();
        }
    }


}
class Apple {
    constructor() {
        this.age = 0;
        this.color = 'green';
        this.size = '';
        this.rotting = 0; // флаг испорченности (0 - свежее, 1 - испорченное
        this.fallen = 0; // флаг упавшего с дерева. 0 - на дереве, 1 - упало 
    }
    fallFromTree () {
        if(this.rotting === 0){
            this.fallen = 1;
           // this.испорченность = 0; // После падения яблоко свежее

        }
    }
    appleRotten (){
        if(this.fallen === 1)
        this.rotting = 1;
    }
   
    growingApple() {
        this.age++;
        if (this.age === 2) {
            this.fallFromTree();
        }
        if (this.fallen === 1) {
            this.appleRotten();
        }
    }
}
const garden1 = new Garden(5, 10);
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.pastDay();
garden1.getInfo();