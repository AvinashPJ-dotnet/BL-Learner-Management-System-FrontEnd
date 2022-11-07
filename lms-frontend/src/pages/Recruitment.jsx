import React, { useEffect, useState } from "react";
import AppDrawer from "../components/drawer/AppDrawer";
import RecruitmentCard from "../components/drawer/RecruitmentCard/RecruitmentCard";
import {
  getNotRespondedCount,
  getNotRespondedList,
} from "../services/RecruitmentService";

function Recruitment(props) {
  const [notRespondedList, setNotRespondedList] = useState([]);
  const [notRespondedCount, setNotRespondedCount] = useState(0);
  const [acceptedList, setAcceptedList] = useState([]);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedList, setRejectedList] = useState([]);
  const [rejectedCount, setRejectedCount] = useState(0);

  useEffect(() => {
    // let status = "pending";
    getNotRespondedList("pending")
      .then((res) => {
        // console.log(res.data.data);
        setNotRespondedList(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    getNotRespondedCount("pending")
      .then((res) => {
        // console.log(res.data.data);
        setNotRespondedCount(res.data.data);
        console.log(notRespondedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    getNotRespondedList("accepted")
      .then((res) => {
        // console.log(res.data.data);
        setAcceptedList(res.data.data[0]);
        // console.log(notRespondedList);
      })
      .catch((error) => {
        console.log(error);
      });

    getNotRespondedCount("accepted")
      .then((res) => {
        // console.log(res.data.data);
        setAcceptedCount(res.data.data);

        console.log(acceptedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    getNotRespondedList("rejected")
      .then((res) => {
        // console.log(res.data.data);
        setRejectedList(res.data.data[0]);
        // console.log(notRespondedList);
      })
      .catch((error) => {
        console.log(error);
      });

    getNotRespondedCount("rejected")
      .then((res) => {
        // console.log(res.data.data);
        setRejectedCount(res.data.data);
        console.log(rejectedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [
    notRespondedCount,
    acceptedCount,
    rejectedCount,
    // notRespondedList,
    // acceptedList,
    // rejectedList,
  ]);

  return (
    <div>
      <AppDrawer />
      <RecruitmentCard
        notRespondedList={notRespondedList}
        notRespondedCount={notRespondedCount}
        acceptedList={acceptedList}
        acceptedCount={acceptedCount}
        rejectedList={rejectedList}
        rejectedCount={rejectedCount}
      />
    </div>
  );
}

export default Recruitment;
