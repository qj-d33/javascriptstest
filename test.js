//練習五：判斷大小寫
/*var input=prompt("請輸入一個字母:")
var r="abc"
if(input<r){
    console.log(input+"為大寫")
    alert(input+"為大寫")   
}
else{
    console.log(input+"為小寫")
    alert(input+"為小寫")
}*/
/*費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….
function fibonacci(n) {
    let sequence = [0, 1]; // 初始化数列的前两个元素
  
    for (let i = 2; i <= n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    return sequence;
}
  console.log(fibonacci(5));*/
//請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。
/*var num=parseInt(prompt("第幾小的數字:"))//prompt只能回傳字串
var r=parseInt(prompt("請問想輸入幾個值:"))
var f=[]
for(var i=1;i<=r;i++){
    var u=parseInt(prompt(''))
    f.push(u)
}
function findNthMin(n,num1){
    if(num1<=0|| num1>n.length){
        return ("無效的值")
    }
    for(var i=0;i<n.length;i++){
        var ind=i
        for(var j=i+1;j<n.length;j++){
                if(n[j]<n[ind]){
                    ind=j//這樣i就不會被j取代
                }
        }[n[i],n[ind]]=[n[ind],n[i]]
    }return n[num1-1]
}
console.log(findNthMin(f,num))
console.log(f)*/

//請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
/*var arr=[]
var num=parseInt(prompt("請問有幾個值:"))
for(var i=0;i<=num-1;i++){
    var arr1=parseInt(prompt(''))
    arr.push(arr1)
}
function sort1(n){
    for(var i=0;i<=n.length-1;i++){
        var ind=i
        for(var j=i+1;j<=n.length-1;j++){//j不能從0開始因為前面都排序完成所以只要比較後面的再進行排序即可
            if(n[j]<n[ind]){
                ind=j
            }
        }[n[i],n[ind]]=[n[ind],n[i]]
    }console.log(n)
}
sort1(arr)*/
//請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
/*var n=parseInt(prompt(''))

function tree(n2){
    
    for(var j=1;j<=n2;j++){
        var t=''//不能放在迴圈外面不然就會全部重來导致在每一行中都会累加之前行的星号字符。
        for(var r=1;r<=n2-j;r++){
            t=t+' '
        }
        for(var i=1;i<=2*j-1;i++){
            t=t+"*"
                
        }
     console.log(t)
    }
}
tree(n)*/
//請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw
/*var arr=[]

for(var i=0;i<3;i++){
    arr[i]=[]
    for(var j=0;j<3;j++){
        arr[i][j]=prompt()
    }
}
function winner(n){
    for(var i=0;i<n.length;i++){
        if(n[0][i]==n[1][i]&&n[1][i]==n[2][i]){
            return"winner is"+' '+n[0][i]
            
        }
    }
    for(var j=0;j<n.length;j++){
        if(n[j][0]==n[j][1]&&n[j][1]==n[j][2]){
            return"winner is"+' '+n[j][0]
        }
    }
    if((n[0][0]==n[1][1]&&n[1][1]==n[2][2])||(n[0][2]==n[1][1]&&n[1][1]==n[2][0])){
        return "winner is "+' '+n[1][1]
    }
    for(var g=0;g<n.length;g++){
        for(var t=0;t<n.length;t++){
            if(n[g][t]==['']){
                return "draw"//draw為平手
            }
        }
    
    }                
    return 'not finished' 
}
console.log(winner(arr))*/
//請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
var num=parseInt(prompt())
var num2=0
function isPrime(n){
    var n1=n
    for(var i=2;i<n1;i++){
        if(n1%i==0){
            num2=num2+1
        }        
    }
    if((num2==0||n1==2)&&n1!=1){
        console.log("true")
    }else{
        console.log("false")
    }
}
isPrime(num)
//註解1