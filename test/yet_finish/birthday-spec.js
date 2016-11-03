// const expect = require('chai').expect
//     // , Database = require('../../lib/yet_finish/Database')
//     , td = require('testdouble')




// function OrderThing(){
//     let container = []
//     this.orderItems = (items)=>{
//         if(!items)return false
//         container = items
//         return true
//     }
//     this.getOrder = function(){
//         return container
//     }
//     this.getSubtotal = function(){
//         return container.reduce((sum, item)=>{
//             return sum += item.qty * item.price
//         },0)
//     }
//     this.orderSummary = function(){
//         return {items: container, subtotal: this.getSubtotal()}
//     }
//     this.payToBank= function(urlConnection, callback){
//         console.log(urlConnection)
//         if(!urlConnection.isConnected) return callback(`cannot connect to ${urlConnection.connectedUrl}`)
//         console.log('here')
//         urlConnection.pay(this.getSubtotal(), (err, res)=>{
//             if(err)return callback(err)
//             return callback(null,res)
//         })
//     }
// }


// var PayThing = {
//     connect: function(url){
//         this.connectedUrl = url
//         if(url !== 'goodUrl') return this
//         this.isConnected = true
//         return this
//     },
//     pay: function(amount, callback){
//         if(!this.isConnected) throw Error('Not connected to database')
//         return callback(null, `you have paid ${amount} to the bank`)
//     },
//     isConnected: false,
//     connectedUrl: ''
// }

    
// describe('OrderThing', ()=>{
//     it('.orderItems()', ()=>{
        
//         // console.log(OrderThing)


//         // var PayThing = {
//         //     connect: function(){},
//         //     good: 'hi'
//         // }
//         // var connect = td.replace(PayThing, 'connect')
//         // td.when(connect('goodUrl','apple')).thenReturn(true)
//         // console.log(connect('goodUrl','apple'))
        
        
//         // console.log(td.explain(PayThing.connect).calls[0].args)
        
//         // td.when(PayThing.connect('goodUrl')).thenReturn(true)

//         // let cart = td.object(OrderThing)
//         let cart = new OrderThing()
//         let items = [
//             {name: 'apple', qty:1, price:10},
//             {name: 'orange', qty:2, price:20},
//             {name: 'berry', qty:3 , price:50}
//         ]
//         td.replace(cart, 'getSubtotal')
//         td.when(cart.getSubtotal()).thenReturn(33)
//         console.log(cart.orderSummary())
//         // expect(cart.orderItems(items)).to.be.true
//         // expect(cart.getOrder()).to.be.instanceOf(Array)
//         // expect(cart.getSubtotal()).to.equal(200)
//         // cart.payToBank(PayThing.connect('goodUrl'), (err, res)=>{
//         //     console.log(err)
//         //     // expect(res).to.equal('you have paid 200 to the bank')
//         // })

//         // cart.payToBank(PayThing.connect('badUrl'), (err, res)=>{
//         //     expect(err).to.equal('cannot connect to badUrl')
//         // })        

        
//         // . // 1
//         // explanation.calls 
        
//     })
// })

// // describe('PayThing', ()=>{
// //     it('should pass', (done)=>{
// //         // expect(PayThing.connect('url').isConnected).to.be.true
// //     })
// // })











