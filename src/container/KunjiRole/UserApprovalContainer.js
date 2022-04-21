import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  approvalListing,
  userApproval,
} from "../../redux/actions/KunjiRole/UserApproval";

const userApprovalContainer = (UserApprovalListing) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(approvalListing());
  }, []);

  const approval = useSelector((state) => state.userApproval.data);
  const userApprovalData=useSelector((state)=>state.userApproval.user);

  // console.log("userApprvalListing", approval);

  const userApprovalHandler = (aprId, status) => {
    // console.log(aprId, status, "data");
    if (status === 0|| 2) {
      dispatch(userApproval({ aprId, status: 1 }));
    }
  };
  const userRejectionHandler = (aprId, status) => {
    // console.log(aprId, status, "data");
    if (status === 0 || 1) {
      dispatch(userApproval({ aprId, status: 2 }));
    }
  };

  useEffect(() => {
    dispatch(approvalListing());
  }, [userApprovalData]);
 

  return (
    <UserApprovalListing
      approval={approval}
      userApprovalHandler={userApprovalHandler}
      userRejectionHandler={userRejectionHandler}
    />
  );
};
export default userApprovalContainer;
