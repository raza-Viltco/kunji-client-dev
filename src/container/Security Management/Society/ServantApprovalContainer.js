import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  servantApprovalList,
  servantApproval,
} from "../../../redux/actions/SecurityManagement/Society/servantApproval";

const servantApprovalContainer = (ServantApprovalList) => () => {
  const dispatch = useDispatch();



  const servantData = useSelector((state) => state.servantApproval.data);
  const servantApprovalData = useSelector(
    (state) => state.servantApproval.approval_data
  );
  const stateLoading = useSelector((state) => state.local.isLoading);

  const handleApproveServant = (servantId, status) => {
    if (status === 0 || 2) {
      dispatch(servantApproval({ servantId, status: 1 }));
    }
  };

  const handleRejetServant = (servantId, status) => {
    if (status === 0 || 1) {
      dispatch(servantApproval({ servantId, status: 2 }));
    }
  };

  useEffect(() => {
    dispatch(servantApprovalList());
  }, [servantApprovalData]);

  return (
    <ServantApprovalList
      servantData={servantData}
      handleApproveServant={handleApproveServant}
      handleRejetServant={handleRejetServant}
      stateLoading={stateLoading}
    />
  );
};
export default servantApprovalContainer;
