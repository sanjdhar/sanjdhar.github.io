// Get the array of gameboards
instructionsArray = document.getElementsByTagName("ol")
gameboardArray = document.getElementsByClassName("game-box")

messageDisplay.innerText="Instructions to play Deal or No Deal"
setTimeout(function(){instructionsArray[0].classList.add("jello-horizontal")}, 500)
setTimeout(function(){gameboardArray[7].classList.add("initial-box")},1500)
setTimeout(function(){instructionsArray[1].classList.add("jello-horizontal")}, 2500)
setTimeout(function(){gameboardArray[2].classList.add("opened-box");gameboardArray[2].style.boxShadow = "0px 0px" },3500)
setTimeout(function(){gameboardArray[3].classList.add("opened-box");gameboardArray[3].style.boxShadow = "0px 0px" },4000)
setTimeout(function(){gameboardArray[0].classList.add("opened-box");gameboardArray[0].style.boxShadow = "0px 0px" },4500)
setTimeout(function(){gameboardArray[1].classList.add("opened-box");gameboardArray[1].style.boxShadow = "0px 0px" },5000)
setTimeout(function(){gameboardArray[4].classList.add("opened-box");gameboardArray[4].style.boxShadow = "0px 0px" },5500)
setTimeout(function(){gameboardArray[5].classList.add("opened-box");gameboardArray[5].style.boxShadow = "0px 0px" },6000)
setTimeout(function(){instructionsArray[2].classList.add("jello-horizontal")}, 7500)
setTimeout(function(){showJumbotronWithBankerCall()}, 8500)
setTimeout(function(){instructionsArray[3].classList.add("jello-horizontal")}, 9500)
setTimeout(function(){instructionsArray[4].classList.add("jello-horizontal")}, 10500)
setTimeout(function(){hideJumbotron()}, 12000)
setTimeout(function(){gameboardArray[6].classList.add("opened-box");gameboardArray[6].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[9].classList.add("opened-box");gameboardArray[9].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[10].classList.add("opened-box");gameboardArray[10].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[11].classList.add("opened-box");gameboardArray[11].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[12].classList.add("opened-box");gameboardArray[12].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[13].classList.add("opened-box");gameboardArray[13].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[14].classList.add("opened-box");gameboardArray[14].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[15].classList.add("opened-box");gameboardArray[15].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[16].classList.add("opened-box");gameboardArray[16].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[8].classList.add("opened-box");gameboardArray[8].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[18].classList.add("opened-box");gameboardArray[18].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[19].classList.add("opened-box");gameboardArray[19].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[20].classList.add("opened-box");gameboardArray[20].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[21].classList.add("opened-box");gameboardArray[21].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[22].classList.add("opened-box");gameboardArray[22].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[23].classList.add("opened-box");gameboardArray[23].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){gameboardArray[24].classList.add("opened-box");gameboardArray[24].style.boxShadow = "0px 0px" },13000)
setTimeout(function(){instructionsArray[5].classList.add("jello-horizontal")}, 15000)
setTimeout(function(){gameboardArray[7].classList.remove("initial-box")},16500)
setTimeout(function(){gameboardArray[17].classList.add("initial-box")},16500)
setTimeout(function(){instructionsArray[6].classList.add("jello-horizontal")}, 17000)
setTimeout(function(){showJumbotronWithWinningPage(18, 1000000)}, 18000)
setTimeout(function(){hideJumbotron()}, 19500)
