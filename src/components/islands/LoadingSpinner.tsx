interface LoadingSpinnerProps {}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    </>
  )
}
