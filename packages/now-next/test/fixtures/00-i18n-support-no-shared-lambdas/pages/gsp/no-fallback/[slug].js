import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page(props) {
  const router = useRouter();

  if (router.isFallback) return 'Loading...';

  return (
    <>
      <p id="gsp">gsp page</p>
      <p id="props">{JSON.stringify(props)}</p>
      <p id="router-locale">{router.locale}</p>
      <p id="router-locales">{JSON.stringify(router.locales)}</p>
      <p id="router-query">{JSON.stringify(router.query)}</p>
      <p id="router-pathname">{router.pathname}</p>
      <p id="router-as-path">{router.asPath}</p>
      <Link href="/">
        <a id="to-index">to /</a>
      </Link>
      <br />
    </>
  );
}

export const getStaticProps = ({ params, locale, locales }) => {
  return {
    props: {
      params,
      locale,
      locales,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { slug: 'first' } },
      '/gsp/no-fallback/second',
      { params: { slug: 'first' }, locale: 'en-US' },
      '/nl-NL/gsp/no-fallback/second',
    ],
    fallback: false,
  };
};
