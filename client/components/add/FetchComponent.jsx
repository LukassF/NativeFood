import useFetch from "../../hooks/useFetch";

const FetchComponent = ({ dataBody }) => {
  useFetch("post", "", "", "", 0, dataBody);

  return <></>;
};

export default FetchComponent;
