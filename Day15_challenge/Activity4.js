

// Task 6
const list=(function(){
    items=[];
    return{
        add:(item)=>{
            items.push(item);
        },
        remove:(item)=>{
            const index=items.indexOf(item);
            if(index>-1)
            {
                items.splice(index,1);
            }
            else{
                console.log("Item not found");
                
            }
        },
        list_Items:()=>{
            console.log(items);
        }
    }
})();

list.add("Dhoni");
list.add("Kohli");
list.add("Rohit");
list.add("ABD");
list.list_Items();
list.remove("ABD");
list.list_Items();