import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

/**
 * The NotFound's page.
 */
const NotFound = () => {
  const error = useRouteError()

  console.error(error)

  if (!isRouteErrorResponse(error)) return <div>Oops</div>

  return (
    <div>
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.statusText || error.data?.message}</i>
      </p>
    </div>
  )
}

export default NotFound
