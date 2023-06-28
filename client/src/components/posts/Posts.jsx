import Post from '../post/Post';
import './posts.css';


export default function Posts({ posts }) {
  const set = new Set(posts)
  return (
    <div className='posts'>
      { Array.from(set).map((post)=> (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}
