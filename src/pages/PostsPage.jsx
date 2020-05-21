import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import { Post } from '../Components/Posts';

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from '../actions/postsActions';

// Redux state is now in the props of the component
const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts... </p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
    //posts: state.posts,
  };
};

// connect Redux to React
export default connect(mapStateToProps)(PostsPage);
