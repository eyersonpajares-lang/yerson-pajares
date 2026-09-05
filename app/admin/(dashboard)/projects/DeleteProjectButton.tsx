"use client";

import { deleteProjectAction } from "./actions";

export function DeleteProjectButton({ id, title }: { id: string; title: string }) {
  return (
    <form action={deleteProjectAction.bind(null, id)}>
      <button
        type="submit"
        onClick={(e) => {
          if (!window.confirm(`Delete "${title}"? This cannot be undone.`)) {
            e.preventDefault();
          }
        }}
        className="font-mono text-xs uppercase tracking-wide text-muted hover:text-accent"
      >
        Delete
      </button>
    </form>
  );
}
