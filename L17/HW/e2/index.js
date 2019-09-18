const stage = document.getElementById("stage")
const countDown = document.getElementById("countDown")

function countDownPage(){ 
for (let i = 5; i > 1; i--) {
    countDown.innerText = i
}
windowShopper()
// window.location = sucess.html
}

function windowShopper(){

    window.location.assign("success.html")


}
countDownPage()