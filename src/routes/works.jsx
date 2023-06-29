import CustomCard from "../components/c-card";
import PageTitle from "../components/page-title";

export default function Works() {
  return (
    <>
      <div className="container" style={{ minHeight: "50vh" }}>
        <PageTitle title="Works" />
        <div className="row  mb-3">
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
    </>
  );
}
