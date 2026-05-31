import Header from "../../components/Header";

export default function UserLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="pt-20 pb-5">{children}</main>
    </div>
  );
}
