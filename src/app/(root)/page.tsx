import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import VideoCard from "@/components/VideoCard";
import { dymmyCards } from "@/constants";
import React from "react";

const Home = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  return (
    <main className="wrapper page">
      <Header title="All videos" subHeader="Public Library" />

      <section className="video-grid">
        {dymmyCards.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            visibility={video.visibility as Visibility}
          />
        ))}
      </section>

      <Pagination
        currentPage={page ? parseInt(page as string, 10) : 1}
        totalPages={20}
        queryString={query}
        filterString={filter}
      />
    </main>
  );
};

export default Home;
