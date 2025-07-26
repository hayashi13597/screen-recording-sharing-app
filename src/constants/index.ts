export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/icons/record.svg",
  close: "/icons/close.svg",
  upload: "/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dymmyCards = [
  {
    id: "1",
    title: "SnapChat Message",
    thumbnail: "/samples/thumbnail (1).png",
    createdAt: new Date(),
    userImg: "/images/jason.png",
    username: "jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "React Tutorial - Hooks Explained",
    thumbnail: "/samples/thumbnail (2).png",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    userImg: "/images/sarah.png",
    username: "sarah",
    views: 324,
    visibility: "public",
    duration: 892,
  },
  {
    id: "3",
    title: "Morning Coffee Setup",
    thumbnail: "/samples/thumbnail (3).png",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    userImg: "/images/alex.png",
    username: "alex",
    views: 78,
    visibility: "private",
    duration: 243,
  },
  {
    id: "4",
    title: "Game Development Livestream",
    thumbnail: "/samples/thumbnail (4).png",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    userImg: "/images/david.png",
    username: "david",
    views: 1205,
    visibility: "public",
    duration: 3420,
  },
  {
    id: "5",
    title: "Productivity Tips for Developers",
    thumbnail: "/samples/thumbnail (5).png",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    userImg: "/images/emily.png",
    username: "emily",
    views: 567,
    visibility: "public",
    duration: 678,
  },
  {
    id: "6",
    title: "Quick Cooking Recipe",
    thumbnail: "/samples/thumbnail (6).png",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    userImg: "/images/michael.png",
    username: "michael",
    views: 45,
    visibility: "private",
    duration: 189,
  },
  {
    id: "7",
    title: "Design System Overview",
    thumbnail: "/samples/thumbnail (7).png",
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    userImg: "/images/lisa.png",
    username: "lisa",
    views: 892,
    visibility: "public",
    duration: 1245,
  },
  {
    id: "8",
    title: "Weekend Project Demo",
    thumbnail: "/samples/thumbnail (8).png",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
    userImg: "/images/jessica.png",
    username: "jessica",
    views: 234,
    visibility: "public",
    duration: 534,
  },
];
