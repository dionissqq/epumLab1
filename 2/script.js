let str="<pre>"
let n=10
let arr=[1]
let newarr=[]
for (let i=0;i<n;i++){
    str+="|"+i+"|"
    for (let k=3*n-3*i;k>0;k--)
        str+=" "
    for(let t of arr){
        if (t<100)
            str+=' '
        str+=t
        if (t<10)
            str+=' '
        str+="   "
    }
    str+='\n'
    newarr=[]
    newarr.push(1)
    for(let k=0;k<arr.length-1;k++)
        newarr.push(arr[k]+arr[k+1])
    newarr.push(1)
    arr=newarr
}
str+="<\/pre>"
document.write(str)