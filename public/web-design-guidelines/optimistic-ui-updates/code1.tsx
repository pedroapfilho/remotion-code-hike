// ❌ Wrong: Waiting for server makes UI feel slow
function LikeButton({ postId }: { postId: string }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);
    await api.likePost(postId);
    setIsLiked(true);
    setIsLoading(false);
  };

  return (
    <button onClick={handleLike} disabled={isLoading}>
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
}
