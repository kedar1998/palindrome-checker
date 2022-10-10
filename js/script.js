let btn = document.querySelector("#btn");


btn.addEventListener("click", function(e){
    let num = document.querySelector("#number").value;
    let dum = num;
    let flag = 0;
    let final = 0;
    let last;
    while(dum > 0){
        last = dum % 10;
        final = (final * 10) + (last);
        dum = Math.floor(dum / 10); 
    }
    final = Number(final);

    if(num == final){
        const content = `<p class="text-2xl md:text-4xl text-white font-semibold font-mono">Yeah!!! It's a palindrome!!🎉🎉🎉</p>`;
        document.querySelector("#dis").innerHTML = content;
    }
    else{
        const content = `<p class="text-2xl md:text-4xl font-semibold font-mono text-red-500">Naaah, Not a palindrome.</p>`;
        document.querySelector("#dis").innerHTML = content;
    }

    document.querySelector("#number").value = "";
})