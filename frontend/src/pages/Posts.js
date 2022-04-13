import { useEffect } from "react";
import { listPosts } from "../actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container } from "react-bootstrap";

const Posts = () => {
  const dispatch = useDispatch();

  const postsList = useSelector((state) => state.postsList);
  const { posts } = postsList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <Container>
      <Card style={{ width: "18rem", margin: "1rem" }}>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <Card.Body key={id}>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          );
        })}
      </Card>
    </Container>
  );
};

export default Posts;
