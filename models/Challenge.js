export default class Challenge {
  constructor(){
    this.nozzle = Challenge.nozzleTypes[Math.floor(Math.random()*Challenge.nozzleTypes.length)]
    this.volume = Challenge.setGPM(this.nozzle)
    this.hoseType = Challenge.hoseTypes[Math.round(Math.random())]
    this.hoseLength = (Math.floor(Math.random() * 20)+1) * 50
    this.pdp = this.hoseType.flc*((this.volume/100)**2) * (this.hoseLength/100) + this.nozzle.psi
  }
  // Hide pdp from react props
  // get pdp(){
  //   return this.hoseType.flc*((this.volume/100)**2) * (this.hoseLength/100) + this.nozzle.psi
  // }

  static nozzleTypes = [
    {name: "SB", psi: 50, maxGPM: 300},
    {name: "SBM", psi: 80, maxGPM: 1200},
    {name: "Fog", psi: 100, maxGPM: 300}
  ]

  static hoseTypes = [
    {type: 1.75, flc: 15.5},
    {type: 2.5, flc: 2}
  ]

  static setGPM(nozzle){
    return Math.floor(Math.random()*(nozzle.maxGPM/5))*5
  }
}