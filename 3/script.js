let n = prompt("n=",50)

for(let i=n;i>0;i--){
    setTimeout((i) => {
        document.write(i+" пляшок стоїть на стіні, одна упала і залишилось<br \/>")
    }, 300*(n-i),i);
}
setTimeout(() => {
    document.write("жодної!")
}, 300*n);
