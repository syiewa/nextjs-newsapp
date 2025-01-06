"use client"
import { useEffect } from "react"

export default function FilterError({
   error,
   reset
}: {
   error: Error & { digest?: string },
   reset: () => void
}) {

   useEffect(() => {
     console.error(error)
   },[error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>The page that you requested is not found! {error.message}</p>
      <button onClick={reset}>
         Try again
      </button>
    </div>
  );
}