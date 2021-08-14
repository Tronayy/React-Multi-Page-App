import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  {
    id: "q1",
    author: "Usman",
    text: "React is fun",
  },
  {
    id: "q2",
    author: "Shuja",
    text: "React is not fun",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
