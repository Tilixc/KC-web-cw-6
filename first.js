alert (`مرحباً بك في موقعي الذي سيحسب درجتك`)

let grade = prompt(` أكتب درجتك بالأرقام`)

console.log(`grade`)

if(grade >=90 && grade <=100){
    console.log(`%cلقد حصلت على امتياز 🥳`,`color: green`)
    
}else if(grade >=80 && grade <=89){
    console.log(`%cلقد حصلت على جيد جداً🤩`,`color: green`)
}else if(grade >=70 && grade <=79){
    console.log(`%cلقد حصلت على جيد🙂`,`color: green`)
}else if(grade >=60 && grade <=69){
    console.log(`%cلقد حصلت على مقبول😕`,`color: green`)

}else if(grade >=50 && grade <=59){
    console.log(`%cقد حصلت على ضعيف☹️`,`color: green`)
}else {
    console.log(`%cراسب💔`,`color: green`)
}
// جافاسكربت ليست جافا
// جافا أفضل من جافا سكربت