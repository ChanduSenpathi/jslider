let slider = document.querySelector('.jsslider')

let imgArr=["https://i.pinimg.com/originals/ea/6e/0c/ea6e0cc18627f2a01b69c19e882d1a63.jpg",
            "https://i.pinimg.com/originals/0a/c9/b3/0ac9b3b4b71c65765e7ffc754526d0c3.jpg",
            "https://wallpapercave.com/wp/wp1962032.jpg",
            "https://static8.depositphotos.com/1010782/858/i/600/depositphotos_8581716-stock-photo-fire-alphabets-n.jpg",
            "https://media.istockphoto.com/photos/flamy-symbol-picture-id178599994?k=20&m=178599994&s=612x612&w=0&h=pUkxwVr1nt1yepTJIWCI58GCixx5Z1fkExqjYpniWNQ=",
            "https://i.pinimg.com/originals/8c/6c/e5/8c6ce5969de5629d55589c51206faa3e.jpg",
            "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_views_of_the_sun5/22136942-2-eng-GB/Solar_Orbiter_s_first_views_of_the_Sun_pillars.gif",
            "https://media.istockphoto.com/photos/the-letter-s-in-orange-flames-picture-id178625189?k=20&m=178625189&s=612x612&w=0&h=bpDOFeaRXg6UXObFxkKXvl-FavsViTfr7bs6eIVobrw="
]

let div1=document.createElement("div")
div1.classList.add("inner-images")
let press = false
let start;
let y;

function getEle(){
    imgArr.forEach(ele=>{
        div2=document.createElement("div")
        div2.classList.add("images")
        let image=document.createElement('img')
        image.src=ele
        image.classList.add("img-sec")
        image.alt="slider-images"
        div2.append(image)
        div1.append(div2)
        
    })
    slider.append(div1)
}
getEle()


slider.addEventListener('mousedown', (event) => {
    press = true
    start = event.offsetX - div1.offsetLeft
    slider.style.cursor = 'grabbing'
})

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = "grab"
})

slider.addEventListener('mouseup', () => {
    slider.style.cursor = "grab"
})

window.addEventListener('mouseup', () => {
    press = false
})

slider.addEventListener('mousemove', (event) => {
    if (!press) return;
    event.preventDefault()
    y = event.offsetX
    div1.style.left = `${y-start}px`
    boundary()
})


function boundary() {
    let outer = slider.getBoundingClientRect()
    let inner = div1.getBoundingClientRect()

    if (parseInt(div1.style.left) > 0) {
        div1.style.left = '0px'
    } else if (inner.right < outer.right) {
        div1.style.left = `-${inner.width-outer.width}px`
    }

}