class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - Math.round(this.startDate.getMonths()).getFullYear()
  }
}
