import { useState, useEffect } from "react";
import { useGlobalContext } from "./Context";
import { signOut } from "firebase/auth";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlus,
  AiOutlineCheck,
  AiOutlineHeart,
} from "react-icons/ai";
import {
  Container,
  StyledNav,
  StyledHeading,
  StyledTextarea,
  StyledPostList,
  StyledPost,
  StyledPostHeader,
  EditTextarea,
  StyledSpan,
  StyledPlus,
  LikeSection,
} from "./Crud.styled";

const Crud = () => {
  const { user, setIsLoggedIn, posts, setPosts } = useGlobalContext();

  const [post, setPost] = useState("");
  // const [updating, setUpdating] = useState(false);
  const [updatedPost, setUpdatedPost] = useState();
  const [creatingPost, setCreatingPost] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(true);

  const usersCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(usersCollectionRef);
    const allPosts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    if (user) {
      if (showAllPosts) {
        setPosts(allPosts);
      } else {
        setPosts(allPosts.filter((post) => post.user === user.email));
      }
    }
  };

  const createPost = async () => {
    const time = new Date().getTime();
    await addDoc(usersCollectionRef, {
      user: user.email,
      time: time,
      post: post,
      editing: false,
      likes: 0,
    });

    setCreatingPost(false);
    getPosts();
  };

  const handleEditing = (id, post) => {
    // setUpdating(true);
    setUpdatedPost(post);
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, editing: true } : post))
    );
  };

  const updatePost = async (id) => {
    const userDoc = doc(db, "posts", id);
    const newFields = { post: updatedPost };
    await updateDoc(userDoc, newFields);
    // setUpdating(false);
    getPosts();
  };

  const likePost = async (id, likes) => {
    const userDoc = doc(db, "posts", id);
    const newFields = { likes: likes + 1 };
    await updateDoc(userDoc, newFields);
    getPosts();
  };

  const deletePost = async (id) => {
    const userDoc = doc(db, "posts", id);
    await deleteDoc(userDoc);
    getPosts();
  };

  const logout = async () => {
    await signOut(auth);
    setPosts([]);
    setIsLoggedIn(false);
  };

  const handleDate = (postTime) => {
    const oneDay = 1000 * 3600 * 24;
    const now = new Date().getTime();
    const differenceMs = now - postTime;
    const postDate = new Date(postTime);

    if (differenceMs < 1000 * 60) {
      return "Just now";
    }
    if (differenceMs < oneDay) {
      return postDate.toLocaleTimeString().toLowerCase();
    }
    if (differenceMs > oneDay && differenceMs < oneDay * 2) {
      return `Yesterday ${postDate.toLocaleTimeString().toLowerCase()}`;
    } else {
      return postDate.toLocaleString().toLowerCase();
    }
  };

  useEffect(() => {
    let isMounted = true;

    getPosts();
    console.log("fired");
    return () => {
      return (isMounted = false);
    };
  }, [user, showAllPosts]);
  return (
    <Container>
      <StyledNav>
        <ul>
          <li
            onClick={() => {
              setShowAllPosts(true);
              setCreatingPost(false);
            }}
          >
            All posts
          </li>
          <li
            onClick={() => {
              setShowAllPosts(false);
              setCreatingPost(false);
            }}
          >
            My posts
          </li>
        </ul>
        <div>
          <span>{user?.email}</span>
          <button onClick={logout}>Log out</button>
        </div>
      </StyledNav>

      <StyledHeading>
        <h3>What's on your mind today?</h3>
        <p onClick={() => setCreatingPost(true)}>start writing</p>
      </StyledHeading>
      {creatingPost ? (
        <div>
          <StyledPlus onClick={createPost}>
            <AiOutlinePlus />
          </StyledPlus>
          <StyledTextarea
            placeholder="Write from your heart"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
      ) : (
        <StyledPostList>
          {posts.length === 0 && <p>write your first post</p>}
          {posts.map((item) => {
            const { time, user, id, editing, post, likes } = item;
            return (
              <StyledPost key={id}>
                <StyledPostHeader>
                  <div>
                    <p>{handleDate(time)}</p>
                    <p>{user}</p>
                  </div>

                  {!showAllPosts && (
                    <div>
                      <StyledSpan
                        onClick={() => handleEditing(id, post)}
                        display={editing ? "none" : "default"}
                      >
                        <AiOutlineEdit />
                      </StyledSpan>
                      <StyledSpan
                        onClick={() => updatePost(id)}
                        display={editing ? "default" : "none"}
                      >
                        <AiOutlineCheck />
                      </StyledSpan>
                      <StyledSpan onClick={() => deletePost(id)}>
                        <AiOutlineDelete />
                      </StyledSpan>
                    </div>
                  )}
                </StyledPostHeader>

                {editing ? (
                  <EditTextarea
                    type="text"
                    value={updatedPost}
                    onChange={(e) => setUpdatedPost(e.target.value)}
                  />
                ) : (
                  <div>
                    <p>{post}</p>
                    {showAllPosts && (
                      <LikeSection>
                        <div>
                          <span>
                            <AiOutlineHeart />
                          </span>
                          <span> {likes}</span>
                        </div>
                        <span onClick={() => likePost(id, likes)}>Like it</span>
                      </LikeSection>
                    )}
                  </div>
                )}
              </StyledPost>
            );
          })}
        </StyledPostList>
      )}
    </Container>
  );
};

export default Crud;
