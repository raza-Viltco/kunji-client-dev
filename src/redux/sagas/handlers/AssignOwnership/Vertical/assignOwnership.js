import { call, put } from "redux-saga/effects";

import {
  setAssignAppartmentData,
  setAssignOwnership,
  setOwnerData,
} from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import {
  assignAppartmentDataApi,
  assignOwnershipApi,
  ownerDataApi,
} from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { localApiStateHandler } from "../../localApiStateHandler";
import { propertyListApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { setPropertyList } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import { setError } from "../../../../actions/local";

export function* handleAssignDepartmentData(action) {
  function* api() {
    const { data } = yield call(assignAppartmentDataApi, action.payload);

    yield put(setAssignAppartmentData(data));
  }
  yield call(() => localApiStateHandler(api));
}
export default handleAssignDepartmentData;

export function* handlePropertyList() {
  function* api() {
    const { data } = yield call(propertyListApi);
    yield put(setPropertyList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleOwnerData(action) {
  function* api() {
    const { data } = yield call(ownerDataApi, action.payload);
    yield put(setOwnerData(data));
    if (data.message) {
      yield put(
        setError({
          type: "success",
          message: data.message,
        })
      );
    }
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleOwnership(action) {
  console.log(action);
  const { values, formikActions } = action.payload;
  const form = new FormData();
  form.append("first_name", values.owner_first_name);
  form.append("last_name", values.owner_last_name);
  form.append("cnic", values.cnic);
  form.append("mobile", values.contact);
  form.append("other_address", values.address);
  form.append("mapping_one_id", values.sector_block_building);
  form.append("mapping_two_id", values.floor_streets);
  form.append("mapping_three_id", values.plot_home_apartment);
  form.append("reidential_status", values.residential_status);
  values.cnic_image.forEach((item) => {
    form.append("cnic_image[]", item);
  });
  values.documents.forEach((item) => {
    form.append("documents[]", item);
  });
  form.append("property_image", values.property_image);

  function* api() {
    const { data } = yield call(assignOwnershipApi, form);
    yield put(setAssignOwnership(data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
