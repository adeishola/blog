import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts,setPosts] = useState([]);

  const client = axios.create({
    baseURL: "http://localhost:5001/api/"
  });

  const { search } = useLocation();

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await client.get("/posts" + search)
      setPosts(res.data)
    };
    fetchPosts()
  },[client, search]);

  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts} />
      <Sidebar />
    </div>
    </>
  )
}
