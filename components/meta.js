import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/logo-vp6.svg' />
      <title>{title}</title>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'VP6 Consult',
  keywords: 'transformação digital',
  description: 'site vp6 consultoria',
}

export default Meta
