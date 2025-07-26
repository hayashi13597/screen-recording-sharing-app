import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import VideoCard from "@/components/VideoCard";
import { dymmyCards } from "@/constants";
import React from "react";

const Page = () => {
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

      <Pagination currentPage={1} totalPages={10} />
    </main>
  );
};

export default Page;
