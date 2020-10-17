import { log } from "handlebars";
import css from "./css/style.css";
import timerRafs from './refs/timerRafs.js'

function getTimeBetween(){
  let timeBetween = +new Date(`Jan 1 2021`) - new Date()

  let daysBrfore = Math.floor(timeBetween / 1000 / 60 / 60 /24)
  let hoursBefore = Math.floor(timeBetween % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
  let minutsBefore = Math.floor(timeBetween % (1000 * 60 * 60) / (1000 * 60))
  let secondsBefore = Math.floor(timeBetween % (1000 * 60) / (1000))

  timerRafs.daysContent.textContent = daysBrfore
  timerRafs.hoursContent.textContent = hoursBefore
  timerRafs.minsContent.textContent = minutsBefore
  timerRafs.secondsContent.textContent = secondsBefore
}

let interval = setInterval(getTimeBetween, 1000)

