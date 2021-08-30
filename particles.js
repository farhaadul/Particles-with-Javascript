window.alert('Chose range of particles between 1 to 300')
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = Math.random()*361;
let cl = document.getElementById('value');
// let clc = document.getElementById('click');
// let mmove = document.getElementById('mousemove');

window.addEventListener('rezise', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
const mouse = {
    x:undefined,
    y:undefined,
}
function callClick(){
    return
}
// onclick particle will start visual
// clc.addEventListener('click', function(){
   
// })
canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < document.getElementById('amount').value; i++){
        particlesArray.push(new particle())
    }
});

// on page load particle will start visual
window.addEventListener('load', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i <1300; i++){
        particlesArray.push(new particlee())
    } 
});
// on mouse move particle will start visual
// mmove.addEventListener('click', function(){
    
// })
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i <document.getElementById('amount').value; i++){
        particlesArray.push(new particle())
    }
})
class particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size = Math.random() * 15+1;
        this.speedX = Math.random ()* 3-1.5;
        this.speedY = Math.random() * 3-1.5;
        this.color = 'hsl('+ hue +', 100%, 50%)'
    }
    update(){
        this.x+= this.speedX;
        this.y += this.speedY;
        if(this.size>0.2){
            this.size-=0.1;
        }
    }
    draw(){
        ctx.fillStyle = this.color
        // ctx.strokeStyle = 'white'
        ctx.lineWidth ='5';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        // ctx.stroke();
        ctx.fill()
    }
    
}


class particlee{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random() * 15+1;
        this.speedX = Math.random ()* 3-1.5;
        this.speedY = Math.random() * 3-1.5;
        this.color = 'hsl('+ hue +', 100%, 50%)'
    }
    update(){
        this.x+= this.speedX;
        this.y += this.speedY;
        if(this.size>0.2){
            this.size-=0.1;
        }
    }
    draw(){
        ctx.fillStyle = this.color
        // ctx.strokeStyle = 'white'
        ctx.lineWidth ='5';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        // ctx.stroke();
        ctx.fill()
    }
    
}


function handleparticle(){
    for(let i = 0; i<particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size<=0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    handleparticle();
    hue+=2;
    requestAnimationFrame(animate);
}
animate();

