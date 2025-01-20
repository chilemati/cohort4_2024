import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cartAtom } from '../atoms/cart'
import { navList } from './navData'
import { UserAtom } from "../atoms/user";
import classNames from 'classnames'

const Nav = () => {
const cart = useRecoilValue(cartAtom);
const [User,setUser] = useRecoilState(UserAtom);

function handleSignout() {
   setUser({isLoggedIn:false,data:{}})
}
  return (
    <nav className="bg-black    ">
        <ul className='flexBetween h-[15vh] px-3 ' >
            <li className='text-white' >Logo </li>
            <li className='flexBetween gap-3' >
                {/* router: step 3 */}
               {
                navList.map((each,i)=> (
                  <Fragment key={i} >
                  {each.show  && <Link  className={classNames('text-white font-bold hover:underline ',{
                    "hidden": each.name === 'Login' && User.isLoggedIn,
                    "flex": each.name === 'Login' && !User.isLoggedIn,
                    
                  })} to={each.to} > {each.name} </Link> }
                </Fragment>
                ))
               }
                
               {
                User.data.role === 'Admin' &&  <Link  className='text-white font-bold hover:underline ' to="/create"> Create Blog </Link>
               }
               {
                User.isLoggedIn &&  <Link onClick={()=> handleSignout()} className='text-white font-bold hover:underline ' to="#"> Signout </Link>
               }
                <Link className='text-white font-bold hover:underline ' to="#"> Cart [{cart}] </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav