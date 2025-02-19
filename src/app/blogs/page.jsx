import Image from "next/image";

const blogsdata = [
  {
    title: "Blog 1",
    description: "This is a blog description 111",
    image:
      "/thumbnails/comic-fighting-cartoon-background-versus-background-illustration-free-vector.jpg",
  },
  {
    title: "Blog 2",
    description: "This is a blog description 222",
    image:
      "/thumbnails/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
  {
    title: "Blog 2",
    description: "This is a blog description 222",
    image:
      "/thumbnails/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
  {
    title: "Blog 2",
    description: "This is a blog description 222",
    image:
      "/thumbnails/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
];

const Blogs = () => {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {blogsdata.map((blog, index) => {
        return (
          <Blogcard
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        );
      })}
    </section>
  );
};

const Blogcard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-600/20 rounded-lg flex flex-col gap-2 p-2 hover:scale-[1.03] transition-all delay-100 duration-300 w-fit">
      <Image
        src={image}
        alt="blog image"
        width={300}
        height={170}
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold text-gray-200">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Blogs;
