class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.setFullYears(this.startDate.getFullYear + Math.round(this.startDate.getMonth()/12))
  }
}
