import React from 'react'

const Footer = () => {
    // class user {
    //     secred_id = '444ad';
    //     constructor(email,password) {
    //         this.email = email,
    //         this.password= password;

    //     }
    // }
    // class ChilesPhoneNumber {
    //     number= '08071146954'
    //     constructor() {

    //     }
    // }
    // const firstUser = new user('amadichile@gmail.com','anything.ocm')
    // const userRichy = new user('richy@gmail.com','richman.ocm')
    // const myNumber = new ChilesPhoneNumber()
    // const d = new Date();
    // console.log(d,typeof d);
    // console.log(firstUser)
    // console.log(firstUser.email)
    // console.log(userRichy.email)
    // console.log(myNumber.number)

    const d = new Date();
  return (
    <footer className='h-[30vh] text-center flex items-center justify-center ' >
        <p className='' > &copy; Copyrite Cohort 1, {d.getFullYear()} </p>
    </footer>
  )
}

export default Footer