import { Metadata } from "next";
import { FormCreate } from "./_components/FormCreate";

export const metadata: Metadata = {
  title: "Airplanes | Create",
};

interface AirplanesCreatePageProps {}

const AirplanesCreatePage = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah data Airplane</div>
      </div>
      <FormCreate />
    </div>
  );
};

export default AirplanesCreatePage;
