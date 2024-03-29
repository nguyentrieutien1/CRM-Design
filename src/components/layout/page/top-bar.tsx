import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { TableText } from "src/components/core/text";
import MenuIcon from "public/icons/menu-icon.svg";
import BellIcon from "public/icons/bell-icon.svg";
import DashboardDialogShowCustomerInfo from "src/components/pages/dasboard/dashboard-dialog-show-customer-info";
export default function TopBar() {
  const [isOpenDialogShowCustomerInfo, setIsOpenDialogShowCustomerInfo] = useState<boolean>(false);
  return (
    <Container>
      <DashboardDialogShowCustomerInfo
        isOpen={isOpenDialogShowCustomerInfo}
        onClose={() => setIsOpenDialogShowCustomerInfo(false)}
      />
      <div className="flex align-items-center justify-content-between">
        <div className="flex align-items-center">
          <Image src={MenuIcon} alt={MenuIcon} />
          <div className="ml-3">
            <TableText fontSize={"18px"} fontWeight={500}>
              Customers
            </TableText>
          </div>
        </div>
        <div className="">
          <Image src={BellIcon} alt={BellIcon} />
          <Avatar
          onClick={() => setIsOpenDialogShowCustomerInfo(true)}
            src={"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"}
            alt="avatar"
            className="ml-3"
            width={30}
            height={30}
          ></Avatar>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div``;

const Avatar = styled(Image)`
  border-radius: 30px;
  object-fit: cover;
`;
