import BreadcrumbComponent from "@/app/components/common/Breadcrumb";
import Banner from "@/app/components/pages/home/Banner";
import ListProduct from "@/app/components/pages/home/ListProduct";
import Promotions from "@/app/components/pages/home/Promotions";

export default function Home() {
  return (
    <div>
      <BreadcrumbComponent />
      <Banner />
      <ListProduct />
      <Promotions />
    </div>
  );
}
