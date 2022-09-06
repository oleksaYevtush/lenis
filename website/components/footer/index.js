import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)}>
      <div className={cn(s.top, 'layout-grid')}>
        <p className={cn(s['first-line'], 'h1')}>
          Lenis is <br />
          <span className="contrast">Open source</span>
        </p>
        <div className={s['shameless-plug']}>
          <p className="h4">Studio Freight</p>
          <p className="p-s">
            An independent creative <br /> studio built on principle
          </p>
        </div>
        <p className={cn(s['last-line'], 'h1')}>
          & open to <span className="hide-on-desktop">&nbsp;</span> features,{' '}
          <br /> forks or prs &nbsp;
        </p>
        <Button
          className={s.cta}
          arrow
          icon={<GitHub />}
          href="https://github.com/studio-freight/lenis"
        >
          Let's build together
        </Button>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Link
            className={cn(s.link, 'p-s')}
            href="https://twitter.com/studiofreight"
          >
            Twitter
          </Link>
          <Link
            className={cn(s.link, 'p-s')}
            href="https://github.com/studio-freight"
          >
            GitHub
          </Link>
          <Link
            className={cn(s.link, 'p-s')}
            href="https://awwwards.com/studio-freight"
          >
            Awwwards
          </Link>
          <Link className={cn(s.link, 'p-s')} href="https://studiofreight.com">
            Website
          </Link>
          <Link
            className={cn(s.link, 'p-s')}
            href="https://darkroom.studiofreight.com"
          >
            Darkroom
          </Link>
        </div>
        <p className={cn('p-s', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Studio Freight
        </p>
      </div>
    </footer>
  )
}
