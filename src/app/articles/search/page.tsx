interface searchArticlePageProps {
  searchParams: {
    searchText: string;
  };
}
const searchArticles = async ({ searchParams }: searchArticlePageProps) => {
  const { searchText } = await searchParams;

  return (
    <section className="fix-height container m-auto px-5">
      <h1>search text is : {searchText}</h1>
    </section>
  );
};

export default searchArticles;
