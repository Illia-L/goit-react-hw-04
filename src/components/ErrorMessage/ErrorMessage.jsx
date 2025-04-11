import css from './ErrorMessage.module.css'

function ErrorMessage() {
  return (
    <p className={css.error}>Failed to load images. Please try again later.</p>
  )
}

export default ErrorMessage

