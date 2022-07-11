interface SectionProps {
  children: React.ReactNode
  customTailwind?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  customTailwind,
}) => {
  return (
    <>
      <section className={`max-w-screen-2xl h-[700px] mx-auto ${customTailwind}`}>
        {children}
      </section>
    </>
  )
}
