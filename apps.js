document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const resultDisplay = document.querySelector('#result')
    const startPauseButton = document.querySelector('#start-pause-button')
    const squares = document.querySelectorAll('.grid div')
    const logsLeft = document.querySelectorAll('.log-left')
    const logsRight = document.querySelectorAll('.log-right')
    const carsLeft = document.querySelectorAll('.car-left')
    const carsRight = document.querySelectorAll('.car-right')
   
      const squares = document.querySelectorAll('.grid div')
      const logsLeft = document.querySelectorAll('.log-left')
      const logsRight = document.querySelectorAll('.log-right')
      const carsLeft = document.querySelectorAll('.car-left')
      const carsRight = document.querySelectorAll('.car-right')
      const timeLeft = document.querySelector('#time-left')
      const result = document.querySelector('#result')
      const startBtn = document.querySelector('#button')
      const width = 9
      let currentIndex = 76
      let currentTime = 20
      let timerId
    let currentIndex = 76
    const width = 9
    let timerId
    let outcomeTimerId
    let currentTime = 20
   
      //move the Frog
      function moveFrog(e) {
    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog')
        switch(e.keyCode) {
          case 37:
            if(currentIndex % width !== 0) currentIndex -= 1
            break
          case 38:
            if(currentIndex - width >= 0) currentIndex -= width
            break
          case 39:
            if(currentIndex % width < width - 1) currentIndex += 1
            break
          case 40:
            if (currentIndex + width < width * width) currentIndex += width
            break
   
        switch(e.key) {
            case 'ArrowLeft' :
                 if (currentIndex % width !== 0) currentIndex -= 1
                break
            case 'ArrowRight' :
                if (currentIndex % width < width - 1) currentIndex += 1
                break
            case 'ArrowUp' :
                if (currentIndex - width >=0 ) currentIndex -= width
                break
            case 'ArrowDown' :
                if (currentIndex + width < width * width) currentIndex += width
                break
        }
        squares[currentIndex].classList.add('frog')
        lose()
        win()
      }
    }
   