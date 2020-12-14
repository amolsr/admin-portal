import MaterialTable from "material-table";
import { useParams } from "react-router-dom";

export default function Table(props) {
  let params = useParams();
  console.log(params);
  return (
    <MaterialTable
      title="Multiple Actions Preview"
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
          onClick: (event) => alert("You want to add a new row"),
        },
      ]}
      options={{
        paging: false,
        actionsColumnIndex: -1,
      }}
    />
  );
}
