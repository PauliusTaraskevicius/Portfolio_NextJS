import Head from "next/head";

function Meta({ title, description, keywords }) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Paulius Taraskevicius portfolio",
  keywords: "portfolio, posts, project, coding, wed development",
  description: "take a look at my work",
};

export default Meta;
