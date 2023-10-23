"use client"

// handling server errors from actions.js and allowing reset
export default function error({error,reset}) {

  return (
    <main className="text-center">
        <h2 className='text-4xl'>Oh no! encountered error</h2>
        <p>{error.message}</p>
       <button onClick={reset} className="btn-primary mx-auto my-4">
            Try Again?
       </button>
    </main>
  )
}
