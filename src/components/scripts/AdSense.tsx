import Script from "next/script";

function NeworMedia() {
  return (
    <Script
      strategy="lazyOnload"
      async
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9810490020982461"
    />
  );
}

export default NeworMedia;
