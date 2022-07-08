interface LoadingSpinnerProps {}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-[black]">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 dark:border-white rounded-full animate-spin"></div>
      </div>
    </>
  )
}
