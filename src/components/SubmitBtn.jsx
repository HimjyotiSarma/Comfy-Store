import { useNavigation } from 'react-router-dom'

export default function SubmitBtn({ text }) {
  const navigation = useNavigation()
  const isPageSubmitting = navigation.state === 'submitting'
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isPageSubmitting}
    >
      {isPageSubmitting ? (
        <>
          <span className="loading loading-spinner"></span> sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}
