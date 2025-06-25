const videos = [
  {
    image: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
    tag: "Video",
    title: "How John Choi Won Two EVO Titles in One Weekend | EVO Legends",
    link: "#"
  },
  {
    image: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    tag: "Video",
    title: "How Alex Valle Became Mr. Street Fighter | EVO Legends",
    link: "#"
  },
  {
    image: "https://img.youtube.com/vi/sBws8MSXN7A/hqdefault.jpg",
    tag: "Video",
    title: "How Did Tokido Get His Name?",
    link: "#"
  },
  {
    image: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
    tag: "Video",
    title: "The Best of Guilty Gear Strive – EVO 2024 Highlights",
    link: "#"
  }
];

function LatestVideos() {
  return (
    <section className="bg-gray-900 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 text-center tracking-wider">
          Latest Videos
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {videos.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-950 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex-1 flex flex-col">
                <span className="uppercase text-xs text-yellow-400 font-bold mb-2">
                  {item.tag}
                </span>
                <h3 className="text-white font-semibold text-base mb-4 flex-1">{item.title}</h3>
                <a
                  href={item.link}
                  className="inline-block mt-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-xs px-4 py-2 rounded-full font-bold transition text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WATCH VIDEO
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="bg-gray-200 hover:bg-yellow-400 text-gray-800 font-bold px-8 py-2 rounded-full transition flex items-center gap-2"
          >
            VIEW ALL VIDEOS
            <span className="text-xl">➔</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestVideos;
