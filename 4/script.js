let arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];
let sum=0;
let newarr=[]
for (let i=0;i<arr.length;i++){
    if (arr[i].type=="USD" && arr[i].value<100)
        sum+=arr[i].value
    if (arr[i].type=="EUR"){
        let obj=arr[i]
        obj.value=obj.value*2
        newarr.push(obj)
    }
}
document.write("сума - "+sum+"<br \/><br \/>")
document.write("новий масив: <br \/>"+JSON.stringify(newarr))