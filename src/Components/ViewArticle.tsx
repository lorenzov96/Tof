import { OneCard } from "./Card";

export function ViewArticle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginLeft: "50px",
        marginRight: "50px",
        marginTop: "150px",
      }}
    >
      <OneCard />
      <OneCard />
      <OneCard />
      <OneCard />
    </div>
  );
}
