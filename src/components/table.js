import MaterialTable from "material-table";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setAlert } from "../actions/alert";
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

  // date = new Date(parseInt(_id.toString().substring(0, 8), 16) * 1000);
  return (
    <MaterialTable
      title={params.platform + " " + props.type}
      columns={table.column}
      data={table.data}
      editable={table.editable}
      actions={table.actions}
      options={{
        paging: false,
        actionsColumnIndex: -1,
      }}
    />
  );
}
