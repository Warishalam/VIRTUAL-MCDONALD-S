var item=[
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/drinks_300x300:category-panel-left-desktop",
        name: "Beverage",
    },
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/breakfast_300x300:category-panel-left-desktop" ,
        name:"Breakfast" ,
    },
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/burgers_300x300:category-panel-left-desktop" ,
        name: "burger",
    },
    {
        img: "https://s7d1.scene7.com/is/image/mcdonalds/chicken_sandwiches_300x300:category-panel-left-desktop",
        name: "Sandwiches",
    },
    {
        img: "https://s7d1.scene7.com/is/image/mcdonalds/nav_combo_meal_160x160_:category-panel-left-desktop",
        name:"Combo Meal" ,
    },
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/desserts_shakes_300x300:category-panel-left-desktop" ,
        name:" Combo Meal",
    },
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/mccafe_300x300:category-panel-left-desktop" ,
        name: "Drinks",
    },
    {
        img:"https://s7d1.scene7.com/is/image/mcdonalds/Menu_LeftRail_mcd-160x160:category-panel-left-desktop" ,
        name: "Bakery",
    },
]

var cartItem=JSON.parse(localStorage.getItem("cartItem")) || [];

showMenu();
function showMenu(){
    closeOrder();
    item.forEach((item,index)=>{
        var box=document.createElement("div");

        var image=document.createElement("img");
        image.setAttribute("src",item. img);

        var name= document.createElement("h3");
        name.innerText=item.name;

        var check=document.createElement("input");
        check.setAttribute("type","checkbox")
        check.addEventListener("change",function(){
            if(this.checked){
                cartItem.push(item);
                
            }
            else
            {
                if(index==cart.length-1)
                {
                    cartItem.pop() ;
                }
                cartItem.splice(index,1)
            }
            localStorage.setItem("cartItem",JSON.stringify(cartItem))
        })

        box.append(image,name,check);

        document.querySelector("#menu").append(box);

    })
}


// document.querySelector("#order").addEventListener("click",showCart);

// var cart=JSON.parse(localStorage.getItem("cartItem"));
// function showCart(){
//     cart.forEach((item)=>{
//         var box=document.createElement("div");

//         var image=document.createElement("img");
//         image.setAttribute("src",item.img);

//         var name= document.createElement("h3");
//         name.innerText=item.name;

//         box.append(image,name);

//         document.querySelector("#orderBox").append(box);

// })

// }

document.querySelector("#order").addEventListener("click",function(){
      var promise=new Promise((resolve,reject)=>{
          var cart=JSON.parse(localStorage.getItem("cartItem"));
          if(cart!=null || cart.length==0)
          {
              openWait();
              resolve(cart)
          }
         reject();
        })
        
        promise.then((cart)=>
            
            cart.forEach((item)=>{
                var box=document.createElement("div");
                

                var image=document.createElement("img");
                image.setAttribute("src",item.img);
        
                var name= document.createElement("h3");
                name.innerText=item.name;
                
                box.append(image,name);
    
                setTimeout(function(){
                    openOrder()
                    closeWait()
                        document.querySelector("#cart").append(box);
                },5000)
                localStorage.removeItem("cartItem")
          })
      ).catch(function(){
        alert("Please Select Item!")
    })

      
    })

    // function showCart(){
    //     setTimeout(console.log(1),5000)

    // }
    closeWait()
    function closeOrder(){
        
        document.querySelector("#cart").style.display="none";

    }
    function openOrder(){
        document.querySelector("#cart").style.display="flex";
    }
    function openWait(){
        document.querySelector("#wait").style.display="flex";
    }
    function closeWait(){
        document.querySelector("#wait").style.display="none";

    }

    document.querySelector("#close").addEventListener("click",closeOrder);
    document.querySelector("#close").addEventListener("click",refresh);
    function refresh(){
        window.location.reload();
    }