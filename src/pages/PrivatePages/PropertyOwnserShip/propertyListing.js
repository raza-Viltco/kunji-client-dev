import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import propertyListContainer from "../../../container/PropertyOwnership/PropertyListingContainer";
import "./propertyListing.css";

const PropertyListing = ({
  stateLoading,
  ownershipListData,
  handleAccept,
  handleReject,
}) => {
  const handleData = (params) => {
    console.log(params);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    // { field: "location", headerName: "Location", width: 300 },
    {
      field: "mapping_level_one_name",
      headerName: " Location",
      valueGetter: (params) =>
        params?.row?.mapping_level_one_name +
        " " +
        params?.row?.mapping_level_three_name +
        " " +
        params?.row?.mapping_level_two_name,
      width: 160,
    },

    {
      field: "first_name",
      headerName: " User Name",
      valueGetter: (params) =>
        params?.row?.user?.first_name + " " + params?.row?.user?.last_name,
      width: 160,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      valueGetter: (params) => params?.row?.user?.cnic,
      width: 160,
    },
    {
      field: "mobile",
      headerName: "MOBILE",
      valueGetter: (params) => params?.row?.user?.mobile,
      width: 160,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-success btn-sm"
            onClick={() => {
              handleAccept(params?.row?.id);
            }}
            // onClick={handleData(params)}
          >
            Approve
          </button>
          &nbsp;
          <button className="btn btn-danger btn-sm "
           onClick={() => {
            handleReject(params?.row?.id);
          }}
          >Reject</button>
        </div>,
      ],
    },
  ];

  const rows = [
    {
      id: 1,
      building: "Arfa Tower",
      floor: "5 ",
      apartment: "4",
      ownerName: "Ahmed",
      cnic: "21313-243-2",
      address: "252-A Defence Housing Authority",
      attachment: "icons",
    },
    {
      id: 2,
      building: "Mehtab Tower",
      floor: "8 ",
      apartment: "1",
      ownerName: "Akram",
      cnic: "56123-4554-2",
      address: "Model Town",
      attachment: "icons",
    },
    {
      id: 3,
      building: "Ali Tower",
      floor: "9 ",
      apartment: "3",
      ownerName: "Aslam",
      cnic: "21313-243-2",
      address: "Garison Homes ",
      attachment: "icons",
    },
    {
      id: 4,
      building: "Arfa Tower",
      floor: "12 ",
      apartment: "4",
      ownerName: "Arslan",
      cnic: "345435433-243-2",
      address: "Muslim Town",
      attachment: "icons",
    },
  ];

  return (
    <Card>
      <div className="property-outer-flex">
        <div>
          <h4>Property Ownership</h4>
        </div>

        <div className="society_btn__wrapper">
          <Link to="/assign_ownership">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 20 }}
              // isLoading={stateLoading}
              size="small"
            >
              Assign OwnerShip
            </Button>
          </Link>
        </div>
      </div>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={ownershipListData}
          columns={columns}
          loading={stateLoading}
        />
      </div>
    </Card>
  );
};

export default propertyListContainer(PropertyListing);
