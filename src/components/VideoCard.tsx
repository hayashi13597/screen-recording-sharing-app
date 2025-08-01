"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        width={290}
        height={160}
        alt="thumbnail"
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg}
              width={34}
              height={34}
              alt="avatar"
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image src="/icons/eye.svg" alt="views" width={16} height={16} />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={handleCopy} className="copy-btn">
        <Image
          src={copied ? "/icons/checkmark.svg" : "/icons/link.svg"}
          alt="Copy Link"
          width={18}
          height={18}
        />
      </button>
      {duration && (
        <div className="duration">{Math.ceil(duration / 60)}min</div>
      )}
    </Link>
  );
};

export default VideoCard;
