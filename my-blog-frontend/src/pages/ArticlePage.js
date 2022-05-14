import React, { useState, useEffect } from "react";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvoteSection";
import NotFoundPage from "./NotFoundPage";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  //finds article in article content and displays by name
  const article = articleContent.find((article) => article.name === name);

  //define articleInfo which is populated by sending a request to the server
  //setArticleInfo changes value of article info
  //useState is initial value of articleInfo before we loaded value or changed state
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  //updates setArticleInfo every time URL changes
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`); //hold result of fetch
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  //Display comments
  <CommentsList comments={articleInfo.comments} />;

  //does not display current article in other articles section
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
