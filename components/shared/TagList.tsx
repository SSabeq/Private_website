export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-md border border-line bg-muted-bg px-2 py-1 text-xs text-muted">
          {tag}
        </span>
      ))}
    </div>
  );
}
