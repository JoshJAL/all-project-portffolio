import FancyLink from '@/components/fancyLink/FancyLink';
import { ImLinkedin, ImTwitter, ImInstagram } from 'react-icons/im';

export default function AboutPage() {
  return (
    <div>
      <h1 className='mb-5 text-lg underline underline-offset-4 decoration-teal-500 decoration-4'>
        Contact Information
      </h1>
      <p className='mb-3 text-lg'>
        I&apos;m currently looking for new opportunities. If you&apos;re interested in reaching out to me for work, to
        collaborate on a project, or simply to connect please feel free to click on one of the links listed below! The
        best way to reach me is via email or LinkedIn. I do not post much on social media, but I do promise that I am
        actively engaged with anyone who reaches out.
      </p>
      <div className='flex flex-col'>
        <FancyLink href='https://www.linkedin.com/in/josh-lev/'>
          <ImLinkedin />
          LinkedIn
        </FancyLink>
        <FancyLink href='https://twitter.com/mygovtname'>
          <ImTwitter />
          Twitter
        </FancyLink>
        <FancyLink href='https://www.instagram.com/joshuaalevine3/'>
          <ImInstagram />
          Instagram
        </FancyLink>
      </div>
    </div>
  );
}
