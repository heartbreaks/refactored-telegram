import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Layout from "../components/layout";
import Footer from "../components/Footer";

const isDarkMode = false;
const Index = () => {
  // const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <Layout>
        <div className=" m-auto">
          <main
            className={`flex flex-col lg:flex-row justify-center items-center lg:justify-between text-white pt-20 `}
            style={{ background: isDarkMode ? "darkBody" : "lightBody" }}
          >
            <section
              className={`flex flex-col items-center justify-center lg:justify-start lg:items-start ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <h1 className="font-extrabold text-2xl text-center lg:text-left lg:font-medium md:text-5xl xl:w-3/4 xl:leading-normal 2xl:text-7xl">
                Todois просто учебный проект.
              </h1>
              <p className="text-lg leading-relaxed mt-2 xl:w-3/4 xl:text-xl  xl:leading-loose text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius porro repellendus voluptatibus. Corporis earum enim, eum, ex harum iusto laboriosam magni, minus nam natus nulla quo quos. A aliquam architecto culpa cupiditate error ex itaque iure laboriosam, laudantium neque nobis non provident quibusdam quis rem velit veritatis voluptatem voluptatibus. Dolore..
              </p>
              <button className="bg-blue-500 text-white-150  w-full md:max-w-md lg:w-48 px-4 py-2 rounded-md my-5">
                Регистрация бесплатно
              </button>
            </section>
          </main>

          <div className="flex flex-col justify-center items-center mt-36 pb-24  xl:mt-48 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold">
              Продаваемый текст.
            </h2>
            <p className="text-center lg:w-3/4 mx-auto my-5 text-lg 2xl:text-2xl">
              Какое то доп описание текста.
            </p>
            <Link href="/signup">
              <button className="border border-white px-4 py-2 rounded-md bg-none hover:text-white bg-gray-150 text-black hover:bg-blue-500 hover:border-transparent hover:text-white-150 flex items-center transition-all duration-500">
                <span className="mr-1 ">Начать работу</span>
                <FaArrowRight size={16} />
              </button>
            </Link>
            <img
              src="/kallo_kanban_board.png"
              className="mx-auto rounded-md my-10 shadow-xl xl:max-w-7xl lg:w-1/2 bg-white"
              alt="kanban board example"
            />
            <span className="text-xl xl:text-xl">
              Подключайся йопта.
            </span>
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default Index;
