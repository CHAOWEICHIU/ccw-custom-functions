const expect = require('chai').expect
    , sinon = require('sinon')


var NotifierService = function() {
    return {
        sendGreeting: function(user) {
            var birthday = user.birthdate();

            if(birthday.getMonth() === this.today.month &&
                birthday.getDate() === this.today.day) {
                // Send greeting.
                console.log('Happy birthday!');
                return true;
            }

            return false;
        },
        today: function(){
            return {
                month: (new Date()).getMonth(),
                day: (new Date()).getDate()
            }
        }
    }
};

var user = {
    birthdate: function() {
        return new Date("01/14/1985");
    }
};

describe('when the user birthday is today', ()=>{
    let ns, stubSendGreeting;

    before(()=>{
        ns = new NotifierService
        console.log(ns.today())
        stubToday = sinon.stub(ns, "today");
        stubToday.returns({month: 1, date: 14});
        
        console.log(stubToday.sendGreeting())
    })


    it('should be true', ()=>{
        
        // console.log(ns.stubSendGreeting.today)
        // console.log(ns.sendGreeting(user))
    })
})



// var ns = new NotifierService();
// console.log(ns.sendGreeting(user));