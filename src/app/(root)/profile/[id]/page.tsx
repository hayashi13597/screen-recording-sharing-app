import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dymmyCards } from "@/constants";
import React from "react";

const Profile = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="xxx@gmail.com"
        title="John"
        userImg="/images/dummy.jpg"
      />
      <section className="video-grid">
        {dymmyCards.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            visibility={video.visibility as Visibility}
          />
        ))}
      </section>
    </div>
  );
};

export default Profile;
