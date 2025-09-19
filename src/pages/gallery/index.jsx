import ScrollToTop from "../../layout/Scroll";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../utils/Hero";
import { gallery } from "../../utils/Gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Index() {
  return (
    <main className="flex flex-col">
      <ScrollToTop />
      <Header />
      <Hero title="Our Gallery" />
      <main className="px-5 md:px-20 py-10 md:py-20 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col justify-center items-center gap-5"
          >
            <ImageGallery
              showIndex={true}
              showThumbnails={false}
              lazyLoad={true}
              items={
                item?.images?.map((img) => ({
                  original: img,
                  thumbnail: img,
                })) ?? []
              }
              className="h-full w-full min-w-full min-h-full"
            />
            <b className="text-lg">{item?.name}</b>
          </div>
        ))}
      </main>
      <Footer />
    </main>
  );
}
