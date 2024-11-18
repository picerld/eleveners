import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          <span className='bg-darkBg text-white rounded px-2 dark:bg-darkText dark:text-darkBg'>SMKN</span> 11 BANDUNG
        </h1>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          Teaching, loving, learning and caring each other is what we do!!
          <br /> With{' '}
          <a
            target="_blank"
            href="https://www.neobrutalism.dev/"
            className="font-heading underline"
          >
            neobrutalism
          </a>{' '}
          styles.
        </p>
        <a href="#features">
        <Button
          size="lg"
          className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
        >
          Get started
        </Button>
        </a>
      </div>
    </header>
  )
}
