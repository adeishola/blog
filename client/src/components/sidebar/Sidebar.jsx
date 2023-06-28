import './sidebar.css'
import axios from "axios"
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context)
  const PF = "http://localhost:5001/images/";


  const client = axios.create({
    baseURL: "http://localhost:5001/api/"
  })

  useEffect(() => {
    const getCats = async () => {
      const res = await client.get("/categories")
      setCats(res.data);
    }
    getCats();
  }, [client])

  const pics = new Set(user)
  const set = new Set(cats)
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle"></span>
        <span className="sidebarTitle">ABOUT ME</span>
        {Array.from(pics).map((user) =>
        <img src={PF + user.profilePic} key={user.username} alt="profile pix" />)}
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente praesentium facilis laborum nemo dolorum architecto reiciendis error consequatur, veritatis cupiditate repudiandae distinctio qui magni adipisci in aperiam voluptate perferendis ducimus?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList"> 
              {Array.from(set).map((c) => (
                <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebarListItem" key={c.id}>{c.name}</li>
                </Link>
              ))}
            </ul>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className='sidebarIcon' class="fab fa-facebook-square"></i>
                    <i className='sidebarIcon' class="fab fa-twitter-square"></i>
                    <i className='sidebarIcon' class="fab fa-pinterest-square"></i>
                    <i className='sidebarIcon' class="fab fa-instagram-square"></i>
                </div>
            </div>
      </div>
    </div>
  )
              }