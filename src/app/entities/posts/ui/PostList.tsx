import type { FC } from 'react'
import { useGetPostQuery } from '../api/postApi'

interface IPostListProps {}

const PostList: FC<IPostListProps> = ({}) => {
  const { data: posts } = useGetPostQuery(null)

  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}

export default PostList
