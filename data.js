class Item {
    constructor(name, unit, price, b_name,base_q) {
      this.name = name;
      this.unit = unit;
      this.price = price;
      this.b_name = b_name;
      this.base_q = base_q;
    }
  }
    /* TO ADD YOUR ITEM , 
    Steps
      1. new Item("Name of the item" , "Unit" , "Per Unit Cost" , "Name in Bangla(GOOGLE IT)"),
      2.Inside the 'data' Array
        const data = [....]
      Append step 1(after inserting required Info) to the 'data' Array.
  */
  const data = [
    new Item("Rice" , "Kg" , 70 , "চাল"),
    new Item("Pulao Rice" , "Kg" , 105 , "পোলাও চাল"),
    new Item("Potato" , "Kg", 20 , "আলু"),
    new Item("Flour" , "Kg", 40 , "আটা"),
    new Item("Sugar" , "Kg" , 80 , "চিনি"),
    new Item("Salt", "Kg" , 30 , "লবণ") ,
    new Item("Egg" ,"Pc" , 9 ,"ডিম"),
    new Item("Milk" , "L", 75 , "দুধ"),
    new Item("Soybean oil" , "L", 135 , "সোয়াবিন তেল"),
    new Item("Onion" , "Kg", 40 , "পেঁয়াজ"),
    new Item("Cumin" , "Kg", 65 , "জিরা"),
    new Item("Puffed rice " , "Kg", 100 , "মুড়ি"),
    new Item("Mustard oil" , "L", 225 , "সরিষা তেল"),
    new Item("Lentils" , "Kg", 225 , "মুসুরির ডাল"),
    new Item("Lentils" , "Kg", 225 , "খেসারি ডাল"),
    new Item("Flour M" , "Kg", 225 , "ময়দা"),
    new Item("Lux" , "Pc", 40 , "লাক্স"),

    
    /* Add new item above ME */

  ];
