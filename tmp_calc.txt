// eslint-disable-next-line @typescript-eslint/no-unused-vars
function calculate(arr){
    let res=0;
    
    
    for (let i in arr)
      {
       //console.log(arr[key]);
         switch(arr[i])
       {
         case "+":
        
           //return res+parseInt(arr[parseInt(key)-1]) + parseInt(arr[parseInt(key)+1]);
            let before = i > 0 ? arr[i - 1] : "0"; 
            let after = i < arr.length - 1 ? arr[i + 1] : "0"
            res+=parseInt(before)+parseInt(after);
            console.log(before);
           
            return res;
         default:
           break;
         }
     }
    
  }
  
  function getCalc(arr, result){
    let oprd="";
    let firstElement=0;
    
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arr.length===3? oprd=arr[1]: oprd=arr[0];
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arr.length===3? firstElement=parseInt(arr[0]): firstElement=parseInt(result); 
    // console.log("OP:",oprd);
    // console.log(firstElement)
    //  console.log(arr[arr.length-1]);
    
    switch (oprd)
      {
          case "+":
           // console.log("OP:",oprd);
           //  console.log(firstElement)
           //   console.log(arr[arr.length-1]);
          result= firstElement+parseInt(arr[arr.length-1]);
          break;
         case "-":
          result= firstElement-parseInt(arr[arr.length-1]);
          break;
          case "*":
            // console.log("OP:",oprd);
            // console.log(firstElement)
            //  console.log(arr[arr.length-1]);
          result= firstElement * parseInt(arr[arr.length-1]);
          break;
          case "/":
          result= firstElement/parseInt(arr[arr.length-1]);
          break;
      }
    
    
    return result;
  }
  
  function cal(arr) {
   let res=0;
    let tmparr=[];
    
    
    let i = 0;
    while (0 < arr.length) {
       if (i===0)
       {
        
         
           tmparr.push(...arr.splice(0, 3));
           // console.log("tmp:", tmparr);
           //  console.log("arr:", arr);
            res=getCalc(tmparr,0);
            tmparr=[];
           //arr.slice(3);
         
          
             i=i+3;
          //console.log(arr.length);
       }
        else {
         //   console.log(arr.length);
          tmparr.push(...arr.splice(0, 2));
           // console.log("tmp1:", tmparr);
           //  console.log("arr1:", arr);
           res= getCalc(tmparr,res);
            tmparr=[];
          // console.log(arr.pop(-2));
          //   console.log(arr);
           // console.log(tmparr);
             i=i+2;
      
       }
    }
    
  
    
    return res;
  }
  
  const theOpration =["1","+","2","*","5", "+", "10","/", "5"]; 
  //const theOpration =["2","+","1"];
  console.log(cal(theOpration));
  