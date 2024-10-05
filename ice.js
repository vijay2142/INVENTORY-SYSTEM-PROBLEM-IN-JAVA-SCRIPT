console.log("1.ADD ICE CREAM");
console.log("2.CHANGE ICE CREAM FLAVOR");
console.log("3.TOTAL NO OF ICE IN INVENTORY");
console.log("4.TOTAL AMOUNT");
console.log("5.DISPLAY");

let ice=new Array();
let price=new Array();
let ch='N';
do{
    let choice=prompt("ENTER CHOICE:");
switch(choice){
    case '1':
        let icecream=prompt("Enter ice cream flavor:");
        let cost=Number(prompt("Enter the cost of ice cream"));
        ice.push(icecream);
        price.push(cost);
        break;
    
    case '2':
        if(ice.length==0)
        console.log("no ice in inventory");
        else{
            console.log("icecream flavor in inventory")
            for(let i=0;i<ice.length;i++){
                console.log(ice[i]+" ");
            }
            let icecream1=prompt("Enter the ice cream do u want to change:");
            let icecream2=prompt("Enter the flavor:");

            for(let i=0;i<ice.length;i++){
                if(ice[i]==icecream1){
                    ice[i]=icecream2;
                }
            }
            console.log("icecream flavor in inventory")
            for(let i=0;i<ice.length;i++){
                console.log(ice[i]+" ");
            }
        
        }
        break;
    case '3':
        console.log("TOTAL NO OF ICE CREAM IN INVENTORY:"+ice.length+1);
        break;
    case '4':
        let totalamount=0;
        for(let i=0;i<price.length;i++){
            totalamount+=price[i];
        }
        console.log("TOTAL AMOUNT:"+totalamount);
        break;
    case '5':
        console.log("icecream flavor in inventory")
        for(let i=0;i<ice.length;i++){
            console.log(ice[i]+" ");
        }
        break;

}
ch=prompt("DO U WANT TO CONTINUE:");
}while(ch=='y'||ch=='Y')
