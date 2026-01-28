// ✅ Right: Update UI immediately, rollback on error
function LikeButton({ postId }: { postId: string }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    const previousState = isLiked;
    setIsLiked(!isLiked); // Optimistic update

    try {
      await api.toggleLike(postId);
    } catch {
      setIsLiked(previousState); // Rollback on error
      toast.error("Failed to update. Please try again.");
    }
  };

  return (
    <button onClick={handleLike}>
      {isLiked ? "❤️" : "🤍"}
    </button>
  );
}
