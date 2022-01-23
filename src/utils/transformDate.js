import moment from "moment";
const transformDate = function formatUnix(value) {
  if (value) {
    return moment(value).format("DD/MM/YYYY");
  }
};
export default transformDate;