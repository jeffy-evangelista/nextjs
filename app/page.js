import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";
import "./globals.css";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(res);
  return (
    <main>
      <div className={style.flexs}>
        {res.results.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <Image
              src={imagePath + movie.poster_path}
              width={500}
              height={500}
              alt={movie.title}
              className="w-full max-h-40 h-full object-contain"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
