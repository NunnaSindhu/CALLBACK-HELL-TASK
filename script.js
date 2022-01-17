let countDown=document.getElementById("countdown");
document.getElementById("image").style.display="none";
let count=10;
let time=1000;
countDown.innerHTML=count--;
const myfun=()=>{
     setTimeout(()=>{
      countDown.innerHTML=count--;
      setTimeout(()=>{
        countDown.innerHTML=count--;
        setTimeout(()=>{
          countDown.innerHTML=count--;
          setTimeout(()=>{
            countDown.innerHTML=count--;
            setTimeout(()=>{
              countDown.innerHTML=count--;
              setTimeout(()=>{
                countDown.innerHTML=count--;
                setTimeout(()=>{
                  countDown.innerHTML=count--;
                  setTimeout(()=>{
                    countDown.innerHTML=count--;
                    setTimeout(()=>{
                      countDown.innerHTML=count--;
                      setTimeout(()=>{
                        countDown.innerHTML="Happy Republic Day";
                        document.getElementById("image").style.display="inline";
                      },time);
                    },time);
                  },time);
                },time);
              },time);
            },time);
          },time);
        },time)
      },time);
    },time);
 }
myfun();