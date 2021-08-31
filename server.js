const express = require('express')
const connectDB = require('./DB/connectDB')
const PersonDB = require('./Model/model')

connectDB()

//Create and Save a Record of a Model:

// const Person = new PersonDB({
//     name: "Meyssa",
//     age: 23,
//     favoriteFoods: ['yourt glacé', 'soda']
// })
// Person.save(function (err) {
//     if (err) return handleError(err);
// });

//Create Many Records with model.create()

// PersonDB.create([{
//         name: "Meyssa",
//         age: 23,
//         favoriteFoods: ['yourt glacé', 'soda']},
//         {
//             name: "ME",
//             age: 23,
//             favoriteFoods: ['yourt glacé', 'soda']}
//     ],function (err) {
//         if (err) return handleError(err);
//         // saved!
//       })



//Use model.find() to Search Your Database

// const searchByName = async ()=>{
//     try {
//         const person = await PersonDB.find({ name: 'Meyssa'}).exec();
//     } catch (error) {
//         handleError(err);
//     }
// }
//searchByName()



/*
Use model.findOne() to Return a Single Matching Document from Your Database
*/

// const findOne = async ()=>{
//     try {
//         const food = await PersonDB.findOne({ favoriteFoods: ['soda'] }).exec();
//     } catch (error) {
//         handleError(err);
//     }
// }
//findOne()


//Use model.findById() to Search Your Database By _id
 

let id = '612cd60c4ad25c0914a06b87'
// const findById = async (id)=>{
//     try {
//         const person = await PersonDB.findById(id).exec();
//     } catch (error) {
//         handleError(err);
//     }
// }
// findById(id)

//const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
//Perform Classic Updates by Running Find, Edit, then Save


// const update=(id)=>{
//     findById(id,(err,person)=>{
//         try {
//             if(err) return console.log(err)
//             person.favoriteFoods.push('hamburger');
//             person.save(function (err) {
//                     if (err) return handleError(err);
//                 });
//         } catch (error) {
//             handleError(err);
//         }
//     })
// }
// update(id)


//Perform New Updates on a Document Using model.findOneAndUpdate()

const query = {name:'Me'}
// const UpdatePerson = async () =>{
//     awit PersonDB.findOneAndUpdate(query, { age : 20 }, (err)=>{
//         console.log(err)
//     })
// }
// UpdatePerson()

//Delete One Document Using model.findByIdAndRemove

// const findAndRemove = async () =>{
//     await PersonDB.findByIdAndUpdate(id, { name: 'Meyssa' }, (err)=>{
//                 console.log(err)
//             })

// }
// findAndRemove()

//MongoDB and Mongoose - Delete Many Documents with model.remove()

// const deleteP = () =>{
//     PersonDB.remove({_id:id}, done=(err)=>{
//         console.log(err)
//     })

// }
// deleteP()




const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
    err ?
        console.log(err) :
        console.log("server is running")
})