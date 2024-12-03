import Courses from "@/components/courses";
import Head from "next/head";

const OnePage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SKILLS</title>
        <script src="http://localhost:8097"></script>
      </Head>
      <Courses />
    </div>
  );
};

export default OnePage;