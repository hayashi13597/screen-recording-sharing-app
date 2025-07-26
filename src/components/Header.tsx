import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <figure className="details">
          {userImg && (
            <Image
              src={userImg}
              alt="user"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}
          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </figure>

        <aside>
          <Link href="/upload">
            <Image
              src="/icons/upload.svg"
              alt="Upload"
              width={16}
              height={16}
            />
            <span>Upload a video</span>
          </Link>
          <div className="record">
            <button className="primary-btn">
              <Image src={ICONS.record} alt="Record" width={16} height={16} />
              <span>Record a video</span>
            </button>
          </div>
        </aside>
      </section>

      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders ..."
          />
          <Image src="/icons/search.svg" alt="Search" width={16} height={16} />
        </div>

        <DropdownList />
      </section>
    </header>
  );
};

export default Header;
