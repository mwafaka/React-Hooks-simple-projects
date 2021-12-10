



import moment from 'moment'

class CommingSoon{
  constructor(selector,endpoint){
this.selector=selector
this.endpoint=moment(endpoint)   
this.current=moment()
this.duration=moment.duration(this.endpoint -this.current)
this.minusSecond()
  }



minusSecond(){
  setInterval(()=> {
    this.duration = moment.duration(this.duration - 1000);
      document.querySelector(this.selector).innerText = this.duration.years() + ":years, " + this.duration.months() + ":months, " + this.duration.days() +
       ":days, "+ this.duration.hours() + ":hours, " +this.duration.minutes()  + ": minutes, " + this.duration.seconds() + ": seconds";
  }, 1000);
};
}


new CommingSoon("#countdown",{years:2040,months:11,days:1,hours:11,minutes:3,seconds:30})

















