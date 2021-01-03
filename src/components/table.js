import MaterialTable from "material-table";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../actions/alert";
import { useEffect } from "react";
import { removeData, setData } from "../actions/table";
export default function Table(props) {
  let params = useParams();

  const dispatch = useDispatch();
  const table = useSelector((state) => state.table);
  useEffect(() => {
    dispatch(removeData());
    dispatch(setData(params.platform, props.type));
  }, [dispatch, params.platform, props.type]);

  const handleClick = () => {
    var form = {
      type: "Add",
      page: props.type,
      set: true,
      fields: ["commission", "category"],
    };
    dispatch(setAlert(true, form));
  };
  // date = new Date(parseInt(_id.toString().substring(0, 8), 16) * 1000);
  return (
    <MaterialTable
      title={params.platform + " " + props.type}
      columns={table.column}
      data={table.data}
      actions={[
        {
          icon: "edit",
          tooltip: "Update Commission",
          onClick: (event, rowData) => alert("You Update " + rowData.category),
        },
        {
          icon: "delete",
          tooltip: "Delete Commission",
          onClick: (event, rowData) =>
            alert("You want to delete " + rowData.category),
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
