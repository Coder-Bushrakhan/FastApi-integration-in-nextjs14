// Delete.tsx

import { useState } from "react";

export default function Delete({ id, content, onDelete }:any) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    setIsClicked(true); // Update button state visually
    await onDelete(id, content); // Call the provided onDelete function
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isClicked}>
        {isClicked ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
