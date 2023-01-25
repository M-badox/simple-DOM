//assigning variable
let object1=document.getElementById("add");
let object2=document.getElementById("modules");

//adding event listener

// adding submitt event
object1.addEventListener("submit",display)

//adding delete event
object2.addEventListener("click",removing)

//function to display new line input box
function display(e)
{
    e.preventDefault();

    //getting input value from input box
    let val=document.getElementById("fill").value;

    //creating p element which is the same element as the element in modules id in the variable name of para
    let para=document.createElement("p");

    //adding classaname which is the same as the classname of p in modules id
    para.className="mod";
   
    //appending value from input box to the para variable
    para.appendChild(document.createTextNode(val));

    //assigning para to the object2(modules id)
    object2.appendChild(para);

    //crating image element
    let btn=document.createElement("IMG");

    //giving image element className which is similar to the ancient image class name inside p element
    btn.className="btn0";

    //set the same attribute as the ancient image
    btn.setAttribute("src","img/cross.jpg");

    //appending it to the para varible standards for p element
    para.appendChild(btn);
}

//removing function 
function removing(e)
{
    e.preventDefault();
   if(e.target.classList.contains("btn0") && confirm("click ok to delete\n or cancel to don't"))
   {
      let val=e.target.parentElement;
      object2.removeChild(val);
   }
}