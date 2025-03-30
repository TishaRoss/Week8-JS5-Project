/*Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/

//Jewelry

//class Jewelry
    //brand
    //type
class Jewelry {
   constructor(brand, type){
    this.brand = brand;
    this.type = type;
   }
}


//class Menu
class Menu {
    constructor(){
     //jewelry array
     this.jewelry =[];

    }
 
    //add jewelry
    //prompt for a brand
    //prompt for a type
    //create new jewelry and push jewelry into array

    addJewelry(){
        let jewelryBrand = prompt("Enter Brand");
        let jewelryType =prompt("Enter Type");
        this.jewelry.push (new Jewelry(jewelryBrand, jewelryType));
    }
    //delete jewelry
    deleteJewelry(){
        let jewelryIndex =prompt("Enter jewelry to DELETE:");
        this.jewelry.splice(jewelryIndex, 1);
    }

    //view jewelry
    viewJewelry(){
        let displayJewelry = '';
        for(let i=0; i < this.jewelry.length; i++){

            displayJewelry += `
            ${i}) ${this.jewelry[i].brand} ${this.jewelry[i].type}` 
        }

        alert(`
        Jewelry Inventory:
        ---------------------
        ${displayJewelry}
        `);
    }

    //see a menu    
    showMainMenu(){
        return prompt(`
        Main Menu:
        ---------------------------
        0) Exit Menu
        1) Add Jewelry
        2) Delete Jewelry
        3) View All Jewelry
        `);
    }
    
    //start the menu
    start(){
        let selection = this.showMainMenu();

        while(selection != 0){

            switch(selection){

                case "1": this.addJewelry();
                break;

                case "2": this.deleteJewelry();
                break;

                case "3": this.viewJewelry();
                break;

                default: selection = 0;
            }
            selection = this.showMainMenu();
        }
            alert("Exiting Menu...goodbye!");
    }
    
} 
  
//instantiate the menu and invoke the start method

let menu = new Menu();

menu.start();