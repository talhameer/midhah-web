import Lyrics from "@/models/Lyrics";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<Lyrics> = async (
  context: any
) => {
  const genre = context.params.genre;
  const slug = context.params.slug;

  const res = await fetch(`https://api.midhah.com/v2/lyrics/${genre}/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });

  if (res.data) {
    const lyrics = res.data[0];

    return {
      props: lyrics,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default function LyricsPage(lyric: Lyrics) {
  return (
    <div className="container mx-auto  w-full md:w-[85%] ">
      <div className="relative overflow-hidden naat card md:rounded-[10px]">
        <div className="py-[60px] md:py-[150px] text-center">
          <h1 className="text-2xl md:text-5xl mb-1 text-white">
            {lyric.title}
          </h1>
        </div>
      </div>
      <p className="whitespace-pre-wrap text-2xl md:text-4xl text-center py-10 poetry leading-10 md:leading-[55px]">
        {lyric.lyrics}
      </p>
    </div>
  );
}
