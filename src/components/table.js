import MaterialTable from "material-table";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "../actions/alert";

export default function Table(props) {
  let params = useParams();

  const dispatch = useDispatch();

  const handleClick = () => {
    var form = {
      set: true,
      fields: ["commission", "category"],
    };
    dispatch(setAlert(true, "Add Commision", form));
  };
  // date = new Date(parseInt(_id.toString().substring(0, 8), 16) * 1000);
  return (
    <MaterialTable
      title={params.platform}
      columns={[
        { title: "Name", field: "name" },
        { title: "Surname", field: "surname" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
          title: "Birth Place",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
      ]}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34,
        },
      ]}
      actions={[
        {
          icon: "save",
          tooltip: "Save User",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
        {
          icon: "delete",
          tooltip: "Delete User",
          onClick: (event, rowData) =>
            alert("You want to delete " + rowData.name),
        },
        {
          icon: "add",
          tooltip: "Add User",
          isFreeAction: true,
          onClick: (event) => handleClick(),
        },
      ]}
      options={{
        paging: false,
        actionsColumnIndex: -1,
      }}
    />
  );
}
